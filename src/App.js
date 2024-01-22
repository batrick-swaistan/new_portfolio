import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import SocialLinks from './components/SocialLinks';
import './index.css';

function App() {
  return (
    <div >
      <NavBar />
      <Home />
      <About /> 
      <Portfolio />
      <Skills />
      <Contact />

      <SocialLinks />
      <Footer />
    </div>
  );
}

export default App;
