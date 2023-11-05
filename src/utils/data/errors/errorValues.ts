/* 
  Error Values Data

  This data describes the different error codes returned by failed API requests.
  This is displayed in the Errors section.
*/

import { ErrorCode } from '../../types/errorType';

export const errorValues: ErrorCode[] = [
  {
    name: '200 - OK',
    description: `Everything worked as expected.`,
  },
  {
    name: '201 - Creation successful',
    description: `Item was created as expected.`,
  },
  {
    name: '400 - Bad Request',
    description: `The request was unacceptable, 
    often due to missing a required parameter.`,
  },
  {
    name: '401 - Unauthorized',
    description: `Session token is invalid or incorrect request headers.`,
  },
  {
    name: '403 - Forbidden',
    description: `User is trying to use an endpoint they don't have 
    permissions for.`,
  },
  {
    name: '409 - Conflict',
    description: `The server couldn't complete the action due to a 
    conflict, for example a user with the same email address already
    exists.`,
  },
  {
    name: '429 - Too Many Requests',
    description: `Too many requests hit the API too quickly. 
    We recommend an exponential backoff of your requests.`,
  },
  {
    name: '500 - Server Error',
    description: `Something went wrong on the server. (These are rare.)`,
  },
];
