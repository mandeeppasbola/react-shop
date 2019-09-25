import * as type from '../actions/types';
import { savedInitialState } from './initialState';

const savedReducer = (state = savedInitialState, action) => {
  switch (action.type) {
    case type.SET_SAVED:
      return { saved: action.payload }
    case type.ADD_TO_SAVED:
      return { saved: [...state.saved, action.payload] }
    case type.REMOVE_FROM_SAVED:
      return { saved: state.saved.filter((product) => product.skuId !== action.payload) }
    default:
      return state;
  }
}

export default savedReducer;