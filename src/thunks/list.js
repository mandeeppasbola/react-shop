import { getProductsApi } from '../api';
import { setProductsAction } from '../actions'

export const getProductsThunk = (categoryId) => {
  return (dispatch) => {
    getProductsApi(categoryId).then((products) => {
      dispatch(setProductsAction(products));
    });
  }
}