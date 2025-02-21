// import { benefits } from "../constants";
// import Heading from "./Heading";
// import Section from "./Section";
// import Arrow from "../assets/svg/Arrow";
// import { GradientLight } from "./design/Benefits";
// import ClipPath from "../assets/svg/ClipPath";
// import GitHubRepos from "./GitHubRepos ";
// import GitHubStats from "./GitHubStats ";

// const Benefits = () => {
//   return (
//     <Section
//       className="pt-[12rem] -mt-[5.25rem]"
//       crosses
//       crossesOffset="lg:translate-y-[5.25rem]"
//       customPaddings
//       id="projects"
//     >
//       <div className="container relative z-2">
//         <Heading
//           className="md:max-w-md lg:max-w-2xl"
//           title="Projects"
//         />
//         {/* <GitHubStats/> */}
//         {/* <GitHubRepos/> */}
//         <div className="flex flex-wrap gap-10 mb-10">
//           {benefits.map((item) => (
//             <div
//               className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
//               style={{
//                 backgroundImage: `url(${item.backgroundUrl})`,
//               }}
//               key={item.id}
//             >
//               <div className="relative z-2 flex flex-col min-h-[24rem] p-[2.4rem]">
//                 <h5 className="h5 mb-5">{item.title}</h5>
//                 <p className="body-2 mb-6 text-n-3">{item.text}</p>

//                 {/* Skills Section */}
//                 {item.skills && (
//                   <div className="flex flex-wrap gap-2 mt-4">
//                     {item.skills.map((skill, index) => (
//                       <span
//                         key={index}
//                         className="px-2 py-1 bg-n-2 text-sm text-n-8 rounded-md font-medium"
//                       >
//                         {skill}
//                       </span>
//                     ))}
//                   </div>
//                 )}

//                 <div className="flex items-center mt-auto">
                 
               
//                 <a href={item.link} target="_blank" className="flex items-center mt-auto">
//                 <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
//                     Explore more
//                   </p>
//                   <Arrow />
//                 </a>
             
//                 </div>
//               </div>

//               {item.light && <GradientLight />}

//               <ClipPath />
//             </div>
//           ))}
//         </div>
//       </div>
//     </Section>
//   );
// };

// export default Benefits;






import { useState } from "react";
import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import { X } from "lucide-react";

// Modal Component
const Modal = ({ isOpen, onClose, repoStats }) => {
  if (!isOpen || !repoStats) return null;

  return (
  //   <div className="fixed inset-0 flex items-center justify-center bg-black">
  //   <div className="bg-[#121212] text-white p-6 rounded-lg shadow-2xl max-w-md w-full border border-gray-700 relative">
  //     <h2 className="text-2xl font-semibold mb-4">{repoStats.name} Stats</h2>
      
  //     <div className="space-y-2">
  //       <p><strong>⭐ Stars:</strong> {repoStats.stars}</p>
  //       <p><strong>🍴 Forks:</strong> {repoStats.forks}</p>
  //       <p><strong>🐛 Open Issues:</strong> {repoStats.issues}</p>
  //       <p><strong>👀 Watchers:</strong> {repoStats.watchers}</p>
  //       <p><strong>🔤 Language:</strong> {repoStats.language}</p>
  //     </div>

  //     <button
  //       className="mt-5 w-full py-2 bg-red-600 hover:bg-red-500 text-white font-medium rounded transition duration-200"
  //       onClick={onClose}
  //     >
  //       Close
  //     </button>
  //   </div>
  // </div>


  <div className="fixed inset-0 flex items-center justify-center bg-black">
  {/* Modal Box */}
  <div className="bg-[#1e1e1e] text-white p-6 rounded-lg shadow-2xl max-w-md w-full border border-gray-700 relative">
    <h2 className="text-2xl font-semibold mb-4">{repoStats.name} Stats</h2>

    <div className="space-y-2">
      <p><strong>⭐ Stars:</strong> {repoStats.stars}</p>
      <p><strong>🍴 Forks:</strong> {repoStats.forks}</p>
      <p><strong>🐛 Open Issues:</strong> {repoStats.issues}</p>
      <p><strong>👀 Watchers:</strong> {repoStats.watchers}</p>
      <p><strong>🔤 Language:</strong> {repoStats.language}</p>
    </div>

    <button
      className="mt-5 w-full py-2 bg-red-600 hover:bg-red-500 text-white font-medium rounded transition duration-200"
      onClick={onClose}
    >
      Close
    </button>
  </div>
</div>
  );
};

const Benefits = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [repoStats, setRepoStats] = useState(null);

  const fetchRepoStats = async (repoUrl) => {
    try {
      const repoName = repoUrl.replace("https://github.com/", "");
      const response = await fetch(`https://api.github.com/repos/${repoName}`);
      const data = await response.json();

      setRepoStats({
        name: data.name,
        stars: data.stargazers_count,
        forks: data.forks_count,
        issues: data.open_issues_count,
        watchers: data.watchers_count,
        language: data.language,
      });

      setModalOpen(true);
    } catch (error) {
      console.error("Error fetching repo stats:", error);
    }
  };

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="projects"
    >
      <div className="container relative z-2">
        <Heading className="md:max-w-md lg:max-w-2xl" title="Projects" />

        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{ backgroundImage: `url(${item.backgroundUrl})` }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[24rem] p-[2.4rem]">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>

                {item.skills && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {item.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-n-2 text-sm text-n-8 rounded-md font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex items-center mt-auto">
                  <button
                    onClick={() => fetchRepoStats(item.link)}
                    className="flex items-center mt-auto"
                  >
                    <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                      Explore more
                    </p>
                    <Arrow />
                  </button>
                </div>
              </div>

              {item.light && <GradientLight />}
              <ClipPath />
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Repo Stats */}
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} repoStats={repoStats} />
    </Section>
  );
};

export default Benefits;








