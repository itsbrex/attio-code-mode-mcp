/**
 * Attio API Key Auth
 *
 * Trivial: read from env, return Bearer header.
 * No JWT, no refresh, no caching needed.
 */

export class AttioAuth {
  private apiKey: string;

  constructor(apiKey: string) {
    if (!apiKey) throw new Error('ATTIO_API_KEY is required');
    this.apiKey = apiKey;
  }

  getAuthHeader(): string {
    return `Bearer ${this.apiKey}`;
  }
}
