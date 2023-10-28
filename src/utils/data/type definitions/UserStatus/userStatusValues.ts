import { EnumValues } from '../../../types/typeDefinitionType';

export const userStatusValues: EnumValues[] = [
  {
    id: 'userStatus_inactive',
    name: 'inactive',
    description: `account has been created but 
    not verified by email confirmation`,
  },
  {
    id: 'userStatus_active',
    name: 'active',
    description: `account has been verified by 
    email confirmation and has full access`,
  },
  {
    id: 'userStatus_muted',
    name: 'muted',
    description: `account can view all authorised 
    content but cannot create, edit or delete content`,
  },
  {
    id: 'userStatus_banned',
    name: 'banned',
    description: `account cannot view any 
    restricted content, cannot create, edit or delete any content. `,
  },
  {
    id: 'userStatus_deleted',
    name: 'deleted',
    description: `Account is soft-deleted, so is functionally unavailable
    but still stored in the database.`,
  },
  {
    id: 'userStatus_locked',
    name: 'locked',
    description: `account cannot be accessed 
    until email has been reconfirmed and password reset`,
  },
];
