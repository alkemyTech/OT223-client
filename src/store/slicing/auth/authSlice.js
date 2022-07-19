import { createSlice } from '@reduxjs/toolkit';

// const initialState
export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: [],
    isLoading: false,
  },
  reducers: {
    authStart: (state) => {
      state.isLoading = true;
    },
    authFailure: (state) => {
      state.isLoading = false;
    },
    addUser: (state, action) => {
      console.log(state, action);
      state.user = action.payload;
      state.isLoading = false;
    },
    loginUser: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    },
    logout: (state) => {
      JSON.parse(localStorage.removeItem('token'));
      state.user = [];
    }
  }
})

// Actions
export const { authStart, authFailure, addUser, loginUser, logout } = authSlice.actions;

// Reducer
export default authSlice.reducer;
