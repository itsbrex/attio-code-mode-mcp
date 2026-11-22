import assert from 'node:assert/strict';
import { test } from 'node:test';
import http from 'node:http';
import { AttioAuth } from '../src/auth/api-key.js';
import {
  AttioApiError,
  AttioClient,
  SlidingWindowLimiter,
  assertApiPath,
  createApiWrapper,
  isReadRequest,
  paginate,
  parseRetryAfter
} from '../src/api/client.js';
import { offlineClient, type Reply } from './helpers.js';

test('parseRetryAfter handles HTTP dates, seconds and junk', () => {
  const now = Date.parse('Tue, 23 May 2023 14:42:00 GMT');
  assert.equal(parseRetryAfter('Tue, 23 May 2023 14:42:01 GMT', now), 1_000);
  assert.equal(parseRetryAfter('2', now), 2_000);
  assert.equal(parseRetryAfter('Tue, 23 May 2023 14:41:00 GMT', now), 250);
  assert.equal(parseRetryAfter('3600', now), 30_000);
  assert.equal(parseRetryAfter('not a date', now), 1_000);
  assert.equal(parseRetryAfter(undefined, now), 1_000);
});

test('isReadRequest treats GET and POST query/search as reads', () => {
  assert.equal(isReadRequest('GET', '/v2/notes'), true);
  assert.equal(isReadRequest('POST', '/v2/objects/people/records/query'), true);
  assert.equal(isReadRequest('POST', '/v2/objects/records/search'), true);
  assert.equal(isReadRequest('POST', '/v2/notes'), false);
  assert.equal(isReadRequest('PATCH', '/v2/objects/people/records/abc'), false);
});

test('wrapper sends params as query for GET and as body for writes without body', async () => {
  const { client, seen } = offlineClient([{ status: 200 }, { status: 200 }]);
  const api = createApiWrapper(client);
  await api.request({ method: 'get', path: '/v2/notes', params: { limit: 3 } });
  await api.request({ method: 'POST', path: '/v2/objects/people/records/query', params: { limit: 5 } });
  assert.equal(seen[0].method, 'get');
  assert.deepEqual(seen[0].params, { limit: 3 });
  assert.equal(seen[0].data, undefined);
  assert.equal(seen[1].params, undefined);
  assert.deepEqual(JSON.parse(seen[1].data), { limit: 5 });
});

test('wrapper keeps query params when a body is also given (upsert)', async () => {
  const { client, seen } = offlineClient([{ status: 200 }, { status: 200 }]);
  const api = createApiWrapper(client);
  const body = { data: { values: { email_addresses: ['a@example.com'] } } };
  await api.request({ method: 'PUT', path: '/v2/objects/people/records', params: { matching_attribute: 'email_addresses' }, body });
  await api.request({ method: 'PUT', path: '/v2/objects/people/records', query: { matching_attribute: 'email_addresses' }, body });
  for (const config of seen) {
    assert.deepEqual(config.params, { matching_attribute: 'email_addresses' });
    assert.deepEqual(JSON.parse(config.data), body);
  }
});

test('429 is retried using Retry-After, then succeeds', async () => {
  const past = new Date(Date.now() - 5_000).toUTCString();
  const { client, seen } = offlineClient([
    { status: 429, headers: { 'retry-after': past }, data: { status_code: 429, type: 'rate_limit_error', code: 'rate_limit_exceeded' } },
    { status: 429, headers: { 'retry-after': past } },
    { status: 200, data: { data: { ok: true } } }
  ]);
  const result = await client.request<{ data: { ok: boolean } }>('/v2/self');
  assert.deepEqual(result, { data: { ok: true } });
  assert.equal(seen.length, 3);
});

test('429 gives up after 3 retries with a rate-limit error', async () => {
  const past = new Date(Date.now() - 5_000).toUTCString();
  const limited: Reply = { status: 429, headers: { 'retry-after': past }, data: { code: 'rate_limit_exceeded', message: 'Rate limit exceeded' } };
  const { client, seen } = offlineClient([limited, limited, limited, limited, { status: 200 }]);
  await assert.rejects(client.request('/v2/self'), (error: unknown) => {
    assert.ok(error instanceof AttioApiError);
    assert.equal(error.status, 429);
    assert.equal(error.code, 'rate_limit_exceeded');
    return true;
  });
  assert.equal(seen.length, 4);
});

