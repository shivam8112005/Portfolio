// Import the images at the top of your file
import card1Image from "../assets/benefits/card-1.png";
import card2Image from "../assets/benefits/card-2.png";
import card3Image from "../assets/benefits/card-3.png";
import card4Image from "../assets/benefits/card-4.png";
import card5Image from "../assets/benefits/card-5.png";
import card6Image from "../assets/benefits/card-6.png";



import linkedin from '../assets/linkedin.png'
import leetcode from '../assets/leetcode.webp'
import github from '../assets/github.png'
import codeforces from '../assets/codeforces.webp'
import gssoc from '../assets/gssoc_logo.png'
import hacktoberfest from '../assets/hacktoberfest_logo.jpg'
// import card1Image from '../assets/benefits/card-1.svg';
// console.log(card1Image);

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "#home",
    id1: "home",
    path:"/"
  },
  {
    id: "1",
    title: "About",
    url: "#about",
    id1: "about",
    path:"/aboutme"
  },
  {
    id: "2",
    title: "Experience",
    url: "#experience",
    id1: "experience",
    path:"/experience"
  },
  
  {
    id: "4",
    title: "Projects",
    url: "#projects",
    id1: "projects",
    path:"/projects"

  },{
    id:"5",
    title: "Contact",
    url: "#contact",
    id1: "contact",
    path:"/contact"
  }
  
];

export const heroIcons = [
  {
    id:"0",
    imgSrc:linkedin, 
    link:"https://www.linkedin.com/in/shivamshukla8112005/",
  },
  
   {
    id:"1",
    imgSrc:leetcode,
    link:"https://leetcode.com/u/shivam811/",
  }, 
  {
    id:"3",
    imgSrc:github,
    link:"https://github.com/shivam8112005",
   },
  {
    id:"2",
    imgSrc:codeforces,
    link:"https://codeforces.com/profile/shivam811",

   },
   
   
  ];





export const roadmap = [
  {
    id: "0",
    title: "Personal Introduction",
    text: "Hi, I'm Shivam Shukla, a second-year AI and Data Science student at LJ University, Ahmedabad. Committed to mastering the craft of coding, I focus on DSA, frontend development, and continuous growth while balancing academics with dedication ferg er gtr g trg trdfvf ver f dsf e f.",
    date: "May 2023",
    status: "done",
    colorful: true,
  },
  {
    id: "1",
    title: "Dedication and Work Ethic",
    text: "I am a relentless learner who never skips a day of coding. I focus on improving myself daily by building new skills and enhancing existing ones while maintaining a strong academic performance with a GPA of 8.5 sgdiuidhwd w dw d w dwdwddwww f rg.",
    date: "May 2023",
    status: "progress",
  },
  {
    id: "2",
    title: "Technical Skills",
    text: "I have hands-on experience with technologies like Java, Python, JavaScript, HTML, and CSS. Additionally, I am proficient in frameworks like React, Pandas, Bootstrap, and Tailwind CSS, enabling me to create robust and dynamic applicationsss.",
    date: "May 2023",
    status: "done",
  },
  {
    id: "3",
    title: "Goals and Aspirations",
    text: "My ultimate goal is to secure a role at a top tech company. I am unwavering in my pursuit of this dream and will continue to push myself until I achieve it sjd we d ew dew f ew f erg rtgtrhtrh tr gtr h t h th tr h trh tr h tr h trh tr h tr hfbew f erfhbergf er  dfv erg erg  .",
    date: "May 2023",
    status: "progress",
    colorful: true
  },
 
];







export const experiences = [
  {
    id: "0",
    title: "Hacktoberfest 2024",
    text: "Contributed 16 PRs during Hacktoberfest, earning the Level 4 badge. Collaborated globally on projects, including Creative Commons, using JS, React, Bootstrap, HTML, and CSS, enhancing teamwork and coding skills.",
    date: "October 2024",
    status: "done",
    imageUrl: hacktoberfest, // Replace with the actual image path or URL
    tags: ["Open Source", "JavaScript", "React", "Git"],
    link: "https://www.holopin.io/hacktoberfest2024/userbadge/cm2mry6j332710clcb36ft6et",
    height:45,
    width:45,
    margin:-4,
  },
  {
    id: "1",
    title: "GirlScript Summer of Code Extd 2024",
    text: "Contributed 31 PRs during GSSoC, earning 1050 points. Worked with JS, React, Bootstrap, HTML, and CSS, gaining open-source experience and collaboration skills.",
    date: "October 2024 – November 2024",
    status: "done",
    imageUrl: gssoc, // Replace with the actual image path or URL
    tags: ["Open Source", "Python", "Django", "GitHub"],
    link: "https://drive.google.com/file/d/1-5kjthnzlzUFLK_CKuX7QWNK8WkXdjmB/view?usp=drive_link",
    height:60,
    width:60,
    margin:-13,

  },
];



