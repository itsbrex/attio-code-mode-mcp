/**
 * Attio API Client
 *
 * Authenticated HTTP client for Attio CRM API v2.
 * Handles client-side rate limiting, 429 retries, and error formatting.
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

/** Simplified request interface exposed to LLM-generated sandbox code. */
export interface ApiWrapper {
  request: (opts: ApiRequestInput) => Promise<unknown>;
}

export interface RequestOptions {
  method?: string;
  query?: Record<string, unknown>;
  body?: unknown;
  signal?: AbortSignal;
}

/** Create the thin API facade injected into the sandbox as the `api` global. */
export function createApiWrapper(client: AttioClient, signal?: AbortSignal): ApiWrapper {
  return {
    request: async ({ method, path, params, body, query }) => {
      const verb = (method || 'GET').toUpperCase();
      if (verb === 'GET') {
        return client.request(path, { method: verb, query: mergeQuery(params, query), signal });
      }
      const hasBody = body !== undefined;
      return client.request(path, {
        method: verb,
        query: hasBody ? mergeQuery(params, query) : query,
        body: hasBody ? body : params,
        signal
      });
    }
  };
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

const STATUS_HINTS: Record<number, string> = {
  401: ' Check your ATTIO_API_KEY.',
  403: ' Check API key scopes.'
};

/** Sliding one-second window. Safe for concurrent callers because check-and-record is synchronous. */
export class SlidingWindowLimiter {
  private stamps: number[] = [];

  constructor(private readonly limit: number, private readonly windowMs = 1_000) {}

  async acquire(): Promise<void> {
    for (;;) {
      const now = Date.now();
      while (this.stamps.length > 0 && now - this.stamps[0] >= this.windowMs) this.stamps.shift();
      if (this.stamps.length < this.limit) {
        this.stamps.push(now);
        return;
      }
      await sleep(this.windowMs - (now - this.stamps[0]));
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
    const method = (opts.method || 'GET').toUpperCase();
    const limiter = isReadRequest(method, endpoint) ? this.readLimiter : this.writeLimiter;

    for (let attempt = 0; ; attempt++) {
      throwIfAborted(opts.signal, method, endpoint);
      await limiter.acquire();
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
        await sleep(parseRetryAfter(error.response?.headers?.['retry-after']));
      }
    }
  }

  async *paginate<T>(endpoint: string, params?: Record<string, unknown>): AsyncGenerator<T, void, unknown> {
    let offset = 0;
    const limit = typeof params?.limit === 'number' ? params.limit : 25;

    while (true) {
      const response = await this.request<{ data?: T[] }>(endpoint, {
        method: 'POST',
        body: { ...params, limit, offset }
      });
      const data = response.data || [];

      for (const item of data) {
        yield item;
      }

      if (data.length < limit) break;
      offset += limit;
    }
  }

  async getAll<T>(endpoint: string, params?: Record<string, unknown>): Promise<T[]> {
    const items: T[] = [];
    for await (const item of this.paginate<T>(endpoint, params)) {
      items.push(item);
    }
    return items;
  }

  async testConnection(): Promise<boolean> {
    try {
      await this.request('/v2/self', { method: 'GET' });
      return true;
    } catch {
      return false;
    }
  }
}

function throwIfAborted(signal: AbortSignal | undefined, method: string, path: string): void {
  if (signal?.aborted) {
    throw new Error(`${method} ${path} not sent: execution time limit reached`);
  }
}

function toAttioError(error: unknown, method: string, path: string): Error {
  if (axios.isCancel(error)) {
    return new Error(`${method} ${path} cancelled: execution time limit reached`);
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

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}
