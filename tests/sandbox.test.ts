import assert from 'node:assert/strict';
import { test } from 'node:test';
import {
  MAX_PENDING_CALLS,
  MAX_PENDING_CHARS,
  childEnv,
  childFlags,
  executeInSandbox,
  importRefusal
} from '../src/executor/sandbox.js';

test('sandbox returns results and console logs', async () => {
  const out = await executeInSandbox('console.log("hi", 1); return 2 + 2;', {});
  assert.equal(out.result, 4);
  assert.deepEqual(out.logs, ['hi 1']);
  assert.equal(out.error, undefined);
});

test('sandbox stops a script that awaits past the wall-clock limit', async () => {
  let timedOut = false;
  const started = Date.now();
  const out = await executeInSandbox(
    'await never(); return "unreachable";',
    { never: () => new Promise(() => {}) },
    { totalTimeoutMs: 50, onTimeout: () => { timedOut = true; } }
  );
  assert.ok(Date.now() - started < 2_000);
  assert.equal(timedOut, true);
  assert.equal(out.result, null);
  assert.match(out.error ?? '', /exceeded 0\.05s/);
});

test('a script rejecting after the time limit does not surface as an unhandled rejection', async () => {
  let unhandled = false;
  const onUnhandled = () => { unhandled = true; };
  process.on('unhandledRejection', onUnhandled);
  try {
    let fail: (error: Error) => void = () => {};
    const out = await executeInSandbox(
      'await later(); return 1;',
      { later: () => new Promise((_, reject) => { fail = reject; }) },
      { totalTimeoutMs: 20 }
    );
    assert.match(out.error ?? '', /exceeded/);
    fail(new Error('aborted after timeout'));
    await new Promise(resolve => setTimeout(resolve, 50));
    assert.equal(unhandled, false);
  } finally {
    process.off('unhandledRejection', onUnhandled);
  }
});

test('bridged functions receive JSON copies and errors keep status/code', async () => {
  const seen: unknown[] = [];
  const api = {
    request: async (opts: unknown) => {
      seen.push(opts);
      if ((opts as { path: string }).path === '/fail') {
        throw Object.assign(new Error('Not found'), { status: 404, code: 'not_found' });
      }
      return { data: [1, 2] };
    }
  };
  const out = await executeInSandbox(`
    const ok = await api.request({ method: 'GET', path: '/v2/x', when: new Date(0) });
    try { await api.request({ path: '/fail' }); } catch (e) { return { ok, status: e.status, code: e.code, message: e.message }; }
  `, { api });
  assert.deepEqual(out.result, { ok: { data: [1, 2] }, status: 404, code: 'not_found', message: 'Not found' });
  assert.deepEqual(seen[0], { method: 'GET', path: '/v2/x', when: '1970-01-01T00:00:00.000Z' });
});

test('sandbox code cannot reach host process through injected globals', async () => {
  const api = { request: async () => ({ data: [] }) };
  const spec = { paths: { '/v2/x': { get: { summary: 'x' } } } };
  // Every constructor chain ends at a Function constructor. Inside the sandbox those
  // cannot build code from a string at all, so none of them can evaluate "process".
  const constructorProbes = [
    'return api.request.constructor("return typeof process")()',
    'return console.log.constructor("return typeof process")()',
    'return spec.constructor.constructor("return typeof process")()',
    'return Object.constructor("return typeof process")()',
    'return (await api.request({})).constructor.constructor("return typeof process")()',
    'return (async () => {}).constructor("return typeof process")()',
    'return (function* () {}).constructor("return typeof process")().next().value',
    // Names the script never defined resolve on the global object and its prototype
    // chain, so that chain must belong to the sandbox as well.
    'return this.constructor.constructor("return typeof process")()',
    'return constructor.constructor("return typeof process")()',
    'return globalThis.constructor.constructor("return typeof process")()',
    'return hasOwnProperty.constructor("return typeof process")()',
    'return toString.constructor("return typeof process")()',
    'return __lookupGetter__.constructor("return typeof process")()',
    'return globalThis.__proto__.constructor.constructor("return typeof process")()',
    'return Object.getPrototypeOf(globalThis).constructor.constructor("return typeof process")()',
    'return eval("typeof process")',
    'return (0, eval)("typeof process")'
  ];
  for (const probe of constructorProbes) {
    const out = await executeInSandbox(probe, { api, spec });
    assert.match(out.error ?? '', /Code generation from strings disallowed/, probe);
    assert.equal(out.result, null, probe);
  }
  // A function argument cannot cross the bridge (it becomes null), and errors thrown by
  // bridged calls are rebuilt inside the sandbox, so their constructors are sandbox ones.
  const failing = { request: async () => { throw new Error('nope'); } };
  const rebuilt = await executeInSandbox(
    'try { await api.request(undefined, () => 1); } catch (e) { return [e instanceof Error, e.message, typeof e.constructor.constructor]; }',
    { api: failing }
  );
  assert.deepEqual(rebuilt.result, [true, 'nope', 'function']);
  const globals = await executeInSandbox(
    'return [typeof process, typeof require, typeof fetch, typeof setTimeout, typeof Buffer, typeof module, typeof globalThis.workerData]',
    { api, spec }
  );
  assert.equal(globals.error, undefined);
  assert.deepEqual(globals.result, Array(7).fill('undefined'));
});

