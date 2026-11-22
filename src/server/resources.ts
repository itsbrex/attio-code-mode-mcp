/**
 * Read-only resources: the documentation index and an operation index of the bundled spec.
 *
 * Tools are picked by the model; resources are picked by the person (or host), for
 * example to attach the list of Notes endpoints to a conversation. Everything here comes
 * from the bundled public documents, so no read calls Attio.
 */

import { ResourceTemplate, type CacheHint, type McpServer } from '@modelcontextprotocol/server';

import { getCategories, getDocsByCategory, getDocsIndexText } from '../context/loader.js';
import type { ResolvedOperation, ResolvedSpec } from '../spec/loader.js';
import type { ServerDeps } from './deps.js';

/** The bundled documents only change with a release, and are the same for every caller. */
const STATIC_CONTENT: CacheHint = { ttlMs: 60 * 60 * 1000, cacheScope: 'public' };

interface OperationSummary {
  method: string;
  path: string;
  summary: string;
  tags: string[];
  scopes: string[];
  deprecated?: true;
}

export const slug = (name: string): string => name.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export function listOperations(spec: ResolvedSpec): OperationSummary[] {
  const operations: OperationSummary[] = [];
  for (const [path, methods] of Object.entries(spec.paths)) {
    for (const [method, operation] of Object.entries(methods)) {
      operations.push({
        method: method.toUpperCase(),
        path,
        summary: operation.summary,
        tags: operation.tags,
        scopes: scopesOf(operation),
        ...(operation.deprecated ? { deprecated: true as const } : {})
      });
    }
  }
  return operations;
}

/** Tag names of the spec, in first-seen order, keyed by their URL-safe slug. */
export function tagsBySlug(spec: ResolvedSpec): Map<string, string> {
  const tags = new Map<string, string>();
  for (const methods of Object.values(spec.paths)) {
    for (const operation of Object.values(methods)) {
      for (const tag of operation.tags) if (!tags.has(slug(tag))) tags.set(slug(tag), tag);
    }
  }
  return tags;
}

function scopesOf(operation: ResolvedOperation): string[] {
  const scopes = new Set<string>();
  for (const requirement of operation.security) {
    if (!requirement || typeof requirement !== 'object') continue;
    for (const list of Object.values(requirement)) {
      if (Array.isArray(list)) for (const scope of list) if (typeof scope === 'string') scopes.add(scope);
    }
  }
  return [...scopes];
}

const startsWith = (values: Iterable<string>, typed: string): string[] => {
  const prefix = slug(typed);
  return [...values].filter(value => value.startsWith(prefix));
};

export function registerResources(server: McpServer, deps: ServerDeps): void {
  const { spec } = deps;
  const operations = listOperations(spec);
  const tags = tagsBySlug(spec);
  const categories = new Map(getCategories().map(category => [slug(category), category]));

  server.registerResource(
    'docs-index',
    'attio://docs/index',
    {
      title: 'Attio documentation index',
      description: 'Every Attio documentation page with its URL and a one-line description (llms.txt).',
      mimeType: 'text/markdown',
      cacheHint: STATIC_CONTENT
    },
    async uri => ({ contents: [{ uri: uri.href, mimeType: 'text/markdown', text: getDocsIndexText() }] })
  );

  server.registerResource(
    'api-operations',
    'attio://openapi/operations',
    {
      title: 'Attio API operations',
      description: `All ${spec.operationCount} operations of the Attio REST API v${spec.info.version}: method, path, summary, tags and required scopes.`,
      mimeType: 'application/json',
      cacheHint: STATIC_CONTENT
    },
    async uri => ({
      contents: [{
        uri: uri.href,
        mimeType: 'application/json',
        text: JSON.stringify({ apiVersion: spec.info.version, count: operations.length, operations })
      }]
    })
  );

  server.registerResource(
    'api-operations-by-tag',
    new ResourceTemplate('attio://openapi/tags/{tag}', {
      list: async () => ({
        resources: [...tags].map(([tagSlug, tag]) => ({
          uri: `attio://openapi/tags/${tagSlug}`,
          name: `api-${tagSlug}`,
          title: `Attio API: ${tag}`,
          mimeType: 'application/json'
        }))
      }),
      complete: { tag: value => startsWith(tags.keys(), value) }
    }),
    {
      title: 'Attio API operations for one tag',
      description: 'Operations in one area of the API (for example notes, records, lists), with parameters and request body fields.',
      mimeType: 'application/json',
      cacheHint: STATIC_CONTENT
    },
    async (uri, { tag }) => {
      const tagSlug = slug(String(tag));
      const name = tags.get(tagSlug);
      if (!name) throw new Error(`Unknown tag "${tag}". Known tags: ${[...tags.keys()].join(', ')}`);
      const detail = Object.entries(spec.paths).flatMap(([path, methods]) =>
        Object.entries(methods)
          .filter(([, operation]) => operation.tags.includes(name))
          .map(([method, operation]) => ({
            method: method.toUpperCase(),
            path,
            summary: operation.summary,
            description: operation.description,
            scopes: scopesOf(operation),
            parameters: operation.parameters.map(parameter => ({
              name: parameter.name,
              in: parameter.in,
              required: Boolean(parameter.required),
              description: parameter.description || undefined
            })),
            bodyFields: Object.keys(operation.requestBody?.schema?.properties ?? {})
          })));
      return {
        contents: [{
          uri: uri.href,
          mimeType: 'application/json',
          text: JSON.stringify({ tag: name, count: detail.length, operations: detail })
        }]
      };
    }
  );

  server.registerResource(
    'docs-by-category',
    new ResourceTemplate('attio://docs/categories/{category}', {
      list: undefined,
      complete: { category: value => startsWith(categories.keys(), value) }
    }),
    {
      title: 'Attio documentation for one category',
      description: 'Documentation pages in one category (for example webhooks, lists, records).',
      mimeType: 'application/json',
      cacheHint: STATIC_CONTENT
    },
    async (uri, { category }) => {
      const name = categories.get(slug(String(category)));
      if (!name) throw new Error(`Unknown category "${category}". Known categories: ${[...categories.keys()].join(', ')}`);
      const docs = getDocsByCategory(name);
      return {
        contents: [{
          uri: uri.href,
          mimeType: 'application/json',
          text: JSON.stringify({ category: name, count: docs.length, docs })
        }]
      };
    }
  );
}
