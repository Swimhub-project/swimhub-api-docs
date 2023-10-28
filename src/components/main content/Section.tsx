import { SectionData } from '../../utils/types/sectionType';
import EndpointDisplay from './EndpointDisplay';
import ErrorAttributeDisplay from './ErrorAttributeDisplay';
import ObjectDisplay from './ObjectDisplay';
import TypeDisplay from './TypeDisplay';

interface Props {
  data: SectionData;
}

const Section = ({ data }: Props) => {
  return (
    <section id={data.id}>
      <article>
        <h1>{data.name}</h1>
        <div>
          <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
        </div>

        {data.endpoints && (
          <div className="object-display">
            <h3>ENDPOINTS</h3>
            {data.endpoints.map((item, index) => (
              <div key={index}>
                <span>{item.method}</span> <span>{item.url}</span>
              </div>
            ))}
          </div>
        )}

        {data.codes && (
          <div className="object-display">
            <h3>HTTP STATUS CODE SUMMARY</h3>
            {data.codes.map((item, index) => (
              <div key={index} className="error-codes">
                <p>{item.name}</p>
                <p>{item.description}</p>
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
      {data.types &&
        data.types.map((item, index) => (
          <TypeDisplay key={index} data={item} />
        ))}

      {data.attributes && <ErrorAttributeDisplay data={data.attributes} />}
    </section>
  );
};

export default Section;
