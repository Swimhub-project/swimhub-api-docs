/* 
  Content Status Enum Values Data

  This data describes the possible values for the Content Status Enum displayed in the
  Type Definitions section. 
*/

import { EnumValues } from '../../../types/typeDefinitionType';

export const contentStatusValues: EnumValues[] = [
  {
    id: 'contentStatus_public',
    name: 'public',
    description: `<p>Public content can be seen by everyone, including non-logged in users.</p>`,
  },
  {
    id: 'contentStatus_private',
    name: 'private',
    description: `<p>Private content can only be seen by moderators, admins and the user that created the content.</p>`,
  },
  {
    id: 'contentStatus_deleted',
    name: 'deleted',
    description: `<p>Deleted content doesn't show up in any searches, and is only viewable by admins.</p>`,
  },
];
