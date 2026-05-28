import {
  createSlice
} from '@reduxjs/toolkit';

const analyticsSlice = createSlice({

  name: 'analytics',

  initialState: {

    dashboard: [],

    revenue: [],

    sales: []
  },

  reducers: {

    setDashboardAnalytics:
      (state, action) => {

        state.dashboard =
          action.payload;
      },

    setRevenueAnalytics:
      (state, action) => {

        state.revenue =
          action.payload;
      },

    setSalesAnalytics:
      (state, action) => {

        state.sales =
          action.payload;
      }
  }
});

export const {
  setDashboardAnalytics,
  setRevenueAnalytics,
  setSalesAnalytics
} = analyticsSlice.actions;

export default analyticsSlice.reducer;