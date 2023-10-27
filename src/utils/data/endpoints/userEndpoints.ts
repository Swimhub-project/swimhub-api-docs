import { EndpointData } from '../../types/endpointType';

export const userEndpoints: EndpointData[] = [
  //sign up new user POST request
  {
    id: 'signup_user',
    name: 'Sign up a user',
    method: 'POST',
    url: '/user/signup',
    availableTo: 'everyone',
    description: `creates a new user in the database. 
      On successful creation, an automated email is sent to the user's 
      email address with the email verification link. This link lasts 
      24 hours then expires. The user status is set to "inactive" and no actions
      can be done on the account until the user verifies their email.`,
    bodyParams: [
      {
        name: 'email',
        required: true,
        description: `User's email address for the account. This email will be sent the 
        email verification to complete account registration`,
        type: 'string',
      },
      {
        name: 'name',
        required: true,
        description: `User's chosen username for the account. Note this is not the same
        as the account display name.`,
        type: 'string',
      },
      {
        name: 'password',
        required: true,
        description: `Chosen password for the account. The password must be at least
        8 characters long, contain 1 uppercase letter, 1 lowercase letter, 1 number and
        1 special character. `,
        type: 'string',
      },
      {
        name: 'repeatPassword',
        required: true,
        description: `Repeat copy of the password. 
        Must be identical to the password parameter.`,
        type: 'string',
      },
    ],
    returns: `Returns the stripped-down User object on successful account creation 
    with a 201 status code. Returns an error if something goes wrong. 
    A common source of error is missing or invalid body parameters. 
    The error object will contain an array with the affected body parameters.`,
    exampleReq: 'asdf', //TODO fill out example fetch request
    exampleRes: 'asd', //TODO fill out example fetch response
  },
  //sign in user POST request
  {
    id: 'signin_user',
    name: 'Sign in a user',
    method: 'POST',
    url: '/user/signin',
    availableTo: 'everyone',
    description: `signs a user in using their chosen email and password. Upon successful
    signin, creates a session cookie and returns the User object.`,
    bodyParams: [
      {
        name: 'email',
        required: true,
        description: "User's email address for the account.",
        type: 'string',
      },
      {
        name: 'password',
        required: true,
        description: `User's password for the account.`,
        type: 'string',
      },
    ],
    returns: `Returns the stripped-down User object on successful 
    signin with a 200 status code. Returns an error if something goes wrong. 
    A common source of error is missing or invalid body parameters. 
    The error object will contain an array with the affected body parameters.`,
    exampleReq: 'asdf', //TODO fill out example fetch request
    exampleRes: 'asd', //TODO fill out example fetch response
  },
  //request password reset POST request
  {
    id: 'request_new_password',
    name: 'Request a new password',
    method: 'POST',
    url: '/user/reset_password',
    availableTo: 'everyone',
    description: `requests a password reset for a user. The user is sent an
    automated email verification with a reset link. Clicking the link sends the
    user to a webpage where they can put in their new password.`,
    bodyParams: [
      {
        name: 'email',
        required: true,
        description: "user's email address for the account",
        type: 'string',
      },
    ],
    returns: `Returns the stripped-down User object on successful 
    signin with a 200 status code. Returns an error if something goes wrong. 
    A common source of error is missing or invalid body parameters. 
    The error object will contain an array with the affected body parameters.`,
    exampleReq: 'asdf', //TODO fill out example fetch request
    exampleRes: 'asd', //TODO fill out example fetch response
  },
  //resend email verification POST request
  {
    id: 'resend_email_verification',
    name: 'Resend email verification',
    method: 'POST',
    url: '/user/resend_verify',
    availableTo: 'user',
    description: `If the user exists in database, re-sends email to
    user's registered email address with verification link. This link lasts 24 hours
    then expires. The user status is set to "inactive" and no actions
    can be done on the account until the user verifies their email.`,
    bodyParams: [
      {
        name: 'userId',
        required: true,
        description: `UserID for the account`,
        type: 'string',
      },
    ],
    returns: `Returns the stripped-down User object on successful account creation 
    with a 201 status code. Returns an error if something goes wrong. 
    A common source of error is missing or invalid body parameters. 
    The error object will contain an array with the affected body parameters.`,
    exampleReq: 'asdf', //TODO fill out example fetch request
    exampleRes: 'asd', //TODO fill out example fetch response
  },
];
