import { getProductsThunk } from './list';
import { getDetailsThunk } from './details';
import { addToCartThunk, removeFromCartThunk, getCartThunk, setQuantityThunk } from './cart';
import { addToFavThunk, removeFromFavThunk, getFavThunk } from './fav';
import { addToSavedThunk, removeFromSavedThunk, getSavedThunk } from './saved';
import { getUserThunk } from './user';
import { getCategoryThunk } from './category';
export {
  getProductsThunk,
  getDetailsThunk,
  addToCartThunk,
  addToFavThunk,
  removeFromCartThunk,
  removeFromFavThunk,
  getCartThunk,
  getFavThunk,
  getUserThunk,
  addToSavedThunk,
  removeFromSavedThunk,
  getSavedThunk,
  getCategoryThunk,
  setQuantityThunk
}