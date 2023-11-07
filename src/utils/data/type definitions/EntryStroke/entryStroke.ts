/* 
 Entry Stroke Enum Data

  This data describes the Entry Stroke Enum displayed in the
  Type Definitions section. 
*/

import { EnumDefinition } from '../../../types/typeDefinitionType';
import { entryStrokeValues } from './entryStrokeValues';

export const entryStrokeDefinition: EnumDefinition = {
  id: 'entryStroke',
  name: 'EntryStroke',
  type: 'enum',
  description: `The EntryStroke relates to the swimming stroke related to the entry content. 
  If the entry doesn't apply to any particular stroke, it should be "general".`,
  values: entryStrokeValues,
};
