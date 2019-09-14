import React from 'react';
import './App.css';

// add content for error pages
// add router for instagram and quiz pages
// make this page into components
// gif - fix pot moving
// fix form

function App() {
  return (
    <div className="App" id="app">
      <header className="potted-header">
        <div className="header-div">
          <a href="#about" className="header-link" id="about-link">
            <p id="about-link-p">ABOUT</p>
          </a>
        </div>
        <div className="header-div">
          <a href="#home" className="header-link potted" id="potted">
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
      <div id="home" className="background">
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
        <div className="about" id="about">
          <div className="about-text">
            <div className="about-text-p">
              <p>about</p>
            </div>
            <p>Potted, PGH was born out of a shared passion of its two founders. In the process of filling their own homes with houseplants, they garnered a lot of knowledge about what plants can work best in certain situations. Now, they want to share their joy and knowledge of houseplants with you!</p>
            <p>Indoor plants look great but they can also improve the air quality in your home. Some people say that they can even improve your physical and mental health. It can seem daunting to take on living things in your home and curate your unique plant collection, but, it doesn't have to be! Let the Potted team help you find a plant that fits your needs, whether that be pet safe, low light tolerant, low maintenance, and more.</p>
          </div>
          <div className="woman" />
        </div>
        <div className="contact">
          <div className="contact-text">
            <div className="contact-text-p">
              <p>contact us</p>
            </div>
            <p className="interested">Interested in your own specialized interior plant design? shoot us an email, instagram dm or fill out the  form below to get started today!</p>
          </div>
          <form netlify className="form" id="contact" action="/thanks.html">
            <img src="NewPotGif.gif" alt="houseplant" className="houseplant" />
            <div className="form-div">
              <p className="form-text">
                Name:
              </p>
              <input className="contact-input" type="text" name="email" />
            </div>
            <div className="form-div">
              <p className="form-text">
                Email:
              </p>
              <input className="contact-input" type="text" name="email" />
            </div>
            <div className="form-div help">
              <p className="form-text">
                What Can We Help You With?:
              </p>
              <textarea className="contact-input" rows="10" cols="30" />
            </div>
            <div className="icons">
              <a href="mailto: pottedpgh@gmail.com" className="icon">
                <i className="far fa-envelope fa-3x"></i>
              </a>
              <a href="https://www.instagram.com/pottedpgh/" rel="noopener noreferrer" target="_blank" className="icon">
                <i className="fab fa-instagram fa-3x"></i>
              </a>
            </div>
            <button className="submit-button" type="submit" form="form1" value="Submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
