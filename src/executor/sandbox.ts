/**
 * Sandboxed Code Executor for Code Mode
 *
 * Runs LLM-generated JavaScript in a Node.js vm context inside a short-lived child process.
 *
 * Three layers, because none is enough alone:
 *
 * 1. The vm context starts with nothing from outside. Its global object is the context's
 *    own (not an outside object wrapped as one, whose prototype chain would hand the script
 *    the outside `Object` and, through it, the outside `Function`). Data globals (e.g.
 *    `spec`) are copied in as JSON. Function globals (e.g. `api.request`) are bridged
 *    through closures in trusted context code, and only strings and numbers cross the
 *    boundary in either direction.
 *
 * 2. `import()` is refused before the script runs. In a vm context it evaluates to a
 *    promise that belongs to the outer realm, and that promise's constructor chain reaches
 *    the outer `process`. The script is scanned for the `import` keyword, and the context
 *    cannot build code from strings (`eval`, `new Function`), so the keyword cannot be
 *    assembled at run time to get past the scan.
 *
 * 3. The child process is what a script would reach if it got out of the context anyway.
 *    It starts with an empty environment (the API key is not there), under the Node.js
 *    permission model (no filesystem, no child processes), and with its own heap limit.
 *    A script that spins or runs out of memory takes down the child, never the server,
 *    and the server stays responsive meanwhile.
 *
 * The server treats the child as untrusted: every message from it is checked for type and
 * size, and the number and size of bridged calls in flight are capped.
 *
 * Bridged functions run in the server process. This is still not a hard security
 * boundary: Node.js 24 does not restrict network access or signals under the permission
 * model, so a script that found a new way out of the context could use both.
 */

import { spawn, type ChildProcess } from 'node:child_process';
import { randomUUID } from 'node:crypto';
import { parse } from 'acorn';
import { truncate } from '../utils/truncate.js';

export interface ExecuteResult {
  result: unknown;
  logs: string[];
  /** Set when the script failed. Never an empty string. */
  error?: string;
}

export interface SandboxOptions {
  /**
   * Longest stretch the script may run on its own, with no bridged call in flight, before
   * it is stopped as a runaway loop.
   */
  scriptTimeoutMs?: number;
  /** Wall-clock limit for the whole script, including awaited API calls. */
  totalTimeoutMs?: number;
  /** Heap limit for the script in megabytes. */
  memoryLimitMb?: number;
  /** Called once when a time limit is hit, so callers can stop in-flight work. */
  onTimeout?: () => void;
  /** Stops the script when aborted (client cancellation or disconnect). */
  signal?: AbortSignal;
}

type HostFunction = (...args: any[]) => unknown;
type Outcome = { ok: true; json: string | undefined } | { ok: false; message: string };

export const DEFAULT_SCRIPT_TIMEOUT_MS = 15_000;
export const DEFAULT_TOTAL_TIMEOUT_MS = 120_000;
export const DEFAULT_MEMORY_LIMIT_MB = 256;
/** Bridged calls one script may have in flight, and the argument data they may hold. */
export const MAX_PENDING_CALLS = 2_000;
export const MAX_PENDING_CHARS = 32_000_000;
const MAX_LOG_LINES = 1_000;
const MAX_LOG_CHARS = 100_000;
/** Far above the 40,000 character output cap; keeps one message from flooding the channel. */
const MAX_MESSAGE_CHARS = 5_000_000;
/** How long an orphaned child may outlive its time limit before it ends itself. */
const ORPHAN_GRACE_MS = 10_000;
/** Room above the heap limit for the runtime itself before the child counts as over its memory. */
const RSS_HEADROOM_MB = 256;

/** Serialized data globals, reused across calls (the spec is ~1 MB). */
const jsonCache = new WeakMap<object, string>();

/** Children still running, so none is left spinning when the server exits. */
const liveChildren = new Set<ChildProcess>();
process.on('exit', () => {
  for (const child of liveChildren) child.kill('SIGKILL');
});

