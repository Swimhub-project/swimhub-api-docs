import { EnumDefinition } from '../../../types/typeDefinitionType';
import { userStatusValues } from './userStatusValues';

export const userStatusDefinition: EnumDefinition = {
  id: 'userStatus',
  name: 'UserStatus',
  type: 'enum',
  description: `The UserStatus defines what the status of the account. 
  Depending on the status, certain actions normally granted to the user
  are disabled.`,
  values: userStatusValues,
};
