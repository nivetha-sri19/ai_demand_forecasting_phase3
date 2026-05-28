import { configureStore } from '@reduxjs/toolkit';

import authReducer from './authSlice';
import forecastReducer from './forecastSlice';
import analyticsReducer from './analyticsSlice';
import reportReducer from './reportSlice';
import notificationReducer from './notificationSlice';

const store = configureStore({

  reducer: {

    auth: authReducer,

    forecast: forecastReducer,

    analytics: analyticsReducer,

    reports: reportReducer,

    notifications: notificationReducer

  }

});

export default store;