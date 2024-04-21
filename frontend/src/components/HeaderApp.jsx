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
      <a href="#home">Rémy Grangenois</a>
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
            <a href="#presentation" onClick={toggleMenu}>Présentation</a>
          </li>
          <li>
            <a href="#skills" onClick={toggleMenu}>Compétences</a>
          </li>
          <li>
            <a href="#portfolio" onClick={toggleMenu}>Portfolio</a>
          </li>
          <li>
            <a href="#contact" onClick={toggleMenu}>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderApp;
