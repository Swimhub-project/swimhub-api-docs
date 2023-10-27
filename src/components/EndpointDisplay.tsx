import { EndpointData } from '../utils/types/endpointType';

interface Props {
  data: EndpointData;
}

const EndpointDisplay = ({ data }: Props) => {
  return (
    <article id={data.id}>
      <div>
        <h2>{data.name}</h2>
        <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
        {data.urlParams && (
          <div>
            <h3>URL Params</h3>
            <ul>
              {data.urlParams.map((item) => (
                <li>
                  <p>
                    {item.name}
                    <span>{item.required ? 'REQUIRED' : 'optional'}</span>
                  </p>
                  <p>{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
        {data.bodyParams && (
          <div>
            <h3>Body Params</h3>
            <ul>
              {data.bodyParams.map((item) => (
                <li>
                  <p>
                    {item.name}
                    <span>{item.required ? 'REQUIRED' : 'optional'}</span>
                  </p>
                  <p>{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div>{/* example request and response goes here */}</div>
    </article>
  );
};

export default EndpointDisplay;
