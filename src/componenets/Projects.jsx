
import { useState } from "react";
import { projects } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Projects";
import ClipPath from "../assets/svg/ClipPath";
import Modal from "./Modal"; // Import Modal component

const Benefits = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [repoStats, setRepoStats] = useState(null);

  // Function to fetch repo stats when clicking "Explore More"
  const fetchRepoStats = async (repoUrl) => {
    try {
      const repoName = repoUrl.split("/").slice(-2).join("/"); // Extract owner/repo from URL
      const response = await fetch(`https://api.github.com/repos/${repoName}`);
      const data = await response.json();

      // Set fetched repo data
      console.log(repoUrl);
      console.log(data.name);
      
      
      setRepoStats({
        name: data.name,
        stars: data.stargazers_count,
        forks: data.forks_count,
        issues: data.open_issues_count,
        watchers: data.watchers_count,
        language: data.language,
        link:repoUrl,
      });

      // Open modal
      setIsModalOpen(true);
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
        
        {/* Projects List */}
        <div className="flex flex-wrap gap-10 mb-10">
          {projects.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{ backgroundImage: `url(${item.backgroundUrl})` }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[24rem] p-[2.4rem]">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>

                {/* Skills Section */}
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

                {/* Explore More Button - Fetch Stats & Open Modal */}
                <div className="flex items-center mt-auto">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      fetchRepoStats(item.link);
                    }}
                    className="flex items-center mt-auto cursor-pointer"
                  >
                    <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                      Explore more
                    </p>
                    <Arrow />
                  </a>
                </div>
              </div>

              {item.light && <GradientLight />}
              <ClipPath />
            </div>
          ))}
        </div>
      </div>

      {/* Modal Component */}
      {isModalOpen && <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} repoStats={repoStats} />}
    </Section>
  );
};

export default Benefits;









