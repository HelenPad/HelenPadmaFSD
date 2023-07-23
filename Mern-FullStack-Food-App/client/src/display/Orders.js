import React, { StaticLifecycle, useEffect } from "react";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { getUserOrders } from "../actions/OrderAction";
import Loading from "../components/Loading";
import Error from "../components/Error";

export default function Order() {
  const dispatch = useDispatch();
  const orderState = useSelector((state) => state.getUserOrdersReducers);
  const { orders, error, loading } = orderState;
  useEffect(() => {
    dispatch(getUserOrders());
  });
  return (
    <div>
      <h2 style={{ fontSize: "35px" }}>Your Orders</h2>
      <hr/>
      <div className="row justify-content-center">
        {loading && <Loading />}
        {error && <Error error="Something went wrong" />}
        {orders &&
          orders.map((order) => {
            return (
              <div
                className="col-md-8"
                style={{ backgroundColor: "red", color: "white" }}
              >
                <div className="flex-container">
                  <div className="text-left w-100 m-1">
                    <h2 style={{ fontSize: "25px" }}>Items</h2>
                    <hr />
                    {order.orderItems.map((item) => {
                      return (
                        <div>
                          <p>
                            {item.name}* {item.quantity} = {item.price}{" "}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                  <div className="text-left w-100 m-1">
                    <p style={{ fontSize: "25px" }}>Address</p>
                    <hr />
                    <p>Street: {order.shippingAddress.street}</p>
                    <p>City: {order.shippingAddress.city}</p>
                    <p>Country: {order.shippingAddress.country}</p>
                    <p>Pincode: {order.shippingAddress.pincode}</p>
                  </div>
                  <div className="text-left w-100 m-1">
                    <h2 style={{ fontSize: "25px" }}>Order Info</h2>
                    <hr />
                    <p> Order Amount: {order.orderAmount}</p>
                    <p> Date: {order.createdAt.subString(0, 10)}</p>
                    <p> Transaction ID: {order.transactionId}</p>
                    <p> Order ID: {order.order._id}</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
