/**
 * Attio API Client
 *
 * Authenticated HTTP client for Attio CRM API v2.
 * Handles client-side rate limiting, 429 retries, pagination and error formatting.
 */

import axios, { AxiosInstance } from 'axios';
import { AttioAuth } from '../auth/api-key.js';

/** Request shape accepted from LLM-generated sandbox code. */
export interface ApiRequestInput {
  method: string;
  path: string;
  /** Query string for GET. For other methods: the body, unless `body` is also given, then the query string. */
  params?: Record<string, unknown>;
  /** Request body. */
  body?: unknown;
  /** Query string for any method (e.g. `matching_attribute` on upsert endpoints). */
  query?: Record<string, unknown>;
}

export interface PaginateLimits {
  /** Stop after this many items. Default 1000, at most 10000. */
  maxItems?: number;
  /** Stop after this many requests. Default 50, at most 200. */
  maxPages?: number;
}

export interface PaginateResult {
  data: unknown[];
  pages: number;
  /** True when a limit stopped the walk before the last page. */
  hasMore: boolean;
}

/** Simplified request interface exposed to LLM-generated sandbox code. */
export interface ApiWrapper {
  request: (opts: ApiRequestInput) => Promise<unknown>;
  paginate: (opts: ApiRequestInput & PaginateLimits) => Promise<PaginateResult>;
}

export interface RequestOptions {
  method?: string;
  query?: Record<string, unknown>;
  body?: unknown;
  signal?: AbortSignal;
}

export interface ApiWrapperHooks {
  /** Called after each HTTP exchange the script caused (one per page when paginating). */
  onRequestDone?: (info: { method: string; path: string; ok: boolean }) => void;
}

/** Create the thin API facade injected into the sandbox as the `api` global. */
export function createApiWrapper(client: AttioClient, signal?: AbortSignal, hooks: ApiWrapperHooks = {}): ApiWrapper {
  const send = async (path: string, opts: RequestOptions): Promise<unknown> => {
    const info = { method: String(opts.method ?? 'GET').toUpperCase(), path: String(path) };
    try {
      const value = await client.request(path, { ...opts, signal });
      hooks.onRequestDone?.({ ...info, ok: true });
      return value;
    } catch (error) {
      hooks.onRequestDone?.({ ...info, ok: false });
      throw error;
    }
  };

  return {
    request: async (input) => {
      const { path, ...opts } = toRequestOptions(input);
      return send(path, opts);
    },
    paginate: async (input) => {
      const { path, ...opts } = toRequestOptions(input);
      return paginate(page => send(path, page), opts, input ?? {});
    }
  };
}

/** Maps the sandbox request shape (`params` doubles as query or body) to explicit query and body. */
function toRequestOptions(input: ApiRequestInput): RequestOptions & { path: string } {
  const { method, path, params, body, query } = input ?? ({} as ApiRequestInput);
  const verb = typeof method === 'string' ? method.toUpperCase() : 'GET';
  if (verb === 'GET') return { path, method: verb, query: mergeQuery(params, query) };
  const hasBody = body !== undefined;
  return { path, method: verb, query: hasBody ? mergeQuery(params, query) : query, body: hasBody ? body : params };
}

function mergeQuery(
  a?: Record<string, unknown>,
  b?: Record<string, unknown>
): Record<string, unknown> | undefined {
  if (!a && !b) return undefined;
  return { ...a, ...b };
}

/** Error thrown for non-2xx Attio responses. `status`, `code` and `type` are readable from sandbox code. */
export class AttioApiError extends Error {
  readonly status: number;
  readonly code?: string;
  readonly type?: string;
  readonly method: string;
  readonly path: string;

  constructor(init: { message: string; status: number; code?: string; type?: string; method: string; path: string }) {
    super(init.message);
    this.name = 'AttioApiError';
    this.status = init.status;
    this.code = init.code;
    this.type = init.type;
    this.method = init.method;
    this.path = init.path;
  }
}

