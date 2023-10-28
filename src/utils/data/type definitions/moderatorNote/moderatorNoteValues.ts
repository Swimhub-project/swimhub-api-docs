import { ObjectProperties } from '../../../types/typeDefinitionType';

export const moderatorNoteValues: ObjectProperties[] = [
  {
    id: 'id',
    name: 'id',
    type: 'string',
    description: `<p>Unique ID assigned by database.</p>`,
    required: true,
  },
  {
    id: 'content',
    name: 'content',
    type: 'string',
    description: `<p>Main content body of note.</p>`,
    required: true,
  },
  {
    id: 'created_on',
    name: 'created_on',
    type: 'DateTime',
    description: `<p>Date the note was created.</p>`,
    required: true,
  },
  {
    id: 'created_by_id',
    name: 'created_by_id',
    type: 'string',
    description: `<p>User Id of the moderator or admin who created the note.</p>`,
    required: true,
  },
];
