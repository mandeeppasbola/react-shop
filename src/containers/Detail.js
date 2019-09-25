import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Detail from '../components/Detail';
import { getDetailsThunk, addToCartThunk, addToFavThunk, removeFromFavThunk } from '../thunks'

const mapStateToProps = (state, ownProps) => {
  const { product } = state.detailsReducer;
  return {
    product
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({ getDetailsThunk, addToCartThunk, addToFavThunk, removeFromFavThunk }, dispatch)
}

const DetailsContainer = connect(mapStateToProps, mapDispatchToProps)(Detail);

export default DetailsContainer;