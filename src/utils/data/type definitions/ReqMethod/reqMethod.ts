/* 
 Reqest Method Enum Data

  This data describes the Request Method Enum displayed in the
  Type Definitions section. 
*/

import { EnumDefinition } from '../../../types/typeDefinitionType';
import { reqMethodValues } from './reqMethodValues';

export const reqMethodDefinition: EnumDefinition = {
  id: 'reqMethod',
  name: 'ReqMethod',
  type: 'enum',
  description: `The reqMethod defines the method of a fetch request.`,
  values: reqMethodValues,
};
