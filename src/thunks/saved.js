import { addToSavedApi, removeFromSavedApi, getProductsApi } from '../api';
import {
  addToSavedAction, removeFromSavedAction, setSavedAction,
  addToUserSavedAction, removeFromUserSavedAction,
  setNotificationAction
} from '../actions'
import { notifications } from '../constants';

export const getSavedThunk = (skuIdArr) => {
  return (dispatch) => {
    getProductsApi({ skuIdArr }).then((productArr) => {
      dispatch(setSavedAction(productArr));
    });
  }
}

export const addToSavedThunk = (product, showNotification) => {
  return (dispatch) => {
    addToSavedApi(product.skuId).then(() => {
      dispatch(addToUserSavedAction(product.skuId));
      dispatch(addToSavedAction(product));
      if (showNotification) {
        dispatch(setNotificationAction(notifications.addedToSavedSuccess));
      }
    });
  }
}

export const removeFromSavedThunk = (skuId, showNotification) => {
  return (dispatch) => {
    removeFromSavedApi(skuId).then(() => {
      dispatch(removeFromUserSavedAction(skuId));
      dispatch(removeFromSavedAction(skuId));
      if (showNotification) {
        dispatch(setNotificationAction(notifications.removeFromSavedSuccess));
      }
    });
  }
}