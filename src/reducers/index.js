import { combineReducers } from 'redux';
import cartReducer from './cart';
import listReducer from './list';
import detailsReducer from './details';
import favReducer from './fav';
import userReducer from './user';
import savedReducer from './saved';
import notificationReducer from './notification';

const rootReducer = combineReducers({
  cartReducer,
  listReducer,
  detailsReducer,
  favReducer,
  userReducer,
  savedReducer,
  notificationReducer
});
export default rootReducer;
