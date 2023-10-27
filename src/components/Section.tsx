import { SectionData } from '../utils/types/sectionType';
import EndpointDisplay from './EndpointDisplay';
import ObjectDisplay from './ObjectDisplay';

interface Props {
  data: SectionData;
}

const Section = ({ data }: Props) => {
  return (
    <section id={data.id}>
      <article>
        <div>
          <h1>{data.name}</h1>
          <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
        </div>

        {data.endpoints && (
          <div>
            <h3>ENDPOINTS</h3>
            {data.endpoints.map((item, index) => (
              <div key={index}>
                <span>{item.method}</span> <span>{item.url}</span>
              </div>
            ))}
          </div>
        )}
      </article>

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
