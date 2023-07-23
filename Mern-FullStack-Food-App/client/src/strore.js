import {combineReducers} from 'redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getAllBurgersReducers } from './reducers/burgerReducer';
import { cartReducer } from './reducers/cartReducer';
import { registerUserReducer } from './reducers/userReducers';
import { placeOrderReducer, getUserOrdersReducers } from './reducers/orderReducer';

const finalReducer = combineReducers({
    // reducers here
      getAllBurgersReducers : getAllBurgersReducers,
      cartReducer: cartReducer,
      registerUserReducer: registerUserReducer,
      placeOrderReducer : placeOrderReducer,
      getUserOrdersReducers : getUserOrdersReducers
})

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) :[]

const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null

const initialState ={
  cartReducer : {
    cartItems : cartItems
  },
  loginUserReducer : {
    currentUser : currentUser
  }
}

const composeEnhancers = composeWithDevTools({})
const store = createStore(finalReducer, initialState,composeEnhancers(applyMiddleware(thunk)))

export default store;