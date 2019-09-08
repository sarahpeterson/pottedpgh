import React from 'react';
import './App.css';

// add highlight and link to menu
// install jquery for highlight and scroll
// change width of links in menu
// add form
// need copy
// fix txt verify

function App() {
  return (
    <div className="App">
      <header className="potted-header">
        <link href="https://fonts.googleapis.com/css?family=Staatliches&display=swap" rel="stylesheet" />
        <div className="header-div">
          <a href="#about" className="header-link">
            <p>ABOUT</p>
          </a>
        </div>
        <div className="header-div">
          <a href="#home" className="header-link potted">
            <p>POTTED</p>
          </a>
        </div>
        <div className="header-div">
          <a href="#contact" className="header-link">
            <p>CONTACT US!</p>
          </a>
        </div>
      </header>
      <div id="home" />
      <div className="background">
        <div className="curated">
          <p>Curated interior plant design</p>
        </div>
        <div className="curated">
          <p>that makes your space feel</p>
        </div>
        <div className="curated">
          <p>healthy, happy and genuinely you</p>
        </div>
      </div>
      <div className="main">
        <div className="about">
          <div className="about-text">
          <div id="about" />
            <div className="about-text-p">
              <p>about</p>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque feugiat varius dictum. Etiam eget consectetur ligula, id consectetur mi. Cras nibh libero, hendrerit id mollis dictum, fringilla in purus. Etiam commodo tincidunt porttitor.</p>
          </div>
          <div className="woman" />
        </div>
        <div className="contact">
          <div className="contact-text">
            <div className="contact-text-p">
              <p>contact us</p>
            </div>
            <p>Interested in your own specialized interior plant design? shoot us an email, instagram dm or fill out the  form below to get started today!</p>
          </div>
          <div id="contact" />
          <p>FORM</p>
        </div>
      </div>
    </div>
  );
}

export default App;
