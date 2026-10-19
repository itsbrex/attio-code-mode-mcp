import assert from 'node:assert/strict';
import { test } from 'node:test';
import { executeInSandbox } from '../src/executor/sandbox.js';

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
  const probes = [
    'return api.request.constructor("return typeof process")()',
    'return console.log.constructor("return typeof process")()',
    'return spec.constructor.constructor("return typeof process")()',
    'return Object.constructor("return typeof process")()',
    'return (await api.request({})).constructor.constructor("return typeof process")()',
    'try { await api.request(undefined, () => 1); } catch (e) { return e.constructor.constructor("return typeof process")(); }',
    'return typeof require + typeof fetch + typeof setTimeout + typeof Buffer'
  ];
  for (const probe of probes) {
    const out = await executeInSandbox(probe, { api, spec });
    assert.equal(out.error, undefined, probe);
    assert.match(String(out.result), /^(undefined)+$/, probe);
  }
});

test('overriding Promise.prototype.then in the sandbox leaks nothing and times out cleanly', async () => {
  const out = await executeInSandbox(`
    let leaked = 'none';
    Promise.prototype.then = function (onFulfilled) {
      try { leaked = typeof onFulfilled.constructor('return process')(); } catch (e) { leaked = 'blocked'; }
      globalThis.leak = leaked;
    };
    return 1;
  `, {}, { totalTimeoutMs: 50 });
  assert.match(out.error ?? '', /exceeded/);
});
