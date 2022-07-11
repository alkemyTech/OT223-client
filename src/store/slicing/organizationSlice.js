import { createSlice } from '@reduxjs/toolkit';

export const organizationSlice = createSlice({
  name: 'organization',
  initialState: {
    organization: {
      name: '',
      image: '',
      social_media: [],
    },
    isLoading: false,
  },
  reducers: {
    getOrganizationStart: (state) => {
      state.isLoading = true;
    },
    getOrganizationSuccess: (state, action) => {
      state.organization = action.payload;
      state.isLoading = false;
    },
    getOrganizationFailure: (state) => {
      state.isLoading = false;
    },
  },
});

export const {
  getOrganizationStart,
  getOrganizationSuccess,
  getOrganizationFailure,
} = organizationSlice.actions;

export default organizationSlice.reducer;
