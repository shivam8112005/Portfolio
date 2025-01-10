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

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Roadmap />
        <Experience/>
        <Skills/>
        <Benefits />
        {/* <Collaboration /> */}
        {/* <Services /> */}
        {/* <Pricing /> */}
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
