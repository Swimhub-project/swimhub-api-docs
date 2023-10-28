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
        <div>
          <h3>Attributes</h3>
          <ul>
            {data.attributes.map((item) => (
              <li>
                <p>
                  {item.name} <span>{item.type}</span>
                </p>
                <p className="required">{item.required ? 'REQUIRED' : ''}</p>
                <div
                  dangerouslySetInnerHTML={{ __html: item.description }}
                ></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="object-display">
        <h3>Example {data.name}</h3>
        <pre>{data.exampleObj}</pre>
      </div>
    </article>
  );
};

export default ObjectDisplay;
