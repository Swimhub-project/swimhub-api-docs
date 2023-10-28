import { ObjectData } from '../../types/objectType';

export const userObjAdmin: ObjectData = {
  id: 'user_object_admin',
  name: 'User object admin',
  description: `User object accessible to moderators and admins. 
  Will be returned from endpoints that are only accessible to moderators
  and admins. For the stripped down User object, see 
  <a href='#user_object_stripped'>User object stripped</a>.`,
  attributes: [
    //TODO add additional attributes for admin user object
    {
      name: 'id',
      description: 'Unique User ID automatically assigned from database',
      type: 'string',
      required: true,
    },
    {
      name: 'name',
      description: `Name provided by the user when creating the account. 
                    This is not publicly visible.`,
      type: 'string',
      required: true,
    },
    {
      name: 'user_name',
      description: 'publicly viewable user name.',
      type: 'string',
      required: false,
    },
    {
      name: 'email',
      description:
        'Unique email provided by the user when creating the account.',
      type: 'string',
      required: true,
    },
    {
      name: 'role',
      description: `Assigned user role. For more info on roles, 
      see <a href='#user_roles'>User Roles</a>`,
      type: 'UserRole',
      required: true,
    },
    {
      name: 'status',
      description: `Assigned user status. For more info on statuses, 
      see <a href='#user_status'>User Status</a>`,
      type: 'UserStatus',
      required: true,
    },
    {
      name: 'created_on',
      description: `Date the account was created.`,
      type: 'DateTime',
      required: true,
    },
    {
      name: 'updated_on',
      description: `Date the account was last updated.`,
      type: 'DateTime',
      required: false,
    },
    {
      name: 'is_teacher',
      description: `Boolean value. Users with Teacher status have additional privaledges.`,
      type: 'boolean',
      required: true,
    },
    {
      name: 'bio',
      description: `Bio that displays on user's profile if made public.`,
      type: 'string',
      required: true,
    },
    {
      name: 'is_bio_public',
      description: `Boolean value. If true, user bio is visible to all users.`,
      type: 'boolean',
      required: true,
    },
    {
      name: 'moderator_notes',
      description: `Notes created by moderators and admins relating to user.`,
      type: 'array of JSON objects',
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
  description: `A stripped down User object accessible to logged-in users, returned from 
  most endpoints. Contains less information than the 
  <a href='#user_object_admin'>User object admin</a>`,
  attributes: [
    {
      name: 'id',
      description: 'Unique User ID automatically assigned from database',
      type: 'string',
      required: true,
    },
    {
      name: 'name',
      description: `Name provided by the user when creating the account. 
                    This is not publicly visible.`,
      type: 'string',
      required: true,
    },
    {
      name: 'user_name',
      description: 'publicly viewable user name.',
      type: 'string',
      required: false,
    },
    {
      name: 'email',
      description:
        'Unique email provided by the user when creating the account.',
      type: 'string',
      required: true,
    },
    {
      name: 'role',
      description: `Assigned user role. For more info on roles, 
      see <a href='#user_roles'>User Roles</a>`,
      type: 'UserRole',
      required: true,
    },
    {
      name: 'is_teacher',
      description: `Boolean value. Users with Teacher status have additional privaledges.`,
      type: 'boolean',
      required: true,
    },
    {
      name: 'bio',
      description: `Bio that displays on user's profile if made public.`,
      type: 'string',
      required: true,
    },
    {
      name: 'is_bio_public',
      description: `Boolean value. If true, user bio is visible to all users.`,
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
    "is_teacher": false,
    "bio": "hi, my name is joe and I'm a swimming assistant.",
    "is_bio_public": true,
}`,
};
