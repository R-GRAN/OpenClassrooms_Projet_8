import { useState, useRef } from "react";

function HeaderApp() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const iconRef = useRef(null);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
    const menu = menuRef.current;
    const icon = iconRef.current;

    if (!isMenuOpen) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-xmark");
    } else {
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
    }

    menu.classList.toggle("active");
  }

  return (
    <header className="header-style">
      <span>Rémy Grangenois</span>
      <button
        className="header-btn-sm-menu"
        aria-label="menu"
        onClick={toggleMenu}
      >
        <i ref={iconRef} className="fa-solid fa-bars"></i>
      </button>
      <nav className="header-nav">
        <ul ref={menuRef} className="header-menu">
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
