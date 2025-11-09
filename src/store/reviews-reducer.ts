import { createReducer } from '@reduxjs/toolkit';
import { ReviewItems } from '../types/review';
import { fetchReviews } from './api-actions';

type ReviewsState = {
  reviews: ReviewItems;
  isLoading: boolean;
  error: string | null;
}

const initialReviewsState: ReviewsState = {
  reviews: [],
  isLoading: false,
  error: null,
};

export const reviewsReducer = createReducer(initialReviewsState, (builder) => {
  builder
    .addCase(fetchReviews.pending, (state) => {
      state.isLoading = true;
      state.error = null;
      state.reviews = [];
    })
    .addCase(fetchReviews.fulfilled, (state, action) => {
      state.isLoading = false;
      state.reviews = action.payload;
    })
    .addCase(fetchReviews.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || 'Failed to load reviews';
    });
});

