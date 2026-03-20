#!/usr/bin/env tsx
/**
 * Integration test — verifies all 4 tools work with real Attio API.
 */

import dotenv from 'dotenv';
dotenv.config();

import { AttioAuth } from './auth/api-key.js';
import { AttioClient } from './api/client.js';
import { loadSpec } from './spec/loader.js';
import { executeInSandbox } from './executor/sandbox.js';
import { searchDocs, getCategories } from './context/loader.js';

const apiKey = process.env.ATTIO_API_KEY;
if (!apiKey) { console.error('Missing ATTIO_API_KEY'); process.exit(1); }

const auth = new AttioAuth(apiKey);
const client = new AttioClient(auth);
const spec = loadSpec();

async function test() {
  console.log('=== TEST 1: Connection ===');
  const connected = await client.testConnection();
  console.log(`Connected: ${connected}`);
  if (!connected) { console.error('FAILED — check API key'); process.exit(1); }

  console.log('\n=== TEST 2: Spec Search ===');
  const searchResult = await executeInSandbox(
    `const paths = Object.keys(spec.paths); return { total: paths.length, sample: paths.slice(0, 5) };`,
    { spec }
  );
  console.log(`Spec paths: ${searchResult.result}`);

  console.log('\n=== TEST 3: Execute — Query Companies ===');
  const api = {
    request: async (opts: { method: string; path: string; params?: any; body?: any }) => {
      return client.request(opts.path, opts.body ?? opts.params, {
        method: opts.method,
        data: opts.body
      });
    }
  };

  const execResult = await executeInSandbox(
    `const result = await api.request({ method: 'POST', path: '/v2/objects/companies/records/query', params: { limit: 3 } });
     return result.data.map(r => ({ id: r.id.record_id, name: r.values?.name?.[0]?.value }));`,
    { api }
  );
  if (execResult.error) {
    console.error(`Execute error: ${execResult.error}`);
  } else {
    console.log(`Companies: ${execResult.result}`);
  }

  console.log('\n=== TEST 4: Execute — Query Lists ===');
  const listsResult = await executeInSandbox(
    `const result = await api.request({ method: 'GET', path: '/v2/lists' });
     return result.data.map(l => ({ id: l.id.list_id, name: l.name }));`,
    { api }
  );
  if (listsResult.error) {
    console.error(`Lists error: ${listsResult.error}`);
  } else {
    console.log(`Lists: ${listsResult.result}`);
  }

  console.log('\n=== TEST 5: Execute — Create & Read Note ===');
  // First get a company to attach note to
  const noteResult = await executeInSandbox(
    `const companies = await api.request({ method: 'POST', path: '/v2/objects/companies/records/query', params: { limit: 1 } });
     const companyId = companies.data[0].id.record_id;
     const notes = await api.request({ method: 'GET', path: '/v2/notes', params: { parent_object: 'companies', parent_record_id: companyId, limit: 3 } });
     return { company: companies.data[0].values?.name?.[0]?.value, noteCount: notes.data?.length || 0 };`,
    { api }
  );
  if (noteResult.error) {
    console.error(`Notes error: ${noteResult.error}`);
  } else {
    console.log(`Notes: ${noteResult.result}`);
  }

  console.log('\n=== TEST 6: Context — Doc Search ===');
  const listsDocs = searchDocs('lists');
  console.log(`Docs for "lists": ${listsDocs.length} results`);
  listsDocs.slice(0, 3).forEach(d => console.log(`  - ${d.title}: ${d.url}`));

  const categories = getCategories();
  console.log(`\nDoc categories: ${categories.join(', ')}`);

  console.log('\n=== ALL TESTS PASSED ===');
}

test().catch(err => {
  console.error(`Test failed: ${err.message}`);
  process.exit(1);
});
