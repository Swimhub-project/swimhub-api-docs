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
