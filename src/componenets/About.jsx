
import Heading from "./Heading";
import Section from "./Section";
import { roadmap } from "../constants";
import { grid } from "../assets";
import { Gradient } from "./design/Roadmap";
import GitHubStats from "./GitHubStats ";

const Roadmap = () => {
  return (
  <Section className="overflow-hidden" id="about">
    <div className="container md:pb-10">
      <Heading title="About Me" />


  <div className="h-screen flex justify-center items-center bg-gray-900">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12 lg:px-20 py-10"> 

  <div className="md:col-span-2 bg-[#1b1e3b] p-6 rounded-xl shadow-lg h-56">
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
  </div>

  <div className="md:row-span-2 bg-[#0e214f] p-6 rounded-xl shadow-lg">
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
    <h2 className="text-xl font-semibold text-gray-200">Dedication and Work Ethic</h2>
    <p className="text-gray-400 mt-2">
      {<GitHubStats/>}
      
    I am a relentless learner who never skips a day of coding. I focus on improving myself daily by building new skills and enhancing existing ones while maintaining a strong academic performance with a GPA of 8.9 
    </p>

  </div>
  </div>
  </div>

  <div className="bg-[#4f390f] p-6 rounded-xl shadow-lg">
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
    <h2 className="text-xl font-semibold text-gray-200">Technical Skills</h2>
    <p className="text-gray-400 mt-2">
    I have hands-on experience with technologies like Java, Python, JavaScript, HTML, and CSS. Additionally, I am proficient in frameworks/libraries like React, Pandas, matplotlib, numpy, Bootstrap, and Tailwind CSS, enabling me to create robust and dynamic applications.
    </p>

  </div>
  </div>
  </div>

  <div className="bg-[#421037] p-6 rounded-xl shadow-lg">
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
    <h2 className="text-xl font-semibold text-gray-200">Goals and Aspirations</h2>
    <p className="text-gray-400 mt-2">
    My ultimate goal is to contribute to the tech world by building innovative and meaningful solutions that can make a real impact. I am passionate about solving problems through technology and continuously improving my skills. I will keep pushing myself until I secure a role at a top tech company.
    </p>

  </div>
  </div>
  </div>
</div>
    </div>






     
    </div>
    
            
    
  </Section>
  );
};

export default Roadmap;



