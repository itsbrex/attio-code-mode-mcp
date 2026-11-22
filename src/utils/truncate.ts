/**
 * Shared output truncation for Code Mode responses.
 *
 * Single source of truth for the max-output constant and truncation logic.
 */

export const MAX_OUTPUT_CHARS = 40_000;

export function truncate(text: string): string {
  if (text.length <= MAX_OUTPUT_CHARS) return text;
  return text.slice(0, MAX_OUTPUT_CHARS) +
    `\n\n[TRUNCATED — ${text.length} chars total, showing first ${MAX_OUTPUT_CHARS}]`;
}
