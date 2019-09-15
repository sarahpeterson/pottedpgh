import React from 'react';
import '../home.css';

const Form = () => (
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
);

export default Form;
