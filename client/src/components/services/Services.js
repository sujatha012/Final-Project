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
            <Link to="/Services" 
            className="btn btn-success">
            Keep Shopping
            </Link>
            <Link to="/Register" 
            className="btn btn-success">
            SignUp/Login
            </Link>
            <Link to="/checkout" 
            className="btn btn-success">
            Continue as guest
            </Link>
            

            
        </div>
          
      </div>
    );
  }
}

export default Services;
