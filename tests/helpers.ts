import { AxiosError, type AxiosResponse, type InternalAxiosRequestConfig } from 'axios';
import { AttioAuth } from '../src/auth/api-key.js';
import { AttioClient } from '../src/api/client.js';

export type Reply = { status: number; data?: unknown; headers?: Record<string, string> };
export type Responder = Reply | ((config: InternalAxiosRequestConfig) => Reply | Promise<Reply>);

/**
 * Client whose HTTP layer is replaced by a scripted adapter. No network.
 * Replies are used in order; a function reply can inspect the request or wait.
 */
export function offlineClient(replies: Responder[] = []) {
  const client = new AttioClient(new AttioAuth('offline-fixture-key'));
  const seen: InternalAxiosRequestConfig[] = [];
  client['axiosInstance'].defaults.adapter = async (config: InternalAxiosRequestConfig) => {
    seen.push(config);
    const next = replies.shift() ?? { status: 200, data: {} };
    const reply = typeof next === 'function' ? await next(config) : next;
    const response = {
      data: reply.data ?? {},
      status: reply.status,
      statusText: String(reply.status),
      headers: reply.headers ?? {},
      config
    } as AxiosResponse;
    if (reply.status >= 400) {
      throw new AxiosError(`Request failed with status code ${reply.status}`, 'ERR_BAD_REQUEST', config, null, response);
    }
    return response;
  };
  return { client, seen };
}
