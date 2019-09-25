import { getDetailsApi } from '../api';
import { setDetailsAction } from '../actions'

export const getDetailsThunk = (skuId) => {
  return (dispatch) => {
    getDetailsApi(skuId).then((productObj) => {
      dispatch(setDetailsAction(productObj));
    });
  }
}