test('import() is refused in every spelling, including ones assembled at run time', async () => {
  // In a vm context import() evaluates to a promise from the outer realm, whose
  // constructor chain reaches that realm's process. It must never run.
  const literal = [
    'return (await import("node:fs")).constructor',
    'const p = import("node:fs"); return p.constructor.constructor("return typeof process")()',
    'const p = import /* gap */ ("node:fs"); return typeof p',
    'return `${await import("node:fs")}`',
    'const load = (name) => import(name); return typeof load',
    '<!-- \nreturn typeof import("node:fs")'
  ];
  for (const code of literal) {
    const out = await executeInSandbox(code, {});
    assert.match(out.error ?? '', /import\(\) is not available in the sandbox/, code);
  }
  const assembled = [
    'return eval("imp" + "ort(\\"node:fs\\")")',
    'return new Function("return imp" + "ort(\\"node:fs\\")")()',
    'return (async () => {}).constructor("return imp" + "ort(\\"node:fs\\")")()'
  ];
  for (const code of assembled) {
    const out = await executeInSandbox(code, {});
    assert.match(out.error ?? '', /Code generation from strings disallowed/, code);
  }
  const unparseable = await executeInSandbox('const x = ; import("node:fs")', {});
  assert.match(unparseable.error ?? '', /mentions import and could not be parsed/);
});

test('the word import in text, comments and property names does not block a script', async () => {
  assert.equal(importRefusal('return 1'), undefined);
  const out = await executeInSandbox(`
    // import the records first
    const note = { import: "CSV import finished; import() was not used" };
    const label = \`bulk import \${1 + 1}\`;
    return [note.import.length, label, /import\\(/.test("x")];
  `, {});
  assert.equal(out.error, undefined);
  assert.deepEqual(out.result, [42, 'bulk import 2', false]);
});

test('a loop that never ends is stopped, also after an await and after an API call', async () => {
  const api = { request: async () => ({ data: [] }) };
  for (const code of [
    'while (true) {}',
    'await null; while (true) {}',
    'await api.request({}); for (;;) {}',
    'await new Promise(() => {});'
  ]) {
    let stopped = 0;
    const started = Date.now();
    const out = await executeInSandbox(code, { api }, { scriptTimeoutMs: 150, onTimeout: () => { stopped += 1; } });
    assert.match(out.error ?? '', /without finishing or waiting on an API call/, code);
    assert.ok(Date.now() - started < 3_000, code);
    assert.equal(stopped, 1, code);
  }
});

test('the script timer does not run while an API call is in flight', async () => {
  // The limit leaves room for the script process to start on a busy machine; the call
  // then takes longer than the limit, which only passes if the timer is paused meanwhile.
  const api = { request: () => new Promise(resolve => setTimeout(() => resolve({ ok: true }), 1_500)) };
  const out = await executeInSandbox('return await api.request({});', { api }, { scriptTimeoutMs: 1_000 });
  assert.equal(out.error, undefined);
  assert.deepEqual(out.result, { ok: true });
});

