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
    description: `User is trying to use an endpoint they don't have
    access to.`,
  },
  {
    name: '200 - OK',
    description: `Everything worked as expected.`,
  },
  {
    name: '429 - Too Many Requests',
    description: `Too many requests hit the API too quickly. 
    We recommend an exponential backoff of your requests.`,
  },
  {
    name: '500, 502, 503, 504 - Server Errors	',
    description: `Something went wrong on the server. (These are rare.)`,
  },
];
