import { ErrorAttribute } from '../../utils/types/errorType';

interface Props {
  data: ErrorAttribute[];
}

const ErrorAttributeDisplay = ({ data }: Props) => {
  return (
    <article className="attributes">
      <h2>Attributes</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <span className="name">{item.name}</span>
            <span className="type">{item.type}</span>
            <p className="required">{item.required ? 'REQUIRED' : ''}</p>
            <div dangerouslySetInnerHTML={{ __html: item.description }}></div>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default ErrorAttributeDisplay;
