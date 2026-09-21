import { execFile } from 'node:child_process';
import { randomUUID } from 'node:crypto';
import { cp, mkdir, mkdtemp, readFile, readdir, rename, rm, writeFile } from 'node:fs/promises';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { isDeepStrictEqual, promisify } from 'node:util';

const exec = promisify(execFile);
const projectRoot = fileURLToPath(new URL('../', import.meta.url));
const inputs = [
  ['src/spec/openapi.json', 'https://api.attio.com/openapi/api'],
  ['src/context/llms.txt', 'https://docs.attio.com/llms.txt']
];
const methods = new Set(['get', 'post', 'put', 'patch', 'delete', 'options', 'head', 'trace']);

// openapi-sync 6.4.2 emits schema names directly into TypeScript identifiers.
// Attio's valid OpenAPI names include hyphens; rename only the generation copy.
export function normalizeForGeneration(original) {
  const spec = structuredClone(original);
  const schemas = spec.components?.schemas;
  if (!schemas) return spec;
  const names = new Map();
  const used = new Set();
  for (const name of Object.keys(schemas)) {
    let normalized = name.split(/[^A-Za-z0-9_$]+/).filter(Boolean)
      .map(part => part[0].toUpperCase() + part.slice(1)).join('');
    if (!normalized || /^[0-9]/.test(normalized)) normalized = 'Schema' + normalized;
    if (used.has(normalized)) throw new Error('Schema name collision after normalization: ' + name);
    used.add(normalized);
    names.set(name, normalized);
  }
  const rewriteRef = ref => {
    if (typeof ref !== 'string' || !ref.startsWith('#/components/schemas/')) return ref;
    const parts = ref.split('/');
    const name = parts[3].replace(/~1/g, '/').replace(/~0/g, '~');
    if (names.has(name)) parts[3] = names.get(name);
    return parts.join('/');
  };
  const visit = value => {
    if (!value || typeof value !== 'object') return;
    if (typeof value.$ref === 'string') value.$ref = rewriteRef(value.$ref);
    if (value.discriminator?.mapping) {
      for (const [key, ref] of Object.entries(value.discriminator.mapping)) {
        value.discriminator.mapping[key] = names.get(ref) ?? rewriteRef(ref);
      }
    }
    for (const child of Object.values(value)) visit(child);
  };
  visit(spec);
  spec.components.schemas = Object.fromEntries(Object.entries(schemas).map(([name, schema]) =>
    [names.get(name), schema]));
  return spec;
}

async function readOptional(path) {
  try {
    return await readFile(path);
  } catch (error) {
    if (error.code === 'ENOENT') return undefined;
    throw error;
  }
}

async function filesWithin(directory, base = directory) {
  let entries;
  try {
    entries = await readdir(directory, { withFileTypes: true });
  } catch (error) {
    if (error.code === 'ENOENT') return [];
    throw error;
  }
  const files = [];
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await filesWithin(path, base));
    else if (entry.isFile()) files.push(relative(base, path));
    else throw new Error('Generated files must not contain symlinks: ' + path);
  }
  return files.sort();
}

export async function fetchInputs(fetchImpl = fetch) {
  return new Map(await Promise.all(inputs.map(async ([path, url]) => {
    const response = await fetchImpl(url, { signal: AbortSignal.timeout(60_000) });
    if (!response.ok) throw new Error('Fetch failed for ' + url + ': HTTP ' + response.status);
    const text = await response.text();
    if (path.endsWith('.json')) {
      const spec = JSON.parse(text);
      if (!/^3\./.test(spec.openapi) || !spec.paths || !Object.keys(spec.paths).length) {
        throw new Error('Upstream response is not a non-empty OpenAPI 3 document');
      }
    } else if (!text.includes('https://docs.attio.com/')) {
      throw new Error('Upstream response is not the Attio documentation index');
    }
    return [path, Buffer.from(text)];
  })));
}

async function runGenerator({ root, specPath, generatedDir, config }) {
  const cli = join(root, 'node_modules/openapi-sync/bin/cli.js');
  const stagedConfig = { ...config, folder: generatedDir, api: { attio: specPath } };
  const args = ['--config-json', JSON.stringify(stagedConfig), '--json'];
  for (const command of ['validate', 'sync']) {
    try {
      const { stdout } = await exec(process.execPath, [cli, command, ...args], {
        cwd: root, maxBuffer: 8 * 1024 * 1024, timeout: 120_000
      });
      const result = JSON.parse(stdout);
      if (result.valid === false || result.success === false) throw new Error(stdout);
    } catch (error) {
      throw new Error('openapi-sync ' + command + ' failed: ' + (error.stdout || error.message));
    }
  }
  // Reject invalid generated TypeScript before replacing working source files.
  const generatedFiles = (await filesWithin(generatedDir))
    .filter(path => path.endsWith('.ts')).map(path => join(generatedDir, path));
  if (!generatedFiles.length) throw new Error('openapi-sync generated no TypeScript files');
  // 6.4.2 adds an extra blank line after a preserved block on regeneration.
  // Normalize its footer and generated whitespace; keep custom code unchanged.
  const marker = (config.customCode?.markerText || 'CUSTOM CODE').replace(/[.*+?^$()|[\]\\{}]/g, '\\$&');
  const footer = new RegExp('(// 🔒 ' + marker + ' END\\r?\\n// =+\\r?\\n)(?:[ \\t]*\\r?\\n)*', 'g');
  for (const path of generatedFiles) {
    const code = await readFile(path, 'utf8');
    let inCustomCode = false;
    const markerText = config.customCode?.markerText || 'CUSTOM CODE';
    const normalized = code.replace(footer, '$1\n').split('\n').map(line => {
      if (line === '// 🔒 ' + markerText + ' START') inCustomCode = true;
      if (line === '// 🔒 ' + markerText + ' END') inCustomCode = false;
      if (inCustomCode) return line;
      return line.replace(/[ \t]+$/, '').replace(/^[ \t]+/, indent => indent.replace(/\t/g, '  '));
    }).join('\n');
    if (code !== normalized) await writeFile(path, normalized);
  }
  try {
    await exec(process.execPath, [
      join(root, 'node_modules/typescript/bin/tsc'), '--noEmit',
      '--strict', '--skipLibCheck', '--target', 'ES2022', '--module', 'ES2022',
      '--moduleResolution', 'node', ...generatedFiles
    ], { cwd: root, maxBuffer: 8 * 1024 * 1024, timeout: 120_000 });
  } catch (error) {
    throw new Error('Generated TypeScript failed validation: ' + (error.stdout || error.message));
  }
}

