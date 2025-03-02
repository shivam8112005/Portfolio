import React from "react";
import { grid } from "../assets"; // Replace with your grid image path
import Section from "./Section";
import Heading from "./Heading";
import { experiences } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import experienceGif from "../assets/experience_gif.gif" 
import { Gradient } from "./design/Roadmap";
import Button from "./Button";
import Skills from "./Skills";
// import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";

const Experience = () => (
  
  <Section
  className="pt-[12rem] -mt-[5.25rem]"
  crosses
  crossesOffset="lg:translate-y-[5.25rem]"
  customPaddings
  id="experience"
>


  <div className="overflow-hidden mb-15" id="experience">
 

     {/* <div className="absolute">
        <img
          className="w-full h-full object-cover rounded-lg shadow-lg z-0"
          src={grid} // Replace with your image
          alt="Experience Visual"
        />
      </div> */}
        <Heading tag="" title="Experience" />
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Left Image Section */}
      <div className="relative">
        <img
          className="w-full h-full object-cover rounded-lg shadow-lg"
          src={experienceGif} // Replace with your image
          alt="Experience Visual"
        
        />
      </div>

      {/* Right Experience Section */}
      <div className="flex flex-col justify-between">
    

        {/* {experiences.map((item) => (
          <ScrollParallax key={item.id} strength={0.08}>
            <div
                className={`my-7 md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                  item.colorful ? "bg-conic-gradient" : "bg-n-6"
                }`}
                key={item.id}
              >
                <div className="relative p-2 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-4">
                  <img src={item.imageUrl} width={60}
                      height={60} alt="" className="rounded-full"/>
                  <div className="absolute top-0 left-0 max-w-full">
                    <img
                      className=""
                      src={grid}
                      width={550}
                      height={550}
                      alt="Grid"
                    />
                  </div>
                  <div className="relative z-1">
                   
                    <h4 className="h5 mb-4">{item.title}</h4>
                    <p className="body-2 text-n-3">{item.text}</p>
                  </div>
              <Gradient />
                </div>
              </div>
          </ScrollParallax>
        ))} */}





{experiences.map((item) => (
  <ScrollParallax key={item.id} strength={0.12}>
    {/* <div
      className={`my-7 md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
        item.colorful ? "bg-conic-gradient" : "bg-n-6"
      }`}
      key={item.id}
    >
      <div className="relative p-2 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-4">
       <div className="w-full flex justify-between">

     
      <img
          src={item.imageUrl}
          width={item.width}
          height={item.height}
          alt=""
          className={`rounded mx-${item.margin} my-${item.margin}`}
        />
   
       
      
       <a href={item.link}  target="_blank">
          <Button className="hidden lg:flex" >
          Wins
          </Button>

          </a>
      
       
       

       </div>
        {/* <div className="absolute top-0 left-0 max-w-full">
          <img
            className=""
            src={grid}
            
            alt="Grid"
          />
        </div> */}
        {/* <div className="relative z-1">
          Date Section
          <p className={`text-sm text-gray-500 mt-${item.margin}`}>{item.date}</p>
          
          Title
          <h4 className="h5 mb-4">{item.title}</h4>
          
          Description
          <p className="body-2 text-n-3">{item.text}</p>
        </div>
        <Gradient />
      </div>
    </div> */}




    {/* <div className="md:col-span-2 bg-[#1b1e3b] p-6 rounded-xl shadow-lg">
  <div
    key={item.id}
    style={{
      padding: "1px", // Thinner border
      borderRadius: "20px",
      background: item.colorful
        ? "linear-gradient(to right, #0057ff, #ffc107, #ff00aa)"
        : "#1b1e3b",
    }}
  >
    <div
      style={{
        padding: "15px",
        borderRadius: "18px",
        background: "#0a0f1f",
        color: "white",
        textAlign: "center",
      }}
    >
      <div className="w-full flex justify-between">
        <img
          src={item.imageUrl}
          width={item.width}
          height={item.height}
          alt=""
          style={{ borderRadius: "8px", margin: `${item.margin}px` }}
        />
        <a href={item.link} target="_blank">
          <button className="hidden lg:flex bg-blue-500 text-white px-4 py-2 rounded-lg">Wins</button>
        </a>
      </div>
      {/* Date Section 
      <p className="text-sm text-gray-500 mt-2">{item.date}</p>
      Title
      <h4 className="text-xl font-semibold text-gray-200 mb-2">{item.title}</h4>
      Description
      <p className="text-gray-400">{item.text}</p>
    </div>
  </div>
</div> */}



{/* <div className="md:col-span-2 bg-[#1b1e3b] p-6 rounded-xl shadow-lg h-56">
  <div
      key="1"
      style={{
        padding: "1px", // Thinner border
        borderRadius: "20px",
        background:  "linear-gradient(to right, #0057ff, #ffc107, #ff00aa)" , 
      }}
    >
      <div
        style={{
          padding: "15px",
          borderRadius: "18px",
          background: "#0a0f1f",
          color: "white",
          textAlign: "center",
        }}
      >
    <h2 className="text-xl font-semibold text-gray-200">Personal Introduction</h2>
    <p className="text-gray-400 mt-2">
    Hi, I'm Shivam Shukla, a second-year AI and Data Science student at LJ University, Ahmedabad. Committed to mastering the craft of coding, I focus on DSA, data analysis, and machine learning, frontend development. I strive for continuous growth while balancing academics with dedication.
    </p>

  </div>
  </div>
  </div> */}



<div className="md:col-span-2 bg-[#131632] p-6 rounded-xl shadow-lg">
  <div
    key={item.id}
    style={{
      padding: "1px", // Thinner border
      borderRadius: "20px",
      background: "linear-gradient(to right, #0057ff, #ffc107, #ff00aa)",
      marginBottom:"20px",
    }}
  >
    <div
      style={{
        padding: "15px",
        borderRadius: "18px",
        background: "#0a0f1f",
        color: "white",
        textAlign: "center",
      }}
    >
      <div className="w-full flex justify-between">
        <img
          src={item.imageUrl}
          width={item.width}
          height={item.height}
          alt=""
          style={{ borderRadius: "8px", margin: `${item.margin}px` }}
        />
        <a href={item.link} target="_blank" rel="noopener noreferrer"
  className="relative inline-block px-6 py-1 text-[#d1d1d1] font-bold bg-[#1b1b1c] border border-[#0077ff] rounded-lg overflow-hidden transition-all duration-300 hover:text-[#0077ff] before:absolute before:inset-0 before:bg-[#0077ff]/30 before:blur-md before:opacity-0 hover:before:opacity-100 text-center">
  Wins
</a>
      </div>
      {/* Date Section */}
      <p className="text-sm text-gray-500 mt-2">{item.date}</p>
      {/* Title */}
      <h4 className="text-xl font-semibold text-gray-200 mb-2">{item.title}</h4>
      {/* Description */}
      <p className="text-gray-400">{item.text}</p>
    </div>
  </div>
</div>



  </ScrollParallax>
))}



      </div>

      
    </div>
  </div>
 
  {/* </Skills> */}
  <Skills/>
  </Section>
);

export default Experience;

