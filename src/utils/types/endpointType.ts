export type Method = 'POST' | 'GET' | 'PATCH' | 'DELETE';
export type AvailableTo =
  | 'everyone'
  | 'user'
  | 'teacher'
  | 'moderator'
  | 'admin';

export type Params = {
  name: string;
  required: boolean;
  description: string;
  type: string;
};

export type EndpointData = {
  id: string;
  name: string;
  method: Method;
  url: string;
  availableTo: AvailableTo;
  description: string;
  urlParams?: Params[];
  bodyParams?: Params[];
  returns: string;
  exampleReq: string;
  exampleRes: string;
};