/**
 * Trusted code evaluated in the vm context before user code. It keeps the child's callbacks
 * in its closure and installs context-native globals that call them with strings only.
 * Returns the function the child uses to deliver replies to bridged calls.
 */
const BRIDGE_SOURCE = `(function (hostCall, hostLog, hostDone, hostFail, dataJson, functionNames, reportName, maxPayloadChars) {
  'use strict';
  const g = globalThis;
  const stringify = JSON.stringify;
  const parse = JSON.parse;
  const keys = Object.keys;

  // Binary buffers live outside the heap limit, so a script could use them to take as
  // much of the machine's memory as it liked. CRM scripts do not need them.
  for (const name of Object.getOwnPropertyNames(g)) {
    if (/(?:Buffer|[a-z0-9]Array)$/.test(name) || name === 'DataView' || name === 'Atomics' || name === 'WebAssembly') delete g[name];
  }

  // If a child function throws (for example the stack runs out inside it), sandbox code
  // must get an error from this context, never the child's own error object.
  const guard = (fn) => (a, b) => { try { return fn(a, b); } catch { throw new Error('Sandbox bridge call failed'); } };
  const call = guard(hostCall);
  const log = guard(hostLog);
  const done = guard(hostDone);
  const fail = guard(hostFail);
  const describe = (e) => {
    let text = '';
    try { text = e && typeof e.message === 'string' ? e.message : String(e); } catch { return 'Script threw a value that could not be read'; }
    if (text !== '') return text;
    try { if (e && typeof e.name === 'string' && e.name !== '') return e.name + ' (no message)'; } catch {}
    return 'Script threw an empty value';
  };
  const format = (v) => {
    if (v === undefined) return 'undefined';
    if (typeof v === 'string') return v;
    try { const s = stringify(v, null, 2); return s === undefined ? String(v) : s; } catch {}
    try { return String(v); } catch { return '[unprintable]'; }
  };
  const makeLogger = (prefix) => (...args) => { log(prefix + args.map(format).join(' ')); };
  g.console = { log: makeLogger(''), info: makeLogger(''), debug: makeLogger(''), error: makeLogger('[ERROR] '), warn: makeLogger('[WARN] ') };

  const data = parse(dataJson);
  for (const key of keys(data)) g[key] = data[key];

  const waiting = new Map();
  const bridge = (name) => (...args) => new Promise((resolve, reject) => {
    let payload;
    try { payload = stringify(args); } catch (e) { reject(new Error('Arguments must be JSON-serializable: ' + describe(e))); return; }
    if (payload.length > maxPayloadChars) {
      reject(new Error('Arguments are too large (' + payload.length + ' characters, limit ' + maxPayloadChars + '). Send less data per call.'));
      return;
    }
    waiting.set(call(name, payload), [resolve, reject]);
  });
  for (const name of functionNames) {
    const parts = name.split('.');
    let target = g;
    for (const part of parts.slice(0, -1)) target = target[part] ??= {};
    target[parts[parts.length - 1]] = bridge(name);
  }

  Object.defineProperty(g, reportName, {
    value: (promise) => {
      Promise.resolve(promise).then(
        (value) => {
          if (value === undefined) { done(undefined); return; }
          let json;
          try { json = stringify(value); } catch {}
          if (json === undefined) { try { json = stringify(String(value)); } catch { json = stringify('[result could not be serialized]'); } }
          done(json);
        },
        (error) => fail(describe(error))
      );
    }
  });

  return (id, reply) => {
    const slot = waiting.get(id);
    if (!slot) return;
    waiting.delete(id);
    const out = parse(reply);
    if (out.ok) { slot[0](out.value); return; }
    const error = new Error(out.error.message);
    for (const key of keys(out.error)) if (key !== 'message') error[key] = out.error[key];
    slot[1](error);
  };
})`;

/**
 * Child entry point (CommonJS, passed with `node -e` so it needs no file and no build step).
 * Everything the vm context can call accepts and returns primitives only.
 */
