import { EndpointData } from '../../types/endpointType';

export const userEndpoints: EndpointData[] = [
  {
    id: 'get_users',
    name: 'Get Users',
    method: 'GET',
    url: '/user',
    availableTo: 'admin',
    description: `<p>Gets all users</p>`,
    returns: `<p>Returns an array of UserObjectAdmin objects 
    with a 200 status code. Returns an error if something goes wrong.</p>`,
    exampleReq: '',
    exampleRes: '',
  },
];
