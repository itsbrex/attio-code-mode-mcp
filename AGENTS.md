# Agent Instructions

## Project

Attio Code Mode MCP server. Keep changes scoped to the TypeScript MCP implementation and documented tool behavior.

## Commands

- `npm install` installs dependencies.
- `npm run dev` runs the server in development mode.
- `npm run build` builds the TypeScript package.
- `npm run start` starts the built server.
- `npm run type-check` runs TypeScript checks.
- `npm test` runs offline regression and MCP stdio tests.
- `npm run spec:sync` refreshes public Attio OpenAPI/docs, regenerates TypeScript, and rebuilds.
- `npm run spec:validate` validates committed OpenAPI/config without writing.
- `npm run spec:generate` regenerates TypeScript from committed input.
- `npm run spec:check` detects generated drift without changing source files.
- `npm run spec:upstream-check` detects public upstream drift without changing source files.
- `npm run test:connection` checks MCP/Attio connectivity.

## Secrets

- `ATTIO_API_KEY` is required for live Attio calls.
- Never log, commit, or paste API keys, bearer tokens, record IDs from private payloads, or local MCP config containing secrets.
- Prefer mocked/static verification unless a task explicitly requires live Attio validation.

## Verification

- Run `npm run type-check` after TypeScript edits.
- Run `npm run build` before claiming package-level changes complete.
- Run `npm test` and `npm run spec:check` after changes to spec loading or generation.
- Keep `src/spec/openapi.json` as the upstream document. Schema-name normalization belongs only in the temporary generation input in `scripts/spec-sync.mjs`.
- Run `npm run test:connection` only when credentials and live connectivity are intentionally in scope.
- After changing `src/executor/sandbox.ts` or `src/api/client.ts`, run `npm test`. Do not relax a sandbox layer (import scan, `codeGeneration`, child process flags, empty environment) or the path check without a test showing the attack it stops is still stopped.
- The MCP SDK is v2 (`@modelcontextprotocol/server`). Check its type definitions in `node_modules` before using an API from the older `@modelcontextprotocol/sdk` package.
- Push and open pull requests on the fork only (`itsbrex/attio-code-mode-mcp`); pass `-R itsbrex/attio-code-mode-mcp` to `gh`.
