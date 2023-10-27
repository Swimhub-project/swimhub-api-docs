import { ObjectData } from '../utils/types/objectType';

interface Props {
  data: ObjectData;
}

const ObjectDisplay = ({ data }: Props) => {
  return (
    <article id={data.id}>
      <h2>{data.name}</h2>
    </article>
  );
};

export default ObjectDisplay;
