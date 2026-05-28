import {
  getDashboardAnalytics,
  getRevenueAnalytics,
  getSalesAnalytics
} from '../api/analyticsApi';

export const dashboardAnalyticsService =
  async () => {

    try {

      return await getDashboardAnalytics();

    } catch (error) {

      throw error;
    }
  };

export const revenueAnalyticsService =
  async () => {

    try {

      return await getRevenueAnalytics();

    } catch (error) {

      throw error;
    }
  };

export const salesAnalyticsService =
  async () => {

    try {

      return await getSalesAnalytics();

    } catch (error) {

      throw error;
    }
  };