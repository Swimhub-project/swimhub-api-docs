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
