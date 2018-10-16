import React from "react"

export default function AddButton(props) {
    return <button type="button" class="btn btn-success"
    onClick={() => props.addToCart(props.product)}
    >Add to cart ({
        (props.cartItem && props.cartItem.quantity) || 0
    })</button>
<<<<<<< HEAD
}
=======
}
>>>>>>> b483ac33eaf4241f78ec7a1262156b5c9e5dd689
