import { SectionData } from '../utils/types/sectionType';

interface Props {
  data: SectionData;
}

const SideNavHeading = ({ data }: Props) => {
  return (
    <li>
      <ul>
        <a href={`#${data.id}`}>{data.name}</a>
      </ul>
      {(data.objects || data.endpoints) && (
        <ul>
          {data.objects &&
            data.objects.map((item) => (
              <li>
                <a href={`#${item.id}`}>{item.name}</a>
              </li>
            ))}
          {data.endpoints &&
            data.endpoints.map((item) => (
              <li>
                <a href={`#${item.id}`}>{item.name}</a>
              </li>
            ))}
        </ul>
      )}
    </li>
  );
};

export default SideNavHeading;
