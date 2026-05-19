import API from "./axios";

// Get Notifications
export const getNotifications = async () => {
  try {
    const response = await API.get(
      "/notifications"
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

// Mark Notification As Read
export const markNotificationAsRead = async (
  id
) => {
  try {
    const response = await API.put(
      `/notifications/${id}/read`
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

// Clear Notifications
export const clearNotifications = async () => {
  try {
    const response = await API.delete(
      "/notifications/clear"
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

// Delete Single Notification
export const deleteNotification = async (id) => {
  try {
    const response = await API.delete(
      `/notifications/${id}`
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

// Send Notification
export const sendNotification = async (
  payload
) => {
  try {
    const response = await API.post(
      "/notifications/send",
      payload
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};