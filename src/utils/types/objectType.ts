export type Attribute = {
  name: string;
  type: string;
  description: string;
  childAttributes?: Attribute[];
};

export type ObjectData = {
  id: string;
  name: string;
  description: string;
  attributes: Attribute[];
  exampleObj: string;
};
