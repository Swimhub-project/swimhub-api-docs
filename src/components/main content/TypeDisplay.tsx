import { EnumDefinition } from '../../utils/types/typeDefinitionType';

interface Props {
  data: EnumDefinition;
}

const TypeDisplay = ({ data }: Props) => {
  return (
    <article id={data.id} className="type-article">
      <h2>
        {data.name}
        <span>{data.type}</span>
      </h2>

      <div className="col-left">
        <p>{data.description}</p>
        {data.values && (
          <div>
            <h3>Possible Values</h3>
            <ul>
              {data.values.map((item) => (
                <li>
                  <p>{item.name}</p>
                  <div
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  ></div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-right">
        <div className="object-display">
          <h3>VALUES</h3>
          {data.values.map((item, index) => (
            <p key={index}>{item.name}</p>
          ))}
        </div>
      </div>
    </article>
  );
};

export default TypeDisplay;
