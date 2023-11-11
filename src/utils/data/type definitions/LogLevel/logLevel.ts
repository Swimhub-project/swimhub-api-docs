/* 
 Log Level Enum Data

  This data describes the Log Level Enum displayed in the
  Type Definitions section. 
*/

import { EnumDefinition } from '../../../types/typeDefinitionType';
import { logLevelValues } from './logLevelValues';

export const logLevelDefinition: EnumDefinition = {
  id: 'logLevel',
  name: 'LogLevel',
  type: 'enum',
  description: `The LogLevel defines the severity level of logs.  `,
  values: logLevelValues,
};
