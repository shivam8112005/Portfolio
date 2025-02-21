import ButtonGradient from "./assets/svg/ButtonGradient";
import Projects from "./componenets/Projects";
import Footer from "./componenets/Footer";
import Header from "./componenets/Header";
import Hero from "./componenets/Hero";
import About from "./componenets/About";
import Experience from "./componenets/Experience";
import ContactMe from "./componenets/ContactMe";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Header />
        <Routes>
          <Route path="/" element={<Hero />}/>
          <Route path="/aboutme" element={<About />}/>
          <Route path="/experience" element={<Experience/>}/>
          <Route path="/projects" element={<Projects />}/>
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
