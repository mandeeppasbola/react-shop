import * as type from './types';

export const setFavAction = (skuIdArr) => {
  return (
    {
      type: type.SET_FAV,
      payload: skuIdArr
    }
  )
}

export const addToFavAction = (skuId) => {
  return (
    {
      type: type.ADD_TO_FAV,
      payload: skuId
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