test('API errors carry status, code, type, method and path', async () => {
  const { client } = offlineClient([{
    status: 400,
    data: { status_code: 400, type: 'invalid_request_error', code: 'validation_type', message: 'Body payload validation error.' }
  }]);
  await assert.rejects(
    client.request('/v2/notes', { method: 'POST', body: {} }),
    (error: unknown) => {
      assert.ok(error instanceof AttioApiError);
      assert.equal(error.status, 400);
      assert.equal(error.code, 'validation_type');
      assert.equal(error.type, 'invalid_request_error');
      assert.match(error.message, /^Attio API 400 validation_type on POST \/v2\/notes: Body payload validation error\.$/);
      return true;
    }
  );
});

test('aborted signal stops new requests before they are sent', async () => {
  const { client, seen } = offlineClient([{ status: 200 }]);
  const controller = new AbortController();
  controller.abort();
  const api = createApiWrapper(client, controller.signal);
  await assert.rejects(api.request({ method: 'POST', path: '/v2/notes', body: {} }), /execution time limit/);
  assert.equal(seen.length, 0);
});

test('the API key is never sent to a host named in the path', async () => {
  const hits: { url?: string; authorization?: string }[] = [];
  const server = http.createServer((req, res) => {
    hits.push({ url: req.url, authorization: req.headers.authorization });
    res.setHeader('content-type', 'application/json');
    res.end('{"ok":true}');
  });
  await new Promise<void>(resolve => server.listen(0, '127.0.0.1', resolve));
  const { port } = server.address() as { port: number };
  try {
    // Real HTTP stack on purpose: with the scripted adapter nothing would leave anyway.
    const api = createApiWrapper(new AttioClient(new AttioAuth('offline-fixture-key')));
    for (const path of [
      `http://127.0.0.1:${port}/steal`,
      `//127.0.0.1:${port}/steal`,
      `/\\127.0.0.1:${port}/steal`,
      `HTTP://127.0.0.1:${port}/steal`,
      ` http://127.0.0.1:${port}/steal`
    ]) {
      await assert.rejects(api.request({ method: 'GET', path }), /path must be an Attio API path/, path);
    }
    assert.deepEqual(hits, []);
  } finally {
    await new Promise(resolve => server.close(resolve));
  }
});

