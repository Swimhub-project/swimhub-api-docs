import { SectionData } from '../utils/types/sectionType';

interface Props {
  data: SectionData;
}

const SideNavHeading = ({ data }: Props) => {
  return (
    <li>
      <a href={`#${data.id}`}>{data.name}</a>
      {(data.objects || data.endpoints) && (
        <ul className="nested">
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
