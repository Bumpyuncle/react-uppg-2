import React, { useState } from 'react';
import '../styles/Heade.css'; 


function Heade() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="main-heade">
      <div className="header-top">
       <h1 className="main-title">F25D BORÅS YH - REACT KURS</h1>
        <button className="menu-button" onClick={toggleMenu}>
          ☰ Meny
        </button>
      </div>

      {isMenuOpen && (
        <nav className="dropdown-menu">
          <ul>
            <li><a href="#uppgift2">Uppgift 2</a></li>
            <li><a href="#uppgift3">Uppgift 3</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Heade;
