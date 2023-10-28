import { ErrorAttribute } from '../../types/errorType';

export const errorAttributes: ErrorAttribute[] = [
  {
    name: 'code',
    type: 'number',
    description: 'Error code indicating the type of error.',
    required: true,
  },
  {
    name: 'message',
    type: 'string',
    description: 'message providing more details on the error.',
    required: true,
  },
  {
    name: 'params',
    type: 'strings array',
    description: `If the error is parameter-specific, the array contains
    the list of affected parameters.`,
    required: false,
  },
];
