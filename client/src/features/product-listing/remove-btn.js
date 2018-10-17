import React from "react"

export default function RemoveButton(props) {
    return <button type="button" class="btn btn-sm btn-outline-danger"
    onClick={() => props.removeFromCart(props.cartItem)}
    >Remove</button>
}
