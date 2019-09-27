import * as type from '../actions/types';
import { userInitialState } from './initialState';
import { removeFromObject } from '../utilities';

const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case type.SET_USER:
      return { ...state, ...action.payload }
    // Cart    
    case type.ADD_TO_USER_CART:
      return { ...state, cart: { ...state.cart, [action.payload.skuId]: action.payload.quantity } }
    case type.REMOVE_FROM_USER_CART:
      return { ...state, cart: removeFromObject({ ...state.cart }, action.payload) }
    // Fav
    case type.ADD_TO_USER_FAV:
      return { ...state, fav: [...state.fav, action.payload] }
    case type.REMOVE_FROM_USER_FAV:
      return { ...state, fav: state.fav.filter((skuId) => skuId !== action.payload) }
    // Saved
    case type.ADD_TO_USER_SAVED:
      return { ...state, saved: [...state.saved, action.payload] }
    case type.REMOVE_FROM_USER_SAVED:
      return { ...state, saved: state.saved.filter((skuId) => skuId !== action.payload) }
    default:
      return state;
  }
}

export default userReducer;