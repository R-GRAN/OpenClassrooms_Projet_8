function HeaderApp() {
  return (
    <header className="header-style">
      <span>Rémy Grangenois</span>
      <button className="header-btn-sm-menu" aria-label="menu">
        <i className="fa-solid fa-bars"></i>
      </button>
      <nav className="header-nav">
        <ul className="header-menu">
          <li>
            <a href="#presentation">Présentation</a>
          </li>
          <li>
            <a href="#skills">Compétences</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderApp;
