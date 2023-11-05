/* 
  Pagination Attributes Data

  This data describes the Pagination metadata object that is returned by paginated GET requests.
  This is displayed in the Pagination section.
*/

import { ErrorAttribute } from '../../types/errorType';

export const paginationAttributes: ErrorAttribute[] = [
  {
    name: 'currentPage',
    type: 'number',
    description: `<p>The current page of results.</p>`,
    required: true,
  },
  {
    name: 'totalPages',
    type: 'number',
    description: `<p>The total number of pages of results.</p>`,
    required: true,
  },
  {
    name: 'numberOfResults',
    type: 'number',
    description: `<p>The number of results returned from this request.</p>`,
    required: true,
  },
  {
    name: 'totalNumberOfResults',
    type: 'number',
    description: `<p>The total number of results that can be returned from this request.</p>`,
    required: true,
  },
];
