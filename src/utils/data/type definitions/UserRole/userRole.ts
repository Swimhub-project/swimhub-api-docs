/* 
 User Role Enum Data

  This data describes the User Role Enum displayed in the
  Type Definitions section. 
*/

import { EnumDefinition } from '../../../types/typeDefinitionType';
import { userRoleValues } from './userRoleValues';

export const userRoleDefinition: EnumDefinition = {
  id: 'userRole',
  name: 'UserRole',
  type: 'enum',
  description: `The UserRole defines what actions an account can make,
  which endpoints are available and what information is returned 
  from those endpoints.`,
  values: userRoleValues,
};