export const projects = [
  {
    id: "0",
    title: "Career Analysis System",
    text: "A platform for jobseekers and recruiters to manage profiles, search jobs, Building Resumes and get career recommendations with SHA-256 encryption.",
    backgroundUrl: card1Image,
    iconUrl: "./src/assets/icons/career-icon.svg",
    imageUrl: gssoc,
    skills: ["Java", "MySQL", "OOP", "DBMS", "DS"],
    link: "https://github.com/shivam8112005/java_career_analysis_system",
  },
  {id: "2",
  title: "DataVista",
  text: "A Python-based data analysis tool that enables users to clean, analyze, and visualize large datasets efficiently with EDA, general, and custom insights.",
  backgroundUrl: card4Image,
  iconUrl: "./src/assets/icons/datavista-icon.svg",
  imageUrl: "./src/assets/images/datavista.jpg",
  skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Tabulate", "WordCloud", "EDA"],
  link: "https://github.com/shivam8112005/Data-Analysis"
  ,}
   ,
  {
    id: "2",
    title: "Ticket Booking System",
    text: "A Ticket Booking System with SHA-256 encryption, Multithreading for fetching data, ticket downloads,  and admin management.",
    backgroundUrl: card2Image,
    iconUrl: "./src/assets/icons/ticket-icon.svg",
    imageUrl: "./src/assets/images/ticket-booking.jpg",
    skills: ["Java", "MySQL", "OOP", "DBMS", "DS"],
    light: true,
    link: "https://github.com/shivam8112005/Ticket_Booking_Sytsem",
  },
 
  {
    id: "3",
    title: "GlobeGaze",
    text: "A React-based platform for news across Entertainment, Sports, Technology, Health, Business, Education, and World, using React Router and Bootstrap.",
    backgroundUrl: card4Image,
    iconUrl: "./src/assets/icons/news-icon.svg",
    imageUrl: "./src/assets/images/globegaze.jpg",
    skills: ["React", "React Router", "Bootstrap"],
    light: true,
    link: "https://github.com/shivam8112005/GlobeGaze",
  },
  {
    id: "4",
    title: "CashSwitch",
    text: "A React app to fetch real-time currency exchange rates, styled with Tailwind CSS, using useState and useEffect hooks, with seamless API integration for live data updates",
    backgroundUrl: card5Image,
    iconUrl: "./src/assets/icons/currency-icon.svg",
    imageUrl: "./src/assets/images/cashswitch.jpg",
    skills: ["React", "Tailwind CSS"],
    link: "https://github.com/shivam8112005/CashSwitch",
  },
  {
    id: "5",
    title: "Job Search Portal",
    text: "A Java-based job portal where recruiters post jobs, and jobseekers search, utilizing OOP principles like inheritance, abstraction, and recursion.",
    backgroundUrl: card6Image,
    iconUrl: "./src/assets/icons/jobsearch-icon.svg",
    imageUrl: "./src/assets/images/job-search.jpg",
    skills: ["Java", "OOP"],
    link: "https://github.com/shivam8112005/JAVA_job_search_portal",
  },
];


export const socials = [
 
  {
    id: "1",
    title: "LinkedIn",
    iconUrl: linkedin,
    url: "https://www.linkedin.com/in/shivamshukla8112005/",
  },
  {
    id: "2",
    title: "Leetcode",
    iconUrl: leetcode,
    url: "https://leetcode.com/u/shivam811/",
  },
  {
    id: "3",
    title: "Github",
    iconUrl: github,
    url: "https://github.com/shivam8112005",
  },
  {
    id: "4",
    title: "Codeforces",
    iconUrl: codeforces,
    url: "https://codeforces.com/profile/shivam811",
  },
];





