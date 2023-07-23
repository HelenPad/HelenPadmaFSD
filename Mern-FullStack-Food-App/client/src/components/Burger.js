import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";

function Burger({ burger }) {
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();
  function addtocart(burger) {
    dispatch(addToCart(burger, quantity));
    setCart([...cart, burger]);
  }
  return (
    <div className="list shadow-lg p-3 mb-5 bg-white rounded">
      <img src={burger.img} className="img-list" />
      <h1>{burger.name}</h1>
      <p>{burger.description}</p>
      <h4>{burger.caragory}</h4>
      <div className="flex-container">
        <h3>{burger.Price}</h3>
        <button className="btn" onClick={addtocart} disabled={addedToCart}>
          {addedToCart ? "Added to Cart" : "Add to Cart"}
        </button>
        {[...Array().keys()].map((x, i) => {
          return <option value={i + 1}>{i + 1}</option>;
        })}
      </div>
    </div>
  );
}
export default Burger;
