import * as type from '../actions/types';
import { favInitialState } from './initialState';

const favReducer = (state = favInitialState, action) => {
  switch (action.type) {
    case type.SET_FAV:
      return { fav: action.payload }
    case type.ADD_TO_FAV:
      return { fav: [...state.fav, action.payload] }
    case type.REMOVE_FROM_FAV:
      return { fav: state.fav.filter((product) => product.skuId !== action.payload) }
    default:
      return state;
  }
}

export default favReducer;