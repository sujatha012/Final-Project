import React, { Component } from "react";
import ProductListing from "../../features/product-listing/index";
import data from "../../data/products.json"
import {Link} from "react-router-dom";



class Services extends Component {
  render() {
    return (
      <div>
        <ProductListing products={data} />
         <div className="buton">
          <Link to="/login" 
          className="btn btn-lg mr-2">
          Log in to order
          </Link>
          <Link to="/register" 
          className="btn btn-lg mr-2">
          New Members? Register
          </Link>
          </div>
          
      </div>
    );
  }
}

export default Services;
