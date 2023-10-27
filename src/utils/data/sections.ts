import { SectionData } from '../types/sectionType';
import { userEndpoints } from './endpoints/userEndpoints';
import { userObjAdmin, userObjStripped } from './objects/userObjects';

export const sections: SectionData[] = [
  {
    id: 'introduction',
    name: 'Introduction',
    description: ``,
  },
  {
    id: 'errors',
    name: 'Errors',
    description: ``,
    objects: [],
  },
  {
    id: 'users',
    name: 'Users',
    description: ``,
    objects: [userObjAdmin, userObjStripped],
    endpoints: userEndpoints,
  },
  {
    id: 'types',
    name: 'Type Definitions',
    description: ``,
    objects: [],
  },
];
