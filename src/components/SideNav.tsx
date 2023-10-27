import { sections } from '../utils/data/sections';
import SideNavHeading from './SideNavHeading';

const SideNav = () => {
  return (
    <aside>
      <nav>
        <ul>
          {sections.map((section, index) => (
            <SideNavHeading key={index} data={section} />
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default SideNav;
