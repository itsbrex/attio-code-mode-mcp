/**
 * Context Loader for Attio Documentation
 *
 * Loads and searches Attio's llms.txt for domain knowledge.
 * Enables the LLM to self-educate on Attio concepts before writing code.
 */

import { readFileSync } from 'fs';
import { join } from 'path';
import { esmDirname } from '../utils/esm-dirname.js';

export interface DocSection {
  title: string;
  url: string;
  description?: string;
}

const DOCS_PATH = join(esmDirname(import.meta.url), 'llms.txt');

let cachedText: string | null = null;
let cachedDocs: DocSection[] | null = null;

/** The documentation index exactly as Attio publishes it. */
export function getDocsIndexText(): string {
  cachedText ??= readFileSync(DOCS_PATH, 'utf-8');
  return cachedText;
}

function loadDocs(): DocSection[] {
  if (cachedDocs) return cachedDocs;

  const docs: DocSection[] = [];
  for (const line of getDocsIndexText().split('\n')) {
    const match = line.match(/^- \[(.+?)\]\((.+?)\)(?::\s*(.+))?$/);
    if (match) {
      docs.push({
        title: match[1],
        url: match[2],
        description: match[3]?.trim()
      });
    }
  }

  cachedDocs = docs;
  return docs;
}

/**
 * Search documentation by topic.
 *
 * A page matches when it contains any search word. Results are ordered by how many
 * words they contain, with a word in the title counting more than one in the description.
 */
export function searchDocs(query: string): DocSection[] {
  // An empty term would match every page, so blank input and stray spaces must not produce one.
  const terms = [...new Set(query.toLowerCase().split(/\s+/).filter(Boolean))];
  if (terms.length === 0) return [];

  const scored: { doc: DocSection; score: number; index: number }[] = [];
  loadDocs().forEach((doc, index) => {
    const title = doc.title.toLowerCase();
    const description = (doc.description || '').toLowerCase();
    let score = 0;
    for (const term of terms) {
      if (title.includes(term)) score += 2;
      else if (description.includes(term)) score += 1;
    }
    if (score > 0) scored.push({ doc, score, index });
  });

  return scored
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .map(entry => entry.doc);
}

/**
 * Get all available documentation sections.
 */
export function getAllDocs(): DocSection[] {
  return loadDocs();
}

/** The category a documentation page belongs to, or undefined for pages outside the known areas. */
export function categoryOf(doc: DocSection): string | undefined {
  // REST docs live under /docs and /rest-api (optionally /endpoint-reference); other
  // top-level areas (sdk, sql, share, changelog) are categorised by their top-level segment.
  const pathMatch = doc.url.match(
    /docs\.attio\.com\/(docs|rest-api|sdk|sql|share|changelog)\/(?:endpoint-reference\/)?([^/]+?)(?:\.md)?(?:\/|$)/
  );
  if (!pathMatch) return undefined;
  const [, top, leaf] = pathMatch;
  const category = top === 'docs' || top === 'rest-api' ? leaf : top;
  return category.replace(/-/g, ' ');
}

/**
 * Get documentation categories (top-level groupings).
 */
export function getCategories(): string[] {
  const categories = new Set<string>();
  for (const doc of loadDocs()) {
    const category = categoryOf(doc);
    if (category) categories.add(category);
  }
  return Array.from(categories).sort();
}

/** Documentation pages in one category (as returned by {@link getCategories}). */
export function getDocsByCategory(category: string): DocSection[] {
  const wanted = category.trim().toLowerCase().replace(/-/g, ' ');
  return loadDocs().filter(doc => categoryOf(doc) === wanted);
}
