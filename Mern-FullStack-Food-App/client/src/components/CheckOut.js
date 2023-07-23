import React from "react";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from 'react-stripe-checkout'
import { placeOrder } from "../actions/OrderAction";
import Loading from "../components/Loading";
import Success from "../components/Success";
import Error from "../components/Error";


function CheckOut({subTotal}){

    const orderState = useSelector((state)=> state.placeOrderReducer)
    const {loading, error, success}=orderState

    const dispatch = useDispatch()
    function tokenHander(token){
        console.log(token)
        dispatch(placeOrder(token, subTotal))
    }
    return(
        <div>
            { loading &&  (<Loading/>)}
            {error&&(<Error message= {error}/>)}
            {success&&( <Success/>)}
           <StripeCheckout
            amount={subTotal}
            shippingAddress
            token={tokenHander}
            stripeKey="pk_test_51NWi3fSBLKizpGFDr0K8G2Dj0E1WDt4EItCsQauaiEjaA20SZj3mOQPqVrEyZzgqC9z2C59JCPYobMyJ4JWwAjc000zNFzAuD2"
            currency="INR"
           >
            <button>
                Pay Now
            </button>
           </StripeCheckout>
        </div>
    )
}
export default CheckOut;