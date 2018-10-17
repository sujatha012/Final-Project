import React, { Component } from 'react'
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import{ connect } from "react-redux";
import {logoutUser } from "../../../actions/authactions"

import './Navbar.css';

class Navbar extends Component {
  onLogoutClick(e){
    e.preventDefault();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated, user} = this.props.auth;
    const authLinks =(
      <ul className="navbar-nav ml-auto">
      <li className="nav-item">
          <Link className="nav-link" to="/services">
          Services
          </Link>
      </li>
        <li className="nav-item">
          <Link className="nav-link" to="/services">
          Services
          </Link>
        </li>
        <li>
        <a 
          href = "#" 
          onClick= { this.onLogoutClick.bind(this)} 
          className= "nav-link"
          >
          Logout
        </a>
        </li>
        <li className="nav-item">
             <Link className="nav-link" to="/checkout">
              <i class="fas fa-shopping-cart">Cart</i>
          </Link>
      </li>
                
      </ul>
    );
    const guestLinks =(
      <ul className="navbar-nav ml-auto">
      <li className="nav-item">
          <Link className="nav-link" to="/services">
          Services
          </Link>
      </li>
        <li className="nav-item">
          <Link className="nav-link" to="/register">
          Sign Up
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
          Login
          </Link>
        </li>
      <li className="nav-item">
             <Link className="nav-link" to="/checkout">
              <i class="fas fa-shopping-cart">Cart</i>
          </Link>
      </li>
      </ul>
    );
    return (
      <div>
          <nav className="navbar navbar-expand navbar bg ">
            <Link className="navbar-brand" to="/">
            The Magic of Wrapping
            </Link>
            <div className="collapse navbar-collapse" 
            id="mobile-nav">
            {isAuthenticated ? authLinks : guestLinks}
            </div>
         </nav>
      </div>
      
    );
  }
}
Navbar.PropTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(Navbar);