const CHILD_SOURCE = `'use strict';
const vm = require('node:vm');
const { Worker } = require('node:worker_threads');

const post = (message) => { try { process.send(message); } catch {} };
let nextId = 0;
let logLines = 0;
let logChars = 0;
let logsClosed = false;
let limits = { maxLogLines: 0, maxLogChars: 0, maxMessageChars: 0 };

const hostCall = (name, payload) => {
  const id = ++nextId;
  post({ type: 'call', id, name: typeof name === 'string' ? name : '', payload: typeof payload === 'string' ? payload : '' });
  return id;
};
const hostLog = (line) => {
  if (logsClosed) return;
  const text = typeof line === 'string' ? line : '[unprintable]';
  if (logLines >= limits.maxLogLines || logChars + text.length > limits.maxLogChars) {
    logsClosed = true;
    post({ type: 'log', line: '[log output truncated]' });
    return;
  }
  logLines += 1;
  logChars += text.length;
  post({ type: 'log', line: text });
};
const hostDone = (json) => {
  if (typeof json === 'string' && json.length > limits.maxMessageChars) {
    post({ type: 'fail', message: 'Result is too large (' + json.length + ' characters). Return fewer records or fewer fields.' });
    return;
  }
  post({ type: 'done', json: typeof json === 'string' ? json : undefined });
};
const hostFail = (message) => post({ type: 'fail', message: typeof message === 'string' ? message.slice(0, 20000) : 'Unknown error' });
const readMessage = (error) => {
  try { return error && typeof error.message === 'string' ? error.message : String(error); } catch { return 'Sandbox threw a value that could not be read'; }
};

// A script may start several calls and await them one at a time. If a later one fails
// first, its rejection is unhandled for a moment and handled when the script reaches it.
// Ending the process there, as Node.js does by default, would lose the real error.
process.on('unhandledRejection', () => {});
process.on('uncaughtException', (error) => hostFail(readMessage(error)));

// A spinning script cannot notice that the server is gone or that memory outside the heap
// limit is growing, so a second thread ends the process when the parent changes, the time
// limit plus a grace period has passed, or resident memory passes its limit.
const startWatchdog = (lifetimeMs, maxRssBytes) => {
  const source = "const { workerData } = require('node:worker_threads');" +
    "const born = Date.now();" +
    "setInterval(() => {" +
    "  if (process.ppid !== workerData.ppid || Date.now() - born > workerData.lifetimeMs || process.memoryUsage.rss() > workerData.maxRssBytes) process.kill(process.pid, 'SIGKILL');" +
    "}, 200);";
  try { new Worker(source, { eval: true, workerData: { ppid: process.ppid, lifetimeMs, maxRssBytes } }).unref(); } catch {}
};

let deliver;
process.on('message', (message) => {
  if (!message || typeof message !== 'object') return;
  if (message.type === 'reply') {
    if (typeof deliver !== 'function') return;
    try { deliver(message.id, message.reply); } catch { hostFail('Sandbox bridge failed while delivering a reply'); }
    return;
  }
  if (message.type !== 'init' || deliver) return;
  limits = message.limits;
  startWatchdog(message.lifetimeMs, message.maxRssBytes);
  // DONT_CONTEXTIFY: the context gets its own ordinary global object. Passing an object
  // from here instead would put this realm's Object.prototype on the global's prototype
  // chain, and "constructor.constructor" would then be this realm's Function.
  // No code from strings: eval and the Function constructors throw inside the context, so
  // a script cannot assemble source text (such as an import() call) the scan did not see.
  const context = vm.createContext(vm.constants.DONT_CONTEXTIFY, { codeGeneration: { strings: false, wasm: false } });
  try {
    const install = vm.runInContext(message.bridgeSource, context);
    deliver = install(hostCall, hostLog, hostDone, hostFail, message.dataJson, message.functionNames, message.reportName, limits.maxMessageChars);
    vm.runInContext(message.code, context, { displayErrors: false });
  } catch (error) {
    hostFail(readMessage(error));
  }
});
process.on('disconnect', () => process.exit(0));
`;

