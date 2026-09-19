# Agent Instructions

## Project

Attio Code Mode MCP server. Keep changes scoped to the TypeScript MCP implementation and documented tool behavior.

## Commands

- `npm install` installs dependencies.
- `npm run dev` runs the server in development mode.
- `npm run build` builds the TypeScript package.
- `npm run start` starts the built server.
- `npm run type-check` runs TypeScript checks.
- `npm run test:connection` checks MCP/Attio connectivity.

## Secrets

- `ATTIO_API_KEY` is required for live Attio calls.
- Never log, commit, or paste API keys, bearer tokens, record IDs from private payloads, or local MCP config containing secrets.
- Prefer mocked/static verification unless a task explicitly requires live Attio validation.

## Verification

- Run `npm run type-check` after TypeScript edits.
- Run `npm run build` before claiming package-level changes complete.
- Run `npm run test:connection` only when credentials and live connectivity are intentionally in scope.
