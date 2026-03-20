/**
 * Context Loader for Attio Documentation
 *
 * Loads and searches Attio's llms.txt for domain knowledge.
 * Enables the LLM to self-educate on Attio concepts before writing code.
 */

import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

interface DocSection {
  title: string;
  url: string;
  description?: string;
}

let cachedDocs: DocSection[] | null = null;

function loadDocs(): DocSection[] {
  if (cachedDocs) return cachedDocs;

  const filePath = join(__dirname, 'llms.txt');
  const content = readFileSync(filePath, 'utf-8');

  const docs: DocSection[] = [];
  for (const line of content.split('\n')) {
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
 * Search documentation by topic keyword.
 * Returns matching doc entries with titles and URLs.
 */
export function searchDocs(query: string): DocSection[] {
  const docs = loadDocs();
  const terms = query.toLowerCase().split(/\s+/);

  return docs.filter(doc => {
    const searchable = `${doc.title} ${doc.description || ''}`.toLowerCase();
    return terms.some(term => searchable.includes(term));
  });
}

/**
 * Get all available documentation sections.
 */
export function getAllDocs(): DocSection[] {
  return loadDocs();
}

/**
 * Get documentation categories (top-level groupings).
 */
export function getCategories(): string[] {
  const docs = loadDocs();
  const categories = new Set<string>();

  for (const doc of docs) {
    // Extract category from URL path
    const pathMatch = doc.url.match(/docs\.attio\.com\/(?:docs|rest-api)\/(?:endpoint-reference\/)?([^/]+)/);
    if (pathMatch) {
      categories.add(pathMatch[1].replace(/-/g, ' '));
    }
  }

  return Array.from(categories).sort();
}
