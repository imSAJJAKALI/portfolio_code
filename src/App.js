import './App.css';
import Skills from './page/Skills';
import { Navbar } from './components/Navbar';
import AboutMe from './page/About';
import Home from './page/Home';
import Project from './page/Project';
import Footer from './page/Footer';
import GitHubStats from './page/Github';




function App() {
  return (
    <div className="App">
  <Navbar/>
  <Home/>
  <AboutMe/>
  <Skills/>
  <Project/>
  <GitHubStats/>
<Footer/>
 
  </div>
 
  );
}

export default App;
