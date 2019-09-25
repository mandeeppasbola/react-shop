import { addToCartApi, removeFromCartApi, getProductsApi } from '../api';
import {
  addToCartAction, removeFromCartAction, setCartAction,
  addToUserCartAction, removeFromUserCartAction
} from '../actions'

export const getCartThunk = (skuIdArr) => {
  return (dispatch) => {
    getProductsApi({ skuIdArr }).then((productArr) => {
      dispatch(setCartAction(productArr));
    });
  }
}

export const addToCartThunk = (product) => {
  return (dispatch) => {
    addToCartApi(product.skuId).then(() => {
      dispatch(addToUserCartAction(product.skuId));
      dispatch(addToCartAction(product));
    });
  }
}

export const removeFromCartThunk = (skuId) => {
  return (dispatch) => {
    removeFromCartApi(skuId).then(() => {
      dispatch(removeFromUserCartAction(skuId));
      dispatch(removeFromCartAction(skuId));
    });
  }
}