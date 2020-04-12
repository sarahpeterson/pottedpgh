import React, { Component } from 'react';
import './notfound.css';

class NotFound extends Component {
	render() {
		return (
			<div className="not-found">
	      <div className="not-found-container">
	        <p className="found">
	          Oops, we couldn't find that!
	        </p>
					<a href="/" className="found-home">
						<p>Home</p>
					</a>
	      </div>
			</div>
    )
  }
}
export default NotFound;
