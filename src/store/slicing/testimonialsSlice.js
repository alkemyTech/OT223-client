import { createSlice } from '@reduxjs/toolkit';

export const testimonialsSlice = createSlice({
  name: 'testimonials',
  initialState: {
    testimonials: [],
    isLoading: false,
  },
  reducers: {
    getAllTestimonials: (state) => {
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
  getAllTestimonials, getAllTestimonialsSuccess, getAllTestimonialsFailure,
} = testimonialsSlice.actions;

export default testimonialsSlice.reducer;
