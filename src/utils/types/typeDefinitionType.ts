export type EnumValues = {
  id: string;
  name: string;
  description: string;
};

export type EnumDefinition = {
  id: string;
  name: string;
  type: string;
  description: string;
  values: EnumValues[];
};

export type ObjectProperties = {
  id: string;
  name: string;
  type: string;
  description: string;
  required: boolean;
};

export type ObjectDefinition = {
  id: string;
  name: string;
  type: string;
  description: string;
  values: ObjectProperties[];
};
