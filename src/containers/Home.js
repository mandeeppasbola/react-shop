import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from '../components/Home';
import { getUserThunk } from '../thunks';

const mapStateToProps = ({ userReducer }, ownProps) => {
  const { user, cart, fav } = userReducer;
  return {
    user,
    cart,
    fav
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({ getUserThunk }, dispatch)
}

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;