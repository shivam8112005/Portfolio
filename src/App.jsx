import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./componenets/Benefits";
import Collaboration from "./componenets/Collaboration";
import Footer from "./componenets/Footer";
import Header from "./componenets/Header";
import Hero from "./componenets/Hero";
import Pricing from "./componenets/Pricing";
import Roadmap from "./componenets/Roadmap";
import Services from "./componenets/Services";
import Experience from "./componenets/Experience";
import Skills from "./componenets/Skills";
import ContactMe from "./componenets/ContactMe";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Header />
        <Routes>
          <Route path="/" element={<Hero />}/>
          <Route path="/aboutme" element={<Roadmap />}/>
          <Route path="/experience" element={<Experience/>}/>
          <Route path="/projects" element={<Benefits />}/>
          <Route path="/contact" element={<ContactMe/>}/>
          
        
        {/* <Hero />
        
        <Experience/>
        <Skills/>
         */}
        
      
        </Routes>
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
