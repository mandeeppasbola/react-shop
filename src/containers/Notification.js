import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Notification from '../components/Notification';
import { setNotificationAction, removeNotificationAction } from '../actions';

const mapStateToProps = ({ notificationReducer }, ownProps) => {
  const { variant, message } = notificationReducer;
  return {
    variant,
    message
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    setNotificationAction, removeNotificationAction
  }, dispatch)
}

const NotificationContainer = connect(mapStateToProps, mapDispatchToProps)(Notification);

export default NotificationContainer;