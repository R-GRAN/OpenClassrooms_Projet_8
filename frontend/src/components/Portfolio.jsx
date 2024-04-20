import React, { useState, useEffect } from "react";
import Project from "./Project";

function Portfolio() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("http://localhost:4000/api/projects");
        if (!res.ok) {
          throw new Error("Erreur lors de la récupération des données");
        }
        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.error("Erreur fetch:", error);
      }
    };
    fetchProjects();
  }, []);

  console.log(projects);

  return (
    <section className="portfolio" id="portfolio">
      <h3>Portfolio</h3>
      {projects.map((project, index) => (
        <Project key={project.title} project={project}  index={index}/>
      ))}
    </section>
  );
}

export default Portfolio;
