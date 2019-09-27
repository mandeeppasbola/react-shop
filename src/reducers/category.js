import * as type from '../actions/types';
import { categoryInitialState } from './initialState';

const categoryReducer = (state = categoryInitialState, action) => {
  switch (action.type) {
    case type.SET_CATEGORY:
      return { category: action.payload }
    default:
      return state;
  }
}

export default categoryReducer;