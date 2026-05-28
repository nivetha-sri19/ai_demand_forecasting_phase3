import {
  createSlice
} from '@reduxjs/toolkit';

const reportSlice = createSlice({

  name: 'reports',

  initialState: {

    reports: []
  },

  reducers: {

    setReports: (state, action) => {

      state.reports = action.payload;
    },

    addReport: (state, action) => {

      state.reports.push(action.payload);
    }
  }
});

export const {
  setReports,
  addReport
} = reportSlice.actions;

export default reportSlice.reducer;