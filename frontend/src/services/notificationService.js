import {
  getNotifications,
  markNotificationRead,
  clearAllNotifications
} from '../api/notificationApi';

export const notificationsService =
  async () => {

    try {

      return await getNotifications();

    } catch (error) {

      throw error;
    }
  };

export const markNotificationService =
  async (id) => {

    try {

      return await markNotificationRead(id);

    } catch (error) {

      throw error;
    }
  };

export const clearNotificationsService =
  async () => {

    try {

      return await clearAllNotifications();

    } catch (error) {

      throw error;
    }
  };