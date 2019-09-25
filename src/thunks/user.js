import { getUserApi } from '../api';
import { setUserAction } from '../actions';

export const getUserThunk = (userId) => {
  return (dispatch) => {
    getUserApi(userId).then((userObj) => {
      dispatch(setUserAction(userObj));
    });
  }
}