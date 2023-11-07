/* 
  Entry Type Enum Values Data

  This data describes the possible values for the Entry Type Enum displayed in the
  Type Definitions section. 
*/

import { EnumValues } from '../../../types/typeDefinitionType';

export const entryTypeValues: EnumValues[] = [
  {
    id: 'entrytype_tip',
    name: 'tip',
    description: `<p>Tips that can be applied to any exercise or lesson plan.</p>`,
  },
  {
    id: 'entrytype_exercise',
    name: 'exercise',
    description: `<p>Exercises that can be used in a lesson.</p>`,
  },
  {
    id: 'entrytype_lesson_plan',
    name: 'lesson_plan',
    description: `<p>Lesson plans are made up of a list of exercises.</p>`,
  },
];
