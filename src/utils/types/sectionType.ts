import { EndpointData } from './endpointType';
import { ErrorAttribute, ErrorCode } from './errorType';
import { ObjectData } from './objectType';
import { EnumDefinition, ObjectDefinition } from './typeDefinitionType';

export type SectionData = {
  id: string;
  name: string;
  description: string;
  objects?: ObjectData[];
  endpoints?: EndpointData[];
  types?: (EnumDefinition | ObjectDefinition)[];
  attributes?: ErrorAttribute[];
  codes?: ErrorCode[];
};
