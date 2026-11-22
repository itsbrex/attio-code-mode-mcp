#!/usr/bin/env node
/**
 * Attio MCP Server — Code Mode
 * 90+ operations. 4 tools. Fixed token cost.
 */

import { join } from 'node:path';
import dotenv from 'dotenv';
import { serveStdio } from '@modelcontextprotocol/server/stdio';

import { AttioClient } from './api/client.js';
import { AttioAuth } from './auth/api-key.js';
import { createAttioServer } from './server/mcp-server.js';
import { loadSpec } from './spec/loader.js';
import { esmDirname } from './utils/esm-dirname.js';
import { formatError } from './utils/format-error.js';

// stdout carries only JSON-RPC. Silence every console method (not just log: dir, table,
// trace and the rest write to stdout too), and send errors to stderr.
for (const [name, value] of Object.entries(console)) {
  if (typeof value === 'function' && name !== 'Console') (console as unknown as Record<string, unknown>)[name] = () => {};
}
console.error = (...args: unknown[]) => { process.stderr.write(args.map(String).join(' ') + '\n'); };

// A host starts this server from its own working directory, so also read the .env that
// sits next to the package. Values already in the environment win; then the first file.
dotenv.config({ path: ['.env', join(esmDirname(import.meta.url), '..', '.env')], quiet: true });

function main(): void {
  const apiKey = process.env.ATTIO_API_KEY;
  const debug = process.env.DEBUG === 'true';

  if (!apiKey) {
    process.stderr.write('Missing required environment variable: ATTIO_API_KEY\n');
    process.stderr.write('Set it in .env or pass via environment.\n');
    process.exit(1);
  }

  // A secret reference that was never resolved (for example a 1Password op:// value read
  // straight from .env) is not a key. Say so here instead of failing every call with a 401.
  if (/^[a-z][a-z0-9+.-]*:\/\//i.test(apiKey)) {
    process.stderr.write('ATTIO_API_KEY holds a secret reference, not an API key.\n');
    process.stderr.write('Start the server through the tool that resolves it (for example: op run --env-file=.env -- node dist/index.js).\n');
    process.exit(1);
  }

  if (debug) {
    process.stderr.write(`Debug: API key starts with ${apiKey.substring(0, 8)}***\n`);
  }

  const deps = { client: new AttioClient(new AttioAuth(apiKey)), spec: loadSpec(), debug };
  const handle = serveStdio(() => createAttioServer(deps), {
    onerror: error => {
      if (debug) process.stderr.write(`Transport error: ${formatError(error)}\n`);
    }
  });

  const shutdown = (): void => {
    void handle.close().finally(() => process.exit(0));
  };
  process.on('SIGINT', shutdown);
  process.on('SIGTERM', shutdown);
}

process.on('uncaughtException', (error) => {
  process.stderr.write(`Uncaught exception: ${formatError(error)}\n`);
  process.exit(1);
});

process.on('unhandledRejection', (reason) => {
  process.stderr.write(`Unhandled rejection: ${formatError(reason)}\n`);
  process.exit(1);
});

try {
  main();
} catch (error) {
  process.stderr.write(`Failed to start server: ${formatError(error)}\n`);
  process.exit(1);
}
