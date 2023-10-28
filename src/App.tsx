import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Section from './components/main content/Section';
import SideNav from './components/sidenav/SideNav';
import { sections } from './utils/data/sections';

const App = () => {
  return (
    <>
      <Header />
      <div className="content">
        <SideNav />
        <main>
          {sections.map((section, index) => (
            <Section key={index} data={section} />
          ))}
        </main>
      </div>
      <Footer />
    </>
  );
};

export default App;
