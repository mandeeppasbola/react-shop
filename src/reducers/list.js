import * as type from '../actions/types';
import { listInitialState } from './initialState';

const listReducer = (state = listInitialState, action) => {
  switch (action.type) {
    case type.SET_PRODUCTS:
      return ({
        ...state,
        products: action.payload
      })
    default:
      return state;
  }
}

export default listReducer;