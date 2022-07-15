import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    isLoading: false,
  },
  reducers: {
    getUsersStart: (state) => {
      state.isLoading = true;
    },
    getUsersSuccess: (state, action) => {
      state.users = action.payload;
      state.isLoading = false;
    },
    getUsersFailure: (state) => {
      state.isLoading = false;
    },
    deleteUser: (state) => {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      state.users = [];
    }
  },
});

export const { getUsersStart, getUsersSuccess, getUsersFailure, deleteUser } = usersSlice.actions;

export default usersSlice.reducer;
