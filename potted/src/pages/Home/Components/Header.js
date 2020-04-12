import React from 'react';
import '../home.css';

const scrollSmoothTo = (elementId) => {
  var element = document.getElementById(elementId);
  element.scrollIntoView({
    block: 'start',
    behavior: 'smooth'
  });
}

const Header = () => (
  <div>
    <header className="potted-header">
      <div className="header-div">
        <div onClick={() => scrollSmoothTo('about')} className="header-link" id="about-link">
          <p id="about-link-p">ABOUT</p>
        </div>
      </div>
      <div className="header-div">
        <a href="/" className="header-link potted" id="potted">
          <p>POTTED</p>
        </a>
      </div>
      <div className="header-div">
        <div onClick={() => scrollSmoothTo('contact')} className="header-link" id="contact-link">
          <p id="contact-link-p">CONTACT US!</p>
        </div>
      </div>
    </header>
    <div />
  </div>
);

export default Header;
