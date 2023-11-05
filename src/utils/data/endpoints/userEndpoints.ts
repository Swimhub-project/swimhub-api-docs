/* 
  User Endpoints Data

  All the endpoints data displayed in the Users section of the docs. 
  Endpoints covered: 
    GET /user
*/
import { EndpointData } from '../../types/endpointType';

export const userEndpoints: EndpointData[] = [
  //get users
  {
    id: 'get_users',
    name: 'Get Users',
    method: 'GET',
    url: '/user',
    availableTo: 'admin',
    description: `<p>Gets all users that match the search criteria from the optional search parameters. 
    This request is subject to <a href="#pagination">page pagination</a>.</p><br/><p>When using the string search parameters, if you want your string to have a space
    in it (e.g. "Joe Bloggs"), you must replace the space with <strong>"%20"</strong>. 
    For example, "Joe Bloggs" should be written as "Joe%20Bloggs".</p>`,
    returns: `<p>Returns an array of UserObjectAdmin objects and pagination metadata, 
    with a 200 status code. Returns an error if something goes wrong.</p>`,
    searchParams: [
      {
        name: 'name',
        required: false,
        description: `<p>Searches by the "name" field of the user. Searches for all users that contain the string. <strong>Search is NOT case-sensitive.</strong></p>`,
        type: 'string',
      },
      {
        name: 'username',
        required: false,
        description: `<p>Searches by the "user_name" field of the user. Searches for all users that contain the string. <strong>Search is NOT case-sensitive.</strong></p>`,
        type: 'string',
      },
      {
        name: 'email',
        required: false,
        description: `<p>Searches by the "email" field of the user. Searches for all users that contain the string. <strong>Search is NOT case-sensitive.</strong></p>`,
        type: 'string',
      },
      {
        name: 'role',
        required: false,
        description: `<p>Searches by the "role" field of the user. Must be a direct match to a specific <a href="#userRole">UserRole</a></p>`,
        type: 'UserRole',
      },
      {
        name: 'status',
        required: false,
        description: `<p>Searches by the "status" field of the user. Must be a direct match to a specific <a href="#userStatus">UserStatus</a></p>`,
        type: 'UserStatus',
      },
      {
        name: 'teacher',
        required: false,
        description: `<p>Searches by the "is_teacher" field of the user. Must be either "true" or "false"</p>`,
        type: 'boolean',
      },
      {
        name: 'biopublic',
        required: false,
        description: `<p>Searches by the "is_bio_public" field of the user. Must be either "true" or "false"</p>`,
        type: 'boolean',
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
  'https://swimhub-production.up.railway.app/user?name=joe%20blo&page=1&limit=5'
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
              "id": "clo71e78x0000mc0olvreol2q",
              "name": "Joe Bloggs",
              "user_name": null,
              "email": "joe435@mail.com",
              "role": "user",
              "status": "active",
              "created_on": "2023-10-26T10:23:47.504Z",
              "updated_on": null,
              "is_teacher": false,
              "bio": "",
              "is_bio_public": false,
              "moderator_notes": null
          }
      ]
  }`,
  },
];
