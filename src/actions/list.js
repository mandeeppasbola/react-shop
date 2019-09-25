import * as type from './types';

export const setProductsAction = (products) => {
  return (
    {
      type: type.SET_PRODUCTS,
      payload: products
    }
  )
}