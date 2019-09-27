import { addToFavApi, removeFromFavApi, getProductsApi } from '../api';
import {
  setFavAction, addToFavAction, removeFromFavAction,
  addToUserFavAction, removeFromUserFavAction,
  setNotificationAction
} from '../actions'
import { notifications } from '../constants';

export const getFavThunk = (skuIdArr) => {
  return (dispatch) => {
    getProductsApi({ skuIdArr }).then((productArr) => {
      dispatch(setFavAction(productArr));
    });
  }
}

export const addToFavThunk = (product, showNotification) => {
  return (dispatch) => {
    addToFavApi(product.skuId).then(() => {
      dispatch(addToUserFavAction(product.skuId));
      dispatch(addToFavAction(product));
      if (showNotification) {
        dispatch(setNotificationAction(notifications.addToFavSuccess));
      }
    });
  }
}

export const removeFromFavThunk = (skuId, showNotification) => {
  return (dispatch) => {
    removeFromFavApi(skuId).then(() => {
      dispatch(removeFromUserFavAction(skuId));
      dispatch(removeFromFavAction(skuId));
      if (showNotification) {
        dispatch(setNotificationAction(notifications.removeFromFavSuccess));
      }
    });
  }
}