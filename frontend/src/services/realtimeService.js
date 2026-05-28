export const realtimeForecastService =
  (callback) => {

    const interval = setInterval(() => {

      const liveForecast = {
        timestamp: new Date(),
        prediction:
          400 +
          Math.floor(Math.random() * 100)
      };

      callback(liveForecast);

    }, 3000);

    return () => clearInterval(interval);
  };