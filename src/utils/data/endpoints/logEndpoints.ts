/* 
  Log Endpoints Data

  All the endpoints data displayed in the Logs section of the docs. 
  Endpoints covered: 
    GET /log
*/
import { EndpointData } from '../../types/endpointType';

export const logEndpoints: EndpointData[] = [
  //get logs
  {
    id: 'get_logs',
    name: 'Get Logs',
    method: 'GET',
    url: '/log',
    availableTo: 'admin',
    description: `<p>Gets all logs that match the search criteria from the optional search parameters. 
    This request is subject to <a href="#pagination">page pagination</a>.</p>`,
    returns: `<p>Returns an array of Log objects and pagination metadata, 
    with a 200 status code. Returns an error if something goes wrong.</p>`,
    searchParams: [
      {
        name: 'level',
        required: false,
        description: `<p>Searches by the "level" field of the log. Must be a direct match to a specific <a href="#logLevel">LogLevel</a></p>`,
        type: 'LogLevel',
      },
      // {
      //   name: 'method',
      //   required: false,
      //   description: `<p>Searches by the "request" -> "method" field of the log. Must be a direct match to a specific <a href="#reqMethod">ReqMethod</a></p>`,
      //   type: 'ReqMethod',
      // },
      {
        name: 'before',
        required: false,
        description: `<p>Searches by the "timestamp" field of the log. Finds any logs that were made before the given date.</p>`,
        type: 'Date',
      },
      {
        name: 'after',
        required: false,
        description: `<p>Searches by the "timestamp" field of the log. Finds any logs that were made after the given date.</p>`,
        type: 'Date',
      },
      {
        name: 'code',
        required: false,
        description: `<p>Searches by the "responseCode" field of the log. Must be a valid http status code as described in the <a href="#errors">Errors</a> section.</p>`,
        type: 'ResCode',
      },
      // {
      //   name: 'endpoint',
      //   required: false,
      //   description: `<p>Searches by the "request" -> "url" field of the log. Must be a direct match to a specific <a href="#endpoint">Endpoint</a></p>`,
      //   type: 'Endpoint',
      // },
      // {
      //   name: 'ip',
      //   required: false,
      //   description: `<p>Searches by the "request" -> "ip" field of the log. Must be a valid IP address.</p>`,
      //   type: 'string',
      // },
      {
        name: 'page',
        required: false,
        description: `<p>Sets the page number of paginated results. If no page is given, defaults to the first page of results.</p>`,
        type: 'number',
      },
      {
        name: 'limit',
        required: false,
        description: `<p>Sets the total number of retrieved results <strong>(maximum 10 per fetch)</strong>. If no limit is given, defaults to 10 results.</p>`,
        type: 'number',
      },
    ],
    exampleReq: `const response = await fetch(
      'https://swimhub-production.up.railway.app/log?level=info&after=2023-11-10', 
    );
    
    const data = await response.json();
    console.log(data);`,
    exampleRes: `{
  "currentPage": 1,
  "totalPages": 1,
  "numberOfResults": 1,
  "totalNumberOfResults": 1,
  "logs": [
    {
      "_id": "654e12e5675d340ec91dc1e3",
      "level": "info",
      "message": "POST request to /auth/signin successful.",
      "timestamp": "2023-11-10T11:24:21.689Z",
      "responseCode": 200,
      "request": {
        "url": "/auth/signin",
        "method": "POST",
        "ip": "::1",
        "body": {
          "email": "joe0345ws@mail.com",
          "password": "HelloWorld2023!"
      },
      "headers": {
        "host": "localhost:5000",
        "accept-encoding": "gzip, deflate",
        "content-type": "application/json",
        "content-length": "59",
        "connection": "close"
      }
    }
  ]
}
    `,
  },
];
