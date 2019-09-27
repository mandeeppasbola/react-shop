import * as type from './types';

export const setCartAction = (products) => {
  return (
    {
      type: type.SET_CART,
      payload: products
    }
  )
}

export const addToCartAction = (product) => {
  return (
    {
      type: type.ADD_TO_CART,
      payload: product
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
