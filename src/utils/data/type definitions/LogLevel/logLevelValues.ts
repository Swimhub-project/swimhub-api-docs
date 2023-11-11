/* 
  Log Level Enum Values Data

  This data describes the possible values for the Log Level Enum displayed in the
  Type Definitions section. 
*/

import { EnumValues } from '../../../types/typeDefinitionType';

export const logLevelValues: EnumValues[] = [
  {
    id: 'logLevel_info',
    name: 'info',
    description: `<p>A POST, PATCH or DELETE request went as expected with no errors. No special action to be taken.</p>`,
  },
  {
    id: 'logLevel_warn',
    name: 'warn',
    description: `<p>A request succeeded but something didn't quite go as expected (e.g. longer than normal response time).</p>`,
  },
  {
    id: 'logLevel_error',
    name: 'error',
    description: `<p>A single request failed but this hasn't affected the usability of the rest of the app.</p>`,
  },
  {
    id: 'logLevel_critical',
    name: 'critical',
    description: `<p>A server error has occured, or a part of the app has stopped working entirely. 
    Admins will be automatically notified by email and immediate action needs to be taken.</p>`,
  },
];
