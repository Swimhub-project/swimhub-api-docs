/* 
 User Status Enum Data

  This data describes the User Status Enum displayed in the
  Type Definitions section. 
*/

import { EnumDefinition } from '../../../types/typeDefinitionType';
import { userStatusValues } from './userStatusValues';

export const userStatusDefinition: EnumDefinition = {
  id: 'userStatus',
  name: 'UserStatus',
  type: 'enum',
  description: `The UserStatus defines the status of the account. 
  Depending on the status, certain actions normally granted to the user
  are disabled.`,
  values: userStatusValues,
};
