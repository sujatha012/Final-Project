import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from "react-router-dom";

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import {setCurrentUser} from "./actions/authactions"
import store from "./store";
import Navbar from "./components/Layout/Navbar/Navbar";
import Footer from "./components/Layout/Footer/Footer";
// import Landing from "./components/Layout/Landing/Landing";
import Login from "././components/auth/Login/Login";
import Services from "../src/components/services/Services";
import Checkout from "../src/components/checkout/Checkout";
import Register from "././components/auth/Register/Register";
import About from "././components/About"
import Complete from "././components/Complete"
// import Countdown from '././components/Countdown';

import './App.css';

//Check for token (to prevent user being logged out on page refresh)
if(localStorage.jwtToken){
  //set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // decode the token and get user info and expiration(1 hr)
  const decoded = jwt_decode(localStorage.jwtToken);
  //set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

}

class App extends Component {
  render() {
   
    return (
      <Router>
          <div className="App">
            <Navbar />
            
            <Route exact path="/" component={About} />
            {/* <Route exact path="/landing" component={Landing} /> */}
            <Route exact path="/services" component={Services} />
           
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/order" component={Complete} />
            <Footer/>
            </div>
        </Router>
    );
  }
}

export default App;
