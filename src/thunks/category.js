import { getCategoryApi } from '../api';
import { setCategoryAction } from '../actions';

export const getCategoryThunk = () => {
  return (dispatch) => {
    getCategoryApi().then((categoryArr) => {
      dispatch(setCategoryAction(categoryArr));
    });
  }
}