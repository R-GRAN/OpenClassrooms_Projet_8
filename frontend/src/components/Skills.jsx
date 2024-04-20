function Skills() {
  return (
    <section className="skills" id="skills">
      <h3>Mes compétences</h3>
      <div className="skills-lists">
        <article className="skills-article">
          <div className="skill-title">
            <i className="skills-icon fa-solid fa-display"></i>
            <h4>Front-end</h4>
          </div>
          <div className="skill-details">
            <ul>
              <li>Html5</li>
              <li>CSS / Sass</li>
              <li>JavaScript</li>
              <li>React</li>
            </ul>
          </div>
        </article>
        <article className="skills-article">
          <div className="skill-title">
            <i className="skills-icon fa-solid fa-server"></i>
            <h4>Back-end</h4>
          </div>

          <div className="skill-details">
            <ul>
              <li>NodeJS</li>
              <li>Express</li>
              <li>MongoDB</li>
            </ul>
          </div>
        </article>
        <article className="skills-article">
          <div className="skill-title">
            <i className="skills-icon fa-solid fa-screwdriver-wrench"></i>
            <h4>Outils</h4>
          </div>
          <div className="skill-details">
            <ul>
              <li>VS Code</li>
              <li>Figma</li>
              <li>Git</li>
              <li>Github</li>
              <li>Postman</li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Skills;
