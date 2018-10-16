import React from "react"
<<<<<<< HEAD
import ProductListItem from "./product-list-item"
import { connect } from "react-redux"
import { cartItemsWithQuantity } from "../cart"
=======

import ProductListItem from "./product-list-item"
import { connect } from "react-redux"


>>>>>>> b483ac33eaf4241f78ec7a1262156b5c9e5dd689

function ProductListing(props) {
    return <div className="product-listing">
        {
        props.products.map( product =>
            <ProductListItem 
                product={product}
                addToCart={props.addToCart}
                removeFromCart={props.removeFromCart}
                cartItem={props.cart.filter( cartItem => cartItem.id === product.id)[0]}
<<<<<<< HEAD
=======

>>>>>>> b483ac33eaf4241f78ec7a1262156b5c9e5dd689
            />)
        }
    </div>
}

function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (item) => {
            dispatch({ type: "ADD", payload: item })
        },
        removeFromCart: (item) => {
            dispatch({ type: "REMOVE", payload: item })
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductListing)

