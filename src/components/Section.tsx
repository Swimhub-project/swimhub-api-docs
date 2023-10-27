import { SectionData } from '../utils/types/sectionType';
import EndpointDisplay from './EndpointDisplay';
import ObjectDisplay from './ObjectDisplay';

interface Props {
  data: SectionData;
}

const Section = ({ data }: Props) => {
  return (
    <section id={data.id}>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      {data.objects &&
        data.objects.map((item, index) => (
          <ObjectDisplay key={index} data={item} />
        ))}
      {data.endpoints &&
        data.endpoints.map((item, index) => (
          <EndpointDisplay key={index} data={item} />
        ))}
    </section>
  );
};

export default Section;