async function writeAtomic(path, contents) {
  await mkdir(dirname(path), { recursive: true });
  const temporary = path + '.' + randomUUID() + '.tmp';
  try {
    await writeFile(temporary, contents);
    await rename(temporary, path);
  } finally {
    await rm(temporary, { force: true });
  }
}

async function publish(root, changes) {
  const applied = [];
  try {
    for (const change of changes) {
      const path = join(root, change.path);
      if (!isDeepStrictEqual(await readOptional(path), change.before)) {
        throw new Error('File changed during sync; refusing to overwrite: ' + change.path);
      }
      await writeAtomic(path, change.after);
      applied.push(change);
    }
  } catch (error) {
    for (const change of applied.reverse()) {
      const path = join(root, change.path);
      if (change.before === undefined) await rm(path, { force: true });
      else await writeAtomic(path, change.before);
    }
    throw error;
  }
}

export async function synchronize(mode, { root = projectRoot, fetchImpl = fetch, generate = runGenerator } = {}) {
  if (!['sync', 'generate', 'check', 'upstream-check'].includes(mode)) {
    throw new Error('Usage: node scripts/spec-sync.mjs <sync|generate|check|upstream-check>');
  }
  const originals = new Map(await Promise.all(inputs.map(async ([path]) =>
    [path, await readFile(join(root, path))])));
  const nextInputs = ['sync', 'upstream-check'].includes(mode) ? await fetchInputs(fetchImpl) : originals;
  const spec = JSON.parse(nextInputs.get('src/spec/openapi.json').toString());
  const stats = {
    paths: Object.keys(spec.paths).length,
    operations: Object.values(spec.paths).reduce((count, operations) =>
      count + Object.keys(operations).filter(method => methods.has(method)).length, 0),
    schemas: Object.keys(spec.components?.schemas || {}).length
  };
  if (mode === 'upstream-check') {
    const drift = inputs.filter(([path]) => path.endsWith('.json')
      ? !isDeepStrictEqual(JSON.parse(originals.get(path)), JSON.parse(nextInputs.get(path)))
      : !originals.get(path).equals(nextInputs.get(path))).map(([path]) => path);
    if (drift.length) throw new Error('Upstream drift: ' + drift.join(', ') + '. Run npm run spec:sync.');
    return { mode, ...stats, drift: [] };
  }
  const cache = join(root, '.openapi-sync');
  await mkdir(cache, { recursive: true });
  const staging = await mkdtemp(join(cache, 'staging-'));
  try {
    const config = JSON.parse(await readFile(join(root, 'openapi.sync.json'), 'utf8'));
    const generatedDir = join(staging, 'generated');
    const currentGenerated = join(root, 'src/generated');
    const previousGenerated = new Map(await Promise.all((await filesWithin(currentGenerated))
      .map(async path => [path, await readFile(join(currentGenerated, path))])));
    await mkdir(generatedDir);
    // Preserve openapi-sync custom-code blocks and developer-owned extra files.
    if (previousGenerated.size) await cp(currentGenerated, generatedDir, { recursive: true });
    const specPath = join(staging, 'openapi.json');
    await writeFile(specPath, JSON.stringify(normalizeForGeneration(spec)));
    await generate({ root, specPath, generatedDir, config });
    const generatedFiles = await filesWithin(generatedDir);
    const changes = [];
    if (mode === 'sync') {
      for (const [path, after] of nextInputs) {
        const before = originals.get(path);
        if (!after.equals(before)) changes.push({ path, before, after });
      }
    }
    for (const path of generatedFiles) {
      const after = await readFile(join(generatedDir, path));
      const before = previousGenerated.get(path);
      if (!before?.equals(after)) changes.push({ path: 'src/generated/' + path, before, after });
    }
    if (mode === 'check' && changes.length) {
      throw new Error('Generated drift: ' + changes.map(change => change.path).join(', ') +
        '. Run npm run spec:generate.');
    }
    if (mode !== 'check') await publish(root, changes);
    return { mode, ...stats, generatedFiles: generatedFiles.length, changed: changes.map(change => change.path) };
  } finally {
    await rm(staging, { recursive: true, force: true });
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  try {
    console.log(JSON.stringify(await synchronize(process.argv[2]), null, 2));
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
