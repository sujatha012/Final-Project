import React, { Component } from 'react'
import {Link} from "react-router-dom";
import './Landing.css';

export default class Landing extends Component {
  render() {
    return (
      <div>
        <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4"> We Believe in The Magic of Wrapping!
                </h1>
                <p className="lead">
                <p>With the holiday seasons right around the corner let us help you, and put your mind at ease.  Bring your gifts to us 
                  and we will wrap it up for you. We have been doing this for over 25 years. We are the best in the business.</p>

                <p>Our biggest goal is to help you take the stress and worry out of gift presentation so you can focus on the things in 
                  your life that really matter.  We are here to bring your ideas to life.</p>

                <p>Now That’s a wrap!</p>
                </p>
                <hr />
                <Link to="/services" 
                className="btn btn-lg mr-2">
                Check our Services
                </Link>
              
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    )
  }
}





