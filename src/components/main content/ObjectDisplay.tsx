import { ObjectData } from '../../utils/types/objectType';

interface Props {
  data: ObjectData;
}

const ObjectDisplay = ({ data }: Props) => {
  return (
    <article id={data.id} className="object-article">
      <h2>{data.name}</h2>
      <div>
        <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
        <article className="attributes">
          <h2>Attributes</h2>
          <ul>
            {data.attributes.map((item) => (
              <li>
                <span className="name">{item.name}</span>
                <span className="type">{item.type}</span>
                <p className="required">{item.required ? 'REQUIRED' : ''}</p>
                <div
                  className="attribute-description"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                ></div>
                {item.childAttributes && (
                  <div className="child-attributes">
                    <h3>Child Attributes</h3>
                    <ul>
                      {item.childAttributes.map((child) => (
                        <li>
                          <span className="name">{child.name}</span>
                          <span className="type">{child.type}</span>
                          <p className="required">
                            {child.required ? 'REQUIRED' : ''}
                          </p>
                          <div
                            className="attribute-description"
                            dangerouslySetInnerHTML={{
                              __html: child.description,
                            }}
                          ></div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </article>
      </div>
      <div className="object-display">
        <h3>Example {data.name}</h3>
        <div className="object-display-inner">
          <pre>{data.exampleObj}</pre>
        </div>
      </div>
    </article>
  );
};

export default ObjectDisplay;
