import React from 'react';
import '../home.css';

const Form = () => (
  <div id="form">
    <form name="contact" className="form" action="/thanks.html" netlify-honeypot="bot-field" method="POST" netlify="true">
      <img src="NewPotGif.gif" alt="houseplant" className="houseplant" />
      <div className="form-div">
        <p className="form-text">
          Name:
        </p>
        <input className="contact-input" type="text" name="name" />
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
        <textarea className="contact-input" rows="10" cols="30" name="message" />
      </div>
      <div className="icons">
        <a href="mailto: admin@pottedpgh.com" className="icon">
          <i className="far fa-envelope fa-3x"></i>
        </a>
        <a href="https://www.instagram.com/pottedpgh/" rel="noopener noreferrer" target="_blank" className="icon">
          <i className="fab fa-instagram fa-3x"></i>
        </a>
        <a href="/thank-you" rel="noopener noreferrer" className="icon">
          <i className="fab fa-instagram fa-3x"></i>
        </a>
      </div>
      <input className="submit-button" type="submit" name="submit" id="name" />
    </form>
  </div>
);

export default Form;
