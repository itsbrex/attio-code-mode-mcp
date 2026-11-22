/**
 * What every server instance shares. Built once at startup; the server factory may run
 * more than once (one instance per connection), so nothing here is created per instance.
 */

import { createRequire } from 'node:module';
import type { AttioClient } from '../api/client.js';
import type { ResolvedSpec } from '../spec/loader.js';

export interface ServerDeps {
  client: AttioClient;
  spec: ResolvedSpec;
  debug?: boolean;
}

export const SERVER_NAME = 'attio-mcp';
export const { version: SERVER_VERSION } = createRequire(import.meta.url)('../../package.json') as { version: string };
