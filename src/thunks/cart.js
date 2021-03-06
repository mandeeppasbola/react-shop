import { addToCartApi, removeFromCartApi, getProductsApi, setQuantityApi } from '../api';
import {
  addToCartAction, removeFromCartAction, setCartAction,
  addToUserCartAction, removeFromUserCartAction,
  setNotificationAction, setQuantityAction
} from '../actions';
import { notifications } from '../constants';

export const getCartThunk = (userCartObj) => {
  const skuIdArr = Object.keys(userCartObj);
  return (dispatch) => {
    getProductsApi({ skuIdArr }).then((productArr) => {
      const productWithQuantityArr = productArr.map((product) => {
        product.quantity = userCartObj[product.skuId]
        return product;
      })
      console.log(productWithQuantityArr);
      dispatch(setCartAction(productWithQuantityArr));
    });
  }
}

export const addToCartThunk = (product, showNotification) => {
  return (dispatch) => {
    addToCartApi(product.skuId).then(() => {
      dispatch(addToUserCartAction(product));
      dispatch(addToCartAction(product));
      if (showNotification) {
        dispatch(setNotificationAction(notifications.addToCartSuccess));
      }
    });
  }
}

export const removeFromCartThunk = (skuId, showNotification) => {
  return (dispatch) => {
    removeFromCartApi(skuId).then(() => {
      dispatch(removeFromUserCartAction(skuId));
      dispatch(removeFromCartAction(skuId));
      if (showNotification) {
        dispatch(setNotificationAction(notifications.removeFromCartSuccess));
      }
    });
  }
}

export const setQuantityThunk = (skuId, quantity) => {
  return (dispatch) => {
    setQuantityApi(skuId, quantity).then(() => {
      dispatch(setQuantityAction(skuId, quantity));
    });
  }
}