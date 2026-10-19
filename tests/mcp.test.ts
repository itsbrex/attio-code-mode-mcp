import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { test } from 'node:test';
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js';

test('stdio discovery exposes email scope requirements without contacting Attio', async () => {
  const transport = new StdioClientTransport({
    command: process.execPath,
    args: ['--import', 'tsx', fileURLToPath(new URL('../src/index.ts', import.meta.url))],
    env: { ATTIO_API_KEY: 'offline-fixture-key', DEBUG: 'false' },
    stderr: 'pipe'
  });
  const client = new Client({ name: 'attio-offline-test', version: '1.0.0' });
  try {
    await client.connect(transport);
    const pkg = JSON.parse(await readFile(new URL('../package.json', import.meta.url), 'utf8'));
    assert.deepEqual(client.getServerVersion(), { name: 'attio-mcp', version: pkg.version });
    const { tools } = await client.listTools();
    assert.deepEqual(tools.map(tool => tool.name).sort(), ['context', 'execute', 'search', 'test_connection']);
    assert.match(tools.find(tool => tool.name === 'search')!.description!, /paths, \d+ operations/);
    const result = await client.callTool({
      name: 'search', arguments: {
        code: 'return { security: spec.paths["/v2/emails"].get.security, operations: spec.operationCount };'
      }
    });
    const content = result.content as { type: string; text: string }[];
    const value = JSON.parse(content[0].text);
    assert.ok(value.result.security[0].oauth2.includes('email:read'));
    assert.ok(value.result.operations > 0);
    assert.equal(result.isError, undefined);
  } finally {
    await client.close();
    await transport.close();
  }
});
