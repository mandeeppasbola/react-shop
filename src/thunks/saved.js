import { addToSavedApi, removeFromSavedApi, getProductsApi } from '../api';
import {
  addToSavedAction, removeFromSavedAction, setSavedAction,
  addToUserSavedAction, removeFromUserSavedAction
} from '../actions'

export const getSavedThunk = (skuIdArr) => {
  return (dispatch) => {
    getProductsApi({ skuIdArr }).then((productArr) => {
      dispatch(setSavedAction(productArr));
    });
  }
}

export const addToSavedThunk = (product) => {
  return (dispatch) => {
    addToSavedApi(product.skuId).then(() => {
      dispatch(addToUserSavedAction(product.skuId));
      dispatch(addToSavedAction(product));
    });
  }
}

export const removeFromSavedThunk = (skuId) => {
  return (dispatch) => {
    removeFromSavedApi(skuId).then(() => {
      dispatch(removeFromUserSavedAction(skuId));
      dispatch(removeFromSavedAction(skuId));
    });
  }
}