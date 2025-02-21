import { Link } from "react-router-dom";
import { curve, heroBackground } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import codingGif from "../assets/coding_gif.gif"

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
      <Section className="pt-20 md:pt-32 lg:pt-40 -mt-[1.25rem] lg:-mt-[0] min-h-screen">



      <div className="container relative" ref={parallaxRef}>
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="relative z-1 max-w-full lg:max-w-[50%] text-center lg:text-left mb-12 lg:mb-0">
            <h2 className="h3 mb-4 lg:mb-6">  
              <span className="inline-block relative">
                Shivam Shukla{" "}
                <img
                  src={curve || "/placeholder.svg"}
                  className="absolute top-full left-0 w-full xl:-mt-2"
                  width={624}
                  height={28}
                  alt="Curve"
                />
              </span>
            </h2>
            <h2 className="h3 mb-6">
              Coding Simplicity into Complex Problems&nbsp;
            </h2>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/aboutme">
            <Button white>
              Get started
            </Button>
          </Link>
              <Button href="https://drive.google.com/file/d/1F_5B8uWZbFuMdnc7NuttIPsaMcbDuhN1/view?usp=drive_link">
                Resume
              </Button>
            </div>
          </div>

          <div className="relative mt-6 mx-auto max-w-[80%] sm:max-w-[60%] lg:max-w-[45%]">
            <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
              <div className="relative bg-n-8 rounded-[1rem]">
                <div className="h-[1rem] bg-n-10 rounded-t-[0.5rem]" />
                <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                  <img
                    src={codingGif || "/placeholder.svg"}
                    className="w-full h-full object-cover"
                    alt="Coding"
                  />
                  <ScrollParallax isAbsolutelyPositioned>
                 


<ul className="flex absolute top-4 left-0 px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl sm:left-4 md:-left-[5.5rem] md:bottom-[7.5rem] max-h-[150px] sm:max-h-[120px] md:max-h-[80px]">
  {heroIcons.map((item) => (
    <li className="p-2 sm:p-3 md:p-5" key={item.id}>
      <a href={item.link} target="_blank" rel="noopener noreferrer">
        <img src={item.imgSrc || "/placeholder.svg"} className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" alt="icon" />
      </a>
    </li>
  ))}
</ul>
                  </ScrollParallax>
                </div>
              </div>
              <Gradient />
            </div>
            <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
              <img
                src={heroBackground || "/placeholder.svg"}
                className="w-full"
                width={1440}
                height={1800}
                alt="hero"
              />
            </div>
          </div>
        </div>
      <BackgroundCircles />
      </div>
    
    </Section>
  );
};

export default Hero;