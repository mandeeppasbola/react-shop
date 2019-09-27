import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from '../components/Header';
import { getUserThunk, getCategoryThunk } from '../thunks';

const mapStateToProps = ({ userReducer, categoryReducer }, ownProps) => {
  const { cart, fav } = userReducer;
  const { category } = categoryReducer;
  return {
    cart,
    fav,
    category
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({ getUserThunk, getCategoryThunk }, dispatch)
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;