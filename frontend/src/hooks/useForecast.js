import { useEffect, useState } from 'react';

const useForecast = () => {

  const [forecasts, setForecasts] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const fetchForecasts = async () => {

      try {

        const data = [
          {
            id: 1,
            product: 'Laptop',
            prediction: 450
          },
          {
            id: 2,
            product: 'Mobile',
            prediction: 720
          }
        ];

        setForecasts(data);

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);

      }
    };

    fetchForecasts();

  }, []);

  return {
    forecasts,
    loading
  };
};

export default useForecast;