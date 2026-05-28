import {
  useEffect,
  useState
} from 'react';

const useNotifications = () => {

  const [notifications,
    setNotifications] =
    useState([]);

  useEffect(() => {

    const demoNotifications = [
      'Forecast completed',
      'New report generated',
      'Dataset uploaded'
    ];

    setNotifications(demoNotifications);

  }, []);

  return notifications;
};

export default useNotifications;