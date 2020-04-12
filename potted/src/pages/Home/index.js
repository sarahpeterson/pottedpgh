import React, { Component } from 'react';
import Header from './Components/Header.js';
import Feature from './Components/Feature.js';
import About from './Components/About.js';
import Contact from './Components/Contact.js';
import Form from './Components/Form.js';
import './home.css';

class Home extends Component {
	render() {
		return (
      <div>
        <Header />
        <Feature />
        <div className="main">
          <About />
          <div className="contact" id="contact">
						<Contact />
            <Form />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
