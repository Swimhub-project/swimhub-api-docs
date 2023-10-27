import Footer from './components/Footer';
import Header from './components/Header';
import Section from './components/Section';
import SideNav from './components/SideNav';
import { sections } from './utils/data/sections';

const App = () => {
  return (
    <>
      <Header />
      <SideNav />
      <main>
        {sections.map((section, index) => (
          <Section key={index} data={section} />
        ))}
      </main>
      <Footer />
    </>
  );
};

export default App;
