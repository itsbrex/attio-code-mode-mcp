/**
 * Attio MCP Server — Code Mode
 *
 * Four tools. 90+ operations. Fixed token cost.
 *
 * search(code)       — Agent writes JS to query the API spec
 * execute(code)      — Agent writes JS to call the authenticated API
 * context(topic)     — Agent looks up Attio documentation by topic
 * test_connection()  — Checks the API key and reports the workspace
 *
 * Plus resources (docs index, operation index) and prompts for people to pick.
 */

import { McpServer, type CacheHint } from '@modelcontextprotocol/server';

import { SERVER_NAME, SERVER_VERSION, type ServerDeps } from './deps.js';
import { registerPrompts } from './prompts.js';
import { registerResources } from './resources.js';
import { registerTools } from './tools.js';

const INSTRUCTIONS = `Attio CRM through Code Mode: you write short JavaScript instead of picking one tool per endpoint.

Workflow:
1. context — look up Attio concepts (objects, records, lists, attributes) when the data model is unclear.
2. search — run JavaScript over the bundled OpenAPI spec (spec.paths, spec.components.schemas) to find the endpoint, its parameters and the scopes it needs. It never calls Attio.
3. execute — run JavaScript with the authenticated api global (api.request, api.paginate). Batch related calls in one script and return only the fields you need; output is capped at 40,000 characters.

A failed script comes back as an error result with the message and any console output: fix the script and retry.
Writes in execute are real and immediate. Confirm with the user before deleting records or changing many at once.
test_connection shows which workspace the API key belongs to and its scopes; a 403 means the key lacks a scope.`;

/** Tool, prompt and resource lists are fixed for a release and the same for every caller. */
const STATIC_LIST: CacheHint = { ttlMs: 5 * 60 * 1000, cacheScope: 'public' };

/**
 * Builds one server instance. The stdio entry calls this per connection, and serves both
 * protocol eras (2026-07-28 and the 2025 handshake) from the same registrations.
 */
export function createAttioServer(deps: ServerDeps): McpServer {
  const server = new McpServer(
    {
      name: SERVER_NAME,
      title: 'Attio CRM (Code Mode)',
      version: SERVER_VERSION,
      description: 'Search the Attio API spec and call the Attio CRM API by writing JavaScript.',
      websiteUrl: 'https://github.com/itsbrex/attio-code-mode-mcp'
    },
    {
      instructions: INSTRUCTIONS,
      cacheHints: {
        'server/discover': STATIC_LIST,
        'tools/list': STATIC_LIST,
        'prompts/list': STATIC_LIST,
        'resources/list': STATIC_LIST,
        'resources/templates/list': STATIC_LIST
      }
    }
  );

  registerTools(server, deps);
  registerResources(server, deps);
  registerPrompts(server, deps);
  return server;
}
