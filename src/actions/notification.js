import * as type from './types';

export const setNotificationAction = (notificationObj) => {
  return (
    {
      type: type.SET_NOTIFICATION,
      payload: notificationObj
    }
  )
}

export const removeNotificationAction = () => {
  return (
    {
      type: type.REMOVE_NOTIFICATION
    }
  )
}
