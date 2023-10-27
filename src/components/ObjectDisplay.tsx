import { ObjectData } from '../utils/types/objectType';

interface Props {
  data: ObjectData;
}

const ObjectDisplay = ({ data }: Props) => {
  return (
    <article id={data.id}>
      <div>
        <h2>{data.name}</h2>
        <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
        <div>
          <h3>Attributes</h3>
          <ul>
            {data.attributes.map((item) => (
              <li>
                <p>
                  {item.name} <span>{item.type}</span>
                </p>
                <div
                  dangerouslySetInnerHTML={{ __html: item.description }}
                ></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>{/* example object goes here */}</div>
    </article>
  );
};

export default ObjectDisplay;
