import SyntaxHighlighter from 'react-syntax-highlighter';
import { EndpointData } from '../../utils/types/endpointType';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface Props {
  data: EndpointData;
}

const EndpointDisplay = ({ data }: Props) => {
  return (
    <article id={data.id} className="endpoint-article">
      <div className="col-full">
        <h2>{data.name}</h2>
        <p>
          URL: <strong>{data.url}</strong>
        </p>
        <p>
          Available to <strong>{data.availableTo}</strong>
        </p>
      </div>
      <div className="col-left">
        <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
        {data.urlParams && (
          <div>
            <h3>URL Parameters</h3>
            <ul>
              {data.urlParams.map((item) => (
                <li>
                  <span className="name">{item.name}</span>
                  <span className="type">{item.type}</span>
                  <p className="required">{item.required ? 'REQUIRED' : ''}</p>
                  <div
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  ></div>
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
                  <span className="name">{item.name}</span>
                  <span className="type">{item.type}</span>
                  <p className="required">{item.required ? 'REQUIRED' : ''}</p>
                  <div
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  ></div>
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
          <div className="object-display-inner">
            <pre>{data.exampleRes}</pre>
          </div>
        </div>
      </div>
    </article>
  );
};

export default EndpointDisplay;
