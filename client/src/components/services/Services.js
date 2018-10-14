import React, { Component } from "react";
import ProductListing from "../../features/product-listing/index";
import data from "../../data/products.json"

class Services extends Component {
  render() {
    return (
      <div>
        <ProductListing products={data} />
      </div>
    );
  }
}

export default Services;
