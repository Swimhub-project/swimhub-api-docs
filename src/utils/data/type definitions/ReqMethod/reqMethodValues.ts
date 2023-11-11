/* 
  Request Method Enum Values Data

  This data describes the possible values for the Request Method Enum displayed in the
  Type Definitions section. 
*/

import { EnumValues } from '../../../types/typeDefinitionType';

export const reqMethodValues: EnumValues[] = [
  {
    id: 'reqMethod_GET',
    name: 'GET',
    description: `<p>A GET request is used to fetch data from the API. 
    Most GET requests include optional url search parameters to fine-tune the search.</p>`,
  },
  {
    id: 'reqMethod_POST',
    name: 'POST',
    description: `<p>A POST request is used to create new items, as well as authentication actions like
    signing in a user. POST requests usually have body parameters that must be included in the request.</p>`,
  },
  {
    id: 'reqMethod_PATCH',
    name: 'PATCH',
    description: `<p>A PATCH request is used to update existing items. This is also the method used to "soft-delete" 
    items. PATCH requests usually have body parameters that much be included in the request.</p>`,
  },
  {
    id: 'reqMethod_DELETE',
    name: 'DELETE',
    description: `<p>A DELETE request is used to remove an existing item from the database. 
    This action is only available to admins. To "soft-delete" items, use a PATCH request.</p>`,
  },
];
