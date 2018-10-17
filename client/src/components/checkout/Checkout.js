import React , {Component} from "react"
import {Elements, StripeProvider} from "react-stripe-elements";
import Cart from "../../features/cart"
import {Link} from "react-router-dom";

import CheckoutForm from "./CheckoutForm";



class Checkout extends Component {
    constructor() {
        super();
        this.state = {stripe: null};
    }
    componentDidMount() {
        if (window.Stripe) {
            this.setState({stripe: window.Stripe('pk_test_YYmTL5Vf3nhVg9Xp5jc6GU3M')});
        } else {
            document.querySelector('#stripe-js').addEventListener('load', () => {
                // Create Stripe instance once Stripe.js loads
                this.setState({stripe: window.Stripe('pk_test_YYmTL5Vf3nhVg9Xp5jc6GU3M')});
            });
        }
    }
    render() {
        return (
        <div className="tableStyle">

                <br />
                <h1>Check Out</h1>
                <br />
                <br />
                <Cart />
                <br />
                <br />
                <br />
                
               
                <StripeProvider stripe={this.state.stripe}>
                    <div className="example">
                        <h2>Payment</h2>
                       
                        <Elements>
                            <CheckoutForm />
                        </Elements>
                    </div>
                </StripeProvider>

            {/* <div className="buton1">
                <Link to="/ordercomplete" 
                className="btn btn-lg btn-success">
                Ready to schedule dropoff? 
                </Link>
            </div> */}
            

        </div>
        );
    }
}

export default Checkout;
