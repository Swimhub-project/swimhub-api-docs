/* 
  Error Attributes Data

  This data describes the Error object that is returned by failed API requests.
  This is displayed in the Errors section.
*/

import { ErrorAttribute } from '../../types/errorType';

export const errorAttributes: ErrorAttribute[] = [
  {
    name: 'code',
    type: 'number',
    description: '<p>Error code indicating the type of error.</p>',
    required: true,
  },
  {
    name: 'message',
    type: 'string',
    description: '<p>Message providing more details on the error.</p>',
    required: true,
  },
  {
    name: 'params',
    type: 'array of strings',
    description: `<p>If the error is parameter-specific, the array contains
    the list of affected parameters.</p>`,
    required: false,
  },
];