const READ_LIMIT_PER_SECOND = 100;
const WRITE_LIMIT_PER_SECOND = 25;
const MAX_RATE_LIMIT_RETRIES = 3;
const DEFAULT_RETRY_MS = 1_000;
const MIN_RETRY_MS = 250;
const MAX_RETRY_MS = 30_000;
const ALLOWED_METHODS = new Set(['GET', 'POST', 'PUT', 'PATCH', 'DELETE']);
const DEFAULT_MAX_ITEMS = 1_000;
const MAX_MAX_ITEMS = 10_000;
const DEFAULT_MAX_PAGES = 50;
const MAX_MAX_PAGES = 200;

const STATUS_HINTS: Record<number, string> = {
  401: ' Check your ATTIO_API_KEY.',
  403: ' Check API key scopes.'
};

/**
 * Sliding one-second window. Safe for concurrent callers because check-and-record is synchronous.
 *
 * One limiter serves every tool call on the server. A caller whose signal aborts leaves
 * without taking a slot, so requests queued by a script that was stopped do not hold up
 * the calls that come after it.
 */
export class SlidingWindowLimiter {
  private stamps: number[] = [];

  constructor(private readonly limit: number, private readonly windowMs = 1_000) {}

  /** Resolves when a slot was taken, or early without one when `signal` aborts. */
  async acquire(signal?: AbortSignal): Promise<void> {
    for (;;) {
      if (signal?.aborted) return;
      const now = Date.now();
      while (this.stamps.length > 0 && now - this.stamps[0] >= this.windowMs) this.stamps.shift();
      if (this.stamps.length < this.limit) {
        this.stamps.push(now);
        return;
      }
      await sleep(this.windowMs - (now - this.stamps[0]), signal);
    }
  }
}

/**
 * Milliseconds to wait from a Retry-After header. Attio sends an HTTP date;
 * delta-seconds is also accepted. Result is clamped to a sane range.
 */
export function parseRetryAfter(header: unknown, now: number = Date.now()): number {
  if (typeof header !== 'string' || header.trim() === '') return DEFAULT_RETRY_MS;
  const value = header.trim();
  const ms = /^\d+(\.\d+)?$/.test(value) ? Number(value) * 1_000 : Date.parse(value) - now;
  if (Number.isNaN(ms)) return DEFAULT_RETRY_MS;
  return Math.min(Math.max(ms, MIN_RETRY_MS), MAX_RETRY_MS);
}

/** GET and POST query/search endpoints count against the read limit; everything else is a write. */
export function isReadRequest(method: string, path: string): boolean {
  if (method === 'GET') return true;
  return method === 'POST' && /\/(query|search)\/?$/.test(path.split('?')[0]);
}

/**
 * Rejects anything that is not a path on the Attio API host.
 *
 * The path comes from LLM-generated code. An absolute or protocol-relative URL here would
 * make the HTTP client send the request, with the Authorization header, to another host.
 */
export function assertApiPath(path: unknown): asserts path is string {
  if (typeof path === 'string' && /^\/(?![/\\])[^\s\\]*$/.test(path)) return;
  const shown = typeof path === 'string' ? `"${path.slice(0, 80)}"` : typeof path;
  throw new Error(`path must be an Attio API path starting with "/" (for example "/v2/objects"), got ${shown}`);
}

function assertMethod(method: string): void {
  if (!ALLOWED_METHODS.has(method)) {
    throw new Error(`Unsupported method "${method.slice(0, 20)}". Use GET, POST, PUT, PATCH or DELETE.`);
  }
}

