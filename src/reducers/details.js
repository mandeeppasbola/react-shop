import * as type from '../actions/types';
import { detailsInitialState } from './initialState';

const detailsReducer = (state = detailsInitialState, action) => {
  switch (action.type) {
    case type.SET_PRODUCT:
      return ({
        product: action.payload
      })
    default:
      return state;
  }
}

export default detailsReducer;