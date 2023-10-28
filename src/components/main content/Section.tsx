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
          {data.attributes && <ErrorAttributeDisplay data={data.attributes} />}
        </div>

        {data.endpoints && (
          <div className="object-display">
            <h3>ENDPOINTS</h3>
            <div className="object-display-inner">
              {data.endpoints.map((item) => (
                <>
                  <span className="name">{item.method}</span>
                  <span className="type">{item.url}</span>
                </>
              ))}
            </div>
          </div>
        )}

        {data.codes && (
          <div className="object-display">
            <h3>HTTP STATUS CODE SUMMARY</h3>
            <div className="object-display-inner">
              {data.codes.map((item) => (
                <>
                  <span className="name">{item.name}</span>
                  <span className="type">{item.description}</span>
                </>
              ))}
            </div>
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
    </section>
  );
};

export default Section;
