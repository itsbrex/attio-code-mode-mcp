/**
 * The four Code Mode tools: search, execute, context, test_connection.
 */

import type { CallToolResult, McpServer } from '@modelcontextprotocol/server';
import * as z from 'zod';

import { createApiWrapper } from '../api/client.js';
import { getAllDocs, getCategories, searchDocs } from '../context/loader.js';
import {
  DEFAULT_SCRIPT_TIMEOUT_MS,
  DEFAULT_TOTAL_TIMEOUT_MS,
  executeInSandbox,
  type ExecuteResult
} from '../executor/sandbox.js';
import { safeJsonStringify } from '../utils/json.js';
import { MAX_OUTPUT_CHARS, truncate } from '../utils/truncate.js';
import { SERVER_NAME, SERVER_VERSION, type ServerDeps } from './deps.js';

const DOCS_BASE_URL = 'https://docs.attio.com/';

export function registerTools(server: McpServer, deps: ServerDeps): void {
  const { client, spec } = deps;

  server.registerTool(
    'search',
    {
      title: 'Search the Attio API spec',
      description: `Write JavaScript to explore the Attio CRM API specification (${spec.pathCount} paths, ${spec.operationCount} operations, ${spec.schemaCount} schemas, API v${spec.info.version}). Runs locally and never calls Attio.

Available globals:
- \`spec\` — Object with all API endpoints. Structure: spec.paths['/v2/endpoint'].method

How to use:
- List all paths: Object.keys(spec.paths)
- Filter by keyword: Object.entries(spec.paths).filter(([p]) => p.includes('notes'))
- Get endpoint details: spec.paths['/v2/objects'].get
- Check parameters: spec.paths['/v2/objects'].get.parameters
- Check response schema: spec.paths['/v2/objects'].get.responses
- Get tags: spec.paths['/v2/objects'].get.tags
- Check required scopes: spec.paths['/v2/emails'].get.security
- Search by tag: Object.entries(spec.paths).filter(([p, m]) => Object.values(m).some(op => op.tags?.includes('Records')))
- Follow a nested { $ref: '#/components/schemas/NAME' }: spec.components.schemas['NAME']

Return your findings as a value or use console.log(). Return only what you need: output is capped at ${MAX_OUTPUT_CHARS} characters.

Example — find all list-related endpoints:
  const lists = Object.entries(spec.paths)
    .filter(([p]) => p.toLowerCase().includes('list'))
    .map(([path, methods]) => ({
      path,
      methods: Object.entries(methods).map(([m, op]) => ({ method: m.toUpperCase(), summary: op.summary }))
    }));
  return lists;`,
      inputSchema: z.object({
        code: z.string().min(1).describe(
          'JavaScript code to execute. Has access to the `spec` object containing the full Attio OpenAPI specification.'
        )
      }),
      annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false }
    },
    async ({ code }, ctx) => sandboxResult(await executeInSandbox(code, { spec }, { signal: ctx.mcpReq.signal }))
  );

  server.registerTool(
    'execute',
    {
      title: 'Run code against the Attio API',
      description: `Write JavaScript to call the Attio CRM API. Authentication is automatic (API key injected).

Available globals:
- \`api\` — Authenticated client for Attio CRM.

Usage:
  const result = await api.request({
    method: 'GET',              // GET, POST, PATCH, DELETE, PUT
    path: '/v2/objects',        // API path (from search results); must start with "/"
    params: { limit: 10 },     // Query params for GET, body for POST/PATCH/PUT/DELETE
    body: { ... },             // Request body; when given, params become query params instead
    query: { ... }             // Explicit query params for any method
  });

  // Every page of a list endpoint. Takes the same fields as api.request.
  const all = await api.paginate({ method: 'GET', path: '/v2/meetings', params: { limit: 50 }, maxItems: 500 });
  // => { data: [...], pages: 3, hasMore: false }   (hasMore: true means maxItems or maxPages stopped it)

The response is parsed JSON. You can chain multiple API calls in one execution.
Rate limits (100 reads/s, 25 writes/s) are enforced client-side and 429s are retried automatically.
Failed calls throw an Error with status, code and type properties; use try/catch to handle them.
Await every call: calls still running when the script returns or throws are cancelled.
A whole execution is stopped after ${DEFAULT_TOTAL_TIMEOUT_MS / 1000}s, and after ${DEFAULT_SCRIPT_TIMEOUT_MS / 1000}s of running without an API call in flight, so batch large jobs.
Return only the fields you need: output is capped at ${MAX_OUTPUT_CHARS} characters.
Writes are real and immediate. import(), eval and new Function are not available.

Common patterns:
- List companies: api.request({ method: 'POST', path: '/v2/objects/companies/records/query', params: { limit: 10 } })
- Get a record: api.request({ method: 'GET', path: '/v2/objects/companies/records/' + recordId })
- Create note: api.request({ method: 'POST', path: '/v2/notes', params: { data: { ... } } })
- Query list entries: api.request({ method: 'POST', path: '/v2/lists/{listId}/entries/query', params: { limit: 50 } })
- Upsert a person: api.request({ method: 'PUT', path: '/v2/objects/people/records', query: { matching_attribute: 'email_addresses' }, body: { data: { values: { ... } } } })
- All records of an object: api.paginate({ method: 'POST', path: '/v2/objects/deals/records/query', params: { limit: 500 } })

Example — find a company and get its notes:
  const companies = await api.request({
    method: 'POST',
    path: '/v2/objects/companies/records/query',
    params: { filter: { name: { $contains: 'Acme' } }, limit: 5 }
  });
  const companyId = companies.data[0].id.record_id;
  const notes = await api.request({
    method: 'GET',
    path: '/v2/notes',
    params: { parent_object: 'companies', parent_record_id: companyId }
  });
  return { company: companies.data[0], notes: notes.data };`,
      inputSchema: z.object({
        code: z.string().min(1).describe(
          'JavaScript code to execute. Has access to the authenticated `api` client for Attio CRM.'
        )
      }),
      annotations: { readOnlyHint: false, destructiveHint: true, idempotentHint: false, openWorldHint: true }
    },
    async ({ code }, ctx) => {
      // Requests must stop when the client cancels, when a time limit is hit, and when the
      // script is over. A script that returns or fails while calls it did not await are
      // still queued must not keep writing to Attio after the model was given the result.
      const scriptOver = new AbortController();
      const signal = AbortSignal.any([ctx.mcpReq.signal, scriptOver.signal]);
      const progressToken = ctx.mcpReq._meta?.progressToken;
      let requests = 0;

      const api = createApiWrapper(client, signal, {
        onRequestDone: ({ method, path, ok }) => {
          requests += 1;
          if (progressToken === undefined || signal.aborted) return;
          ctx.mcpReq.notify({
            method: 'notifications/progress',
            params: {
              progressToken,
              progress: requests,
              message: `${method} ${path.slice(0, 120)}${ok ? '' : ' (failed)'}`
            }
          }).catch(() => {});
        }
      });

      try {
        return sandboxResult(await executeInSandbox(code, { api }, { signal: ctx.mcpReq.signal }));
      } finally {
        scriptOver.abort();
      }
    }
  );

  const docEntry = z.object({
    title: z.string(),
    url: z.string().optional(),
    path: z.string().optional(),
    description: z.string().optional()
  });

  server.registerTool(
    'context',
    {
      title: 'Look up Attio documentation',
      description: `Look up Attio CRM documentation by topic. Returns relevant doc pages with titles and URLs, best match first.

Use this to understand Attio's domain model before writing code:
- Objects (companies, people, deals, custom objects)
- Records (CRUD, querying, filtering)
- Lists and entries (pipeline stages, kanban boards)
- Attributes (types: select, status, text, number, etc.)
- Notes, tasks, comments, threads
- Webhooks
- OAuth and authentication

Pass a topic keyword to search, or use "all" to list everything, or "categories" for top-level groupings.`,
      inputSchema: z.object({
        topic: z.string().describe(
          'Topic to search for (e.g., "lists", "notes", "records", "attributes", "webhooks"). Use "all" for full index, "categories" for groupings.'
        )
      }),
      outputSchema: z.object({
        query: z.string().optional(),
        results: z.array(docEntry).optional(),
        baseUrl: z.string().optional(),
        categories: z.array(z.string()).optional(),
        count: z.number().optional(),
        hint: z.string().optional()
      }),
      annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false }
    },
    async ({ topic }) => {
      const query = topic.trim();
      const keyword = query.toLowerCase();
      const output = lookUpDocs(keyword === '' || keyword === 'all' ? 'all' : keyword === 'categories' ? keyword : query);
      return { content: [{ type: 'text', text: formatToolContent(output) }], structuredContent: output };
    }
  );

  server.registerTool(
    'test_connection',
    {
      title: 'Test the Attio connection',
      description: 'Test connection to Attio API and show server info, the workspace the API key belongs to, and its scopes',
      outputSchema: z.object({
        connected: z.boolean(),
        message: z.string(),
        server: z.string(),
        version: z.string(),
        mode: z.string(),
        workspace: z.object({
          id: z.string().optional(),
          name: z.string().optional(),
          slug: z.string().optional()
        }).optional(),
        scopes: z.array(z.string()).optional(),
        spec: z.object({
          apiVersion: z.string(),
          endpoints: z.number(),
          operations: z.number(),
          schemas: z.number()
        })
      }),
      annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: true }
    },
    async () => {
      const check = await client.checkConnection();
      const self = check.connected ? check.self : {};
      // /v2/self answers 200 with active: false for a token Attio no longer accepts.
      const connected = check.connected && self.active !== false;
      const workspace = {
        id: text(self.workspace_id),
        name: text(self.workspace_name),
        slug: text(self.workspace_slug)
      };
      const output = {
        connected,
        message: connected
          ? 'Successfully connected to Attio CRM'
          : `Connection failed: ${check.connected ? 'Attio reports this API key is not active.' : check.error}`,
        server: SERVER_NAME,
        version: SERVER_VERSION,
        mode: 'code-mode',
        ...(connected && Object.values(workspace).some(Boolean) ? { workspace: dropUndefined(workspace) } : {}),
        ...(connected && typeof self.scope === 'string' ? { scopes: self.scope.split(/\s+/).filter(Boolean) } : {}),
        spec: {
          apiVersion: String(spec.info.version),
          endpoints: spec.pathCount,
          operations: spec.operationCount,
          schemas: spec.schemaCount
        }
      };
      return { content: [{ type: 'text', text: formatToolContent(output) }], structuredContent: output };
    }
  );
}

