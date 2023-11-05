/* 
  Session Object Data

  This data describes the session object displayed in the Sessions section. Includes
  attributes and example session object. 
*/

import { ObjectData } from '../../types/objectType';

export const sessionObj: ObjectData = {
  id: 'session_object',
  name: 'Session Object',
  description: `<p>Session object used to authenticate users for
  protected endpoints. Created when a user successsfully
  signs in, but visible to admins only.</p>`,
  attributes: [
    {
      name: 'cookie',
      description: `<p>Metadata for cookie.</p>`,
      type: 'object',
      required: true,
      childAttributes: [
        {
          name: 'originalMaxAge',
          description: `<p>Max age of the cookie in seconds.</p>`,
          type: 'number',
          required: true,
        },
        {
          name: 'expires',
          description: `<p>Date that the cookie expires</p>`,
          type: 'DateTime string',
          required: true,
        },
        {
          name: 'secure',
          description: `<p>When true, cookies can only be set over HTTPS connection.</p>`,
          type: 'boolean',
          required: true,
        },
        {
          name: 'httpOnly',
          description: `<p>When true, cookies cannot be accessed through client-side javascript.</p>`,
          type: 'boolean',
          required: true,
        },
        {
          name: 'path',
          description: `<p>The url path of the set cookie. </p>`,
          type: 'string',
          required: true,
        },
      ],
    },
    {
      name: 'role',
      description: `<p>The assigned role of the user linked to the session.</p>`,
      type: 'string',
      required: true,
    },
    {
      name: 'status',
      description: `<p>The assigned status of the user linked to the session.</p>`,
      type: 'string',
      required: true,
    },
    {
      name: 'clientId',
      description: `<p>Id for the IP or device that created the session.</p>`,
      type: 'string',
      required: true,
    },
    {
      name: 'email',
      description: `<p>Email of the user linked to the session.</p>`,
      type: 'string',
      required: true,
    },
    {
      name: 'id',
      description: `<p>Session Id.</p>`,
      type: 'string',
      required: true,
    },
  ],
  exampleObj: `{
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
    "email": "joe435@mail.com",
    "id": "qrcskxM3RKOYmCNr1MWs_mdKI3mW67tw"
  }`,
};
