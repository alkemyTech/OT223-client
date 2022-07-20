import { createSlice } from '@reduxjs/toolkit';

// const initialState
export const alertSlice = createSlice({
  name: 'alert',
  initialState: {
    alert: {},
    isAlertViewed: false
  },
  reducers: {
    setAlert: (state, action) => {
      state.alert = action.payload;
      state.isAlertViewed = true;
    },
    resetAlert: (state) => {
      state.isAlertViewed = false;
      state.alert = {};
    },
    closeAlert: (state) => {
      state.isAlertViewed = false
    }
  }
})

// Actions
export const { setAlert, resetAlert, closeAlert } = alertSlice.actions;

// Reducer
export default alertSlice.reducer;
