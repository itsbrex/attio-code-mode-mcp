/**
 * Attio API Client
 *
 * Authenticated HTTP client for Attio CRM API v2.
 * Handles rate limiting, pagination, and error formatting.
 */

import axios, { AxiosInstance, AxiosError, AxiosRequestConfig } from 'axios';
import { AttioAuth } from '../auth/api-key.js';

export class AttioClient {
  private baseURL = 'https://api.attio.com';
  private auth: AttioAuth;
  private axiosInstance: AxiosInstance;
  private requestCount = 0;
  private requestResetTime: Date;

  constructor(auth: AttioAuth) {
    this.auth = auth;
    this.requestResetTime = new Date(Date.now() + 60 * 1000);

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

    this.axiosInstance.interceptors.response.use(
      (response) => response,
      (error) => this.handleError(error)
    );
  }

  async request<T = any>(endpoint: string, params?: any, options?: AxiosRequestConfig): Promise<T> {
    await this.checkRateLimit();

    try {
      const method = (options?.method || 'GET').toUpperCase();
      const config: AxiosRequestConfig = {
        method,
        url: endpoint,
        params: method === 'GET' ? params : undefined,
        data: method !== 'GET' ? (options?.data ?? params) : undefined,
        ...options,
      };

      // Don't override params/data from spread
      if (method === 'GET') {
        config.params = params;
        config.data = undefined;
      } else {
        config.data = options?.data ?? params;
        config.params = undefined;
      }

      const response = await this.axiosInstance.request<T>(config);
      this.requestCount++;
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async *paginate<T>(endpoint: string, params?: any): AsyncGenerator<T, void, unknown> {
    let offset = 0;
    const limit = params?.limit || 25;

    while (true) {
      const response: any = await this.request(endpoint, { ...params, limit, offset }, { method: 'POST' });
      const data = response.data || [];

      for (const item of data) {
        yield item;
      }

      if (data.length < limit) break;
      offset += limit;
    }
  }

  async getAll<T>(endpoint: string, params?: any): Promise<T[]> {
    const items: T[] = [];
    for await (const item of this.paginate<T>(endpoint, params)) {
      items.push(item);
    }
    return items;
  }

  private async checkRateLimit(): Promise<void> {
    if (new Date() > this.requestResetTime) {
      this.requestCount = 0;
      this.requestResetTime = new Date(Date.now() + 60 * 1000);
    }
    // Attio rate limit: ~150 req/10s. We'll be conservative.
    if (this.requestCount >= 140) {
      const waitTime = this.requestResetTime.getTime() - Date.now();
      if (waitTime > 0) {
        await this.sleep(waitTime);
        this.requestCount = 0;
        this.requestResetTime = new Date(Date.now() + 60 * 1000);
      }
    }
  }

  private async handleError(error: AxiosError): Promise<never> {
    if (error.response) {
      const status = error.response.status;
      const data = error.response.data as any;
      const message = data?.message || data?.error || error.message;

      switch (status) {
        case 401:
          throw new Error(`Authentication failed: ${message}. Check your ATTIO_API_KEY.`);
        case 403:
          throw new Error(`Permission denied: ${message}. Check API key scopes.`);
        case 404:
          throw new Error(`Not found: ${message}`);
        case 429:
          const retryAfter = error.response.headers['retry-after'];
          const waitTime = retryAfter ? parseInt(retryAfter) * 1000 : 10000;
          await this.sleep(waitTime);
          throw new Error('Rate limited — please retry');
        default:
          throw new Error(`Attio API Error (${status}): ${message}`);
      }
    } else if (error.request) {
      throw new Error('Network error: No response from Attio API');
    } else {
      throw new Error(`Request error: ${error.message}`);
    }
  }

  private sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async testConnection(): Promise<boolean> {
    try {
      await this.request('/v2/self', undefined, { method: 'GET' });
      return true;
    } catch {
      return false;
    }
  }
}
