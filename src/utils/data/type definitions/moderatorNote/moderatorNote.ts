/* 
  Moderator Notes Object Data

  This data describes the Moderator Note object displayed in the
  Type Definitions section. 
*/

import { ObjectDefinition } from '../../../types/typeDefinitionType';
import { moderatorNoteValues } from './moderatorNoteValues';

export const moderatorNoteDefinition: ObjectDefinition = {
  id: 'moderatorNote',
  name: 'ModeratorNote',
  type: 'Object',
  description: `Moderator notes are added to user accounts by moderators and admins.
  They are stored in the database as JSON Objects`,
  values: moderatorNoteValues,
};
