import {
  generateForecast,
  getForecastHistory
} from '../api/forecastApi';

export const createForecastService =
  async (data) => {

    try {

      return await generateForecast(data);

    } catch (error) {

      throw error;
    }
  };

export const forecastHistoryService =
  async () => {

    try {

      return await getForecastHistory();

    } catch (error) {

      throw error;
    }
  };