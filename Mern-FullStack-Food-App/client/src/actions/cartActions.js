export const addToCart = (burger, quantity) => (dispatch, getState) => {
  var cartItem = {
    name: burger.name,
    _id: burger._id,
    Price: burger.price + quantity,
    quantity: Number(quantity),
    image: burger.image,
  };

  if (cartItem.quantity > 10) {
    alert("Sorry! You cannot add more than 10 quantity");
  } else {
    if (cartItem.quantity <= 0) {
      dispatch({ type: "DELETE_FROM_CART", payload: burger });
    } else {
      dispatch({ type: "ADD_TO_CART", payload: cartItem });
    }
  }

  const cartItems = getState().cartReducer.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const deleteFromCart = (burger) => (dispatch, getState) => {
  const cartItems = getState().cartReducer.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
