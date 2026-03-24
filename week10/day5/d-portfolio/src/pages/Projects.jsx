import ProjectCard from "../components/ProjectCard";

function Projects() {
  const projects = [
    {
      title: "E-Commerce App",
      description: "React + Node full stack store",
      image: "https://via.placeholder.com/300",
      link: "#",
    },
    {
      title: "Voting System",
      description: "Secure online voting platform",
      image: "https://via.placeholder.com/300",
      link: "#",
    },
  ];

  return (
    <section className="projects">
      <h1>My Projects</h1>

      <div className="project-grid">
        {projects.map((proj, index) => (
          <ProjectCard key={index} {...proj} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