type DocsOutput = {
  query?: string;
  results?: { title: string; url?: string; path?: string; description?: string }[];
  baseUrl?: string;
  categories?: string[];
  count?: number;
  hint?: string;
};

function lookUpDocs(topic: string): DocsOutput {
  if (topic === 'all') {
    // The full index with descriptions is twice the output cap, so list titles and paths.
    const results = getAllDocs().map(doc => ({
      title: doc.title,
      path: doc.url.startsWith(DOCS_BASE_URL) ? doc.url.slice(DOCS_BASE_URL.length) : doc.url
    }));
    return {
      count: results.length,
      baseUrl: DOCS_BASE_URL,
      results,
      hint: 'Paths are relative to baseUrl unless they are full URLs. Search a topic to get descriptions.'
    };
  }
  if (topic === 'categories') {
    return { categories: getCategories() };
  }
  const results = searchDocs(topic).map(doc => dropUndefined({ ...doc }));
  return {
    query: topic,
    results,
    count: results.length,
    ...(results.length === 0 ? { hint: 'Try broader terms or use "all" to see everything' } : {})
  };
}

/** Script failures are tool errors, so the model sees them as failures and can fix the script. */
function sandboxResult(result: ExecuteResult): CallToolResult {
  if (result.error !== undefined) {
    return {
      content: [{ type: 'text', text: formatToolContent({ error: result.error, logs: result.logs }) }],
      isError: true
    };
  }
  return {
    content: [{
      type: 'text',
      text: formatToolContent({
        result: result.result,
        logs: result.logs.length > 0 ? result.logs : undefined
      })
    }]
  };
}

/** Indented JSON when it fits the output cap; compact JSON when indentation alone would cost data. */
export function formatToolContent(value: unknown): string {
  if (typeof value === 'string') return truncate(value);
  const pretty = safeJsonStringify(value);
  if (pretty.length <= MAX_OUTPUT_CHARS) return pretty;
  try {
    return truncate(JSON.stringify(value) ?? pretty);
  } catch {
    return truncate(pretty);
  }
}

function text(value: unknown): string | undefined {
  return typeof value === 'string' && value !== '' ? value : undefined;
}

function dropUndefined<T extends Record<string, unknown>>(value: T): T {
  for (const key of Object.keys(value)) if (value[key] === undefined) delete value[key];
  return value;
}
