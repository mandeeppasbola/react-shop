import * as type from './types';

export const setUserAction = (user) => {
  return (
    {
      type: type.SET_USER,
      payload: user
    }
  )
}

export const addToUserCartAction = (skuId) => {
  return (
    {
      type: type.ADD_TO_USER_CART,
      payload: skuId
    }
  )
}

export const removeFromUserCartAction = (skuId) => {
  return (
    {
      type: type.REMOVE_FROM_USER_CART,
      payload: skuId
    }
  )
}

export const addToUserFavAction = (skuId) => {
  return (
    {
      type: type.ADD_TO_USER_FAV,
      payload: skuId
    }
  )
}

export const removeFromUserFavAction = (skuId) => {
  return (
    {
      type: type.REMOVE_FROM_USER_FAV,
      payload: skuId
    }
  )
}

export const addToUserSavedAction = (skuId) => {
  return (
    {
      type: type.ADD_TO_USER_SAVED,
      payload: skuId
    }
  )
}

export const removeFromUserSavedAction = (skuId) => {
  return (
    {
      type: type.REMOVE_FROM_USER_SAVED,
      payload: skuId
    }
  )
}