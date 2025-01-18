import React, { useState } from 'react';
import './NavBar.css';
import Logo from '../../assets/Logo.png';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
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

      
      {isMenuOpen && (
  <div className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`}>
    <div className="close-icon" onClick={closeMenu}>
      &#10005; 
    </div>
    <ul className="hamburger-menu-list">
      <li><a href="/">HOME</a></li>
      <li><a href="/">SERVICES</a></li>
      <li><a href="/about">ABOUT US</a></li>
      <li><a href="/services">CONTACT US</a></li>
      <li><a href="/contact">CAREERS</a></li>
    </ul>
  </div>
)}

    </nav>
  );
};

export default NavBar;
