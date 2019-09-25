import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Summary from '../components/Summary';

const mapStateToProps = ({ cartReducer }, ownProps) => {
  const { cart } = cartReducer;
  return {
    cart
  }
}

const SummaryContainer = connect(mapStateToProps, null)(Summary);

export default SummaryContainer;