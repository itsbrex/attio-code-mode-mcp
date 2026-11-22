/**
 * OpenAPI Spec Loader for Code Mode
 *
 * Loads Attio's OpenAPI spec into the compact shape agent-generated code searches.
 * Top-level `$ref`s are resolved one level deep. Nested `$ref` strings stay as written and
 * point into `components.schemas`, which is included so they can be followed.
 */

import { readFileSync } from 'fs';
import { join } from 'path';
import { esmDirname } from '../utils/esm-dirname.js';

export interface ResolvedSpec {
  info: { title: string; version: string };
  paths: Record<string, Record<string, ResolvedOperation>>;
  components: { schemas: Record<string, any> };
  pathCount: number;
  operationCount: number;
  schemaCount: number;
}

export interface ResolvedOperation {
  summary: string;
  description: string;
  operationId: string;
  tags: string[];
  deprecated?: true;
  security: unknown[];
  parameters: any[];
  requestBody?: any;
  responses: Record<string, any>;
}

const HTTP_METHODS = new Set(['get', 'post', 'put', 'patch', 'delete', 'options', 'head', 'trace']);

export function loadSpec(): ResolvedSpec {
  const rawPath = join(esmDirname(import.meta.url), 'openapi.json');
  const raw = JSON.parse(readFileSync(rawPath, 'utf-8'));

  const schemas: Record<string, any> = raw.components?.schemas || {};
  const paths: ResolvedSpec['paths'] = {};
  let operationCount = 0;

  for (const [path, methods] of Object.entries(raw.paths as Record<string, any>)) {
    paths[path] = {};
    for (const [method, operation] of Object.entries(methods as Record<string, any>)) {
      if (!HTTP_METHODS.has(method)) continue;
      operationCount++;
      paths[path][method] = summarizeOperation(operation, raw, schemas);
    }
  }

  return {
    info: raw.info,
    paths,
    components: { schemas },
    pathCount: Object.keys(paths).length,
    operationCount,
    schemaCount: Object.keys(schemas).length
  };
}

function summarizeOperation(operation: any, raw: any, schemas: Record<string, any>): ResolvedOperation {
  return {
    summary: operation.summary || '',
    description: operation.description || '',
    operationId: operation.operationId || '',
    tags: operation.tags || [],
    ...(operation.deprecated ? { deprecated: true as const } : {}),
    security: operation.security ?? raw.security ?? [],
    parameters: (operation.parameters || []).map((p: any) => {
      if (p.$ref) {
        return resolveRef(p.$ref, raw);
      }
      return {
        name: p.name,
        in: p.in,
        required: p.required || false,
        description: p.description || '',
        schema: resolveSchemaShallow(p.schema, schemas)
      };
    }),
    requestBody: operation.requestBody
      ? summarizeRequestBody(operation.requestBody, schemas)
      : undefined,
    responses: summarizeResponses(operation.responses || {}, schemas)
  };
}

function resolveRef(ref: string, root: any): any {
  const parts = ref.replace('#/', '').split('/');
  let current = root;
  for (const part of parts) {
    current = current?.[part];
    if (!current) return { $ref: ref, _unresolved: true };
  }
  return current;
}

function resolveSchemaShallow(schema: any, schemas: Record<string, any>): any {
  if (!schema) return undefined;

  if (schema.$ref) {
    const name = schema.$ref.split('/').pop();
    const resolved = schemas[name!];
    if (!resolved) return { type: 'unknown', ref: name };
    return {
      type: resolved.type || 'object',
      properties: resolved.properties
        ? Object.fromEntries(
            Object.entries(resolved.properties).map(([k, v]: [string, any]) => [
              k,
              { type: v.type || (v.$ref ? 'object' : 'unknown'), description: v.description || '' }
            ])
          )
        : undefined,
      enum: resolved.enum,
      description: resolved.description
    };
  }

  if (schema.type === 'array' && schema.items) {
    return {
      type: 'array',
      items: resolveSchemaShallow(schema.items, schemas)
    };
  }

  return schema;
}

function summarizeRequestBody(body: any, schemas: Record<string, any>): any {
  // JSON when offered; otherwise the first media type (the file upload is multipart only).
  const content = body.content || {};
  const contentType = 'application/json' in content ? 'application/json' : Object.keys(content)[0];
  const schema = contentType ? content[contentType]?.schema : undefined;
  if (!schema) return { description: body.description || '' };

  return {
    required: body.required || false,
    ...(contentType === 'application/json' ? {} : { contentType }),
    schema: resolveSchemaShallow(schema, schemas)
  };
}

function summarizeResponses(responses: Record<string, any>, schemas: Record<string, any>): any {
  const result: Record<string, any> = {};
  for (const [status, resp] of Object.entries(responses)) {
    const content = (resp as any).content?.['application/json'];
    result[status] = {
      description: (resp as any).description || '',
      schema: content?.schema ? resolveSchemaShallow(content.schema, schemas) : undefined
    };
  }
  return result;
}
