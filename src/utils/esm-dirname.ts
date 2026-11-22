/**
 * ESM __dirname helper.
 *
 * Replaces the two-line `fileURLToPath` + `dirname` boilerplate
 * that every ESM module needs when resolving sibling files.
 */

import { fileURLToPath } from 'url';
import { dirname } from 'path';

export function esmDirname(importMetaUrl: string): string {
  return dirname(fileURLToPath(importMetaUrl));
}
