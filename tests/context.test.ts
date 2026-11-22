import assert from 'node:assert/strict';
import { test } from 'node:test';
import {
  categoryOf,
  getAllDocs,
  getCategories,
  getDocsByCategory,
  getDocsIndexText,
  searchDocs
} from '../src/context/loader.js';

test('every bullet of the documentation index is parsed', () => {
  const bullets = getDocsIndexText().split('\n').filter(line => line.startsWith('- ['));
  assert.ok(bullets.length > 300);
  assert.equal(getAllDocs().length, bullets.length);
  assert.ok(getAllDocs().every(doc => doc.title && doc.url));
});

test('blank input and stray spaces never match every page', () => {
  const total = getAllDocs().length;
  assert.deepEqual(searchDocs(''), []);
  assert.deepEqual(searchDocs('   \t '), []);
  const plain = searchDocs('lists');
  assert.ok(plain.length > 0 && plain.length < total / 2);
  assert.deepEqual(searchDocs(' lists'), plain);
  assert.deepEqual(searchDocs('lists  '), plain);
  assert.deepEqual(searchDocs('LISTS lists'), plain);
});

test('pages matching more search words, and matching in the title, come first', () => {
  const results = searchDocs('list entries');
  const score = (doc: { title: string; description?: string }) =>
    ['list', 'entries'].reduce((sum, term) =>
      sum + (doc.title.toLowerCase().includes(term) ? 2 : (doc.description ?? '').toLowerCase().includes(term) ? 1 : 0), 0);
  const scores = results.map(score);
  assert.ok(scores.every(value => value > 0));
  assert.deepEqual(scores, [...scores].sort((a, b) => b - a));
  assert.equal(scores[0], 4);
  // Any word may match: a two-word search is a superset of each single-word search.
  assert.ok(results.length >= searchDocs('entries').length);
});

test('categories group pages by their place in the docs site', () => {
  const categories = getCategories();
  assert.ok(categories.includes('webhooks') && categories.includes('call recordings'));
  assert.deepEqual(categories, [...categories].sort());
  for (const name of ['webhooks', 'call recordings', 'call-recordings', ' Webhooks ']) {
    const docs = getDocsByCategory(name);
    assert.ok(docs.length > 0, name);
    assert.ok(docs.every(doc => categoryOf(doc) === name.trim().toLowerCase().replace(/-/g, ' ')), name);
  }
  assert.deepEqual(getDocsByCategory('no such category'), []);
  assert.equal(categoryOf({ title: 'x', url: 'https://api.attio.com/openapi/api' }), undefined);
});
