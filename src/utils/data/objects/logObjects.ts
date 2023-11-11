/* 
  Log Object Data

  This data describes the log object displayed in the Logs section. Includes
  attributes and example entry object. 
*/

import { ObjectData } from '../../types/objectType';

export const logObj: ObjectData = {
  id: 'log_object',
  name: 'Log Object',
  description: `<p>Log object returned from GET /Log endpoint.</p>`,
  attributes: [
    {
      name: '_id',
      description: `<p>Unique Log ID automatically assigned from database.</p>`,
      type: 'string',
      required: true,
    },
    {
      name: 'level',
      description: `<p>Severity level of the log. For type definition, 
      see <a href='#logLevel'>LogLevel</a></p>`,
      type: 'LogLevel',
      required: true,
    },
    {
      name: 'message',
      description: `<p>Brief description of the log. If the log is an error
      the message will be the error message that was returned in the <a href="#errors">Error Object</a>.</p>`,
      type: 'string',
      required: true,
    },
    {
      name: 'timestamp',
      description: `<p>Date the log was created.</p>`,
      type: 'Date',
      required: true,
    },
    {
      name: 'responseCode',
      description: `<p>HTTP response code of the log. For details on available codes, 
      see <a href='#errors'>Errors</a> section.</p>`,
      type: 'ResCode',
      required: true,
    },
    {
      name: 'request',
      description: `<p>Contains information about the request.</p>`,
      type: 'LogRequestData',
      required: true,
      childAttributes: [
        {
          name: 'url',
          description: `<p>The URL for the request, including url search parameters.</p>`,
          type: 'string',
          required: true,
        },
        {
          name: 'method',
          description: `<p>The HTTP method of the request. For type definition, 
          see <a href='#reqMethod'>ReqMethod</a></p>`,
          type: 'ReqMethod',
          required: true,
        },
        {
          name: 'ip',
          description: `<p>IP address that sent the request.</p>`,
          type: 'string',
          required: true,
        },
        {
          name: 'body',
          description: `<p>Body parameters for the request, if any.</p>`,
          type: 'object',
          required: false,
        },
        {
          name: 'headers',
          description: `<p>Headers that were sent with the request.</p>`,
          type: 'object',
          required: false,
        },
      ],
    },
  ],
  exampleObj: `{
    "_id": "654ddbe28fd13c54dc7c88c4",
    "level": "error",
    "message": "ERROR: User not found",
    "timestamp": "2023-11-10T07:29:38.509Z",
    "responseCode": 404,
    "request": {
        "url": "/auth/signin",
        "method": "POST",
        "ip": "::1",
        "body": {
            "email": "joe0345ws@mail.com.com",
            "password": "HelloWorld2023!"
        },
        "headers": {
            "content-type": "application/json",
            "user-agent": "PostmanRuntime/7.34.0",
            "accept": "*/*",
            "postman-token": "44e64788-9047-421c-8933-6197d5b23f17",
            "host": "localhost:5000",
            "accept-encoding": "gzip, deflate, br",
            "connection": "keep-alive",
            "content-length": "79"
        }
    }
}`,
};
