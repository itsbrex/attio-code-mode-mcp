/**
 * Sandboxed Code Executor for Code Mode
 *
 * Runs LLM-generated JavaScript in a Node.js vm context that holds no host objects.
 * Data globals (e.g. `spec`) are copied in as JSON. Function globals (e.g. `api.request`)
 * are bridged through closures in trusted context code, and only strings cross the
 * boundary in either direction. The host never calls `then` on a context value, so
 * sandbox code cannot reach a host constructor (and through it `process`, env vars or
 * the filesystem).
 *
 * vm is still not a hard security boundary; this closes the known escape paths.
 */

import { randomUUID } from 'node:crypto';
import { createContext, runInContext } from 'node:vm';
import { truncate } from '../utils/truncate.js';

export interface ExecuteResult {
  result: any;
  logs: string[];
  error?: string;
}

export interface SandboxOptions {
  /** Limit for synchronous execution (vm timeout). */
  syncTimeoutMs?: number;
  /** Wall-clock limit for the whole async script, including awaited API calls. */
  totalTimeoutMs?: number;
  /** Called once when the wall-clock limit is hit, so callers can stop in-flight work. */
  onTimeout?: () => void;
}

type HostFunction = (...args: any[]) => unknown;
type Outcome = { ok: true; json: string | undefined } | { ok: false; message: string };

const DEFAULT_SYNC_TIMEOUT_MS = 15_000;
export const DEFAULT_TOTAL_TIMEOUT_MS = 120_000;

/** Serialized data globals, reused across calls (the spec is ~1 MB). */
const jsonCache = new WeakMap<object, string>();

/**
 * Trusted code evaluated in the context before user code. It keeps the host callbacks
 * in its closure and installs context-native globals that call them with strings only.
 */
const BRIDGE_SOURCE = `(function (hostCall, hostLog, hostDone, hostFail, dataJson, functionNames, reportName) {
  'use strict';
  const g = globalThis;
  const stringify = JSON.stringify;
  const parse = JSON.parse;
  const keys = Object.keys;
  const describe = (e) => {
    try { return e && typeof e.message === 'string' ? e.message : String(e); } catch { return 'Unknown error'; }
  };
  const format = (v) => {
    if (v === undefined) return 'undefined';
    if (typeof v === 'string') return v;
    try { const s = stringify(v, null, 2); return s === undefined ? String(v) : s; } catch { return String(v); }
  };
  const makeLogger = (prefix) => (...args) => { hostLog(prefix + args.map(format).join(' ')); };
  g.console = { log: makeLogger(''), info: makeLogger(''), error: makeLogger('[ERROR] '), warn: makeLogger('[WARN] ') };

  const data = parse(dataJson);
  for (const key of keys(data)) g[key] = data[key];

  const bridge = (name) => (...args) => new Promise((resolve, reject) => {
    let payload;
    try { payload = stringify(args); } catch (e) { reject(new Error('Arguments must be JSON-serializable: ' + describe(e))); return; }
    hostCall(name, payload).then((reply) => {
      const out = parse(reply);
      if (out.ok) { resolve(out.value); return; }
      const error = new Error(out.error.message);
      for (const key of keys(out.error)) if (key !== 'message') error[key] = out.error[key];
      reject(error);
    });
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
          if (value === undefined) { hostDone(undefined); return; }
          let json;
          try { json = stringify(value); } catch { json = stringify(String(value)); }
          hostDone(json);
        },
        (error) => hostFail(describe(error))
      );
    }
  });
})`;

export async function executeInSandbox(
  code: string,
  globals: Record<string, unknown>,
  options: SandboxOptions = {}
): Promise<ExecuteResult> {
  const {
    syncTimeoutMs = DEFAULT_SYNC_TIMEOUT_MS,
    totalTimeoutMs = DEFAULT_TOTAL_TIMEOUT_MS,
    onTimeout
  } = options;
  const logs: string[] = [];
  const { data, functions } = splitGlobals(globals);

  let settle: (outcome: Outcome) => void = () => {};
  const finished = new Promise<Outcome>(resolve => {
    let done = false;
    settle = (outcome) => { if (!done) { done = true; resolve(outcome); } };
  });

  // Everything below receives values from the sandbox: accept primitives only.
  const hostCall = async (name: unknown, argsJson: unknown): Promise<string> => {
    try {
      const fn = typeof name === 'string' ? functions.get(name) : undefined;
      if (!fn || typeof argsJson !== 'string') throw new Error('Invalid bridge call');
      const args = JSON.parse(argsJson);
      const value = await fn(...(Array.isArray(args) ? args : []));
      return JSON.stringify({ ok: true, value }) ?? '{"ok":true}';
    } catch (error) {
      return JSON.stringify({ ok: false, error: serializeError(error) });
    }
  };
  const hostLog = (line: unknown): void => { logs.push(typeof line === 'string' ? line : '[unprintable]'); };
  const hostDone = (json: unknown): void => settle({ ok: true, json: typeof json === 'string' ? json : undefined });
  const hostFail = (message: unknown): void => settle({ ok: false, message: typeof message === 'string' ? message : 'Unknown error' });

  const reportName = `__report_${randomUUID().replace(/-/g, '')}`;
  const context = createContext({});
  const wrappedCode = `${reportName}((async () => {\n${code}\n})());`;

  let timer: NodeJS.Timeout | undefined;
  const timeLimit = new Promise<Outcome>(resolve => {
    timer = setTimeout(() => {
      onTimeout?.();
      resolve({
        ok: false,
        message: `Execution exceeded ${totalTimeoutMs / 1000}s and was stopped. Requests already sent may have completed; ` +
          'split the work into smaller batches.'
      });
    }, totalTimeoutMs);
  });

  try {
    const install = runInContext(BRIDGE_SOURCE, context) as (...args: unknown[]) => void;
    install(hostCall, hostLog, hostDone, hostFail, dataJson(data), [...functions.keys()], reportName);
    runInContext(wrappedCode, context, { timeout: syncTimeoutMs, displayErrors: true });

    const outcome = await Promise.race([finished, timeLimit]);
    if (!outcome.ok) {
      return { result: null, logs: logs.map(l => truncate(l)), error: outcome.message };
    }
    return {
      result: outcome.json === undefined ? undefined : JSON.parse(outcome.json),
      logs: logs.map(l => truncate(l)),
    };
  } catch (error) {
    return {
      result: null,
      logs: logs.map(l => truncate(l)),
      error: readErrorMessage(error),
    };
  } finally {
    clearTimeout(timer);
  }
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

/** Reads a message from a value thrown synchronously in the sandbox, without trusting its shape. */
function readErrorMessage(error: unknown): string {
  try {
    if (error && typeof error === 'object' && typeof (error as { message?: unknown }).message === 'string') {
      return (error as { message: string }).message;
    }
    return String(error);
  } catch {
    return 'Sandbox threw a value that could not be read';
  }
}
