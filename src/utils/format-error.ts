/**
 * Shared error-message extraction.
 *
 * Safely converts an unknown thrown value to a human-readable string.
 */

export function formatError(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}
