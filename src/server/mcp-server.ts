/**
 * Attio MCP Server — Code Mode
 *
 * Three tools. 90+ endpoints. Fixed token cost.
 *
 * search(code)  — Agent writes JS to query the API spec
 * execute(code) — Agent writes JS to call the authenticated API
 * context(topic) — Agent looks up Attio documentation by topic
 */

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema
} from '@modelcontextprotocol/sdk/types.js';

import { AttioAuth } from '../auth/api-key.js';
import { AttioClient } from '../api/client.js';
import { loadSpec } from '../spec/loader.js';
import { executeInSandbox } from '../executor/sandbox.js';
import { searchDocs, getAllDocs, getCategories } from '../context/loader.js';
import { ServerConfig } from '../types/config.js';

export class AttioMCPServer {
  private server: Server;
  private auth: AttioAuth;
  private client: AttioClient;
  private spec: any;

  constructor(config: ServerConfig) {
    this.server = new Server(
      {
        name: 'attio-mcp',
        version: '1.0.0'
      },
      {
        capabilities: {
          tools: {}
        }
      }
    );

    this.auth = new AttioAuth(config.apiKey);
    this.client = new AttioClient(this.auth);
    this.spec = loadSpec();

    this.registerHandlers();
  }

  private registerHandlers() {
    this.server.setRequestHandler(ListToolsRequestSchema, async () => ({
      tools: this.getToolDefinitions()
    }));

    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const { name, arguments: args } = request.params;

      try {
        const result = await this.executeTool(name, args || {});
        return {
          content: [{
            type: 'text' as const,
            text: typeof result === 'string' ? result : JSON.stringify(result, null, 2)
          }]
        };
      } catch (error) {
        return {
          content: [{
            type: 'text' as const,
            text: `Error: ${error instanceof Error ? error.message : String(error)}`
          }],
          isError: true
        };
      }
    });
  }

  private getToolDefinitions(): any[] {
    return [
      {
        name: 'search',
        description: `Write JavaScript to explore the Attio CRM API specification (${this.spec.pathCount} endpoints, ${this.spec.schemaCount} schemas, API v${this.spec.info.version}).

Available globals:
- \`spec\` — Object with all API endpoints. Structure: spec.paths['/v2/endpoint'].method

How to use:
- List all paths: Object.keys(spec.paths)
- Filter by keyword: Object.entries(spec.paths).filter(([p]) => p.includes('notes'))
- Get endpoint details: spec.paths['/v2/objects'].get
- Check parameters: spec.paths['/v2/objects'].get.parameters
- Check response schema: spec.paths['/v2/objects'].get.responses
- Get tags: spec.paths['/v2/objects'].get.tags
- Search by tag: Object.entries(spec.paths).filter(([p, m]) => Object.values(m).some(op => op.tags?.includes('Records')))

Return your findings as a value or use console.log().

Example — find all list-related endpoints:
  const lists = Object.entries(spec.paths)
    .filter(([p]) => p.toLowerCase().includes('list'))
    .map(([path, methods]) => ({
      path,
      methods: Object.entries(methods).map(([m, op]) => ({ method: m.toUpperCase(), summary: op.summary }))
    }));
  return lists;`,
        inputSchema: {
          type: 'object',
          properties: {
            code: {
              type: 'string',
              description: 'JavaScript code to execute. Has access to the `spec` object containing the full Attio OpenAPI specification.'
            }
          },
          required: ['code']
        }
      },
      {
        name: 'execute',
        description: `Write JavaScript to call the Attio CRM API. Authentication is automatic (API key injected).

Available globals:
- \`api\` — Authenticated client for Attio CRM.

Usage:
  const result = await api.request({
    method: 'GET',              // GET, POST, PATCH, DELETE, PUT
    path: '/v2/objects',        // API path (from search results)
    params: { limit: 10 },     // Query params for GET, body for POST/PATCH/PUT/DELETE
    body: { ... }              // Request body (alternative to params for POST/PATCH)
  });

The response is parsed JSON. You can chain multiple API calls in one execution.
Use try/catch for error handling.

Common patterns:
- List companies: api.request({ method: 'POST', path: '/v2/objects/companies/records/query', params: { limit: 10 } })
- Get a record: api.request({ method: 'GET', path: '/v2/objects/companies/records/' + recordId })
- Create note: api.request({ method: 'POST', path: '/v2/notes', params: { data: { ... } } })
- Query list entries: api.request({ method: 'POST', path: '/v2/lists/{listId}/entries/query', params: { limit: 50 } })

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
        inputSchema: {
          type: 'object',
          properties: {
            code: {
              type: 'string',
              description: 'JavaScript code to execute. Has access to the authenticated `api` client for Attio CRM.'
            }
          },
          required: ['code']
        }
      },
      {
        name: 'context',
        description: `Look up Attio CRM documentation by topic. Returns relevant doc pages with titles and URLs.

Use this to understand Attio's domain model before writing code:
- Objects (companies, people, deals, custom objects)
- Records (CRUD, querying, filtering)
- Lists and entries (pipeline stages, kanban boards)
- Attributes (types: select, status, text, number, etc.)
- Notes, tasks, comments, threads
- Webhooks
- OAuth and authentication

Pass a topic keyword to search, or use "all" to list everything, or "categories" for top-level groupings.`,
        inputSchema: {
          type: 'object',
          properties: {
            topic: {
              type: 'string',
              description: 'Topic to search for (e.g., "lists", "notes", "records", "attributes", "webhooks"). Use "all" for full index, "categories" for groupings.'
            }
          },
          required: ['topic']
        }
      },
      {
        name: 'test_connection',
        description: 'Test connection to Attio API and show server info',
        inputSchema: {
          type: 'object',
          properties: {}
        }
      }
    ];
  }

  private async executeTool(name: string, args: any): Promise<any> {
    switch (name) {
      case 'search': {
        if (!args.code) throw new Error('code is required');
        const result = await executeInSandbox(args.code, { spec: this.spec });
        if (result.error) {
          return { error: result.error, logs: result.logs };
        }
        return {
          result: result.result,
          logs: result.logs.length > 0 ? result.logs : undefined
        };
      }

      case 'execute': {
        if (!args.code) throw new Error('code is required');

        const api = {
          request: async (opts: { method: string; path: string; params?: any; body?: any }) => {
            return this.client.request(opts.path, opts.body ?? opts.params, {
              method: opts.method,
              data: opts.body
            });
          }
        };

        const result = await executeInSandbox(args.code, { api });
        if (result.error) {
          return { error: result.error, logs: result.logs };
        }
        return {
          result: result.result,
          logs: result.logs.length > 0 ? result.logs : undefined
        };
      }

      case 'context': {
        const topic = args.topic || 'all';
        if (topic === 'all') {
          return { docs: getAllDocs(), count: getAllDocs().length };
        }
        if (topic === 'categories') {
          return { categories: getCategories() };
        }
        const results = searchDocs(topic);
        return {
          query: topic,
          results,
          count: results.length,
          hint: results.length === 0 ? 'Try broader terms or use "all" to see everything' : undefined
        };
      }

      case 'test_connection': {
        const connected = await this.client.testConnection();
        return {
          connected,
          message: connected ? 'Successfully connected to Attio CRM' : 'Connection failed — check ATTIO_API_KEY',
          server: 'attio-mcp',
          version: '1.0.0',
          mode: 'code-mode',
          spec: {
            apiVersion: this.spec.info.version,
            endpoints: this.spec.pathCount,
            schemas: this.spec.schemaCount
          }
        };
      }

      default:
        throw new Error(`Unknown tool: ${name}. Available: search, execute, context, test_connection`);
    }
  }

  async start() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
  }
}
