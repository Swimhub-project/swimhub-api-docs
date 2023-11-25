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
  {
    id: 'create_entry',
    name: 'Create Entry',
    method: 'POST',
    url: '/entry/:id',
    availableTo: 'user',
    description: `<p>Creates a new entry in the database linked to the logged-in user.</p>`,
    returns: `<p>Returns a copy of the created entry object, or an error if something went wrong.</p>`,
    bodyParams: [
      {
        name: 'userId',
        required: true,
        description: `<p>The userId of the logged in user creating the entry.</p>`,
        type: 'string',
      },
      {
        name: 'title',
        required: true,
        description: `<p>The title of the entry.</p>`,
        type: 'string',
      },
      {
        name: 'body',
        required: true,
        description: `<p>The body content of the entry.</p>`,
        type: 'string',
      },
      {
        name: 'type',
        required: true,
        description: `<p>The type of entry. Must be a valid <a href="#entryType">EntryType</a></p>`,
        type: 'EntryType',
      },
      {
        name: 'stroke',
        required: true,
        description: `<p>The swimming stroke of the entry. Must be a valid <a href="#entryStroke">EntryStroke</a></p>`,
        type: 'EntryStroke',
      },
      {
        name: 'stage',
        required: true,
        description: `<p>An array of stages that apply to the entry. Each item in the array must be a valid <a href="#entryStage">EntryStage</a></p>`,
        type: 'EntryStage[]',
      },
      {
        name: 'teachingPoints',
        required: true,
        description: `<p>An array of teaching points that apply to the entry.</p>`,
        type: 'string[]',
      },
    ],
    exampleReq: `const response = await fetch(
    'https://swimhub-production.up.railway.app/entry', 
    {
      headers: {
        "content-type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({
          "userId": "clo71e78x0000mc0olvreol2q",
          "title": "How to swim",
          "body": "The best way to swim is to not drown.",
          "type": "tip",
          "stroke": "general",
          "stage": ["stage_1", "stage_2"],
          "teachingPoints": ["don't drown!", "swim fast"]
      }),
    }
  );`,
    exampleRes: `{
  "id": "clpdg27iw0003w5eckvrjk3p6",
  "user_id": "clo71e78x0000mc0olvreol2q",
  "title": "How to swim",
  "body": "The best way to swim is to not drown.",
  "author": "anomalous",
  "type": "tip",
  "created_on": "2023-11-25T02:40:41.622Z",
  "updated_on": null,
  "status": "public",
  "teaching_points": [
      "don&#x27;t drown!",
      "swim fast"
  ],
  "stroke": "general",
  "stage": [
      "stage_1",
      "stage_2"
  ]
}`,
  },
  {
    id: 'delete_entry',
    name: 'Delete Entry',
    method: 'DELETE',
    url: '/entry',
    availableTo: 'admin',
    description: `<p>Deletes an entry from the database. This action is only available to admins. 
    Users only have the option to "soft-delete" an entry (see <a href="#update_entry">Update Entry</a> for more details</p>`,
    returns: `<p>Returns a copy of the deleted entry object, or an error if something went wrong.</p>`,
    urlParams: [
      {
        name: 'id',
        required: true,
        description: `<p>The Id of the entry to be deleted.</p>`,
        type: 'string',
      },
    ],
    exampleReq: `const response = await fetch(
  'https://swimhub-production.up.railway.app/entry/clpdg27iw0003w5eckvrjk3p6', 
  {
    headers: {
      "content-type": "application/json"
    },
    method: "DELETE",
  }
);`,
    exampleRes: `{
  "id": "clpdg27iw0003w5eckvrjk3p6",
  "user_id": "clo71e78x0000mc0olvreol2q",
  "title": "How to swim",
  "body": "The best way to swim is to not drown.",
  "author": "anomalous",
  "type": "tip",
  "created_on": "2023-11-25T02:40:41.622Z",
  "updated_on": null,
  "status": "public",
  "teaching_points": [
      "don&#x27;t drown!",
      "swim fast"
  ],
  "stroke": "general",
  "stage": [
      "stage_1",
      "stage_2"
  ]
} 
    `,
  },
];
