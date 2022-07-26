import { createSlice } from '@reduxjs/toolkit';

export const organizationSlice = createSlice({
  name: 'organization',
  initialState: {
    organization: {
      name: '',
      image: '',
      welcomeText: '',
      address: '',
      phone: '',
      social_media: {
        instagram: '',
        facebook: '',
        linkedin: '',
      },
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