/**
 * Walks a list endpoint and collects `data` from every page.
 *
 * Attio has two schemes and no endpoint offers both. Newer endpoints return
 * `pagination.next_cursor` and take `cursor`; they are followed until the cursor is null,
 * including through empty pages. The others take `limit` and `offset`, which is the only
 * way to page them. The scheme is read from the first response. An offset walk ends at
 * the first empty page, not at a short one: a server that caps `limit` below the value
 * asked for returns short pages that are not the last.
 *
 * Some list endpoints are not paged at all and ignore `offset` (for example `/v2/lists`).
 * Asking them for the next page returns the first one again, so a page identical to the
 * one before it ends the walk and is not counted.
 *
 * Paging values travel in the query string for GET and in the body otherwise.
 */
export async function paginate(
  requestPage: (opts: RequestOptions) => Promise<unknown>,
  opts: RequestOptions = {},
  limits: PaginateLimits = {}
): Promise<PaginateResult> {
  const method = (opts.method || 'GET').toUpperCase();
  const inQuery = method === 'GET';
  const maxItems = clampLimit(limits.maxItems, DEFAULT_MAX_ITEMS, MAX_MAX_ITEMS);
  const maxPages = clampLimit(limits.maxPages, DEFAULT_MAX_PAGES, MAX_MAX_PAGES);
  const base: Record<string, unknown> = { ...(inQuery ? opts.query : isRecord(opts.body) ? opts.body : undefined) };
  const data: unknown[] = [];
  let pages = 0;
  let cursor = typeof base.cursor === 'string' ? base.cursor : undefined;
  let offset = typeof base.offset === 'number' ? base.offset : undefined;
  let previousPage: string | undefined;

  for (;;) {
    const page = { ...base };
    if (cursor !== undefined) page.cursor = cursor;
    if (offset !== undefined) page.offset = offset;
    const response = await requestPage({
      method,
      signal: opts.signal,
      query: inQuery ? page : opts.query,
      body: inQuery ? undefined : page
    });
    pages += 1;

    const items = isRecord(response) ? response.data : undefined;
    if (!Array.isArray(items)) {
      throw new Error('paginate needs a list endpoint: the response has no data array. Use api.request for single objects.');
    }
    const pagination = isRecord(response) ? response.pagination : undefined;
    if (!isRecord(pagination) && items.length > 0) {
      const thisPage = JSON.stringify(items);
      if (thisPage === previousPage) return { data, pages: pages - 1, hasMore: false };
      previousPage = thisPage;
    }
    const room = maxItems - data.length;
    for (const item of items.slice(0, room)) data.push(item);

    let more: boolean;
    if (isRecord(pagination)) {
      const next = pagination.next_cursor;
      more = typeof next === 'string' && next !== '';
      if (more) cursor = next as string;
    } else {
      more = items.length > 0;
      offset = (offset ?? 0) + items.length;
    }

    if (items.length > room) return { data, pages, hasMore: true };
    if (!more) return { data, pages, hasMore: false };
    if (data.length >= maxItems || pages >= maxPages) return { data, pages, hasMore: true };
  }
}

