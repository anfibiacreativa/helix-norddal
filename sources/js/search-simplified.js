/*
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */
import instantsearch from 'instantsearch.js';
import algoliasearch from 'algoliasearch';
import { hits, configure } from 'instantsearch.js/es/widgets';

function getTemplate(templateName) {
  return document.querySelector(`#${templateName}-template`).innerHTML;
}

function formatDate(timestamp) {
  const d = new Date(timestamp * 1000);
  return `${d.getMonth() + 1}-${d.getDate()}-${d.getFullYear()}`;
}

function app(opts) {
  const author = document.getElementsByTagName('title')[0].text;
  const main = document.getElementsByTagName('main')[0];
  const elHits = document.createElement('div');
  elHits.setAttribute('id', 'related-posts');
  main.appendChild(elHits);

  const search = instantsearch({
    searchClient: algoliasearch(opts.appId, opts.apiKey),
    appId: opts.appId,
    apiKey: opts.apiKey,
    indexName: opts.indexName,
  });

  search.addWidgets([
    configure({
      hitsPerPage: 10,
      facetFilters: [
        `author:${author}`
      ]
    })
  ]);

  search.addWidget(
    hits({
      container: '#related-posts',
        templates: {
        item: getTemplate('hit'),
        empty: getTemplate('no-results'),
      },
      transformItems(items) {
        return items.map(item => ({
          ...item,
          date: formatDate(item.date),
        }));
      },
    })
  );
  search.start();
}

app({
  appId: 'A8PL9E4TZT',
  // Note from the Algolia Docu:
  // This is the public API key which can be safely used in your frontend code.This key is usable
  // for search queries and it's also able to list the indices you've got access to.
  apiKey: 'c5f99b37bfef18fd6ad1c440b5abd6c9',
  indexName: 'anfibiacreativa--helix-norddal--blog-posts',
});
