import { ObjectData } from '../../types/objectType';

export const userObjAdmin: ObjectData = {
  id: 'user_object_admin',
  name: 'User object admin',
  description: `User object accessible to moderators and admins. 
  Will be returned from endpoints that are only accessible to moderators
  and admins. For the stripped down User object, see 
  <a href='#user_object_stripped'>User object stripped</a>.`,
  attributes: [
    {
      name: 'id',
      description: 'Unique User ID automatically assigned from database',
      type: 'string',
    },
  ],
  exampleObj: 'asd', //TODO fill out example object
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
    },
    {
      name: 'name',
      description: `Name provided by the user when creating the account. 
                    This is not publicly visible.`,
      type: 'string',
    },
    {
      name: 'user_name',
      description: 'publicly viewable user name.',
      type: 'string',
    },
    {
      name: 'email',
      description:
        'Unique email provided by the user when creating the account.',
      type: 'string',
    },
    {
      name: 'role',
      description: `Assigned user role. For more info on roles, 
      see <a href='#user_roles'>User Roles</a>`,
      type: 'UserRole',
    },
  ],
  exampleObj: 'asd', //TODO fill out example object
};
