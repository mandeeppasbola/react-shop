import * as type from './types';

export const setCategoryAction = (categoryArr) => {
  return (
    {
      type: type.SET_CATEGORY,
      payload: categoryArr
    }
  )
}