import { createSlice } from '@reduxjs/toolkit';

export const testimonialsSlice = createSlice({
  name: 'testimonials',
  initialState: {
    testimonials: [],
    isLoading: false,
  },
  reducers: {
    getAllTestimonialsStart: (state) => {
      state.isLoading = true;
    },
    getAllTestimonialsSuccess: (state, action) => {
      state.testimonials = action.payload;
      state.isLoading = false;
    },
    getAllTestimonialsFailure: (state) => {
      state.isLoading = false;
    },
  },
});

export const {
  getAllTestimonialsStart, getAllTestimonialsSuccess, getAllTestimonialsFailure,
} = testimonialsSlice.actions;

export default testimonialsSlice.reducer;
