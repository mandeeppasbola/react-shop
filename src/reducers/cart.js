import * as type from '../actions/types';
import { cartInitialState } from './initialState';

const cartReducer = (state = cartInitialState, action) => {
  switch (action.type) {
    case type.SET_CART:
      return { cart: action.payload }
    case type.ADD_TO_CART:
      return { cart: [...state.cart, action.payload] }
    case type.REMOVE_FROM_CART:
      return { cart: state.cart.filter((product) => product.skuId !== action.payload) }
    case type.SET_QUANTITY:
      return {
        cart: state.cart.map((product) => {
          if (product.skuId === action.payload.skuId) {
            product.quantity = action.payload.quantity;
            return product;
          }
          return product;
        })
      }
    default:
      return state;
  }
}

export default cartReducer;