import { createSlice } from '@reduxjs/toolkit';

// const initialState
export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: [],
    isAdmin: true,
    isLoading: false,
    isLoginLoading: false,
  },
  reducers: {
    registerStart: (state) => {
      state.isLoading = true;
    },
    registerSuccess: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    },
    registerFailure:  (state) => {
      state.isLoading = false;
    },
    loginStart: (state) => {
      state.isLoginLoading = true;
    },
    loginSuccess: (state, action) => {
      state.user = action.payload.token;
      localStorage.setItem('token', action.payload.token);
      state.isAdmin = action.payload.isAdmin
      state.isLoginLoading = false;
    },
    loginFailure: (state) => {
      state.isLoginLoading = false;
    },
    logout: (state, action) => {
      state.user = [];
      localStorage.removeItem('token', action.payload);
      state.isLoginLoading = false;
    },
    autoLogin: (state, action) => {
      state.user = action.payload.token
    }
  }
})

// Actions
export const {
  registerStart,
  registerSuccess,
  registerFailure, 
  loginStart,  
  loginSuccess,
  loginFailure,
  logout,
  autoLogin
} = authSlice.actions;

// Reducer
export default authSlice.reducer;
