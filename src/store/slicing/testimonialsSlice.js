import { createSlice } from '@reduxjs/toolkit';

export const testimonialsSlice = createSlice({
  name: 'testimonials',
  initialState: {
    testimonials: [],
    newTestimony: {},
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
    postTestimonyStart: (state) => {
      state.isLoading = true;
    },
    postTestimonySuccess: (state, action) => {
      state.newTestimony = action.payload;
      state.isLoading = false;
    },
    postTestimonyFailure: (state) => {
      state.isLoading = false;
    }
  },
});

export const {
  getAllTestimonialsStart,
  getAllTestimonialsSuccess,
  getAllTestimonialsFailure,
  postTestimonyFailure,
  postTestimonyStart,
  postTestimonySuccess
} = testimonialsSlice.actions;

export default testimonialsSlice.reducer;
