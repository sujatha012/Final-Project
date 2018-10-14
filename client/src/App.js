import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import {setCurrentUser} from "./actions/authactions"
import store from "./store";
import Navbar from "./components/Layout/Navbar/Navbar";
import Footer from "./components/Layout/Footer/Footer";
// import Landing from "./components/Layout/Landing/Landing";
import Login from "././components/auth/Login/Login";
import Register from "././components/auth/Register/Register";
import Services from "./pages/Services";
import About from "./pages/About";
import Checkout from "./pages/Checkout";

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
      <Provider store = { store } >
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={About} />
            <div className="Container">
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/about" component={About} />
              <Route exact path="/services" component={Services} />
              <Route exact path="/checkout" component={Checkout} />
            </div>
            <Footer/>
            </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
