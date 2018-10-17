import React, { Component } from "react";
import ProductListing from "../../features/product-listing/index";
import data from "../../data/products.json"
import {Link} from "react-router-dom";
import services from "./services.css";



class Services extends Component {
  render() {
    return (
      <div>
        
        <ProductListing products={data} />
          <div className="buton">
            <Link to="/login" 
            className="btn btn-success" style={{ marginLeft: 500 }}>
            Log in to proceed
            </Link>
            <Link to="/register" 
            className="btn btn-success"style={{ marginLeft: 10 }}>
            New Members? Register
            </Link>
            <Link to="/checkout" 
            className="btn btn-success"style={{ marginLeft: 10 }}>
             Continue as guest
            </Link>

          </div>
          
      </div>
    );
  }
}

export default Services;
