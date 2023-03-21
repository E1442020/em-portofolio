import Header from "./component/Header/Header";
import Navbar from "./component/Navbar/Navbar";
import {Affixx} from "./component/Affix/Affix";
import AboutMe from "./component/AboutMe/AboutMe";
import Skills from "./component/Skills/Skills";
import Education from "./component/Education/Education";
import Portfolio from "./component/My Portofolio/Portfolio";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";


function App() {
  return (
  <>
  <Affixx/>
   <Navbar/>
   <Header/>
   <AboutMe/>
   <Skills/>
   <Education/>
   <Portfolio/>
   <Contact/>
   <Footer/>
   </>
  );
}

export default App;
