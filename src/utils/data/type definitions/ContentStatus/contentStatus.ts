/* 
 Content Status Enum Data

  This data describes the Content Status Enum displayed in the
  Type Definitions section. 
*/

import { EnumDefinition } from '../../../types/typeDefinitionType';
import { contentStatusValues } from './contentStatusValues';

export const contentStatusDefinition: EnumDefinition = {
  id: 'contentStatus',
  name: 'ContentStatus',
  type: 'enum',
  description: `The ContentStatus defines what state a piece of content is in, and therefore who can access the content.`,
  values: contentStatusValues,
};
