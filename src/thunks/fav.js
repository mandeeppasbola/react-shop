import { addToFavApi, removeFromFavApi, getProductsApi } from '../api';
import {
  setFavAction, addToFavAction, removeFromFavAction,
  addToUserFavAction, removeFromUserFavAction
} from '../actions'

export const getFavThunk = (skuIdArr) => {
  return (dispatch) => {
    getProductsApi({ skuIdArr }).then((productArr) => {
      dispatch(setFavAction(productArr));
    });
  }
}

export const addToFavThunk = (skuId) => {
  return (dispatch) => {
    addToFavApi(skuId).then(() => {
      dispatch(addToUserFavAction(skuId));
      dispatch(addToFavAction(skuId));
    });
  }
}

export const removeFromFavThunk = (skuId) => {
  return (dispatch) => {
    removeFromFavApi().then(() => {
      dispatch(removeFromUserFavAction(skuId));
      dispatch(removeFromFavAction(skuId));
    });
  }
}