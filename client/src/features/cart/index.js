import React, {Component}from "react"
import { connect } from "react-redux"
import StripeCheckout from "react-stripe-checkout";
import { Redirect } from 'react-router-dom';

class Cart extends Component {

    state = {
        redirect: false
    }
    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }
    renderRedirect = () => {

    }

    constructor() {
        super();


    }
  sort(items) {

        return items.sort((a, b) => a.id < b.id)
    }

    onToken = (amount) => token =>
    {
        token.amount = amount;
        token.description = "test";

        fetch('/api/payment/charge', {
            method: 'POST',
            body: JSON.stringify(token),
        }).then(response => {
            response.json().then(data => {
                console.log("Success " + JSON.stringify(response));
                this.setRedirect();
            }).catch(err => {
                console.log("Error " + err);
            });

        }).catch(err => {
            console.log("Error " + err);
        })

        ;
    }





    getTotal(items) {
        console.log(document.querySelector("#total"));

        return items.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0) ;

    }


    getPayAmount(amt){
       return amt * 100;

    }


    render(){
        if (this.state.redirect) {
            return <Redirect to='/ordercomplete' />;
        }

        return <div>
            <table>
                <thead>
                <tr>
                    <th></th>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {
                    this.sort(this.props.cart).map(item => <tr key={"row" + item.id}>
                        <td key={item.id}>
                            <img className="img-thumbnail"
                                 title={item.name}
                                 src={item.image}
                            />
                        </td>
                        <td key={item.name}>{item.name}</td>
                        <td key={"qty" + item.id}>{item.quantity}</td>
                        <td key={"cost" + item.quantity * item.price}>${item.price * item.quantity}</td>
                        <td key={"add" + item.id}>
                            <button type="button" class="btn btn-outline-success"
                                    onClick={() => this.props.addToCart(item)}
                            >+
                            </button>
                            <br/>
                        </td>
                        <td key={"rem" + item.id}>
                            <button type="button" class="btn btn-outline-danger"
                                    onClick={() => this.props.removeFromCart(item)}
                            >-
                            </button>
                        </td>
                        <td key={"remAll" + item.id}>
                            <button type="button" class="btn btn-outline-danger"
                                    onClick={() => this.props.removeAllFromCart(item)}
                            >Remove all from cart
                            </button>
                        </td>
                    </tr>)
                }
                <tr>
                    <td id={"total"} key={"Total"} value={this.getTotal(this.props.cart)}>Total : {this.getTotal(this.props.cart)}</td>
                </tr>
                </tbody>
            </table>
            <StripeCheckout
                token={this.onToken(this.getTotal(this.props.cart) * 100)}
                amount={this.getTotal(this.props.cart) * 100} stripeKey="pk_test_YYmTL5Vf3nhVg9Xp5jc6GU3M" billingAddress={true}
                shippingAddress={true} zipCode={true} name={"The Magic of Wrapping"}
            /></div>
    }

}

function mapStateToProps(state) {
    return {
        cart: state.cart,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (item) => {
            dispatch({type: "ADD", payload: item})
        },
        removeFromCart: (item) => {
            dispatch({type: "REMOVE", payload: item})
        },
        removeAllFromCart: (item) => {
            dispatch({type: "REMOVE_ALL", payload: item})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)


