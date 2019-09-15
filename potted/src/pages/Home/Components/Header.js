import React from 'react';
import '../home.css';

const Header = () => (
  <div>
    <header className="potted-header">
      <div className="header-div">
        <a href="#about" className="header-link" id="about-link">
          <p id="about-link-p">ABOUT</p>
        </a>
      </div>
      <div className="header-div">
        <a href="/" className="header-link potted" id="potted">
          <p>POTTED</p>
        </a>
      </div>
      <div className="header-div">
        <a href="#contact" className="header-link" id="contact-link">
          <p id="contact-link-p">CONTACT US!</p>
        </a>
      </div>
    </header>
    <div />
  </div>
);

export default Header;
