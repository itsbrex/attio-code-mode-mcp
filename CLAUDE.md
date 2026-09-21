# CLAUDE.md

Project context for AI-assisted development.

## Project

**attio-mcp** — A "Code Mode" MCP server for [Attio CRM](https://attio.com). Instead of exposing one tool per API endpoint (35+), it exposes 4 tools and lets the LLM write JavaScript to query the OpenAPI spec and call the API directly. This keeps tool-definition token cost fixed (~800 tokens) regardless of how many endpoints Attio adds.

- **Author:** Trial and Error Inc (upstream). Fork maintained by itsbrex.
- **License:** MIT
- **Runtime:** Node.js (ES2022 modules, TypeScript strict mode)
- **Upstream:** `https://github.com/TrialAndErrorAI/attio-mcp.git`
- **Fork:** `https://github.com/itsbrex/attio-code-mode-mcp.git`

## Setup

```bash
npm install
cp .env.example .env   # then add your ATTIO_API_KEY
npm run build
npm start
```

Requires `ATTIO_API_KEY` env var. Get one from [Attio Settings > Developers > API Keys](https://app.attio.com/settings/developers). Optional `DEBUG=true` for verbose stderr logging.

## Scripts (package.json)

| Script | Command | Purpose |
|--------|---------|---------|
| `dev` | `tsx watch src/index.ts` | Dev server with hot reload |
| `build` | `tsc` + copy spec/context assets to `dist/` | Production build |
| `start` | `node dist/index.js` | Run built server |
| `type-check` | `tsc --noEmit` | Type checking only |
| `test` | `node --import tsx --test tests/*.test.ts` | Offline regression and MCP stdio tests |
| `spec:sync` / `spec:update` | Staged public fetch, generation, and build | Refresh OpenAPI and documentation assets |
| `spec:validate` | `openapi-sync validate --json` | Validate committed spec/config |
| `spec:generate` / `spec:check` | Staged generation or drift comparison | Keep generated TypeScript in sync |
| `spec:upstream-check` | Public fetch and comparison | Detect upstream drift without source edits |
| `test:connection` | `tsx src/test-connection.ts` | Manual integration smoke test (no assertions) |

## Architecture

```
src/
├── index.ts                  # Entry point. Suppresses console.*, loads dotenv, starts server.
├── server/mcp-server.ts      # MCP server. Registers 4 tools: search, execute, context, test_connection.
├── api/client.ts             # Axios HTTP client with rate-limit handling and pagination.
├── auth/api-key.ts           # Bearer token auth from ATTIO_API_KEY env var.
├── executor/sandbox.ts       # Node.js vm sandbox for LLM-generated code execution.
├── spec/
│   ├── openapi.json          # Attio's full OpenAPI spec (~1 MB, embedded; refresh with `npm run spec:update`).
│   └── loader.ts             # Parses spec, resolves $refs, counts endpoints/schemas.
├── context/
│   ├── llms.txt              # Attio documentation index (titles + URLs).
│   └── loader.ts             # Topic-based doc search against llms.txt.
├── types/config.ts           # ServerConfig interface (apiKey, debug).
└── test-connection.ts        # Manual integration smoke test (no assertions).
```

### MCP Tools

1. **search(code)** — Write JS to explore the OpenAPI spec object (`spec` global). Find endpoints, check params, discover schemas.
2. **execute(code)** — Write JS to call the Attio API (`api` global). Auth is injected automatically. Supports chained calls.
3. **context(topic)** — Look up Attio documentation by keyword. Use `"all"` for full index, `"categories"` for groupings.
4. **test_connection()** — Verify API key and show server stats. Diagnostic utility.

### Key Design Decisions

- **Code Mode pattern:** LLM writes JS executed in a vm sandbox, rather than one MCP tool per endpoint. Inspired by [Cloudflare's Code Mode](https://blog.cloudflare.com/mcp-code-mode).
- **Console suppression:** `index.ts` replaces all `console.*` methods because MCP uses stdout for JSON-RPC. Application logs go to stderr.
- **Sandbox isolation:** LLM-generated code runs in Node.js `vm` with no filesystem, network, or env access. Only `spec` and `api` globals are injected.
- **Output truncation:** Results capped at 40,000 characters (`MAX_TOOL_OUTPUT_CHARS`) to prevent context bloat.
- **Embedded spec:** The full OpenAPI JSON is bundled in `src/spec/openapi.json` and copied to `dist/` at build time. No runtime fetching. Source of truth is `https://api.attio.com/openapi/api` (docs index: `https://docs.attio.com/llms.txt`); `npm run spec:sync` pulls both. Verified current 2026-09-21 (53 paths, 94 operations, 22 schemas, including emails). Search exposes per-operation security requirements; refreshing the spec does not grant scopes.
- **Generated surface:** Pinned `openapi-sync` 6.4.2 generates types/endpoints under `src/generated/attio/`. The wrapper stages generation, normalizes hyphenated schema identifiers only in the generation copy, checks TypeScript, preserves custom-code blocks, and normalizes footer whitespace for deterministic drift checks. See `openapi.sync.json` and `scripts/spec-sync.mjs`. Generated runtime validators are disabled.

## Dependencies

| Package | Purpose |
|---------|---------|
| `@modelcontextprotocol/sdk` | MCP server framework (stdio transport) |
| `axios` | HTTP client for Attio API calls |
| `dotenv` | Load `.env` file |
| `tsx` (dev) | TypeScript execution for dev mode |
| `typescript` (dev) | Compiler |
| `@types/node` (dev) | Node.js type definitions |

## Known Issues

- `test:connection` remains a manual live smoke script; `npm test` provides offline regression coverage and `.github/workflows/spec-check.yml` runs verification in CI.
- **22 `any` annotations** across 5 files defeat TypeScript strict mode.
- **Offset pagination** in `api/client.ts` contradicts `.claude/rules/antipatterns.md`. Should use cursor-based.
- **Truncation logic duplicated** between `sandbox.ts` and `mcp-server.ts`.

See `debt/tech-debt-register-20260620.md` for the full ranked register.

## Conventions

- ESM throughout (`"type": "module"` in package.json).
- TypeScript strict mode. Target ES2022.
- Anti-patterns to avoid are listed in `.claude/rules/antipatterns.md`.
- The build step copies `src/spec/openapi.json` and `src/context/llms.txt` into `dist/` — don't forget these if changing the build.
