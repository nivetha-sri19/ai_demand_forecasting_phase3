import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  getNotifications,
} from "../api/notificationApi";

const NotificationContext =
  createContext();

export const NotificationProvider = ({
  children,
}) => {
  const [notifications,
    setNotifications] = useState([]);

  const fetchNotifications =
    async () => {
      try {
        const data =
          await getNotifications();

        setNotifications(data);
      } catch (error) {
        console.log(error);
      }
    };

  useEffect(() => {
    fetchNotifications();
  }, []);

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        fetchNotifications,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  return useContext(
    NotificationContext
  );
};