export async function executeInSandbox(
  code: string,
  globals: Record<string, unknown>,
  options: SandboxOptions = {}
): Promise<ExecuteResult> {
  const {
    scriptTimeoutMs = DEFAULT_SCRIPT_TIMEOUT_MS,
    totalTimeoutMs = DEFAULT_TOTAL_TIMEOUT_MS,
    memoryLimitMb = DEFAULT_MEMORY_LIMIT_MB,
    onTimeout,
    signal
  } = options;
  const logs: string[] = [];
  const { data, functions } = splitGlobals(globals);

  const refusal = importRefusal(code);
  if (refusal) return { result: null, logs, error: refusal };

  const outcome = signal?.aborted
    ? cancelled()
    : await runInChild();

  const outputLogs = logs.map(line => truncate(line));
  if (!outcome.ok) {
    return { result: null, logs: outputLogs, error: outcome.message || 'Script failed without a message' };
  }
  try {
    return { result: outcome.json === undefined ? undefined : JSON.parse(outcome.json), logs: outputLogs };
  } catch {
    return { result: null, logs: outputLogs, error: 'Sandbox returned a result that could not be read' };
  }

  function runInChild(): Promise<Outcome> {
    return new Promise<Outcome>(resolve => {
      const reportName = `__report_${randomUUID().replace(/-/g, '')}`;
      const child = spawn(process.execPath, [...childFlags(memoryLimitMb), '-e', CHILD_SOURCE], {
        // Nothing the child prints may reach the server's stdout, which carries JSON-RPC.
        stdio: ['ignore', 'ignore', 'ignore', 'ipc'],
        env: childEnv(),
        windowsHide: true
      });
      liveChildren.add(child);

      let settled = false;
      let pendingCalls = 0;
      let pendingChars = 0;
      let logChars = 0;
      let scriptTimer: NodeJS.Timeout | undefined;

      const send = (message: Record<string, unknown>): void => {
        if (!child.connected) return;
        try {
          child.send(message, () => {});
        } catch {
          // The child is gone; its exit event reports that.
        }
      };
      const finish = (result: Outcome): void => {
        if (settled) return;
        settled = true;
        clearTimeout(scriptTimer);
        clearTimeout(totalTimer);
        signal?.removeEventListener('abort', onAbort);
        liveChildren.delete(child);
        child.kill('SIGKILL');
        resolve(result);
      };
      const onAbort = (): void => finish(cancelled());
      const armScriptTimer = (): void => {
        clearTimeout(scriptTimer);
        scriptTimer = setTimeout(() => {
          onTimeout?.();
          finish({
            ok: false,
            message: `Script ran for ${scriptTimeoutMs / 1000}s without finishing or waiting on an API call and was stopped ` +
              '(possible infinite loop or a promise that never settles).'
          });
        }, scriptTimeoutMs);
      };
      const totalTimer = setTimeout(() => {
        onTimeout?.();
        finish({
          ok: false,
          message: `Execution exceeded ${totalTimeoutMs / 1000}s and was stopped. Requests already sent may have completed; ` +
            'split the work into smaller batches.'
        });
      }, totalTimeoutMs);

      signal?.addEventListener('abort', onAbort, { once: true });
      armScriptTimer();

      // Messages come from the process that runs untrusted code. The child applies the same
      // limits, but a script that got out of its context could send anything, so types and
      // sizes are checked again here and nothing oversized is kept.
      child.on('message', (message: unknown) => {
        if (settled || !message || typeof message !== 'object') return;
        const { type, id, name, payload, line, json, message: text } = message as Record<string, unknown>;
        if (type === 'log') {
          if (typeof line !== 'string' || logs.length > MAX_LOG_LINES || logChars + line.length > MAX_LOG_CHARS + 64) return;
          logChars += line.length;
          logs.push(line);
        } else if (type === 'call') {
          if (typeof id !== 'number' || typeof name !== 'string' || typeof payload !== 'string') return;
          const refusal = refuseCall(payload.length, pendingCalls, pendingChars);
          if (refusal) {
            send({ type: 'reply', id, reply: JSON.stringify({ ok: false, error: { message: refusal } }) });
            return;
          }
          pendingCalls += 1;
          pendingChars += payload.length;
          clearTimeout(scriptTimer);
          void hostCall(name, payload).then(reply => {
            if (settled) return;
            pendingCalls -= 1;
            pendingChars -= payload.length;
            if (pendingCalls === 0) armScriptTimer();
            send({ type: 'reply', id, reply });
          });
        } else if (type === 'done') {
          if (typeof json === 'string' && json.length > MAX_MESSAGE_CHARS) {
            finish({ ok: false, message: `Result is too large (${json.length} characters). Return fewer records or fewer fields.` });
          } else {
            finish({ ok: true, json: typeof json === 'string' ? json : undefined });
          }
        } else if (type === 'fail') {
          finish({ ok: false, message: typeof text === 'string' ? text.slice(0, 20_000) : 'Unknown error' });
        }
      });
      child.on('error', error => finish({ ok: false, message: `Sandbox could not start: ${error.message}` }));
      child.on('exit', (exitCode, exitSignal) => finish({ ok: false, message: describeExit(exitCode, exitSignal, memoryLimitMb) }));

      send({
        type: 'init',
        code: `${reportName}((async () => {\n${code}\n})());`,
        bridgeSource: BRIDGE_SOURCE,
        dataJson: dataJson(data),
        functionNames: [...functions.keys()],
        reportName,
        lifetimeMs: totalTimeoutMs + ORPHAN_GRACE_MS,
        maxRssBytes: (memoryLimitMb + RSS_HEADROOM_MB) * 1024 * 1024,
        limits: { maxLogLines: MAX_LOG_LINES, maxLogChars: MAX_LOG_CHARS, maxMessageChars: MAX_MESSAGE_CHARS }
      });
    });
  }

  async function hostCall(name: string, argsJson: string): Promise<string> {
    try {
      const fn = functions.get(name);
      if (!fn) throw new Error('Invalid bridge call');
      const args = JSON.parse(argsJson);
      const value = await fn(...(Array.isArray(args) ? args : []));
      return JSON.stringify({ ok: true, value }) ?? '{"ok":true}';
    } catch (error) {
      return JSON.stringify({ ok: false, error: serializeError(error) });
    }
  }
}

