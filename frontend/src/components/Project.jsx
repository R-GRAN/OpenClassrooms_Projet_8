function Project() {
  return (
    <article className="project">
      <div className="project-img-container">
        <img
          className="project-img"
          src={imageUrl}
          alt="visuel du projet"
        />
      </div>

      <div className="project-block">
        <h4>{title}</h4>
        <p>{category}</p>

        <p>
         {description}
        </p>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Consulter le code
        </a>
      </div>
    </article>
  );
}

export default Project;
