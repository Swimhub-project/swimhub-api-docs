import SyntaxHighlighter from 'react-syntax-highlighter';
import { EndpointData } from '../../utils/types/endpointType';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface Props {
  data: EndpointData;
}

const EndpointDisplay = ({ data }: Props) => {
  return (
    <article id={data.id} className="endpoint-article">
      <div className="col-left">
        <h2>{data.name}</h2>
        <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
        {data.urlParams && (
          <div>
            <h3>URL Parameters</h3>
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
            <h3>Body Parameters</h3>
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
                  <p className="normal">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="returns">
          <h3>Returns</h3>
          <div dangerouslySetInnerHTML={{ __html: data.returns }}></div>
        </div>
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
