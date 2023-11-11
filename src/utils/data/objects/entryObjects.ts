/* 
  Entry Object Data

  This data describes the entry object displayed in the Entries section. Includes
  attributes and example entry object. 
*/

import { ObjectData } from '../../types/objectType';

export const entryObj: ObjectData = {
  id: 'entry_object',
  name: 'Entry Object',
  description: `<p>Entry object returned from all Entry endpoints. </p>`,
  attributes: [
    {
      name: 'id',
      description: `<p>Unique Entry ID automatically assigned from database.</p>`,
      type: 'string',
      required: true,
    },
    {
      name: 'user_id',
      description: `<p>Id of user that created the entry.</p>`,
      type: 'string',
      required: true,
    },
    {
      name: 'title',
      description: `<p>Title of the entry.</p>`,
      type: 'string',
      required: true,
    },
    {
      name: 'body',
      description: `<p>Main body content of the entry.</p>`,
      type: 'string',
      required: true,
    },
    {
      name: 'author',
      description: `<p>user_name of the user that created the entry. If the user hasn't selected a user_name, this property defaults to "anomalous_user".</p>`,
      type: 'string',
      required: true,
    },
    {
      name: 'type',
      description: `<p>type of entry. For type definition, 
      see <a href='#entryType'>EntryType</a></p>`,
      type: 'EntryType',
      required: true,
    },
    {
      name: 'teaching_points',
      description: `<p>An array of teaching points for the entry.</p>`,
      type: 'string array',
      required: true,
    },
    {
      name: 'stroke',
      description: `<p>The stroke that applies to this entry. For type definition, 
      see <a href='#entryStroke'>EntryStroke</a></p>`,
      type: 'EntryStroke',
      required: true,
    },
    {
      name: 'stage',
      description: `<p>An array of stages that apply to this entry. For type definition, 
      see <a href='#entryStage'>EntryStage</a></p>`,
      type: 'EntryStage',
      required: true,
    },
    {
      name: 'status',
      description: `<p>Assigned content status. For type definition, 
      see <a href='#contentStatus'>ContentStatus</a></p>`,
      type: 'ContentStatus',
      required: true,
    },
    {
      name: 'created_on',
      description: `<p>Date the entry was created.</p>`,
      type: 'DateTime',
      required: true,
    },
    {
      name: 'updated_on',
      description: `<p>Date the entry was last updated.</p>`,
      type: 'DateTime',
      required: false,
    },
  ],
  exampleObj: `{
    "id": "clonx2fs60000w5rwh9pkqhgl",
    "user_id": "clomi8jd90025w5xgbej4czxm",
    "title": "butterfly arms",
    "body": "Acquiro eum velum maxime.",
    "author": "Nelson_Schiller",
    "type": "exercise",
    "created_on": "2023-02-25T01:18:03.000Z",
    "updated_on": "2023-11-06T20:37:39.000Z",
    "status": "public",
    "teaching_points": [
      "whoever switch shin",
      "after defiantly untangle",
      "impossible truly even"
    ],
    "stroke": "butterfly",
    "stage": [
      "stage_7",
      "stage_3"
    ]
  }`,
};
