import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Saved from '../components/Saved';
import { removeFromCartThunk, addToCartThunk, getCartThunk, addToSavedThunk, removeFromSavedThunk, getSavedThunk } from '../thunks'

const mapStateToProps = ({ savedReducer, userReducer }, ownProps) => {
  const { saved } = savedReducer;
  const { saved: userSaved } = userReducer;
  return {
    saved,
    userSaved
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    removeFromCartThunk, addToSavedThunk, getCartThunk, addToCartThunk, removeFromSavedThunk, getSavedThunk
  }, dispatch)
}

const SavedContainer = connect(mapStateToProps, mapDispatchToProps)(Saved);

export default SavedContainer;