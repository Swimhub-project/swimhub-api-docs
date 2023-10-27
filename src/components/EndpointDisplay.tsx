import { EndpointData } from '../utils/types/endpointType';

interface Props {
  data: EndpointData;
}

const EndpointDisplay = ({ data }: Props) => {
  return (
    <article id={data.id}>
      <h2>{data.name}</h2>
    </article>
  );
};

export default EndpointDisplay;
