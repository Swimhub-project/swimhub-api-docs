import { SectionData } from '../types/sectionType';
import { authEndpoints } from './endpoints/authEndpoints';
import { sessionEndpoints } from './endpoints/sessionEndpoints';
import { userEndpoints } from './endpoints/userEndpoints';
import { errorAttributes } from './errors/errorAttributes';
import { errorValues } from './errors/errorValues';
import { sessionObj } from './objects/sessionObjects';
import { userObjAdmin, userObjStripped } from './objects/userObjects';
import { paginationAttributes } from './pagination/paginationAttributes';
import { userRoleDefinition } from './type definitions/UserRole/userRole';
import { userStatusDefinition } from './type definitions/UserStatus/userStatus';
import { moderatorNoteDefinition } from './type definitions/moderatorNote/moderatorNote';

export const sections: SectionData[] = [
  {
    id: 'introduction',
    name: 'Introduction',
    description: `<p>The Swimhub API is organised around REST,
    using resource-orientated URLs. It uses standard HTTP 
    response codes and verbs. All responses return as JSON objects. <br/><br/>
    The base url for all endpoints is: <br/><strong>https://swimhub-production.up.railway.app</strong></p>`,
  },
  {
    id: 'pagination',
    name: 'Pagination',
    description: `<p>All GET requests that can return multiple objects are subject
    to page pagination. The maximum number of items retrieved by a GET request
    is 10. If you wish to fetch fewer than 10 items, you can specify this in 
    the "limit" search parameter.</p> <br/>
    <p>All paginated requests will contain metadata to help you make follow-up
    requests. Use the "page" search parameter to get different sets of paginated
    results that meet the search criteria.</p>`,
    attributes: paginationAttributes,
  },
  {
    id: 'errors',
    name: 'Errors',
    description: `<p>The Swimhub API uses conventional HTTP response codes
    to indicate success or failure of an API request. In general: 
    Codes in the 2xx range indicate success. Codes in the 4xx range 
    indicate an error that failed given the information provided 
    (e.g., a required parameter was omitted, etc.). 
    Codes in the 5xx range indicate an error with the API servers 
    (these are rare).</p>`,
    attributes: errorAttributes,
    codes: errorValues,
  },
  {
    id: 'users',
    name: 'Users',
    description: `<p>Users represent individuals that are able to 
    interact with various endpoints based on their <a href='#userRole'>User Role</a> 
    and <a href='#userStatus'>User Status</a>.</p> 
    `,
    objects: [userObjAdmin, userObjStripped],
    endpoints: userEndpoints,
  },
  {
    id: 'auth',
    name: 'Auth',
    description: `<p>Auth endpoints are related to user authentication,
    including signing up, signing in, email verification and password resets.</p>`,
    endpoints: authEndpoints,
  },
  {
    id: 'sessions',
    name: 'Sessions',
    description: `<p>Sessions are stored on the server and are used to authenticate 
    users for protected endpoints. Admins can view sessions and delete specific 
    sessions, forcing the user to re-authenticate before accessing any protected routes.</p>`,
    objects: [sessionObj],
    endpoints: sessionEndpoints,
  },
  {
    id: 'types',
    name: 'Type Definitions',
    description: `<p>The API uses Typescript, so the following type definitions are required to be 
    used for certain object properties.</p>`,
    types: [userRoleDefinition, userStatusDefinition, moderatorNoteDefinition],
  },
];
