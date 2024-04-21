function Project({ project, index }) {
  return (
    <article className={index % 2 === 0 ? "project" : "project light-reverse"}>
      <div className="project-img-container">
        <img
          className="project-img"
          src={project.imageUrl}
          alt={"visuel du projet " + project.title}
        />
      </div>

      <div className="project-block">
        <h4>{project.title}</h4>
        <p>{project.category}</p>

        <p>{project.description}</p>
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
          Consulter le code
        </a>
      </div>
    </article>
  );
}

export default Project;
