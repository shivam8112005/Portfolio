
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { X } from "lucide-react"; // Close icon

const Modal = ({ repoStats, onClose }) => {
  const [readme, setReadme] = useState("");

  console.log(repoStats);
  useEffect(() => {
    const fetchReadme = async () => {
      if (!repoStats || !repoStats.link) return;

      try {
        // Extract repo owner and name from the GitHub link
        
        const urlParts = repoStats.link.split("/");
        const owner = urlParts[3];
        const repo = urlParts[4];

        const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/readme`);
        const data = await response.json();
        if (data.download_url) {
            console.log("download url");
            
          const rawReadme = await fetch(data.download_url);
          const text = await rawReadme.text();
          setReadme(text);
        } else {
          setReadme("README not found.");
        }
      } catch (error) {
        console.error("Error fetching README:", error);
        setReadme("Failed to load README.");
      }
    };

    fetchReadme();
  }, [repoStats]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
      <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg max-w-2xl w-full relative">
        {/* Close Button */}
        <button className="absolute top-4 right-4 text-white" onClick={onClose}>
          <X size={24} />
        </button>

        <h2 className="text-xl font-bold mb-4">{repoStats.name}</h2>
        <p><strong>⭐ Stars:</strong> {repoStats.stars}</p>
        <p><strong>🍴 Forks:</strong> {repoStats.forks}</p>
        <p><strong>🐛 Open Issues:</strong> {repoStats.issues}</p>
        <p><strong>👀 Watchers:</strong> {repoStats.watchers}</p>
        <p><strong>🔤 Language:</strong> {repoStats.language}</p>

        {/* README Section */}
        <h3 className="text-lg font-semibold mt-6">README.md</h3>
        <div className="mt-2 p-3 bg-gray-800 rounded-md max-h-60 overflow-y-auto">
          {readme ? <ReactMarkdown>{readme}</ReactMarkdown> : <p>Loading README...</p>}
        </div>

        <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;

