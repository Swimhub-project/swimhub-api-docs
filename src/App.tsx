import Section from './components/Section';
import SideNav from './components/SideNav';
import { sections } from './utils/data/sections';

const App = () => {
  return (
    <>
      <h1>Swimhub API reference documentation</h1>
      <p>Written by Warren Hawker</p>
      <SideNav />
      <main>
        {sections.map((section, index) => (
          <Section key={index} data={section} />
        ))}
      </main>
    </>
  );
};

export default App;
