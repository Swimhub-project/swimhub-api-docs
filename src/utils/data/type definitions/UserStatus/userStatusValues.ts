import { EnumValues } from '../../../types/typeDefinitionType';

export const userStatusValues: EnumValues[] = [
  {
    id: 'userStatus_inactive',
    name: 'inactive',
    description: `<p>Account has been created but 
    not verified by email confirmation.</p>`,
  },
  {
    id: 'userStatus_active',
    name: 'active',
    description: `<p>Account has been verified by 
    email confirmation and has full access.</p>`,
  },
  {
    id: 'userStatus_muted',
    name: 'muted',
    description: `<p>Account can view all authorised 
    content but cannot create, edit or delete content.</p>`,
  },
  {
    id: 'userStatus_banned',
    name: 'banned',
    description: `<p>Account cannot view any 
    restricted content, cannot create, edit or delete any content.</p>`,
  },
  {
    id: 'userStatus_deleted',
    name: 'deleted',
    description: `<p>Account is soft-deleted, so is functionally unavailable
    but still stored in the database.</p>`,
  },
  {
    id: 'userStatus_locked',
    name: 'locked',
    description: `<p>Account cannot be accessed 
    until email has been reconfirmed and password reset.</p>`,
  },
];
