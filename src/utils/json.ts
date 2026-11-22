/**
 * Safe JSON serialization with fallback.
 *
 * Handles circular references and other stringify failures gracefully.
 */

export function safeJsonStringify(value: unknown): string {
  try {
    return JSON.stringify(value, null, 2);
  } catch {
    return String(value);
  }
}
