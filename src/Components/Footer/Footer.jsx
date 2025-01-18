import React from "react";
import "./Footer.css";
import Logo from "../../assets/logo.png"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
       
        <div className="footer-column">
          <img src={Logo} alt="Logo" className="footer-logo" />
          <p className="footer-description">
            Our goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve single objective - your
            business results.
          </p>
        </div>

        
        <div className="footer-column">
          <h3 className="footer-heading">Our Technologies</h3>
          <ul className="footer-list">
            <li>ReactJS</li>
            <li>Gatsby</li>
            <li>NextJS</li>
            <li>NodeJS</li>
          </ul>
        </div>

       
        <div className="footer-column">
          <h3 className="footer-heading">Our Services</h3>
          <ul className="footer-list">
            <li>Social Media Marketing</li>
            <li>Web & Mobile App Development</li>
            <li>Data & Analytics</li>
          </ul>
        </div>
      </div>

     
      <div className="footer-line"></div>

      
      <div className="footer-bottom">
        <p>Privacy Policy  |  Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
