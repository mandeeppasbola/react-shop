import * as type from './types';

export const setCartAction = (products) => {
  return (
    {
      type: type.SET_CART,
      payload: products
    }
  )
}

export const addToCartAction = (skuId) => {
  return (
    {
      type: type.ADD_TO_CART,
      payload: skuId
    }
  )
}

export const removeFromCartAction = (skuId) => {
  return (
    {
      type: type.REMOVE_FROM_CART,
      payload: skuId
    }
  )
}
