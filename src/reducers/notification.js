import * as type from '../actions/types';
import { notificationInitialState } from './initialState';

const notificationReducer = (state = notificationInitialState, action) => {
  switch (action.type) {
    case type.SET_NOTIFICATION:
      return { ...action.payload }
    case type.REMOVE_NOTIFICATION:
      return { notificationInitialState }
    default:
      return state;
  }
}

export default notificationReducer;