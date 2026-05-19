import API from "./axios";

// Generate Forecast
export const generateForecast = async (payload) => {
  try {
    const response = await API.post(
      "/forecast/predict",
      payload
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

// Compare Forecast Models
export const compareModels = async (payload) => {
  try {
    const response = await API.post(
      "/forecast/compare",
      payload
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

// Get Forecast History
export const getForecastHistory = async (
  page = 1,
  limit = 10
) => {
  try {
    const response = await API.get(
      `/forecast/history?page=${page}&limit=${limit}`
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

// Get Forecast By Id
export const getForecastById = async (id) => {
  try {
    const response = await API.get(
      `/forecast/${id}`
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

// Delete Forecast
export const deleteForecast = async (id) => {
  try {
    const response = await API.delete(
      `/forecast/${id}`
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

// Forecast Accuracy Metrics
export const getAccuracyMetrics = async () => {
  try {
    const response = await API.get(
      "/forecast/metrics"
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

// Forecast Analytics
export const getForecastAnalytics = async () => {
  try {
    const response = await API.get(
      "/forecast/analytics"
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

// Filter Forecasts
export const filterForecasts = async (
  startDate,
  endDate,
  category,
  region
) => {
  try {
    const response = await API.get(
      `/forecast/filter?startDate=${startDate}&endDate=${endDate}&category=${category}&region=${region}`
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

// Search Forecasts
export const searchForecasts = async (query) => {
  try {
    const response = await API.get(
      `/forecast/search?query=${query}`
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};