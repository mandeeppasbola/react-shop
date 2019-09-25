import { connect } from 'react-redux';
import Header from '../components/Header';

const mapStateToProps = ({ userReducer }, ownProps) => {
  const { cart, fav } = userReducer;
  return {
    cart,
    fav
  }
}

const HeaderContainer = connect(mapStateToProps)(Header);

export default HeaderContainer;