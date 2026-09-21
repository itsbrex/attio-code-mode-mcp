import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';
import { loadSpec } from '../src/spec/loader.js';
import * as endpoints from '../src/generated/attio/endpoints.js';

test('search includes every HTTP operation and preserves required scopes from the bundled spec', async () => {
  const raw = JSON.parse(await readFile(new URL('../src/spec/openapi.json', import.meta.url), 'utf8'));
  const spec = loadSpec();
  const methods = new Set(['get', 'post', 'put', 'patch', 'delete', 'options', 'head', 'trace']);
  let count = 0;
  for (const [path, item] of Object.entries(raw.paths) as [string, Record<string, any>][]) {
    for (const [method, operation] of Object.entries(item)) {
      if (!methods.has(method)) continue;
      count++;
      assert.ok(spec.paths[path]?.[method], method + ' ' + path);
      assert.deepEqual(spec.paths[path][method].security, operation.security ?? raw.security ?? []);
    }
  }
  assert.equal(spec.operationCount, count);
  assert.equal(spec.pathCount, Object.keys(raw.paths).length);
  assert.deepEqual(spec.paths['/v2/emails'].get.security, [{
    oauth2: ['email:read', 'record_permission:read', 'object_configuration:read']
  }]);
});

test('generated endpoints cover the full operation surface including email metadata', () => {
  assert.equal(Object.keys(endpoints).length, loadSpec().operationCount);
  assert.equal(endpoints.GetV2Emails, '/v2/emails');
});