test('the HTTP client itself refuses to leave the Attio host or follow redirects', () => {
  const { client } = offlineClient();
  const instance = client['axiosInstance'];
  assert.equal(instance.defaults.allowAbsoluteUrls, false);
  assert.equal(instance.defaults.maxRedirects, 0);
  assert.match(instance.getUri({ url: 'http://evil.example/x' }), /^https:\/\/api\.attio\.com\//);
  assert.match(instance.getUri({ url: '//evil.example/x' }), /^https:\/\/api\.attio\.com\//);
});

test('assertApiPath accepts API paths and rejects everything else', () => {
  for (const ok of ['/v2/objects', '/v2/notes?limit=5', '/v2/objects/people/records/abc-123', '/v2/lists/my_list/entries/query']) {
    assert.doesNotThrow(() => assertApiPath(ok), ok);
  }
  for (const bad of ['v2/objects', '', '//host/x', '/\\host', 'https://api.attio.com/v2/self', '/v2/a b', '/v2/a\nb', undefined, null, 5, {}]) {
    assert.throws(() => assertApiPath(bad), /path must be an Attio API path/, String(bad));
  }
});

test('unknown HTTP methods are rejected before any request', async () => {
  const { client, seen } = offlineClient();
  const api = createApiWrapper(client);
  await assert.rejects(api.request({ method: 'TRACE', path: '/v2/self' }), /Unsupported method "TRACE"/);
  await assert.rejects(api.request({ method: 'CONNECT', path: '/v2/self' }), /Unsupported method/);
  assert.equal(seen.length, 0);
});

test('paginate follows next_cursor through empty pages until it is null', async () => {
  const { client, seen } = offlineClient([
    { status: 200, data: { data: [{ id: 1 }, { id: 2 }], pagination: { next_cursor: 'c1' } } },
    { status: 200, data: { data: [], pagination: { next_cursor: 'c2' } } },
    { status: 200, data: { data: [{ id: 3 }], pagination: { next_cursor: null } } }
  ]);
  const api = createApiWrapper(client);
  const result = await api.paginate({ method: 'GET', path: '/v2/meetings', params: { limit: 2 } });
  assert.deepEqual(result, { data: [{ id: 1 }, { id: 2 }, { id: 3 }], pages: 3, hasMore: false });
  assert.deepEqual(seen.map(config => config.params), [
    { limit: 2 },
    { limit: 2, cursor: 'c1' },
    { limit: 2, cursor: 'c2' }
  ]);
});

test('paginate pages offset endpoints in the body for POST until a page is empty', async () => {
  // Records are distinct across pages, as they are in Attio.
  const page = (from: number, n: number) => ({ status: 200, data: { data: Array.from({ length: n }, (_, i) => ({ id: from + i })) } });
  const { client, seen } = offlineClient([page(0, 2), page(2, 2), page(4, 1), page(5, 0)]);
  const api = createApiWrapper(client);
  const result = await api.paginate({
    method: 'POST',
    path: '/v2/objects/people/records/query',
    params: { limit: 2, filter: { name: 'Ada' } }
  });
  assert.deepEqual(result.data, [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]);
  assert.deepEqual([result.pages, result.hasMore], [4, false]);
  assert.deepEqual(seen.map(config => JSON.parse(config.data)), [
    { limit: 2, filter: { name: 'Ada' } },
    { limit: 2, filter: { name: 'Ada' }, offset: 2 },
    { limit: 2, filter: { name: 'Ada' }, offset: 4 },
    { limit: 2, filter: { name: 'Ada' }, offset: 5 }
  ]);
  assert.ok(seen.every(config => config.params === undefined));
});

test('paginate without a limit stops at the first empty offset page', async () => {
  const { client, seen } = offlineClient([
    { status: 200, data: { data: [1, 2, 3] } },
    { status: 200, data: { data: [] } }
  ]);
  const result = await createApiWrapper(client).paginate({ method: 'GET', path: '/v2/notes' });
  assert.deepEqual(result, { data: [1, 2, 3], pages: 2, hasMore: false });
  assert.deepEqual(seen.map(config => config.params), [{}, { offset: 3 }]);
});

test('paginate stops at maxItems and maxPages and says there is more', async () => {
  const full = { status: 200, data: { data: [1, 2, 3], pagination: { next_cursor: 'next' } } };
  const a = offlineClient([full, full, full]);
  assert.deepEqual(
    await createApiWrapper(a.client).paginate({ method: 'GET', path: '/v2/files', maxItems: 4 }),
    { data: [1, 2, 3, 1], pages: 2, hasMore: true }
  );
  const b = offlineClient([full, full, full]);
  assert.deepEqual(
    await createApiWrapper(b.client).paginate({ method: 'GET', path: '/v2/files', maxPages: 1 }),
    { data: [1, 2, 3], pages: 1, hasMore: true }
  );
  assert.equal(b.seen.length, 1);
});

test('paginate rejects endpoints that do not return a list', async () => {
  const { client } = offlineClient([{ status: 200, data: { data: { id: 'one' } } }]);
  await assert.rejects(createApiWrapper(client).paginate({ method: 'GET', path: '/v2/self' }), /needs a list endpoint/);
  await assert.rejects(paginate(async () => 'nope'), /needs a list endpoint/);
});

test('the wrapper reports each finished exchange, including failures and every page', async () => {
  const done: string[] = [];
  const { client } = offlineClient([
    { status: 200, data: { data: [] } },
    { status: 404, data: { code: 'not_found', message: 'Nope' } },
    { status: 200, data: { data: [1], pagination: { next_cursor: 'c' } } },
    { status: 200, data: { data: [2], pagination: { next_cursor: null } } }
  ]);
  const api = createApiWrapper(client, undefined, {
    onRequestDone: info => done.push(`${info.method} ${info.path} ${info.ok}`)
  });
  await api.request({ method: 'get', path: '/v2/notes' });
  await assert.rejects(api.request({ method: 'DELETE', path: '/v2/notes/x' }));
  await api.paginate({ method: 'GET', path: '/v2/files' });
  assert.deepEqual(done, ['GET /v2/notes true', 'DELETE /v2/notes/x false', 'GET /v2/files true', 'GET /v2/files true']);
});

test('stopping the execution ends a rate-limit wait instead of sleeping through it', async () => {
  const later = new Date(Date.now() + 20_000).toUTCString();
  const { client, seen } = offlineClient([{ status: 429, headers: { 'retry-after': later } }, { status: 200 }]);
  const controller = new AbortController();
  const started = Date.now();
  setTimeout(() => controller.abort(), 50);
  await assert.rejects(client.request('/v2/self', { signal: controller.signal }), /execution time limit reached or request cancelled/);
  assert.ok(Date.now() - started < 2_000);
  assert.equal(seen.length, 1);
});

test('checkConnection reports why a connection failed', async () => {
  const ok = offlineClient([{ status: 200, data: { active: true, workspace_name: 'Acme' } }]);
  assert.deepEqual(await ok.client.checkConnection(), { connected: true, self: { active: true, workspace_name: 'Acme' } });
  const denied = offlineClient([{ status: 401, data: { code: 'unauthorized', message: 'Invalid token' } }]);
  const result = await denied.client.checkConnection();
  assert.equal(result.connected, false);
  assert.ok(!result.connected && result.status === 401);
  assert.match(!result.connected ? result.error : '', /401 unauthorized.*Invalid token.*ATTIO_API_KEY/);
  assert.equal(await offlineClient([{ status: 500 }]).client.testConnection(), false);
});

test('paginate returns an unpaged list once when the endpoint ignores offset', async () => {
  const everything = { status: 200, data: { data: [{ id: 'a' }, { id: 'b' }, { id: 'c' }] } };
  const { client, seen } = offlineClient([everything, everything, everything]);
  const result = await createApiWrapper(client).paginate({ method: 'GET', path: '/v2/lists' });
  assert.deepEqual(result, { data: [{ id: 'a' }, { id: 'b' }, { id: 'c' }], pages: 1, hasMore: false });
  assert.equal(seen.length, 2);
});

test('paginate does not stop early when the server returns fewer items than the limit asked for', async () => {
  // The endpoint caps its page size at 2 although 100 were requested.
  const page = (from: number, n: number) => ({ status: 200, data: { data: Array.from({ length: n }, (_, i) => ({ id: from + i })) } });
  const { client, seen } = offlineClient([page(0, 2), page(2, 2), page(4, 2), page(6, 0)]);
  const result = await createApiWrapper(client).paginate({ method: 'GET', path: '/v2/notes', params: { limit: 100 } });
  assert.equal(result.data.length, 6);
  assert.equal(result.hasMore, false);
  assert.deepEqual(seen.map(config => config.params.offset), [undefined, 2, 4, 6]);
});

test('a limiter waiter whose signal aborts leaves without taking a slot', async () => {
  const limiter = new SlidingWindowLimiter(1, 300);
  await limiter.acquire();
  const controller = new AbortController();
  const started = Date.now();
  setTimeout(() => controller.abort(), 20);
  await limiter.acquire(controller.signal);
  assert.ok(Date.now() - started < 200, 'an aborted waiter kept waiting for a slot');
  // Had the aborted waiter taken the slot, this one would wait for two windows.
  await limiter.acquire();
  const waited = Date.now() - started;
  assert.ok(waited >= 250 && waited < 550, `next caller waited ${waited}ms`);
});

test('requests queued by a stopped script do not delay the calls after it', async () => {
  const { client, seen } = offlineClient();
  const controller = new AbortController();
  // Far more reads than one second allows: the rest wait for the limiter.
  const queued = Array.from({ length: 1_500 }, () =>
    client.request('/v2/objects', { signal: controller.signal }).then(() => 'sent', () => 'stopped'));
  await new Promise(resolve => setTimeout(resolve, 50));
  controller.abort();
  const outcomes = await Promise.all(queued);
  assert.equal(outcomes.filter(outcome => outcome === 'sent').length, 100);
  assert.equal(outcomes.filter(outcome => outcome === 'stopped').length, 1_400);

  const started = Date.now();
  await client.request('/v2/self');
  // Without the fix the 1,400 leftovers hold the limiter for another 14 seconds.
  assert.ok(Date.now() - started < 1_500, `an unrelated call waited ${Date.now() - started}ms`);
  assert.equal(seen.length, 101);
});
