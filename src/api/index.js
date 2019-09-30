import { getProductsApi } from './list';
import { getDetailsApi } from './details';
import { getCategoryApi } from './category';
import { addToCartApi, removeFromCartApi, setQuantityApi } from './cart';
import { addToFavApi, removeFromFavApi } from './fav';
import { addToSavedApi, removeFromSavedApi } from './saved';
import { getUserApi } from './user';

export {
  getProductsApi,
  getDetailsApi,
  getCategoryApi,
  addToCartApi,
  addToFavApi,
  removeFromCartApi,
  removeFromFavApi,
  getUserApi,
  addToSavedApi,
  removeFromSavedApi,
  setQuantityApi
};