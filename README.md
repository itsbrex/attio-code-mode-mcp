# attio-mcp

Code Mode MCP server for [Attio CRM](https://attio.com). 90+ endpoints through 3 tools.

> Built by [Trial and Error Inc](https://trialanderror.ai). Inspired by the [Code Mode pattern](https://blog.cloudflare.com/mcp-code-mode) from Cloudflare.

## Why Code Mode?

| | Traditional MCP | Code Mode |
|---|---|---|
| Tools | 35+ (one per operation) | 3 (search, execute, context) |
| Token cost | ~8,000 tokens for tool defs | ~800 tokens |
| New endpoints | Update every tool definition | Zero changes |
| Maintenance | Per-tool mapping | Just update the spec |

The LLM writes JavaScript to query the API spec and call endpoints directly. No tool-per-endpoint mapping. No bloat.

## Quick Start

```bash
git clone https://github.com/TrialAndErrorAI/attio-mcp.git
cd attio-mcp
npm install
npm run build
```

Create `.env`:
```
ATTIO_API_KEY=your_api_key_here
```

Get your API key from [Attio Settings > Developers > API Keys](https://app.attio.com/settings/developers).

### Claude Code

Add to your project's `.mcp.json`:
```json
{
  "mcpServers": {
    "attio": {
      "command": "node",
      "args": ["/path/to/attio-mcp/dist/index.js"],
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
      "args": ["/path/to/attio-mcp/dist/index.js"],
      "env": {
        "ATTIO_API_KEY": "your_api_key_here"
      }
    }
  }
}
```

## OpenAPI sync and generation

The MCP server bundles Attio's public [OpenAPI document](https://api.attio.com/openapi/api) and [documentation index](https://docs.attio.com/llms.txt). Refresh both, regenerate TypeScript, and rebuild with:

```bash
npm run spec:sync
```

`npm run spec:update` remains an alias. Sync fetches both documents, validates the spec with pinned `openapi-sync` 6.4.2, generates into a temporary directory, and type-checks generated code before publishing source changes. Failed fetches or generation preserve the previous snapshots and generated files. Restart the MCP server in your client after syncing to load the rebuilt package.

```bash
npm run spec:validate        # Validate the committed OpenAPI document and config
npm run spec:generate        # Regenerate from committed input without network access
npm run spec:check           # Compare staged generation with source; fail on drift
npm run spec:upstream-check  # Compare public upstream documents without changing source
npm run type-check
npm test
```

[`openapi.sync.json`](openapi.sync.json) generates `src/generated/attio/endpoints.ts`, `types/index.ts`, and `types/shared.ts`. These compile with the package; runtime requests continue through the existing authenticated API client. Runtime validator generation is disabled. Custom code is preserved inside the marked `CUSTOM CODE` blocks.

Attio uses valid OpenAPI schema names containing hyphens, which this generator version cannot emit as TypeScript identifiers. The sync wrapper normalizes schema names and references in its temporary generation input, rejects name collisions, and leaves the bundled upstream document unchanged. It normalizes generated whitespace outside custom-code blocks, including extra blank lines inserted after their footers, making regeneration deterministic. `.openapi-sync/` contains ignored staging/cache data.

CI runs validation, generated drift checks, type-checking, build, and offline tests. Scheduled and manual runs also check public upstream drift; they require no Attio credentials and do not publish updates.

### Email metadata access

The spec verified on 2026-09-21 contains 53 paths and 94 operations, including `GET /v2/emails`. Required scopes are available through `search`:

```javascript
return spec.paths['/v2/emails'].get.security;
// [{ oauth2: ['email:read', 'record_permission:read', 'object_configuration:read'] }]
```

Refreshing a spec cannot grant API permissions. Attio's [email metadata endpoint](https://docs.attio.com/rest-api/endpoint-reference/emails/list-emails) is an alpha feature enabled per workspace and per app; contact `support@attio.com` when access is unavailable. It returns metadata only, requires a supported record/participant/domain filter, and must be paginated until `next_cursor` is null, including empty pages. A `403` for `email:read` requires an access/scope change on Attio's side.

## Tools

### `search(code)`

Write JavaScript to explore the Attio API specification. Find endpoints, check parameters, discover schemas.

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

The client paces requests to Attio's documented limits (100 reads/s, 25 writes/s), retries `429` responses after `Retry-After` up to three times, and throws errors with `status`, `code` and `type` properties. A single execution is stopped after 120 seconds; requests it has not sent yet are cancelled.

### `context(topic)`

Look up Attio documentation by topic. Self-educate on the domain model before writing code.

```
context("lists")     → docs about lists, entries, stages
context("attributes") → attribute types (select, status, text, etc.)
context("categories") → all top-level doc groupings
context("all")       → full documentation index
```

### `test_connection()`

Verify your API key works and see server stats.

## Architecture

```
src/
├── auth/api-key.ts       # API key auth (Bearer token from env)
├── api/client.ts         # HTTP client: rate limiting, 429 retry, typed errors
├── spec/
│   ├── openapi.json      # Attio's OpenAPI spec (embedded)
│   └── loader.ts         # Pre-resolves $refs for agent traversal
├── context/
│   ├── llms.txt          # Attio's documentation index
│   └── loader.ts         # Topic-based doc search
├── executor/sandbox.ts   # Node.js vm sandbox (proven pattern)
├── server/mcp-server.ts  # 4 tools: search, execute, context, test_connection
├── types/config.ts       # ServerConfig interface
├── test-connection.ts    # Manual integration smoke test
└── index.ts              # Entry point
```

## Security

- API key is injected via environment variables, never exposed to LLM-generated code
- Code execution runs in a Node.js `vm` context that holds no host objects: `spec` is copied in as JSON and `api.request` is bridged so only strings cross the boundary, which blocks the constructor-chain escapes to `process`, env vars and the filesystem
- `vm` is not a hard security boundary; treat CRM content that reaches the model as untrusted input
- Only injected globals (`spec`, `api`) are available inside the sandbox
- Output truncated at 40,000 characters to prevent context bloat

## License

MIT — Trial and Error Inc
