const GitHubStats = () => {
    const username = "shivam8112005";
  
    return (
      <div className="flex flex-col items-center justify-center p-4 bg-gray-900 text-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">GitHub Stats</h2>
        <img
          src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=radical`}
          alt="GitHub Stats"
          className="w-full max-w-md"
        />
        <img
          src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=radical`}
          alt="GitHub Streak"
          className="w-full max-w-md mt-4"
        />
      </div>
    );
  };
  
  export default GitHubStats;
  