/* 
 Entry Stage Enum Data

  This data describes the Entry Stage Enum displayed in the
  Type Definitions section. 
*/

import { EnumDefinition } from '../../../types/typeDefinitionType';
import { entryStageValues } from './entryStageValues';

export const entryStageDefinition: EnumDefinition = {
  id: 'entryStage',
  name: 'EntryStage',
  type: 'enum',
  description: `The EntryStage relates to the ability levels applicable to the entry content. 
  A single entry can apply to multiple ability levels.`,
  values: entryStageValues,
};
