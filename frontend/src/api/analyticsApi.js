import API from './axios';

/* Dashboard Analytics */
export const getDashboardAnalytics = async () => {
  const response = await API.get('/analytics/dashboard');
  return response.data;
};

/* Revenue Analytics */
export const getRevenueAnalytics = async () => {
  const response = await API.get('/analytics/revenue');
  return response.data;
};

/* Sales Analytics */
export const getSalesAnalytics = async () => {
  const response = await API.get('/analytics/sales');
  return response.data;
};

/* Region Analytics */
export const getRegionAnalytics = async () => {
  const response = await API.get('/analytics/regions');
  return response.data;
};

/* AI Accuracy Analytics */
export const getAIAccuracyAnalytics = async () => {
  const response = await API.get('/analytics/accuracy');
  return response.data;
};