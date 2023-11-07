/* 
  Entry Type Enum Data

  This data describes the Entry Type Enum displayed in the
  Type Definitions section. 
*/

import { EnumDefinition } from '../../../types/typeDefinitionType';
import { entryTypeValues } from './entryTypeValues';

export const entryTypeDefinition: EnumDefinition = {
  id: 'entryType',
  name: 'EntryType',
  type: 'enum',
  description: `The EntryType relates to type of content of an entry. Can be either a "tip", "exercise" or "lesson plan".`,
  values: entryTypeValues,
};
