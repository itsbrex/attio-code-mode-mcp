import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { test } from 'node:test';
import { Client } from '@modelcontextprotocol/client';
import { StdioClientTransport } from '@modelcontextprotocol/client/stdio';
import { loadSpec } from '../src/spec/loader.js';

const bundled = loadSpec();

type TextBlock = { type: string; text: string };
const textOf = (result: { content?: unknown }): string => (result.content as TextBlock[])[0].text;

/** Spawns the real server over stdio. The key is a fixture and no test here calls Attio. */
async function connect(mode: 'legacy' | 'auto') {
  const transport = new StdioClientTransport({
    command: process.execPath,
    args: ['--import', 'tsx', fileURLToPath(new URL('../src/index.ts', import.meta.url))],
    env: { ATTIO_API_KEY: 'offline-fixture-key', DEBUG: 'false' },
    stderr: 'pipe'
  });
  const client = new Client({ name: 'attio-offline-test', version: '1.0.0' }, { versionNegotiation: { mode } });
  await client.connect(transport);
  return client;
}

// 'legacy' is the 2025 initialize handshake; 'auto' lands on protocol revision 2026-07-28.
for (const [mode, era] of [['legacy', 'legacy'], ['auto', 'modern']] as const) {
  test(`stdio (${era} era): tools are described, validated and report script errors`, async () => {
    const client = await connect(mode);
    try {
      assert.equal(client.getProtocolEra(), era);
      const pkg = JSON.parse(await readFile(new URL('../package.json', import.meta.url), 'utf8'));
      const info = client.getServerVersion();
      assert.equal(info?.name, 'attio-mcp');
      assert.equal(info?.version, pkg.version);
      assert.equal(info?.title, 'Attio CRM (Code Mode)');
      assert.match(client.getInstructions() ?? '', /search — run JavaScript over the bundled OpenAPI spec/);

      const { tools } = await client.listTools();
      assert.deepEqual(tools.map(tool => tool.name), ['search', 'execute', 'context', 'test_connection']);
      const byName = Object.fromEntries(tools.map(tool => [tool.name, tool]));
      assert.match(byName.search.description!, /paths, \d+ operations/);
      assert.ok(tools.every(tool => tool.title));
      assert.equal(byName.search.annotations?.readOnlyHint, true);
      assert.equal(byName.context.annotations?.readOnlyHint, true);
      assert.equal(byName.test_connection.annotations?.readOnlyHint, true);
      assert.equal(byName.execute.annotations?.readOnlyHint, false);
      assert.equal(byName.execute.annotations?.destructiveHint, true);
      assert.deepEqual(byName.search.inputSchema.required, ['code']);
      assert.ok(byName.context.outputSchema && byName.test_connection.outputSchema);
      assert.equal(byName.search.outputSchema, undefined);

      const found = await client.callTool({
        name: 'search',
        arguments: {
          code: 'return { security: spec.paths["/v2/emails"].get.security, operations: spec.operationCount, schemas: Object.keys(spec.components.schemas).length };'
        }
      });
      const value = JSON.parse(textOf(found));
      assert.ok(value.result.security[0].oauth2.includes('email:read'));
      assert.ok(value.result.operations > 0);
      assert.equal(value.result.schemas, bundled.schemaCount);
      assert.equal(found.isError, undefined);

      const failed = await client.callTool({ name: 'search', arguments: { code: 'console.log("before"); return spec.nope.deeper;' } });
      assert.equal(failed.isError, true);
      const failure = JSON.parse(textOf(failed));
      assert.match(failure.error, /Cannot read properties of undefined/);
      assert.deepEqual(failure.logs, ['before']);

      const invalid = await client.callTool({ name: 'search', arguments: { code: 42 } });
      assert.equal(invalid.isError, true);
      assert.match(textOf(invalid), /Input validation error/);

      const refused = await client.callTool({ name: 'search', arguments: { code: 'return (await import("node:fs")).constants' } });
      assert.equal(refused.isError, true);
      assert.match(textOf(refused), /import\(\) is not available in the sandbox/);
    } finally {
      await client.close();
    }
  });

  test(`stdio (${era} era): documentation lookup returns structured, complete results`, async () => {
    const client = await connect(mode);
    try {
      const padded = await client.callTool({ name: 'context', arguments: { topic: '  lists ' } });
      const lists = padded.structuredContent as { query: string; count: number; results: { title: string; url: string }[] };
      assert.equal(lists.query, 'lists');
      assert.ok(lists.count > 0 && lists.count < 100, `stray spaces must not match every page (got ${lists.count})`);
      assert.match(lists.results[0].title, /list/i);
      assert.deepEqual(JSON.parse(textOf(padded)), lists);

      const all = await client.callTool({ name: 'context', arguments: { topic: 'all' } });
      const index = JSON.parse(textOf(all));
      assert.ok(index.count > 300);
      assert.equal(index.results.length, index.count);
      assert.equal(index.baseUrl, 'https://docs.attio.com/');
      const paths: string[] = index.results.map((doc: { path: string }) => doc.path);
      assert.deepEqual(all.structuredContent, index);
      assert.ok(paths.every(path => !path.startsWith(index.baseUrl)));
      assert.ok(paths.includes('rest-api/endpoint-reference/emails/list-emails') || paths.includes('rest-api/endpoint-reference/emails/list-emails.md'));
      // Links to other hosts keep their full URL.
      assert.ok(paths.includes('https://api.attio.com/openapi/api'));

      const categories = await client.callTool({ name: 'context', arguments: { topic: 'categories' } });
      assert.ok((categories.structuredContent as { categories: string[] }).categories.includes('webhooks'));

      const none = await client.callTool({ name: 'context', arguments: { topic: 'zzzzqqqq' } });
      assert.deepEqual(none.structuredContent, {
        query: 'zzzzqqqq', results: [], count: 0, hint: 'Try broader terms or use "all" to see everything'
      });
    } finally {
      await client.close();
    }
  });

  test(`stdio (${era} era): resources, prompts and completions`, async () => {
    const client = await connect(mode);
    try {
      const { resources } = await client.listResources();
      const uris = resources.map(resource => resource.uri);
      assert.ok(uris.includes('attio://docs/index'));
      assert.ok(uris.includes('attio://openapi/operations'));
      assert.ok(uris.includes('attio://openapi/tags/notes'));
      assert.ok(uris.includes('attio://openapi/tags/call-recordings'));

      const { resourceTemplates } = await client.listResourceTemplates();
      assert.deepEqual(
        resourceTemplates.map(template => template.uriTemplate).sort(),
        ['attio://docs/categories/{category}', 'attio://openapi/tags/{tag}']
      );

      const docs = await client.readResource({ uri: 'attio://docs/index' });
      assert.match((docs.contents[0] as { text: string }).text, /^# Attio Docs/);

      const operations = JSON.parse(((await client.readResource({ uri: 'attio://openapi/operations' })).contents[0] as { text: string }).text);
      assert.equal(operations.operations.length, operations.count);
      assert.equal(operations.count, bundled.operationCount);
      const emails = operations.operations.find((op: { method: string; path: string }) => op.method === 'GET' && op.path === '/v2/emails');
      assert.ok(emails.scopes.includes('email:read'));

      const notes = JSON.parse(((await client.readResource({ uri: 'attio://openapi/tags/notes' })).contents[0] as { text: string }).text);
      assert.equal(notes.tag, 'Notes');
      assert.equal(notes.count, 5);
      const create = notes.operations.find((op: { method: string; path: string }) => op.method === 'POST' && op.path === '/v2/notes');
      assert.deepEqual(create.bodyFields, ['data']);

      const webhooks = JSON.parse(((await client.readResource({ uri: 'attio://docs/categories/webhooks' })).contents[0] as { text: string }).text);
      assert.ok(webhooks.count > 0 && webhooks.docs.every((doc: { url: string }) => doc.url.includes('webhooks')));
      await assert.rejects(client.readResource({ uri: 'attio://openapi/tags/not-a-tag' }), /Unknown tag/);

      const tagCompletion = await client.complete({
        ref: { type: 'ref/resource', uri: 'attio://openapi/tags/{tag}' },
        argument: { name: 'tag', value: 'no' }
      });
      assert.deepEqual(tagCompletion.completion.values, ['notes']);

      const { prompts } = await client.listPrompts();
      assert.deepEqual(prompts.map(prompt => prompt.name).sort(), ['add-note', 'explore-api', 'find-record', 'workspace-schema']);
      const prompt = await client.getPrompt({ name: 'find-record', arguments: { object: 'people', query: 'ada@example.com' } });
      const promptText = (prompt.messages[0].content as { text: string }).text;
      assert.match(promptText, /Find the Attio people record matching "ada@example.com"/);
      await assert.rejects(client.getPrompt({ name: 'find-record', arguments: { object: 'people' } }), /query/);
      assert.equal((await client.getPrompt({ name: 'workspace-schema' })).messages.length, 1);

      const objectCompletion = await client.complete({
        ref: { type: 'ref/prompt', name: 'find-record' },
        argument: { name: 'object', value: 'co' }
      });
      assert.deepEqual(objectCompletion.completion.values, ['companies']);
      const topicCompletion = await client.complete({
        ref: { type: 'ref/prompt', name: 'explore-api' },
        argument: { name: 'topic', value: 'web' }
      });
      assert.deepEqual(topicCompletion.completion.values, ['webhooks']);
    } finally {
      await client.close();
    }
  });
}
