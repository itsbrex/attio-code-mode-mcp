/**
 * Prompts: ready-made starting points a person picks by name (slash commands in most hosts).
 * Each one walks the model through the Code Mode workflow: read the spec, then call the API.
 */

import { completable, type McpServer } from '@modelcontextprotocol/server';
import * as z from 'zod';

import type { ServerDeps } from './deps.js';
import { slug, tagsBySlug } from './resources.js';

/** Objects every workspace can have. Custom object slugs are accepted too; they just do not autocomplete. */
const STANDARD_OBJECTS = ['people', 'companies', 'deals', 'users', 'workspaces'];

const user = (text: string) => ({
  messages: [{ role: 'user' as const, content: { type: 'text' as const, text } }]
});

export function registerPrompts(server: McpServer, deps: ServerDeps): void {
  const tags = tagsBySlug(deps.spec);
  const objectArgument = () =>
    completable(
      z.string().describe('Object slug: people, companies, deals, users, workspaces, or a custom object'),
      value => STANDARD_OBJECTS.filter(object => object.startsWith(value.trim().toLowerCase()))
    );

  server.registerPrompt(
    'explore-api',
    {
      title: 'Explore the Attio API',
      description: 'Find the Attio endpoints for a topic and explain how to call them',
      argsSchema: z.object({
        topic: completable(
          z.string().describe('API area or keyword, for example notes, records, lists, webhooks'),
          value => [...tags.keys()].filter(tag => tag.startsWith(slug(value)))
        )
      })
    },
    ({ topic }) => user(
      `Show me how the Attio API handles "${topic}".\n\n` +
      '1. Use the `search` tool to find every endpoint whose path, tags or summary relates to the topic.\n' +
      '2. For each one give the method, path, what it does, the required parameters and body fields, and the scopes it needs (`security`).\n' +
      '3. Use the `context` tool if a concept needs explaining.\n' +
      '4. Finish with one short `execute` example for the most common read. Do not run any write.'
    )
  );

  server.registerPrompt(
    'find-record',
    {
      title: 'Find a record in Attio',
      description: 'Look up a person, company, deal or other record by name, email or domain',
      argsSchema: z.object({
        object: objectArgument(),
        query: z.string().describe('Name, email address, domain or other text to look for')
      })
    },
    ({ object, query }) => user(
      `Find the Attio ${object} record matching "${query}".\n\n` +
      '1. Use `search` to check the request shape of `POST /v2/objects/records/search` and of `POST /v2/objects/{object}/records/query`.\n' +
      `2. Use \`execute\` to look in the "${object}" object. Prefer an exact filter (email address, domain) when the text looks like one; otherwise search by name.\n` +
      '3. Return at most five matches with the record ID, name and the few attributes that tell them apart.\n' +
      'This is read-only. Do not change anything.'
    )
  );

  server.registerPrompt(
    'add-note',
    {
      title: 'Add a note to a record',
      description: 'Find a record and attach a note to it',
      argsSchema: z.object({
        object: objectArgument(),
        record: z.string().describe('Record name, email address, domain or record ID'),
        note: z.string().describe('The note text')
      })
    },
    ({ object, record, note }) => user(
      `Add a note to the Attio ${object} record "${record}".\n\n` +
      '1. Use `search` to read the request body of `POST /v2/notes`.\n' +
      `2. Use \`execute\` to find the record in the "${object}" object. If several records match, stop and ask me which one.\n` +
      '3. Create the note on that record and reply with the note ID and the record it is attached to.\n\n' +
      `Note text:\n${note}`
    )
  );

  server.registerPrompt(
    'workspace-schema',
    {
      title: 'Map this Attio workspace',
      description: 'Summarize the objects, attributes and lists configured in the connected workspace'
    },
    () => user(
      'Map the data model of this Attio workspace.\n\n' +
      '1. Use `test_connection` to confirm which workspace the API key belongs to.\n' +
      '2. In one `execute` script: list the objects (`GET /v2/objects`), the attributes of each object ' +
      '(`GET /v2/objects/{object}/attributes`) and the lists (`GET /v2/lists`). Return only slugs, titles, types and whether an attribute is required or unique.\n' +
      '3. Present one compact table per object and one for the lists. Point out custom objects and custom attributes.\n' +
      'This is read-only. Do not change anything.'
    )
  );
}
