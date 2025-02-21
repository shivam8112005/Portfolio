import React, { useState, useEffect } from "react";

const GitHubRepos = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/shivam8112005/repos")
      .then((response) => response.json())
      .then((data) => {
        // Sort by latest updated repos
        const sortedRepos = data.sort(
          (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
        );
        setRepos(sortedRepos.slice(0, 6)); // Show only latest 6 repos
      })
      .catch((error) => console.error("Error fetching repos:", error));
  }, []);

  return (
    <div className="p-4 bg-gray-900 text-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Latest GitHub Repositories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {repos.map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition"
          >
            <h3 className="text-lg font-semibold">{repo.name}</h3>
            <p className="text-sm text-gray-400">{repo.description || "No description"}</p>
            <div className="text-xs mt-2 text-gray-500">
              ⭐ {repo.stargazers_count} | 🍴 {repo.forks_count}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default GitHubRepos;
