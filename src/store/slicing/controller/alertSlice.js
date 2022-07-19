import { createSlice } from '@reduxjs/toolkit';

// const initialState
export const alertSlice = createSlice({
  name: 'alert',
  initialState: {
    alert: {
      title: '',
      text: '',
      icon: '',
    },
    isLoading: false
  },
  reducers: {
    setAlert: (state, action) => {
      state.alert = action.payload;
      state.isLoading = false;
    },
    resetAlert: (state) => {
      state.isLoading = false;
      state.alert = []
    }
  }
})

// Actions
export const { setAlert, resetAlert } = alertSlice.actions;

// Reducer
export default alertSlice.reducer;
