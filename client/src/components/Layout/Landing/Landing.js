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
                <h1 className="display-3 mb-4">Spreading the magic of happiness!
                </h1>
                <p className="lead"></p>
                <hr />
                <Link to="/register" 
                className="btn btn-lg mr-2">
                Sign Up
                </Link>
                <Link to="/login"
                className="btn btn-lg">
                Login
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





