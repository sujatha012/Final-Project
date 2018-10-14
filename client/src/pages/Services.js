import React, { Component } from "react";
import ProductListing from "../features/product-listing"
import data from "../data/products"

class Services extends Component {
  render() {
    return (
      <div>
        <br />
        <ProductListing products={data} />
      </div>
    );
  }
}

export default Services;
