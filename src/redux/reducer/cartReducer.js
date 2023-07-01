import { ADD_TO_CART, REMOVE_FROM_CART, CHECKOUT } from "../actions/actionsTypes";

const initialState = {
  cartItems: [] // Array to store the cart items
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) { // Access action type using action.type, not action.payload
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload] // Append new item to cartItems array
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload)
      };
    case CHECKOUT:
      return {
        ...state,
        cartItems: [] // Clear the cart after checkout
      };
    default:
      return state;
  }
};

export default cartReducer;
