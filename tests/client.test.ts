import assert from 'node:assert/strict';
import { test } from 'node:test';
import { AxiosError, type AxiosResponse, type InternalAxiosRequestConfig } from 'axios';
import { AttioAuth } from '../src/auth/api-key.js';
import {
  AttioApiError,
  AttioClient,
  createApiWrapper,
  isReadRequest,
  parseRetryAfter
} from '../src/api/client.js';

type Reply = { status: number; data?: unknown; headers?: Record<string, string> };

/** Client whose HTTP layer is replaced by a scripted adapter. No network. */
function offlineClient(replies: Reply[]) {
  const client = new AttioClient(new AttioAuth('offline-fixture-key'));
  const seen: InternalAxiosRequestConfig[] = [];
  client['axiosInstance'].defaults.adapter = async (config: InternalAxiosRequestConfig) => {
    seen.push(config);
    const reply = replies.shift() ?? { status: 200, data: {} };
    const response = {
      data: reply.data ?? {},
      status: reply.status,
      statusText: String(reply.status),
      headers: reply.headers ?? {},
      config
    } as AxiosResponse;
    if (reply.status >= 400) {
      throw new AxiosError(`Request failed with status code ${reply.status}`, 'ERR_BAD_REQUEST', config, null, response);
    }
    return response;
  };
  return { client, seen };
}

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
