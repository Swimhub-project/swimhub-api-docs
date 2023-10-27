import { EndpointData } from './endpointType';
import { ObjectData } from './objectType';

export type SectionData = {
  id: string;
  name: string;
  description: string;
  objects?: ObjectData[];
  endpoints?: EndpointData[];
};