function clampLimit(value: unknown, fallback: number, max: number): number {
  if (typeof value !== 'number' || !Number.isFinite(value) || value < 1) return fallback;
  return Math.min(Math.floor(value), max);
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

export type ConnectionCheck =
  | { connected: true; self: Record<string, unknown> }
  | { connected: false; error: string; status?: number };

export class AttioClient {
  private baseURL = 'https://api.attio.com';
  private auth: AttioAuth;
  private axiosInstance: AxiosInstance;
  private readLimiter = new SlidingWindowLimiter(READ_LIMIT_PER_SECOND);
  private writeLimiter = new SlidingWindowLimiter(WRITE_LIMIT_PER_SECOND);

  constructor(auth: AttioAuth) {
    this.auth = auth;

    this.axiosInstance = axios.create({
      baseURL: this.baseURL,
      timeout: 30000,
      // The API key must only ever go to baseURL: never let a request URL replace the
      // host, and never follow a redirect to another one.
      allowAbsoluteUrls: false,
      maxRedirects: 0,
      headers: {
        'Content-Type': 'application/json'
      }
    });

    this.axiosInstance.interceptors.request.use(
      async (config) => {
        config.headers.Authorization = this.auth.getAuthHeader();
        return config;
      },
      (error) => Promise.reject(error)
    );
  }

  async request<T = unknown>(endpoint: string, opts: RequestOptions = {}): Promise<T> {
    const method = String(opts.method || 'GET').toUpperCase();
    assertMethod(method);
    assertApiPath(endpoint);
    const limiter = isReadRequest(method, endpoint) ? this.readLimiter : this.writeLimiter;

    for (let attempt = 0; ; attempt++) {
      throwIfAborted(opts.signal, method, endpoint);
      await limiter.acquire(opts.signal);
      throwIfAborted(opts.signal, method, endpoint);
      try {
        const response = await this.axiosInstance.request<T>({
          method,
          url: endpoint,
          params: opts.query,
          data: method === 'GET' ? undefined : opts.body,
          signal: opts.signal
        });
        return response.data;
      } catch (error) {
        const isRateLimited = axios.isAxiosError(error) && error.response?.status === 429;
        if (!isRateLimited || attempt >= MAX_RATE_LIMIT_RETRIES) {
          throw toAttioError(error, method, endpoint);
        }
        await sleep(parseRetryAfter(error.response?.headers?.['retry-after']), opts.signal);
      }
    }
  }

  /** Collects every page of a list endpoint. See {@link paginate}. */
  async paginate(endpoint: string, opts: RequestOptions = {}, limits: PaginateLimits = {}): Promise<PaginateResult> {
    return paginate(page => this.request(endpoint, page), opts, limits);
  }

  /** Calls `/v2/self` and reports why the call failed when it does. */
  async checkConnection(): Promise<ConnectionCheck> {
    try {
      const self = await this.request<unknown>('/v2/self', { method: 'GET' });
      return { connected: true, self: isRecord(self) ? self : {} };
    } catch (error) {
      return {
        connected: false,
        error: error instanceof Error ? error.message : String(error),
        status: error instanceof AttioApiError ? error.status : undefined
      };
    }
  }

  async testConnection(): Promise<boolean> {
    return (await this.checkConnection()).connected;
  }
}

function throwIfAborted(signal: AbortSignal | undefined, method: string, path: string): void {
  if (signal?.aborted) {
    throw new Error(`${method} ${path} not sent: execution time limit reached or request cancelled`);
  }
}

function toAttioError(error: unknown, method: string, path: string): Error {
  if (axios.isCancel(error)) {
    return new Error(`${method} ${path} cancelled: execution time limit reached or request cancelled`);
  }
  if (!axios.isAxiosError(error)) {
    return error instanceof Error ? error : new Error(String(error));
  }
  if (!error.response) {
    return new Error(`Network error calling ${method} ${path}: ${error.message}`);
  }

  const status = error.response.status;
  const body = (error.response.data ?? {}) as Record<string, unknown>;
  const code = typeof body.code === 'string' ? body.code : undefined;
  const type = typeof body.type === 'string' ? body.type : undefined;
  const detail = typeof body.message === 'string' ? body.message : error.message;
  const label = code ? `${status} ${code}` : String(status);

  return new AttioApiError({
    message: `Attio API ${label} on ${method} ${path}: ${detail}${STATUS_HINTS[status] ?? ''}`,
    status,
    code,
    type,
    method,
    path
  });
}

/** Resolves after `ms`, or as soon as `signal` aborts so a stopped script does not sit in a retry wait. */
function sleep(ms: number, signal?: AbortSignal): Promise<void> {
  return new Promise(resolve => {
    if (signal?.aborted) {
      resolve();
      return;
    }
    const done = (): void => {
      clearTimeout(timer);
      signal?.removeEventListener('abort', done);
      resolve();
    };
    const timer = setTimeout(done, ms);
    signal?.addEventListener('abort', done, { once: true });
  });
}
