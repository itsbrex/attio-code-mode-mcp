# Tech Debt Register — attio-code-mode-mcp

**Date:** 2026-06-20  
**Scope:** Read-only static analysis of `attio-code-mode-mcp` repo  
**Codebase:** ~960 LOC across 8 TypeScript source files  
**Severity scale:** 5 = blocks releases, 4 = recurring incidents, 3 = friction, 2 = minor, 1 = cosmetic  
**Effort scale:** S = hours, M = half-day, L = 1-2 days, XL = 3+ days

---

## Ranked Debt Items

| ID | Category | Severity | Effort | Evidence | Remediation |
|----|----------|----------|--------|----------|-------------|
| TD-01 | coverage | 5 | XL | Zero test files. No test framework in devDependencies. No jest/vitest/mocha. `test-connection.ts` is a manual smoke script with no assertions. 0/8 source modules have tests. | Add vitest + @vitest/coverage-v8. Write unit tests for `client.ts`, `sandbox.ts`, `spec/loader.ts`, `mcp-server.ts`. Target 80% line coverage. |
| TD-02 | coverage | 5 | L | No CI pipeline. No `.github/workflows/`, no `.circleci/`, no `.gitlab-ci.yml`. Build, type-check, and test are never run automatically. | Add GitHub Actions workflow: install, type-check, test, build on push/PR. |
| TD-03 | smells | 4 | M | 22 `any` type annotations across 5 files. Concentrated in `spec/loader.ts` (8), `api/client.ts` (6), `mcp-server.ts` (5), `executor/sandbox.ts` (5). Defeats TypeScript's type safety. | Define interfaces for OpenAPI spec objects (`OpenAPIOperation`, `OpenAPISchema`, `ToolDefinition`), API responses (`AttioResponse<T>`), and sandbox results (`SandboxResult`). Replace `any` with typed alternatives. |
| TD-04 | smells | 4 | S | Offset-based pagination in `api/client.ts:74-87` (`let offset = 0; offset += limit`). Contradicts repo's own `.claude/rules/antipatterns.md`. Will degrade on large Attio tables. | Refactor `paginate()` to use cursor-based pagination with Attio's `next_cursor` response field. |
| TD-05 | complexity | 3 | M | `getToolDefinitions()` in `mcp-server.ts:81-202` is 121 lines. Single function returning inline array with embedded multi-line description strings. Hard to maintain or test individual tools. | Extract each tool definition into a separate constant or file under `src/tools/`. Import and assemble in `getToolDefinitions()`. |
| TD-06 | coverage | 3 | S | No linter or formatter. No eslint, prettier, or biome in config or deps. No `.editorconfig`. Code style relies entirely on developer discipline. | Add biome (or eslint + prettier). Configure in `biome.json`. Add `lint` script. Wire into CI and pre-commit. |
| TD-07 | duplication | 3 | S | Truncation logic duplicated verbatim: `sandbox.ts:102-105` (`truncate()`) and `mcp-server.ts:300-304` (`truncateText()`). Same `MAX_OUTPUT_CHARS = 40000`, same slice + template. | Extract to `src/utils/truncate.ts`. Import in both consumers. |
| TD-08 | duplication | 3 | S | API wrapper object duplicated in `mcp-server.ts:221-228` and `test-connection.ts:41-46`. Identical anonymous object wrapping `client.request` with method/params mapping. | Add a `createApiWrapper()` factory method on `AttioClient` or as a shared helper. |
| TD-09 | complexity | 3 | S | `loadSpec()` in `spec/loader.ts:30-57` has 4 levels of nesting (for > for > map > if). Parameter resolution logic is difficult to follow. | Extract inner loops into named helper functions (`resolveOperationParams`, `buildOperationSummary`). |
| TD-10 | dependencies | 2 | S | No `engines` field in `package.json`, no `.nvmrc`. `@types/node@^24.3.0` implies Node 24, but nothing enforces it. Contributors may use incompatible Node versions. | Add `"engines": { "node": ">=24.0.0" }` to `package.json` and create `.nvmrc` with `24`. |
| TD-11 | complexity | 2 | M | `api/client.ts` has ~18 branch points across `handleError()` (switch + 5 cases + nested if/else), `checkRateLimit()` (3 nested ifs), and `request()`. Highest cyclomatic complexity in the codebase. | Split `handleError()` into per-status-code handlers. Extract `checkRateLimit()` into a middleware or decorator. |
| TD-12 | duplication | 2 | S | `error instanceof Error ? error.message : String(error)` repeated 4 times in `index.ts:43,49,54,59`. | Extract to `src/utils/format-error.ts`. |
| TD-13 | duplication | 2 | S | ESM `__dirname` resolution (`fileURLToPath` + `dirname`) duplicated in `context/loader.ts:9-10` and `spec/loader.ts:9-10`. | Extract to `src/utils/esm-dirname.ts` or use a shared constant. |
| TD-14 | smells | 2 | S | `console.log = () => {}` in `index.ts:12` globally suppresses console.log. Fragile -- breaks debugging and any library that uses console.log legitimately. | Use a proper logger (e.g., pino, winston) with log-level control. Route MCP stdio transport separately from application logs via stderr. |
| TD-15 | duplication | 1 | S | `safeJsonStringify()` in `mcp-server.ts:292-297` and `pretty()` in `test-connection.ts:22-24` both wrap `JSON.stringify(v, null, 2)` with fallback. | Consolidate into `src/utils/json.ts`. |
| TD-16 | coverage | 1 | S | `tsconfig.json` excludes `**/*.test.ts` and `src/test-*.ts` from compilation, but no tests exist to exclude. The exclusion pattern is forward-looking but untested. | No action needed until tests are added. Verify pattern works with chosen test framework. |
| TD-17 | size | 1 | S | `src/spec/openapi.json` is 748 KB single-line JSON. Not minified intentionally, just unformatted. Hard to diff or review in PRs. | Pretty-print the file or add it to `.gitattributes` as binary/linguist-generated. |

---

## Summary

This is a compact (~960 LOC) MCP server with a lean 6-dependency footprint and no file exceeding 500 lines. The critical debt is infrastructure, not code: **zero automated tests and no CI pipeline** (TD-01, TD-02) mean every deploy is a manual trust exercise. The 22 untyped `any` annotations (TD-03) and the offset-pagination anti-pattern that contradicts the repo's own rules (TD-04) are the highest-impact code-level items. Duplication is modest but shows early copy-paste drift (TD-07, TD-08) that will compound as the codebase grows. Recommended first sprint: add vitest + CI (TD-01/02), then type the `any` hotspots (TD-03) and fix pagination (TD-04).
