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
├── api/client.ts         # HTTP client with rate limiting
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
- Code execution runs in Node.js `vm` sandbox — no filesystem, no network, no env access
- Only injected globals (`spec`, `api`) are available inside the sandbox
- Output truncated at 40,000 characters to prevent context bloat

## License

MIT — Trial and Error Inc
