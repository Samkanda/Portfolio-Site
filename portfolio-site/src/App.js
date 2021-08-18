import Contact from './components/Contact';
import Navb from './components/Navb';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainSection from './components/MainSection';
import AboutSection from './components/AboutSection';
import TableSection from './components/TableSection';
import ProjectSection from './components/ProjectSection';
function App() {
  return (
    <div className="App">
      <Navb/>
      <Contact/>
      <MainSection/>
      <AboutSection/>
      <TableSection/>
      <ProjectSection/>
    </div>
  );
}

export default App;
