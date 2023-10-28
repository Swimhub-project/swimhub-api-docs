/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  EnumDefinition,
  ObjectDefinition,
} from '../../utils/types/typeDefinitionType';

interface Props {
  data: EnumDefinition | ObjectDefinition;
}

const TypeDisplay = ({ data }: Props) => {
  if (data.type == 'Object') {
    return (
      <article id={data.id} className="type-article">
        <h2>
          {data.name}
          <span>{data.type}</span>
        </h2>
        <div className="attributes">
          <p>{data.description}</p>
          <h2 className="inner-heading">Attributes</h2>
          <ul>
            {data.values.map((item, index) => (
              <li key={index}>
                <span className="name">{item.name}</span>
                {/* @ts-ignore */}
                <span className="type">{item.type}</span>
                {/* @ts-ignore */}
                <p className="required">{item.required ? 'REQUIRED' : ''}</p>
                <div
                  dangerouslySetInnerHTML={{ __html: item.description }}
                ></div>
              </li>
            ))}
          </ul>
        </div>
      </article>
    );
  } else {
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
              <h2 className="inner-heading">Possible Values</h2>
              <ul>
                {data.values.map((item) => (
                  <li>
                    <h3>{item.name}</h3>
                    <div
                      dangerouslySetInnerHTML={{ __html: item.description }}
                      className="enum-values"
                    ></div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </article>
    );
  }
};

export default TypeDisplay;