test('the server keeps running while a script spins', async () => {
  let ticks = 0;
  const timer = setInterval(() => { ticks += 1; }, 10);
  try {
    await executeInSandbox('while (true) {}', {}, { scriptTimeoutMs: 300 });
  } finally {
    clearInterval(timer);
  }
  assert.ok(ticks >= 10, `event loop only ticked ${ticks} times`);
});

test('a script that allocates without bound is stopped with a clear error', async () => {
  const out = await executeInSandbox(
    'const hoard = []; for (;;) hoard.push(new Array(1e6).fill(7));',
    {},
    { memoryLimitMb: 32, scriptTimeoutMs: 30_000, totalTimeoutMs: 30_000 }
  );
  assert.match(out.error ?? '', /more than 32 MB of memory/);
});

test('one huge allocation ends the script, not the server', async () => {
  const out = await executeInSandbox('return new Array(2e8).fill(7).length;', {}, { memoryLimitMb: 32, scriptTimeoutMs: 30_000 });
  assert.match(out.error ?? '', /more than 32 MB of memory/);
});

test('the script process gets no environment and no file or process access', () => {
  process.env.ATTIO_API_KEY_PROBE = 'secret';
  try {
    const env = childEnv();
    assert.ok(Object.keys(env).every(name => ['ELECTRON_RUN_AS_NODE', 'SystemRoot'].includes(name)), JSON.stringify(Object.keys(env)));
  } finally {
    delete process.env.ATTIO_API_KEY_PROBE;
  }
  const flags = childFlags(256);
  assert.deepEqual(flags, ['--max-old-space-size=256', '--permission', '--allow-worker']);
  assert.ok(!flags.some(flag => /allow-fs|allow-child|allow-addons|allow-wasi/.test(flag)));
});

test('aborting the signal stops the script and reports cancellation', async () => {
  const controller = new AbortController();
  const started = Date.now();
  setTimeout(() => controller.abort(), 50);
  const out = await executeInSandbox('await new Promise(() => {});', {}, { signal: controller.signal });
  assert.match(out.error ?? '', /cancelled/);
  assert.ok(Date.now() - started < 2_000);
  const already = await executeInSandbox('return 1', {}, { signal: controller.signal });
  assert.match(already.error ?? '', /cancelled/);
});

test('console output is capped', async () => {
  const out = await executeInSandbox('for (let i = 0; i < 5000; i++) console.log("line " + i); return "done";', {});
  assert.equal(out.result, 'done');
  assert.equal(out.logs.length, 1_001);
  assert.equal(out.logs.at(-1), '[log output truncated]');
});

test('syntax errors and thrown values are reported as errors', async () => {
  assert.match((await executeInSandbox('return 1 +;', {})).error ?? '', /Unexpected token/);
  assert.equal((await executeInSandbox('throw new Error("boom")', {})).error, 'boom');
  assert.equal((await executeInSandbox('throw "plain"', {})).error, 'plain');
  assert.equal((await executeInSandbox('return undefined', {})).result, undefined);
});

test('overriding Promise.prototype.then in the sandbox leaks nothing and times out cleanly', async () => {
  const out = await executeInSandbox(`
    Promise.prototype.then = function (onFulfilled) {
      // Whatever calls then() here hands over its callback. It must be a sandbox function.
      let reached;
      try { reached = typeof onFulfilled.constructor('return process')(); } catch (e) { reached = 'blocked: ' + e.message; }
      console.log(reached);
    };
    return 1;
  `, {}, { totalTimeoutMs: 400, scriptTimeoutMs: 400 });
  // The result is reported through then(), so replacing it means no result ever arrives.
  assert.match(out.error ?? '', /exceeded|without finishing/);
  assert.ok(out.logs.length > 0, 'the replaced then() was never called, so the test proved nothing');
  for (const line of out.logs) assert.match(line, /^blocked: Code generation from strings disallowed/);
});

