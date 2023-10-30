import { EndpointData } from '../../types/endpointType';

export const sessionEndpoints: EndpointData[] = [
  {
    id: 'get_sessions',
    name: 'Get sessions',
    method: 'GET',
    url: '/session',
    availableTo: 'admin',
    description: `<p>Gets all active sessions from the database.</p>`,
    returns: `<p>Returns an array of session objects with a 200 status code.
    Returns an error if something goes wrong.</p><br/>
    <p><strong>WARNING: Use sparingly!</strong> There is no page pagination available with this request.</p>
    `,
    exampleReq: `const response = await fetch(
  'https://swimhub-production.up.railway.app/session'
)
    
const data = await response.json();
console.log(data);
    `,
    exampleRes: `
      [
        {
          "cookie": {
            "originalMaxAge": 1800000,
            "expires": "2023-10-29T18:44:58.105Z",
            "secure": false,
            "httpOnly": true,
            "path": "/"
          },
          "role": "user",
          "status": "active",
          "clientId": "abc123",
          "email": "joe.bloggs54326@mail.com",
          "id": "qrcskxM3RKOYmCNr1MWs_mdKI3mW67tw"
        }
      ]
  `,
  },
  {
    id: 'delete_session',
    name: 'Delete session',
    method: 'DELETE',
    url: '/session/:id',
    availableTo: 'admin',
    description: `<p>Deletes a single session by session ID. </p>`,
    returns: `<p>returns a 200 status code. Returns an error if something goes wrong.</p>`,
    exampleReq: `const response = await fetch(
  'https://swimhub-production.up.railway.app/session/qrcskxM3RKOYmCNr1MWs_mdKI3mW67tw', 
  {
    method: "DELETE"
  }
)`,
    exampleRes: ``,
  },
];
