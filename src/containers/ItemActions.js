import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ItemActions from '../components/ItemActions';
import { addToCartThunk, addToFavThunk, addToSavedThunk, removeFromCartThunk, removeFromFavThunk, removeFromSavedThunk, setQuantityThunk } from '../thunks';
import { setNotificationAction } from '../actions';

const mapStateToProps = ({ userReducer }, ownProps) => {
  const { variant, data } = ownProps;
  const { quantity } = data;
  const { cart, fav, saved } = userReducer;
  return {
    variant,
    data,
    quantity,
    cart,
    fav,
    saved
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    addToCartThunk, addToFavThunk, addToSavedThunk, removeFromCartThunk, removeFromFavThunk, removeFromSavedThunk, setQuantityThunk,
    setNotificationAction
  }, dispatch)
}

const ItemActionsContainer = connect(mapStateToProps, mapDispatchToProps)(ItemActions);

export default ItemActionsContainer;