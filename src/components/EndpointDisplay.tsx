import SyntaxHighlighter from 'react-syntax-highlighter';
import { EndpointData } from '../utils/types/endpointType';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

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
                    <span>{item.type}</span>
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
                    <span>{item.type}</span>
                  </p>
                  <p className="required">
                    {item.required ? 'REQUIRED' : 'optional'}
                  </p>
                  <p>{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-right">
        <div>
          <h3>Request</h3>
          <SyntaxHighlighter
            language="javascript"
            showLineNumbers={true}
            style={a11yDark}
          >
            {data.exampleReq}
          </SyntaxHighlighter>
        </div>
        <div className="object-display">
          <h3>Response</h3>
          <pre>{data.exampleRes}</pre>
        </div>
      </div>
    </article>
  );
};

export default EndpointDisplay;
