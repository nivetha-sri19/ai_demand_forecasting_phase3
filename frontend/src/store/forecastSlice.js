import {
  createSlice
} from '@reduxjs/toolkit';

const forecastSlice = createSlice({

  name: 'forecast',

  initialState: {

    forecasts: [],

    loading: false
  },

  reducers: {

    setForecasts: (state, action) => {

      state.forecasts = action.payload;
    },

    addForecast: (state, action) => {

      state.forecasts.push(action.payload);
    },

    setLoading: (state, action) => {

      state.loading = action.payload;
    }
  }
});

export const {
  setForecasts,
  addForecast,
  setLoading
} = forecastSlice.actions;

export default forecastSlice.reducer;