/**
 * Why a bridged call must not start, or undefined when it may. Arguments are held in the
 * server while a call waits for the rate limiter, so calls a script fires without awaiting
 * them would otherwise pile up in the server's memory, not the script's.
 */
function refuseCall(payloadChars: number, pendingCalls: number, pendingChars: number): string | undefined {
  if (payloadChars > MAX_MESSAGE_CHARS) {
    return `Arguments are too large (${payloadChars} characters, limit ${MAX_MESSAGE_CHARS}). Send less data per call.`;
  }
  if (pendingCalls >= MAX_PENDING_CALLS) {
    return `Too many API calls in flight (limit ${MAX_PENDING_CALLS}). Await calls in batches instead of starting them all at once.`;
  }
  if (pendingChars + payloadChars > MAX_PENDING_CHARS) {
    return `Too much request data in flight (limit ${MAX_PENDING_CHARS} characters). Await calls in smaller batches.`;
  }
  return undefined;
}

/**
 * Returns why a script must not run because of `import`, or undefined when it may run.
 * Scripts cannot hold static imports, so an `import` keyword is always a dynamic import.
 *
 * Most scripts never contain the word and skip the parser. When they do, parsing tells a
 * keyword apart from the same word inside a string, template text or comment. A script
 * that mentions the word but does not parse is refused: the keyword cannot be written
 * with escapes, so only a script without the word is known to be free of it.
 */
