/* 
  User Role Enum Values Data

  This data describes the possible values for the User Role Enum displayed in the
  Type Definitions section. 
*/

import { EnumValues } from '../../../types/typeDefinitionType';

export const userRoleValues: EnumValues[] = [
  {
    id: 'userRole_user',
    name: 'user',
    description: `<p>Users can perform the following actions:</p>
    <ul>
      <li>Add new entries</li>
      <li>Edit their own entries</li>
      <li>Soft-delete their own entries, comments and replies</li>
      <li>Edit their user bio, name and password</li>
      <li>View their favourite entries</li>
      <li>Comment on other users' entries</li>
      <li>Reply to other users' comments</li>
      <li>Report entries, comments and replies</li>
      <li>Apply for "verified teacher" status</li>
      <li>Soft-delete their account</li>
      <li>Hide their own entries, comments and replies</li>
      <li>Hide their own user bio</li>
      <li>Submit support tickets</li>
    </ul>`,
  },
  {
    id: 'userRole_moderator',
    name: 'moderator',
    description: `<p>Moderators can perform the following actions 
    (in addition to User permissions):</p>
    <ul>
      <li>View and respond to reports</li>
      <li>View and respond to support tickets</li>
      <li>Mute users</li>
      <li>Soft-delete entries, comments and replies</li>
      <li>Add moderator notes to user profiles</li>
    </ul>`,
  },
  {
    id: 'userRole_admin',
    name: 'admin',
    description: `<p>Admins can perform the following actions 
    (in addition to Moderator permissions):</p>
    <ul>
      <li>Permanently delete entries, comments and replies</li>
      <li>Add new moderators</li>
      <li>Remove moderators</li>
      <li>Verify teachers</li>
      <li>Ban users</li>
      <li>Delete users</li>
      <li>Un-verify teachers</li>
      <li>View logs</li>
      <li>Restore soft-deleted entries, comments and replies</li>
      <li>Unban users</li>
    </ul>`,
  },
];
