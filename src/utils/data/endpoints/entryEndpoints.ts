/* 
  Entry Endpoints Data

  All the endpoints data displayed in the Entries section of the docs. 
  Endpoints covered: 
    GET /entry
*/

import { EndpointData } from '../../types/endpointType';

export const entryEndpoints: EndpointData[] = [
  {
    id: 'get_entries',
    name: 'Get Entries',
    method: 'GET',
    url: '/entry',
    availableTo: 'everyone',
    description: `<p>Gets all entries that match the search criteria from the optional search parameters. 
    This request is subject to <a href="#pagination">page pagination</a>.</p><br/>
    <p>When using the string search parameters, if you want your string to have a space
    in it (e.g. "butterfly arms"), you must replace the space with <strong>"%20"</strong>. 
    For example, "butterfly arms" should be written as "butterfly%20arms".</p>`,
    returns: `<p>Returns an array of Entry objects and pagination metadata, 
    with a 200 status code. Returns an error if something goes wrong.</p>`,
    searchParams: [
      {
        name: 'text',
        required: false,
        description: `<p>Searches for string in the "title", "body" and "teaching_points" fields. 
        Returns all entries that have string in any of those fields.</p>`,
        type: 'string',
      },
      {
        name: 'author',
        required: false,
        description: `<p>Searches by the "author" field. Searches for all entries that contain the string</p>`,
        type: 'string',
      },
      {
        name: 'type',
        required: false,
        description: `<p>Searches by the "type" field of the entry. Must be a direct match to a specific <a href="#entryType">EntryType</a></p>`,
        type: 'EntryType',
      },
      {
        name: 'stroke',
        required: false,
        description: `<p>Searches by the "stroke" field of the entry. Must be a direct match to a specific <a href="#entryStroke">EntryStroke</a></p>`,
        type: 'EntryStroke',
      },
      {
        name: 'stage',
        required: false,
        description: `<p>Searches by the "stage" field of the entry. Must be a direct match to a specific <a href="#entryStage">EntryStage</a></p>`,
        type: 'EntryStage',
      },
      {
        name: 'status',
        required: false,
        description: `<p>Searches by the "status" field of the entry. Must be a direct match to a specific <a href="#contentStatus">ContentStatus</a></p>`,
        type: 'ContentStatus',
      },
      {
        name: 'page',
        required: false,
        description: `<p>Sets the page number of paginated results. If no page is given, defaults to the first page of results.</p>`,
        type: 'number',
      },
      {
        name: 'limit',
        required: false,
        description: `<p>Sets the total number of retrieved results <strong>(maximum 10 per fetch)</strong>. If no limit is given, defaults to 10 results.</p>`,
        type: 'number',
      },
    ],
    exampleReq: `const response = await fetch(
      'https://swimhub-production.up.railway.app/entry?text=butterfly%20arms&page=1&limit=5'
    );
    
    const data = await response.json();
    console.log(data);`,
    exampleRes: `{
      "currentPage": 1,
      "totalPages": 1,
      "numberOfResults": 1,
      "totalNumberOfResults": 1,
      "users": [
          {
            "id": "clonx2fs60000w5rwh9pkqhgl",
            "user_id": "clomi8jd90025w5xgbej4czxm",
            "title": "butterfly arms",
            "body": "Acquiro eum velum maxime.",
            "author": "Nelson_Schiller",
            "type": "exercise",
            "created_on": "2023-02-25T01:18:03.000Z",
            "updated_on": "2023-11-06T20:37:39.000Z",
            "status": "public",
            "teaching_points": [
              "whoever switch shin",
              "after defiantly untangle",
              "impossible truly even"
            ],
            "stroke": "butterfly",
            "stage": [
              "stage_7",
              "stage_3"
            ]
          } 
      ]
  }`,
  },
];
