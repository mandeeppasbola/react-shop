import * as type from './types';

export const setFavAction = (products) => {
  return (
    {
      type: type.SET_FAV,
      payload: products
    }
  )
}

export const addToFavAction = (product) => {
  return (
    {
      type: type.ADD_TO_FAV,
      payload: product
    }
  )
}

export const removeFromFavAction = (skuId) => {
  return (
    {
      type: type.REMOVE_FROM_FAV,
      payload: skuId
    }
  )
}