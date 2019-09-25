import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Shop from '../components/Shop';
import { getProductsThunk, addToCartThunk, addToFavThunk } from '../thunks';
import { setNotificationAction } from '../actions';

const mapStateToProps = (state, ownProps) => {
  const { products } = state.listReducer;
  return {
    products
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({ getProductsThunk, addToCartThunk, addToFavThunk, setNotificationAction }, dispatch)
}

const ShopContainer = connect(mapStateToProps, mapDispatchToProps)(Shop);

export default ShopContainer;