export function importRefusal(code: string): string | undefined {
  if (!/\bimport\b/.test(code)) return undefined;
  let found = false;
  try {
    parse(`(async () => {\n${code}\n})`, {
      ecmaVersion: 'latest',
      sourceType: 'script',
      onToken: token => { if (token.type.keyword === 'import') found = true; }
    });
  } catch (error) {
    const reason = error instanceof Error ? error.message : String(error);
    return `Script mentions import and could not be parsed to check it: ${reason}`;
  }
  return found
    ? 'import() is not available in the sandbox. Use the injected globals (for example api.request) instead.'
    : undefined;
}

/**
 * Flags for the child: its own heap limit and, where this Node.js supports it, the
 * permission model with nothing granted except the watchdog thread.
 */
export function childFlags(memoryLimitMb: number): string[] {
  const flags = [`--max-old-space-size=${Math.max(16, Math.floor(memoryLimitMb))}`];
  if (process.allowedNodeEnvironmentFlags.has('--permission')) flags.push('--permission', '--allow-worker');
  return flags;
}

/** The child gets none of the server's environment; these two only affect how it starts. */
export function childEnv(): NodeJS.ProcessEnv {
  const env: NodeJS.ProcessEnv = {};
  for (const name of ['ELECTRON_RUN_AS_NODE', 'SystemRoot']) {
    const value = process.env[name];
    if (value !== undefined) env[name] = value;
  }
  return env;
}

function cancelled(): Outcome {
  return { ok: false, message: 'Execution was cancelled. Requests already sent may have completed.' };
}

function describeExit(exitCode: number | null, exitSignal: NodeJS.Signals | null, memoryLimitMb: number): string {
  // V8 aborts the process when the heap limit is reached (SIGABRT, or its exit codes). The
  // watchdog and the operating system end a process that takes too much memory with SIGKILL.
  if (exitSignal === 'SIGABRT' || exitSignal === 'SIGKILL' || exitCode === 134 || exitCode === 3221226505) {
    return `Script used more than ${memoryLimitMb} MB of memory and was stopped. Process the data in smaller pieces.`;
  }
  return `Sandbox stopped unexpectedly (${exitSignal ? `signal ${exitSignal}` : `exit code ${exitCode}`}).`;
}

/** Top-level functions and objects made only of functions are bridged; everything else is JSON data. */
function splitGlobals(globals: Record<string, unknown>): {
  data: Record<string, unknown>;
  functions: Map<string, HostFunction>;
} {
  const data: Record<string, unknown> = {};
  const functions = new Map<string, HostFunction>();
  for (const [key, value] of Object.entries(globals)) {
    if (typeof value === 'function') {
      functions.set(key, value as HostFunction);
      continue;
    }
    const entries = value && typeof value === 'object' ? Object.entries(value) : [];
    if (entries.length > 0 && entries.every(([, v]) => typeof v === 'function')) {
      for (const [member, fn] of entries) functions.set(`${key}.${member}`, fn as HostFunction);
      continue;
    }
    data[key] = value;
  }
  return { data, functions };
}

function dataJson(data: Record<string, unknown>): string {
  const parts = Object.entries(data).map(([key, value]) => {
    let json = value && typeof value === 'object' ? jsonCache.get(value) : undefined;
    if (json === undefined) {
      json = JSON.stringify(value) ?? 'null';
      if (value && typeof value === 'object') jsonCache.set(value, json);
    }
    return `${JSON.stringify(key)}:${json}`;
  });
  return `{${parts.join(',')}}`;
}

/** Copies message, name and primitive own properties (status, code, type...) of a host error. */
function serializeError(error: unknown): Record<string, unknown> {
  if (!(error instanceof Error)) return { message: String(error) };
  const out: Record<string, unknown> = { message: error.message, name: error.name };
  for (const [key, value] of Object.entries(error)) {
    if (value === null || ['string', 'number', 'boolean'].includes(typeof value)) out[key] = value;
  }
  return out;
}
