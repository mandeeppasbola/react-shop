import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Cart from '../components/Cart';
import { removeFromCartThunk, getCartThunk, addToSavedThunk } from '../thunks'

const mapStateToProps = ({ cartReducer, userReducer }, ownProps) => {
  const { cart } = cartReducer;
  const { cart: userCart } = userReducer;
  return {
    cart,
    userCart
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    removeFromCartThunk, addToSavedThunk, getCartThunk
  }, dispatch)
}

const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart);

export default CartContainer;