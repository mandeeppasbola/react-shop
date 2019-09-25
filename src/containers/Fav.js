import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Fav from '../components/Fav';
import { removeFromFavThunk, addToCartThunk, getFavThunk } from '../thunks'

const mapStateToProps = ({ favReducer, userReducer }, ownProps) => {
  const { fav } = favReducer;
  const { fav: userFav } = userReducer;
  return {
    fav,
    userFav
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({ removeFromFavThunk, addToCartThunk, getFavThunk }, dispatch)
}

const FavContainer = connect(mapStateToProps, mapDispatchToProps)(Fav);

export default FavContainer;