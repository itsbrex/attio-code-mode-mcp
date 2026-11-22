# attio-mcp

Code Mode MCP server for [Attio CRM](https://attio.com). 100+ API operations through 4 tools.

> Built by [Trial and Error Inc](https://trialanderror.ai). Inspired by the [Code Mode pattern](https://blog.cloudflare.com/mcp-code-mode) from Cloudflare. This fork is maintained at [itsbrex/attio-code-mode-mcp](https://github.com/itsbrex/attio-code-mode-mcp).

## Why Code Mode?

| | Traditional MCP | Code Mode |
|---|---|---|
| Tools | 35+ (one per operation) | 4 (search, execute, context, test_connection) |
| Token cost | ~8,000 tokens for tool defs | ~1,900 tokens (7,739 characters, measured) |
| New endpoints | Update every tool definition | Zero changes |
| Maintenance | Per-tool mapping | Just update the spec |

The LLM writes JavaScript to query the API spec and call endpoints directly. No tool-per-endpoint mapping. The tool definitions stay the same size however many endpoints Attio adds.

## Quick Start

Requires Node.js 24 or later.

```bash
git clone https://github.com/itsbrex/attio-code-mode-mcp.git
cd attio-code-mode-mcp
npm install
npm run build
```

Create `.env`:
```
ATTIO_API_KEY=your_api_key_here
```

Get your API key from [Attio Settings > Developers > API Keys](https://app.attio.com/settings/developers).

The server reads `.env` from the working directory and from the package folder, so a host that starts it from another directory still finds the file. Values already in the environment win. If `.env` holds a secret reference instead of the key (for example a 1Password `op://` value), start the server through the tool that resolves it: `op run --env-file=.env -- node dist/index.js`. The server refuses to start on an unresolved reference.

### Claude Code

Add to your project's `.mcp.json`:
```json
{
  "mcpServers": {
    "attio": {
      "command": "node",
      "args": ["/path/to/attio-code-mode-mcp/dist/index.js"],
      "env": {
        "ATTIO_API_KEY": "your_api_key_here"
      }
    }
  }
}
```

### Claude Desktop

Add to `~/Library/Application Support/Claude/claude_desktop_config.json`:
```json
{
  "mcpServers": {
    "attio": {
      "command": "node",
      "args": ["/path/to/attio-code-mode-mcp/dist/index.js"],
      "env": {
        "ATTIO_API_KEY": "your_api_key_here"
      }
    }
  }
}
```

## Protocol support

The server is built on the official v2 TypeScript SDK ([`@modelcontextprotocol/server`](https://www.npmjs.com/package/@modelcontextprotocol/server)) and serves two protocol generations from the same stdio entry point:

- **2026-07-28**: stateless requests, `server/discover`, cache hints on list and read results.
- **2025-11-25 and earlier**: the `initialize` handshake that current hosts use.

The client's opening message decides which one a connection uses. Nothing needs configuring.

| MCP feature | Use here |
|---|---|
| Tools | `search`, `execute`, `context`, `test_connection`, each with a title and behavior annotations (`execute` is the only one not marked read-only) |
| Input validation | Arguments are checked against the tool's schema before any code runs |
| Structured output | `context` and `test_connection` declare an output schema and return `structuredContent` |
| Tool errors | A script that throws returns `isError: true` with the message and console output |
| Progress | `execute` reports each finished API call when the request carries a progress token |
| Cancellation | Cancelling a call stops the script and aborts the Attio request in flight |
| Resources | Documentation index and API operation index, plus two templates |
| Prompts | Four starting points, shown as slash commands in most hosts |
| Completion | Autocomplete for prompt arguments and resource template variables |
| Instructions | The server tells the model the search-then-execute workflow at connect time |

Not used, on purpose: MCP logging, sampling and roots are deprecated in 2026-07-28, so diagnostics go to stderr (`DEBUG=true`). Tasks moved to an extension and elicitation is not needed by any tool.

## Tools

### `search(code)`

Write JavaScript to explore the Attio API specification. Find endpoints, check parameters, discover schemas. It runs locally and never calls Attio.

```javascript
// Find all endpoints related to notes
const notes = Object.entries(spec.paths)
  .filter(([p]) => p.includes('notes'))
  .map(([path, methods]) => ({
    path,
    methods: Object.entries(methods).map(([m, op]) => ({
      method: m.toUpperCase(),
      summary: op.summary
    }))
  }));
return notes;
```

Nested `{ "$ref": "#/components/schemas/NAME" }` entries can be followed with `spec.components.schemas['NAME']`.

### `execute(code)`

Write JavaScript to call the Attio API. Authentication is automatic.

```javascript
// Find a company and create a note
const companies = await api.request({
  method: 'POST',
  path: '/v2/objects/companies/records/query',
  params: { filter: { name: { $contains: 'Acme' } }, limit: 1 }
});

const companyId = companies.data[0].id.record_id;

await api.request({
  method: 'POST',
  path: '/v2/notes',
  params: {
    data: {
      parent_object: 'companies',
      parent_record_id: companyId,
      title: 'Meeting Notes',
      content: 'Discussed Q1 roadmap...'
    }
  }
});

return { success: true, company: companies.data[0].values.name };
```

`params` is the query string for `GET` and the body for other methods. When `body` is also given, `params` becomes the query string, and `query` sets query parameters explicitly for any method. Upsert endpoints need both:

```javascript
await api.request({
  method: 'PUT',
  path: '/v2/objects/people/records',
  query: { matching_attribute: 'email_addresses' },
  body: { data: { values: { email_addresses: ['ada@example.com'] } } }
});
```

`api.paginate` takes the same fields and collects every page:

```javascript
const meetings = await api.paginate({ method: 'GET', path: '/v2/meetings', params: { limit: 50 }, maxItems: 500 });
// { data: [...], pages: 3, hasMore: false }
```

Attio pages some endpoints with a cursor (`pagination.next_cursor`) and the others with `limit` and `offset`; no endpoint offers both. `api.paginate` reads the scheme from the first response. It follows cursors until they are null, including through empty pages, and walks offsets until a page comes back empty. It stops at `maxItems` (default 1,000) or `maxPages` (default 50) and sets `hasMore: true` when a limit cut the walk short. Endpoints that are not paged return their list once.

Limits and behavior:

- `path` must be an Attio API path starting with `/`. Absolute URLs are refused, so the API key cannot be sent to another host.
- Methods: `GET`, `POST`, `PUT`, `PATCH`, `DELETE`.
- The client paces requests to Attio's documented limits (100 reads/s, 25 writes/s) and retries `429` responses after `Retry-After` up to three times.
- Failed calls throw an error with `status`, `code` and `type` properties. An error the script does not catch becomes a tool error.
- A script is stopped after 120 seconds in total, or after 15 seconds of running with no API call in flight (an infinite loop). Requests it has not sent yet are cancelled.
- Await every call. Calls still running when the script returns or throws are cancelled, so a batch never keeps writing after the model was given the result.
- A script may have 2,000 calls in flight, holding 32 million characters of request data. Past that, calls are rejected with an error that says so.
- Output is capped at 40,000 characters. JSON is indented when it fits and compact when indentation alone would push it over.
- `import()`, `eval`, `new Function`, typed arrays and `WebAssembly` are not available.

### `context(topic)`

Look up Attio documentation by topic, best match first. Self-educate on the domain model before writing code.

```
context("lists")      → docs about lists, entries, stages
context("attributes") → attribute types (select, status, text, etc.)
context("categories") → all top-level doc groupings
context("all")        → every page as title and path
```

### `test_connection()`

Verify your API key works. Reports the workspace the key belongs to, its scopes, and the reason when the connection fails.

## Resources

For people and hosts to attach as context. All of them come from the bundled public documents; reading one never calls Attio.

| URI | Content |
|---|---|
| `attio://docs/index` | Attio's documentation index (`llms.txt`) |
| `attio://openapi/operations` | Every operation: method, path, summary, tags, required scopes |
| `attio://openapi/tags/{tag}` | Operations in one API area with parameters and body fields, for example `attio://openapi/tags/notes` |
| `attio://docs/categories/{category}` | Documentation pages in one category, for example `attio://docs/categories/webhooks` |

## Prompts

| Prompt | Arguments | What it starts |
|---|---|---|
| `explore-api` | `topic` | Find the endpoints for a topic and explain how to call them |
| `find-record` | `object`, `query` | Look up a record by name, email or domain (read-only) |
| `add-note` | `object`, `record`, `note` | Find a record and attach a note to it |
| `workspace-schema` | none | Summarize the workspace's objects, attributes and lists (read-only) |

## OpenAPI sync and generation

The MCP server bundles Attio's public [OpenAPI document](https://api.attio.com/openapi/api) and [documentation index](https://docs.attio.com/llms.txt). Refresh both, regenerate TypeScript, and rebuild with:

```bash
npm run spec:sync
```

`npm run spec:update` remains an alias. Sync fetches both documents, validates the spec with pinned `openapi-sync` 6.6.1, generates into a temporary directory, and type-checks generated code before publishing source changes. Failed fetches or generation preserve the previous snapshots and generated files. Restart the MCP server in your client after syncing to load the rebuilt package.

```bash
npm run spec:validate        # Validate the committed OpenAPI document and config
npm run spec:generate        # Regenerate from committed input without network access
npm run spec:check           # Compare staged generation with source; fail on drift
npm run spec:upstream-check  # Compare public upstream documents without changing source
npm run type-check
npm test
```

[`openapi.sync.json`](openapi.sync.json) generates `src/generated/attio/endpoints.ts`, `types/index.ts`, and `types/shared.ts`. These compile with the package; runtime requests continue through the existing authenticated API client. Runtime validator generation is disabled. Custom code is preserved inside the marked `CUSTOM CODE` blocks.

Attio uses valid OpenAPI schema names containing hyphens, which the generator cannot emit as TypeScript identifiers. The sync wrapper normalizes schema names and references in its temporary generation input, rejects name collisions, and leaves the bundled upstream document unchanged. It normalizes generated whitespace outside custom-code blocks, including extra blank lines inserted after their footers, and adds the `.js` extension to generated relative imports so the output compiles as native ESM. `.openapi-sync/` contains ignored staging/cache data.

CI runs validation, generated drift checks, type-checking, build, and offline tests. Scheduled and manual runs also check public upstream drift; they require no Attio credentials and do not publish updates.

### Email metadata access

The spec verified on 2026-11-22 contains 57 paths, 108 operations and 31 schemas, including `GET /v2/emails`. Required scopes are available through `search`:

```javascript
return spec.paths['/v2/emails'].get.security;
// [{ oauth2: ['email:read', 'record_permission:read', 'object_configuration:read'] }]
```

Refreshing a spec cannot grant API permissions. Attio's [email metadata endpoint](https://docs.attio.com/rest-api/endpoint-reference/emails/list-emails) is an alpha feature enabled per workspace and per app; contact `support@attio.com` when access is unavailable. It returns metadata only, requires a supported record/participant/domain filter, and must be paginated until `next_cursor` is null, including empty pages (`api.paginate` does this). A `403` for `email:read` requires an access/scope change on Attio's side.

## Architecture

```
src/
├── index.ts                # Entry point: env, key checks, stdio serving
├── server/
│   ├── mcp-server.ts       # Builds one server instance: info, instructions, cache hints
│   ├── tools.ts            # search, execute, context, test_connection
│   ├── resources.ts        # Docs index, operation index, two templates
│   ├── prompts.ts          # Four prompts with argument completion
│   └── deps.ts             # What every instance shares (client, spec, version)
├── api/client.ts           # HTTP client: path checks, rate limiting, 429 retry, pagination, typed errors
├── auth/api-key.ts         # API key auth (Bearer token from env)
├── executor/sandbox.ts     # Runs scripts: vm context inside a restricted child process
├── spec/
│   ├── openapi.json        # Attio's OpenAPI spec (embedded)
│   └── loader.ts           # Compact search shape; keeps components.schemas for $refs
├── context/
│   ├── llms.txt            # Attio's documentation index
│   └── loader.ts           # Ranked topic search and categories
├── generated/attio/        # Generated endpoint constants and types
├── utils/                  # Truncation, JSON, error and path helpers
└── test-connection.ts      # Manual live smoke test
```

## Security

The scripts are written by a model, and CRM content that reaches the model is untrusted input. The server is built so a script cannot take the API key, and cannot take the server down.

- **The key stays in the server process.** `api.request` is a bridge: the script passes a method, a path and JSON, and the server makes the call. The path must be on the Attio host; absolute URLs, protocol-relative URLs and redirects are refused.
- **Scripts run in a vm context that starts with nothing from outside**, including its global object. `spec` is copied in as JSON and only strings and numbers cross the bridge.
- **`import()` is refused before a script runs**, and the context cannot build code from strings, so the check cannot be bypassed with `eval` or `new Function`. In a vm context `import()` would hand the script an object from outside the context.
- **Each script runs in its own short-lived child process** with an empty environment, the Node.js permission model (no file access, no child processes) and a 256 MB heap limit. Binary buffers, which sit outside that limit, are removed. An infinite loop or a memory hog ends that process, not the server. A child that outlives the server ends itself.
- **The server does not trust the child.** Every message from it is checked for type and size, and the calls a script can queue in the server are capped.
- **One script cannot hold up the next.** Requests still queued when a script ends leave the shared rate limiter at once.
- **Output is capped** at 40,000 characters, console output at 1,000 lines.

Limits of this design: Node.js is not a hardened sandbox. A script that found a new way out of the vm context would land in the restricted child process, which has no key and no file access but, on Node.js 24, can still open network connections and send signals to other processes of the same user. Writes through `execute` are real; give the API key only the scopes you want a model to use.

## License

MIT — Trial and Error Inc
