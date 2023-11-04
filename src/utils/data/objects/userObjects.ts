import { ObjectData } from '../../types/objectType';

export const userObjAdmin: ObjectData = {
  id: 'user_object_admin',
  name: 'User object admin',
  description: `<p>User object accessible to moderators and admins. 
  Will be returned from endpoints that are only accessible to moderators
  and admins. For the stripped down User object, see 
  <a href='#user_object_stripped'>User object stripped</a>.</p>`,
  attributes: [
    {
      name: 'id',
      description:
        '<p>Unique User ID automatically assigned from database.</p>',
      type: 'string',
      required: true,
    },
    {
      name: 'name',
      description: `<p>Name provided by the user when creating the account. 
      This is not publicly visible.</p>`,
      type: 'string',
      required: true,
    },
    {
      name: 'user_name',
      description: '<p>publicly viewable user name.</p>',
      type: 'string',
      required: false,
    },
    {
      name: 'email',
      description:
        '<p>Unique email provided by the user when creating the account.</p>',
      type: 'string',
      required: true,
    },
    {
      name: 'role',
      description: `<p>Assigned user role. For type definition, 
      see <a href='#userRole'>UserRole</a></p>`,
      type: 'UserRole',
      required: true,
    },
    {
      name: 'status',
      description: `<p>Assigned user status. For type definition, 
      see <a href='#userStatus'>UserStatus</a></p>`,
      type: 'UserStatus',
      required: true,
    },
    {
      name: 'created_on',
      description: `<p>Date the account was created.</p>`,
      type: 'DateTime',
      required: true,
    },
    {
      name: 'updated_on',
      description: `<p>Date the account was last updated.</p>`,
      type: 'DateTime',
      required: false,
    },
    {
      name: 'is_teacher',
      description: `<p>Boolean value. Users with Teacher status have additional privaledges.</p>`,
      type: 'boolean',
      required: true,
    },
    {
      name: 'bio',
      description: `<p>Bio that displays on user's profile if made public.</p>`,
      type: 'string',
      required: true,
    },
    {
      name: 'is_bio_public',
      description: `<p>Boolean value. If true, user bio is visible to all users.</p>`,
      type: 'boolean',
      required: true,
    },
    {
      name: 'moderator_notes',
      description: `<p>Notes created by moderators and admins relating to user. For type definition, see <a href="#moderatorNote">ModeratorNote</a></p>`,
      type: 'ModeratorNote',
      required: false,
    },
  ],
  exampleObj: `{
  "id": "clo71e78x0000mc0olvreol2q",
  "name": "joe bloggs",
  "user_name": joeschmoo,
  "email": joe435@mail.com,
  "role": user,
  "status": active,
  "created_on": 2023-10-26 11:23:47,
  "updated_on": 2023-10-27 8:20:40,
  "is_teacher": false,
  "bio": "hi, my name is joe and I'm a swimming assistant.",
  "is_bio_public": true,
  "moderator_notes": [],
}`,
};

export const userObjStripped: ObjectData = {
  id: 'user_object_stripped',
  name: 'User object stripped',
  description: `<p>A stripped down User object accessible to logged-in users, returned from 
  most endpoints. Contains less information than the 
  <a href='#user_object_admin'>User object admin</a>.</p>`,
  attributes: [
    {
      name: 'id',
      description: `<p>Unique User ID automatically assigned from database</p>`,
      type: 'string',
      required: true,
    },
    {
      name: 'name',
      description: `<p>Name provided by the user when creating the account. 
      This is not publicly visible.</p>`,
      type: 'string',
      required: true,
    },
    {
      name: 'user_name',
      description: '<p>publicly viewable user name.</p>',
      type: 'string',
      required: false,
    },
    {
      name: 'email',
      description:
        '<p>Unique email provided by the user when creating the account.</p>',
      type: 'string',
      required: true,
    },
    {
      name: 'role',
      description: `<p>Assigned user role. For more info on roles, 
      see <a href='#userRole'>User Roles</a>.</p>`,
      type: 'UserRole',
      required: true,
    },
    {
      name: 'status',
      description: `<p>Assigned user status. For type definition, 
      see <a href='#userStatus'>UserStatus</a></p>`,
      type: 'UserStatus',
      required: true,
    },
    {
      name: 'is_teacher',
      description: `<p>Boolean value. Users with Teacher status have additional privaledges.</p>`,
      type: 'boolean',
      required: true,
    },
    {
      name: 'bio',
      description: `<p>Bio that displays on user's profile if made public.</p>`,
      type: 'string',
      required: true,
    },
    {
      name: 'is_bio_public',
      description: `<p>Boolean value. If true, user bio is visible to all users.</p>`,
      type: 'boolean',
      required: true,
    },
  ],
  exampleObj: `{
    "id": "clo71e78x0000mc0olvreol2q",
    "name": "joe bloggs",
    "user_name": joeschmoo,
    "email": joe435@mail.com,
    "role": user,
    "status": active,
    "is_teacher": false,
    "bio": "hi, my name is joe and I'm a swimming assistant.",
    "is_bio_public": true,
}`,
};
