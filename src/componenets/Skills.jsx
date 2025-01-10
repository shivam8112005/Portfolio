import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import java_logo from '../assets/java-logo.png'
import react_logo from '../assets/react_1.png'
import js_logo from '../assets/js_logo.png'
import py_logo from '../assets/py_3.png'
import html_logo from '../assets/html_1.png'
import css_logo from '../assets/css-logo.png'
import bs_logo from '../assets/bs_1.png'
import tc_logo from '../assets/tc_1.png'
import mysql_logo from '../assets/Mysql_logo.png'
import git_logo from '../assets/git_logo.png'
import github from '../assets/github_logo.png'
import vercel from '../assets/vercel_1.jpg'
import Section from "./Section";
import Heading from "./Heading";
const skills = [
    { name: "Javascript", icon: js_logo },
    { name: "Python", icon: py_logo },
    { name: "Java", icon: java_logo },
  { name: "React", icon: react_logo },
  { name: "MySQL", icon: mysql_logo },
  { name: "HTML", icon: html_logo },
  { name: "CSS", icon: css_logo },
  { name: "Tailwind CSS", icon: tc_logo },
  { name: "Bootstrap", icon: bs_logo },
  { name: "Git", icon: git_logo },
  { name: "GitHub", icon: github },
  { name: "Vercel", icon: vercel },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Skills = () => {
  return (


    <Section
    className="pt-[12rem] -mt-[5.25rem] mt-14"
    crosses
    crossesOffset="lg:translate-y-[5.25rem]"
    customPaddings
    id="skills"
  >

<div className="skills-carousel">
       <Heading tag="" title="Skills" />
      <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={2000}>
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="h-20 w-20 mb-2"
            />
            <p className="text-center font-medium">{skill.name}</p>
          </div>
        ))}
      </Carousel>
    </div>


    </Section>
   
  );
};

export default Skills;










// import React from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import java_logo from '../assets/java-logo.png';
// import react_logo from '../assets/react_1.png';
// import js_logo from '../assets/js_logo.png';
// import py_logo from '../assets/py_3.png';
// import html_logo from '../assets/html_1.png';
// import css_logo from '../assets/css-logo.png';
// import bs_logo from '../assets/bs_1.png';
// import tc_logo from '../assets/tc_1.png';
// import mysql_logo from '../assets/Mysql_logo.png';
// import Section from "./Section";
// import Heading from "./Heading";

// const skills = [
//   { name: "Java", icon: java_logo },
//   { name: "Python", icon: py_logo },
//   { name: "Javascript", icon: js_logo },
//   { name: "React", icon: react_logo },
//   { name: "MySQL", icon: mysql_logo },
//   { name: "HTML", icon: html_logo },
//   { name: "CSS", icon: css_logo },
//   { name: "Tailwind CSS", icon: tc_logo },
//   { name: "Bootstrap", icon: bs_logo },
// ];

// const responsive = {
//   superLargeDesktop: {
//     breakpoint: { max: 4000, min: 1024 },
//     items: 5,
//   },
//   desktop: {
//     breakpoint: { max: 1024, min: 768 },
//     items: 4,
//   },
//   tablet: {
//     breakpoint: { max: 768, min: 464 },
//     items: 2,
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//   },
// };

// const Skills = () => {
//   return (
//     <Section
//       className="pt-[12rem] -mt-[5.25rem] mt-14"
//       crosses
//       crossesOffset="lg:translate-y-[5.25rem]"
//       customPaddings
//       id="exp"
//     >
//       <div className="skills-carousel">
//         <Heading tag="" title="Skills" />
//         <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={2000}>
//           {skills.map((skill, index) => (
//             <div
//               key={index}
//               className="flex flex-col items-center justify-center p-4 transform transition-transform duration-300 hover:scale-110 hover:outline hover:outline-2 hover:outline-blue-700 mx-2"
//             >
//               <img
//                 src={skill.icon}
//                 alt={skill.name}
//                 className="h-20 w-20 mb-2"
//               />
//               <p className="text-center font-medium">{skill.name}</p>
//             </div>
//           ))}
//         </Carousel>
//       </div>
//     </Section>
//   );
// };

// export default Skills;
 














// import React from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import java_logo from '../assets/java-logo.png';
// import react_logo from '../assets/react_1.png';
// import js_logo from '../assets/js_logo.png';
// import py_logo from '../assets/py_3.png';
// import html_logo from '../assets/html_1.png';
// import css_logo from '../assets/css-logo.png';
// import bs_logo from '../assets/bs_1.png';
// import tc_logo from '../assets/tc_1.png';
// import mysql_logo from '../assets/Mysql_logo.png';
// import Section from "./Section";
// import Heading from "./Heading";

// const skills = [
//   { name: "Java", icon: java_logo },
//   { name: "Python", icon: py_logo },
//   { name: "Javascript", icon: js_logo },
//   { name: "React", icon: react_logo },
//   { name: "MySQL", icon: mysql_logo },
//   { name: "HTML", icon: html_logo },
//   { name: "CSS", icon: css_logo },
//   { name: "Tailwind CSS", icon: tc_logo },
//   { name: "Bootstrap", icon: bs_logo },
// ];

// const responsive = {
//   superLargeDesktop: {
//     breakpoint: { max: 4000, min: 1024 },
//     items: 5,
//   },
//   desktop: {
//     breakpoint: { max: 1024, min: 768 },
//     items: 4,
//   },
//   tablet: {
//     breakpoint: { max: 768, min: 464 },
//     items: 2,
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//   },
// };

// const Skills = () => {
//   return (
//     <Section
//       className="pt-[12rem] -mt-[5.25rem] mt-14"
//       crosses
//       crossesOffset="lg:translate-y-[5.25rem]"
//       customPaddings
//       id="exp"
//     >
//       <div className="skills-carousel">
//         <Heading tag="" title="Skills" />
//         <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={2000}>
//           {skills.map((skill, index) => (
//             <div
//               key={index}
//               className="flex flex-col items-center justify-center p-2 m-2 transform transition-transform duration-300 hover:scale-110 hover:outline hover:outline-2 hover:outline-blue-700 bg-white rounded-lg shadow-md"
//             >
//               <img
//                 src={skill.icon}
//                 alt={skill.name}
//                 className="h-16 w-16 mb-2" // Smaller icons
//               />
//               <p className="text-center font-medium text-sm">{skill.name}</p> {/* Smaller text */}
//             </div>
//           ))}
//         </Carousel>
//       </div>
//     </Section>
//   );
// };

// export default Skills;

