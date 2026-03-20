#!/usr/bin/env node
/**
 * Attio MCP Server — Code Mode
 * 130+ endpoints. 3 tools. Fixed token cost.
 */

import dotenv from 'dotenv';
import { AttioMCPServer } from './server/mcp-server.js';
import { ServerConfig } from './types/config.js';

// Suppress ALL console output for MCP server (only JSON-RPC on stdout)
console.log = () => {};
console.error = (...args: unknown[]) => { process.stderr.write(args.map(String).join(' ') + '\n'); };
console.warn = () => {};
console.info = () => {};
console.debug = () => {};

dotenv.config();

async function main() {
  const apiKey = process.env.ATTIO_API_KEY;
  const debug = process.env.DEBUG === 'true';

  if (!apiKey) {
    process.stderr.write('Missing required environment variable: ATTIO_API_KEY\n');
    process.stderr.write('Set it in .env or pass via environment.\n');
    process.exit(1);
  }

  const config: ServerConfig = { apiKey, debug };

  if (debug) {
    process.stderr.write(`Debug: API key starts with ${apiKey.substring(0, 8)}***\n`);
  }

  try {
    const server = new AttioMCPServer(config);
    await server.start();

    process.on('SIGINT', () => process.exit(0));
    process.on('SIGTERM', () => process.exit(0));
  } catch (error) {
    process.stderr.write(`Failed to start server: ${error instanceof Error ? error.message : String(error)}\n`);
    process.exit(1);
  }
}

process.on('uncaughtException', (error) => {
  process.stderr.write(`Uncaught exception: ${error instanceof Error ? error.message : String(error)}\n`);
  process.exit(1);
});

process.on('unhandledRejection', (reason) => {
  process.stderr.write(`Unhandled rejection: ${reason}\n`);
  process.exit(1);
});

main().catch((error) => {
  process.stderr.write(`Fatal error: ${error instanceof Error ? error.message : String(error)}\n`);
  process.exit(1);
});