test('a failure with no message is still a failure', async () => {
  assert.equal((await executeInSandbox('throw new Error()', {})).error, 'Error (no message)');
  assert.equal((await executeInSandbox('throw new TypeError("")', {})).error, 'TypeError (no message)');
  assert.equal((await executeInSandbox('throw ""', {})).error, 'Script threw an empty value');
  assert.equal((await executeInSandbox('throw null', {})).error, 'null');
  const unreadable = await executeInSandbox('return { toJSON() { throw 1; }, toString() { throw 2; } }', {});
  assert.equal(unreadable.result, '[result could not be serialized]');
});

test('a call that fails before the script awaits it is reported by the script, not lost', async () => {
  const api = {
    slow: () => new Promise(resolve => setTimeout(() => resolve({ ok: true }), 150)),
    missing: async () => { throw Object.assign(new Error('404 not found'), { status: 404 }); }
  };
  const inTurn = await executeInSandbox(`
    const a = api.slow({});
    const b = api.missing({});
    try { return [await a, await b]; } catch (e) { return 'caught: ' + e.message + ' ' + e.status; }
  `, { api });
  assert.equal(inTurn.error, undefined);
  assert.equal(inTurn.result, 'caught: 404 not found 404');

  const ignored = await executeInSandbox('api.missing({}); await api.slow({}); return "finished";', { api });
  assert.equal(ignored.result, 'finished');
});

test('binary buffers, which sit outside the heap limit, are not available', async () => {
  const names = ['ArrayBuffer', 'SharedArrayBuffer', 'DataView', 'Atomics', 'WebAssembly', 'Uint8Array', 'Uint8ClampedArray',
    'Int32Array', 'Float16Array', 'Float64Array', 'BigInt64Array', 'BigUint64Array'];
  const out = await executeInSandbox(`return ${JSON.stringify(names)}.filter(name => typeof globalThis[name] !== 'undefined');`, {});
  assert.deepEqual(out.result, []);
  const kept = await executeInSandbox('return [typeof Array, typeof Map, typeof JSON, typeof Promise, typeof Intl, Array.from({ length: 2 }, (_, i) => i)];', {});
  assert.deepEqual(kept.result, ['function', 'function', 'object', 'function', 'object', [0, 1]]);
  const attack = await executeInSandbox('return new Uint8Array(512 * 1024 * 1024).fill(1).length;', {}, { memoryLimitMb: 32 });
  assert.match(attack.error ?? '', /Uint8Array is not defined/);
});

test('calls fired without awaiting cannot pile up in the server', async () => {
  let started = 0;
  const api = { request: () => { started += 1; return new Promise(resolve => setTimeout(() => resolve({}), 100)); } };
  const flood = await executeInSandbox(`
    let refused = 0; let reason;
    const calls = [];
    for (let i = 0; i < ${MAX_PENDING_CALLS + 300}; i++) calls.push(api.request({ i }).catch(e => { refused += 1; reason = e.message; }));
    await Promise.all(calls);
    return [refused, reason];
  `, { api });
  assert.deepEqual(flood.result, [300, `Too many API calls in flight (limit ${MAX_PENDING_CALLS}). Await calls in batches instead of starting them all at once.`]);
  assert.equal(started, MAX_PENDING_CALLS);

  // Large calls are held long enough that all of them are in flight together.
  let held = 0;
  const slow = {
    request: (opts: { body?: string }) => {
      if (opts?.body) held += 1;
      return new Promise(resolve => setTimeout(() => resolve({}), opts?.body ? 3_000 : 10));
    }
  };
  const heavy = await executeInSandbox(`
    const big = 'x'.repeat(4_000_000);
    let reason;
    for (let i = 0; i < 12; i++) api.request({ body: big }).catch(e => { reason = e.message; });
    await api.request({});
    return reason;
  `, { api: slow });
  assert.match(String(heavy.result), /^Too much request data in flight/);
  assert.ok(held > 0 && held <= Math.floor(MAX_PENDING_CHARS / 4_000_000), `${held} large calls were held at once`);

  const oversized = await executeInSandbox(
    'try { await api.request({ body: "x".repeat(5_000_001) }); } catch (e) { return e.message; }', { api }
  );
  assert.match(String(oversized.result), /^Arguments are too large \(\d+ characters, limit 5000000\)/);
});
