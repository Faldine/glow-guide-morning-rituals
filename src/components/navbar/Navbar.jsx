
import React, { useState } from 'react';
import '../../styles/components/navbar/Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">
            <span className="logo-text">Glow<span className="logo-accent">Guide</span></span>
          </a>
        </div>
        
        <button className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="toggle-bar"></span>
          <span className="toggle-bar"></span>
          <span className="toggle-bar"></span>
        </button>
        
        <nav className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
          <ul className="navbar-links">
            <li><a href="#routines" className="navbar-link">Routines</a></li>
            <li><a href="#features" className="navbar-link">Fonctionnalités</a></li>
            <li><a href="#" className="navbar-link">Tarifs</a></li>
            <li><a href="#" className="navbar-link">Blog</a></li>
          </ul>
          <div className="navbar-actions">
            <a href="#" className="navbar-link-secondary">Se connecter</a>
            <a href="#" className="navbar-button">S'inscrire</a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
