import { setProductsAction } from './list';
import { setDetailsAction } from './detail';
import { addToCartAction, removeFromCartAction, setCartAction } from './cart';
import { addToFavAction, removeFromFavAction, setFavAction } from './fav';
import { setSavedAction, addToSavedAction, removeFromSavedAction } from './saved';
import { setNotificationAction, removeNotificationAction } from './notification';
import { setCategoryAction } from './category';
import {
  setUserAction,
  addToUserCartAction, removeFromUserCartAction,
  addToUserFavAction, removeFromUserFavAction,
  addToUserSavedAction, removeFromUserSavedAction
} from './user';

export {
  setProductsAction,
  setDetailsAction,
  addToCartAction,
  addToFavAction,
  removeFromCartAction,
  removeFromFavAction,
  setFavAction,
  setCartAction,
  addToUserCartAction,
  addToUserFavAction,
  removeFromUserCartAction,
  removeFromUserFavAction,
  setUserAction,
  addToUserSavedAction,
  removeFromUserSavedAction,
  setSavedAction,
  addToSavedAction,
  removeFromSavedAction,
  setNotificationAction,
  removeNotificationAction,
  setCategoryAction
}