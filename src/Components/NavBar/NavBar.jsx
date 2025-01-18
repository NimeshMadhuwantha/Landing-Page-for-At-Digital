import React, { useState } from 'react';
import './NavBar.css';
import Logo from '../../assets/Logo.png';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={Logo} alt="Logo" />
        </div>
        <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="/">SERVICES</a></li>
          <li><a href="/about">ABOUT US</a></li>
          <li><a href="/services">CONTACT US</a></li>
          <li><a href="/contact">CAREERS</a></li>
        </ul>
        <div className="menu-icon" onClick={toggleMenu}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
