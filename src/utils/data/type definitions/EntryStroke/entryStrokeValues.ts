/* 
  Entry Stage Enum Values Data

  This data describes the possible values for the Entry Stage Enum displayed in the
  Type Definitions section. 
*/

import { EnumValues } from '../../../types/typeDefinitionType';

export const entryStrokeValues: EnumValues[] = [
  {
    id: 'entryStroke_frontcrawl',
    name: 'frontcrawl',
    description: `<p>Frontcrawl swim stroke.</p>`,
  },
  {
    id: 'entryStroke_backcrawl',
    name: 'backcrawl',
    description: `<p>Backcrawl swim stroke.</p>`,
  },
  {
    id: 'entryStroke_breastroke',
    name: 'breastroke',
    description: `<p>Breastroke swim stroke.</p>`,
  },
  {
    id: 'entryStroke_butterfly',
    name: 'butterfly',
    description: `<p>Butterfly swim stroke. Also applies to "dolphin swim"</p>`,
  },
  {
    id: 'entryStroke_general',
    name: 'general',
    description: `<p>Anything that doesn't relate to a particular swimming stroke.</p>`,
  },
];
