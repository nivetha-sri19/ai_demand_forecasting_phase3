import {
  createContext,
  useContext,
  useState
} from 'react';

const ForecastContext =
  createContext();

export const ForecastProvider = ({
  children
}) => {

  const [forecasts, setForecasts] =
    useState([]);

  const addForecast = (forecast) => {

    setForecasts((prev) => [
      ...prev,
      forecast
    ]);
  };

  return (
    <ForecastContext.Provider
      value={{
        forecasts,
        addForecast
      }}
    >

      {children}

    </ForecastContext.Provider>
  );
};

export const useForecastContext =
  () => useContext(ForecastContext);