import * as type from './types';

export const setSavedAction = (products) => {
  return (
    {
      type: type.SET_SAVED,
      payload: products
    }
  )
}

export const addToSavedAction = (skuId) => {
  return (
    {
      type: type.ADD_TO_SAVED,
      payload: skuId
    }
  )
}

export const removeFromSavedAction = (skuId) => {
  return (
    {
      type: type.REMOVE_FROM_SAVED,
      payload: skuId
    }
  )
}
