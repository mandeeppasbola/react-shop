import * as type from './types';

export const setDetailsAction = (product) => {
  return (
    {
      type: type.SET_PRODUCT,
      payload: product
    }
  )
}