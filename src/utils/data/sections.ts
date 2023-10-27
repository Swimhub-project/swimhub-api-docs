import { SectionData } from '../types/sectionType';
import { userEndpoints } from './endpoints/userEndpoints';
import { userObjAdmin, userObjStripped } from './objects/userObjects';

export const sections: SectionData[] = [
  {
    id: 'introduction',
    name: 'Introduction',
    description: `The Swimhub API is organised around REST,
    using resource-orientated URLs. It uses standard HTTP 
    response codes and verbs. All responses return as JSON objects`,
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
    description: `<p>Users represent individuals that are able to 
    interact with various endpoints based on their <a href='#'>User Role</a> 
    and <a href='#'>User Status</a>.</p> 
    `,
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
