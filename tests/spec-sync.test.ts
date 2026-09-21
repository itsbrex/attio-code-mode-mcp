import assert from 'node:assert/strict';
import { mkdtemp, mkdir, readFile, readdir, rm, symlink, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { test, type TestContext } from 'node:test';
import { normalizeForGeneration, synchronize } from '../scripts/spec-sync.mjs';

const repo = fileURLToPath(new URL('../', import.meta.url));
const specPath = 'src/spec/openapi.json';
const docsPath = 'src/context/llms.txt';
const outputPath = 'src/generated/attio/endpoints.ts';
const spec = {
  openapi: '3.1.0',
  info: { title: 'Fixture', version: '1' },
  paths: {
    '/v2/emails': {
      get: {
        operationId: 'listEmails',
        responses: { '200': { description: 'OK', content: { 'application/json': {
          schema: { $ref: '#/components/schemas/email-metadata' }
        } } } }
      }
    }
  },
  components: { schemas: { 'email-metadata': {
    type: 'object', properties: { subject_line: { type: 'string' } }
  } } }
};
const docs = '# Attio\n- [Emails](https://docs.attio.com/rest-api/endpoint-reference/emails/list-emails)\n';

async function put(root: string, path: string, value: string) {
  await mkdir(dirname(join(root, path)), { recursive: true });
  await writeFile(join(root, path), value);
}

async function fixture(t: TestContext) {
  const root = await mkdtemp(join(tmpdir(), 'attio-spec-test-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  await put(root, specPath, JSON.stringify(spec));
  await put(root, docsPath, docs);
  await put(root, outputPath, 'export const previous = true;\n');
  await put(root, 'openapi.sync.json', await readFile(join(repo, 'openapi.sync.json'), 'utf8'));
  return root;
}

function fetcher(next = { ...spec, info: { ...spec.info, version: '2' } }, index = docs + '\n') {
  return async (url: string) => new Response(url.endsWith('/api') ? JSON.stringify(next) : index);
}

async function fakeGeneration({ generatedDir }: { generatedDir: string }) {
  await put(generatedDir, 'attio/endpoints.ts', 'export const GetV2Emails = "/v2/emails";\n');
}

async function snapshot(root: string) {
  return Promise.all([specPath, docsPath, outputPath].map(path => readFile(join(root, path), 'utf8')));
}

test('sync updates both public snapshots and generated output together', async t => {
  const root = await fixture(t);
  const result = await synchronize('sync', { root, fetchImpl: fetcher(), generate: fakeGeneration });
  assert.equal(result.operations, 1);
  assert.equal(JSON.parse(await readFile(join(root, specPath), 'utf8')).info.version, '2');
  assert.equal(await readFile(join(root, docsPath), 'utf8'), docs + '\n');
  assert.match(await readFile(join(root, outputPath), 'utf8'), /GetV2Emails/);
  assert.deepEqual(await readdir(join(root, '.openapi-sync')), []);
});

test('a failed docs fetch preserves all previous artifacts', async t => {
  const root = await fixture(t);
  const before = await snapshot(root);
  await assert.rejects(synchronize('sync', {
    root,
    fetchImpl: async (url: string) => url.endsWith('/api')
      ? new Response(JSON.stringify(spec)) : new Response('unavailable', { status: 503 }),
    generate: async () => assert.fail('generation must not start after a failed fetch')
  }), /HTTP 503/);
  assert.deepEqual(await snapshot(root), before);
});

test('invalid upstream JSON and HTML docs cannot replace working snapshots', async t => {
  const root = await fixture(t);
  const before = await snapshot(root);
  for (const fetchImpl of [
    async () => new Response('<html>error</html>'),
    async (url: string) => new Response(url.endsWith('/api') ? JSON.stringify(spec) : '<html>error</html>')
  ]) {
    await assert.rejects(synchronize('sync', { root, fetchImpl, generate: fakeGeneration }));
    assert.deepEqual(await snapshot(root), before);
  }
});

test('a generator failure leaves source inputs and existing generated files unchanged', async t => {
  const root = await fixture(t);
  const before = await snapshot(root);
  await assert.rejects(synchronize('sync', {
    root, fetchImpl: fetcher(),
    generate: async () => { throw new Error('fixture generator failure'); }
  }), /fixture generator failure/);
  assert.deepEqual(await snapshot(root), before);
  assert.deepEqual(await readdir(join(root, '.openapi-sync')), []);
});

test('drift check fails without rewriting missing or stale generated files', async t => {
  const root = await fixture(t);
  for (const missing of [false, true]) {
    if (missing) await rm(join(root, outputPath));
    await assert.rejects(synchronize('check', { root, generate: fakeGeneration }), /Generated drift/);
    if (missing) await assert.rejects(readFile(join(root, outputPath)), { code: 'ENOENT' });
    else assert.equal(await readFile(join(root, outputPath), 'utf8'), 'export const previous = true;\n');
  }
});

test('concurrent edits are preserved and prior writes are rolled back on conflict', async t => {
  const root = await fixture(t);
  const before = await snapshot(root);
  await assert.rejects(synchronize('sync', {
    root, fetchImpl: fetcher(),
    generate: async (context: { generatedDir: string }) => {
      await fakeGeneration(context);
      await writeFile(join(root, outputPath), 'external edit\n');
    }
  }), /File changed during sync/);
  const after = await snapshot(root);
  assert.deepEqual(after.slice(0, 2), before.slice(0, 2));
  assert.equal(after[2], 'external edit\n');
});

test('upstream check ignores JSON formatting and fails on actual drift without writes', async t => {
  const root = await fixture(t);
  const before = await snapshot(root);
  await synchronize('upstream-check', {
    root, fetchImpl: async (url: string) =>
      new Response(url.endsWith('/api') ? JSON.stringify(spec, null, 2) : docs)
  });
  await assert.rejects(synchronize('upstream-check', { root, fetchImpl: fetcher() }), /Upstream drift/);
  assert.deepEqual(await snapshot(root), before);
});

test('schema normalization preserves raw input, refs, discriminator mappings and wire property names', () => {
  const input = structuredClone(spec);
  Object.assign(input.components.schemas['email-metadata'], {
    discriminator: { propertyName: 'kind', mapping: { email: '#/components/schemas/email-metadata' } },
    properties: { 'header-name': { type: 'string' } }
  });
  const before = structuredClone(input);
  const result = normalizeForGeneration(input);
  assert.deepEqual(input, before);
  assert.deepEqual(Object.keys(result.components.schemas), ['EmailMetadata']);
  assert.equal(result.paths['/v2/emails'].get.responses['200'].content['application/json'].schema.$ref,
    '#/components/schemas/EmailMetadata');
  assert.equal(result.components.schemas.EmailMetadata.discriminator.mapping.email,
    '#/components/schemas/EmailMetadata');
  assert.deepEqual(result.components.schemas.EmailMetadata.properties, { 'header-name': { type: 'string' } });
  assert.throws(() => normalizeForGeneration({
    components: { schemas: { 'foo-bar': {}, FooBar: {} } }
  }), /collision/);
});

test('real generator compiles hyphenated schemas, is deterministic and preserves custom code', async t => {
  const root = await fixture(t);
  await symlink(join(repo, 'node_modules'), join(root, 'node_modules'), 'dir');
  await synchronize('generate', { root });
  const generated = await readFile(join(root, outputPath), 'utf8');
  const custom = generated.replace('// 🔒 CUSTOM CODE END', 'export const handWritten = 42;  \n\t// preserved spacing\n// 🔒 CUSTOM CODE END');
  await writeFile(join(root, outputPath), custom);
  const result = await synchronize('generate', { root });
  assert.deepEqual(result.changed, []);
  assert.equal(await readFile(join(root, outputPath), 'utf8'), custom);
  await synchronize('check', { root });
  assert.equal(await readFile(join(root, specPath), 'utf8'), JSON.stringify(spec));
});
