import React from 'react';
import './App.css';

// need copy
// fix txt verify
// undo menu highlight after scroll
// add font awesome icons
// add content for error pages

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
          <form className="form" id="contact">
            <div className="form-div">
              <p className="form-text">
                Name:
              </p>
              <input type="text" name="email" />
            </div>
            <div className="form-div">
              <p className="form-text">
                Email:
              </p>
              <input type="text" name="email" />
            </div>
            <div className="form-div help">
              <p className="form-text">
                What Can We Help You With?:
              </p>
              <input type="text" name="lastname" />
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
