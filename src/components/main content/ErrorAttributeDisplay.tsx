import { ErrorAttribute } from '../../utils/types/errorType';

interface Props {
  data: ErrorAttribute[];
}

const ErrorAttributeDisplay = ({ data }: Props) => {
  return (
    <article>
      <h3>Attributes</h3>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {
              <p>
                {item.name}
                <span>{item.type}</span>
              </p>
            }
            <p className="required">{item.required ? 'REQUIRED' : ''}</p>
            <div dangerouslySetInnerHTML={{ __html: item.description }}></div>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default ErrorAttributeDisplay;
