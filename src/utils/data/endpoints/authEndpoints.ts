/* 
  Auth Endpoints Data

  All the endpoints data displayed in the Auth section of the docs. 
  Endpoints covered: 
    POST /auth/signup
    POST /auth/signin
    POST /auth/reset_password
    POST /auth/resend_verify 
*/

import { EndpointData } from '../../types/endpointType';

export const authEndpoints: EndpointData[] = [
  //sign up new user POST request
  {
    id: 'signup_user',
    name: 'Sign up a user',
    method: 'POST',
    url: '/auth/signup',
    availableTo: 'everyone',
    description: `<p>Creates a new user in the database. 
      On successful creation, an automated email is sent to the user's 
      email address with the email verification link. This link lasts 
      24 hours then expires. The user status is set to "inactive" and no actions
      can be done on the account until the user verifies their email.</p>`,
    bodyParams: [
      {
        name: 'email',
        required: true,
        description: `<p>User's email address for the account. This email will be sent the 
        email verification to complete account registration.</p>`,
        type: 'string',
      },
      {
        name: 'name',
        required: true,
        description: `<p>User's chosen username for the account. Note this is not the same
        as the account display name.</p>`,
        type: 'string',
      },
      {
        name: 'password',
        required: true,
        description: `<p>Chosen password for the account. The password must be at least
        8 characters long, contain 1 uppercase letter, 1 lowercase letter, 1 number and
        1 special character.</p>`,
        type: 'string',
      },
      {
        name: 'repeatPassword',
        required: true,
        description: `<p>Repeat copy of the password. 
        Must be identical to the password parameter.</p>`,
        type: 'string',
      },
    ],
    returns: `<p>Returns the stripped-down User object on successful account creation 
    with a 201 status code. Returns an error if something goes wrong. 
    A common source of error is missing or invalid body parameters. 
    The error object will contain an array with the affected body parameters.</p>`,
    exampleReq: `const response = await fetch(
  'https://swimhub-production.up.railway.app/auth/signup', 
  {
    headers: {
      "content-type": "application/json"
    },
    method: "POST",
    body: JSON.stringify({
      name: "joe bloggs",
      email: "joe435@mail.com",
      password: "hello123Hi?",
      repeatPassword: "hello123Hi?",
    }),
  }
);

const data = await response.json();
console.log(data);
`,
    exampleRes: `{
    "id": "clo71e78x0000mc0olvreol2q",
    "name": "joe bloggs",
    "user_name": "",
    "email": joe435@mail.com,
    "role": user,
    "is_teacher": false,
    "bio": "",
    "is_bio_public": false,
}`,
  },
  //sign in user POST request
  {
    id: 'signin_user',
    name: 'Sign in a user',
    method: 'POST',
    url: '/auth/signin',
    availableTo: 'everyone',
    description: `<p>signs a user in using their chosen email and password. Upon successful
    signin, creates a session cookie and returns the User object.</p>`,
    bodyParams: [
      {
        name: 'email',
        required: true,
        description: `<p>User's email address for the account.</p>`,
        type: 'string',
      },
      {
        name: 'password',
        required: true,
        description: `<p>User's password for the account.</p>`,
        type: 'string',
      },
    ],
    returns: `<p>Returns the stripped-down User object on successful 
    signin with a 200 status code. Returns an error if something goes wrong. 
    A common source of error is missing or invalid body parameters. 
    The error object will contain an array with the affected body parameters.</p>`,
    exampleReq: `const response = await fetch(
  'https://swimhub-production.up.railway.app/auth/signin', 
  {
    headers: {
      "content-type": "application/json"
    },
    method: "POST",
    body: JSON.stringify({
      email: "joe435@mail.com",
      password: "hello123Hi?",
    }),
  }
);
  
const data = await response.json();
console.log(data);
  `,
    exampleRes: `{
      "id": "clo71e78x0000mc0olvreol2q",
      "name": "joe bloggs",
      "user_name": "",
      "email": joe435@mail.com,
      "role": user,
      "is_teacher": false,
      "bio": "",
      "is_bio_public": false,
  }`,
  },
  //request password reset POST request
  {
    id: 'request_new_password',
    name: 'Request a new password',
    method: 'POST',
    url: '/auth/reset_password',
    availableTo: 'everyone',
    description: `<p>requests a password reset for a user. The user is sent an
    automated email verification with a reset link. Clicking the link sends the
    user to a webpage where they can put in their new password.</p>`,
    bodyParams: [
      {
        name: 'email',
        required: true,
        description: "user's email address for the account",
        type: 'string',
      },
    ],
    returns: `<p>Returns a 200 status code if successful. Returns an error if something goes wrong. 
    A common source of error is missing or invalid body parameters. 
    The error object will contain an array with the affected body parameters.</p>`,
    exampleReq: `const response = await fetch(
  'https://swimhub-production.up.railway.app/auth/reset_password', 
  {
    headers: {
      "content-type": "application/json"
    },
    method: "POST",
    body: JSON.stringify({
      email: "joe435@mail.com",
    }),
  }
);
`,
    exampleRes: ``,
  },
  //resend email verification POST request
  {
    id: 'resend_email_verification',
    name: 'Resend email verification',
    method: 'POST',
    url: '/auth/resend_verify',
    availableTo: 'user',
    description: `<p>If the user exists in database, re-sends email to
    user's registered email address with verification link. This link lasts 24 hours
    then expires. The user status is set to "inactive" and no actions
    can be done on the account until the user verifies their email.</p>`,
    bodyParams: [
      {
        name: 'userId',
        required: true,
        description: `<p>UserID for the account</p>`,
        type: 'string',
      },
    ],
    returns: `<p>Returns a 200 status code if successful. Returns an error if something goes wrong. 
    A common source of error is missing or invalid body parameters, or if the user has already been verified. 
    The error object will contain an array with the affected body parameters.</p>`,
    exampleReq: `const response = await fetch(
  'https://swimhub-production.up.railway.app/auth/resend_verify', 
  {
    headers: {
      "content-type": "application/json"
    },
    method: "POST",
    body: JSON.stringify({
      userId: "clo71e78x0000mc0olvreol2q",
    }),
  }
);
`,
    exampleRes: '',
  },
];
