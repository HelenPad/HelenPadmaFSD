import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";
import { deleteFromCart } from "../actions/cartActions";
import CheckOut from "../components/CheckOut";

function Cart() {
  const cartstate = useSelector((state) => state.cartReducer);
  const cartItems = cartstate.cartItems;
  var subtotal = cartItems.reduce((x, item) => x + item.price, 0)
  const dispatch = useDispatch();
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 style={{ fontSize: "35px" }}>Cart</h2>
          {cartItems.map((item) => {
            return (
              <div className="flex-container">
                <div className="text-left m-1 w-100">
                  <h1>{item.name}</h1>
                  <h1>Price:{item.Price}</h1>
                  <h1 style={{ display: "inline" }}>Quantity</h1>
                  <i
                    className="fa fa-plus"
                    aria-hidden="true"
                    onClick={() => {
                      dispatch(addToCart(item, item.quantity + 1));
                    }}
                  ></i>
                  <b>{item.quantity}</b>
                  <i
                    className="fa fa-minus"
                    aria-hidden="true"
                    onClick={() => {
                      dispatch(addToCart(item, item.quantity - 1));
                    }}
                  ></i>
                  <hr />
                </div>
                <div className="m-10 w-100">
                  <img
                    src={item.image}
                    style={{ height: "80px", width: "80px" }}
                  />
                </div>
                <div className="m-10 w-100">
                  <i
                    className="fa fa-trash mt-5"
                    aria-hidden="true"
                    onClick={() => {
                      dispatch(deleteFromCart(item));
                    }}
                  ></i>
                </div>
              </div>
            );
          })}
        </div>
        <div className="col-md-4">
          <h2 style={{fontSize:'45px'}}> Sub Total:{subtotal}/-</h2>
          <CheckOut subtotal={subtotal}/>
        </div>
      </div>
    </div>
  );
}

export default Cart;
