import { createReducer } from '@reduxjs/toolkit';
import { OfferItems } from '../types/offer';
import { fetchFavoriteOffers } from './api-actions';

type FavoriteOffersState = {
  favoriteOffers: OfferItems;
  isLoading: boolean;
  error: string | null;
}

const initialFavoriteOffersState: FavoriteOffersState = {
  favoriteOffers: [],
  isLoading: false,
  error: null,
};

export const favoriteOffersReducer = createReducer(initialFavoriteOffersState, (builder) => {
  builder
    .addCase(fetchFavoriteOffers.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(fetchFavoriteOffers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.favoriteOffers = action.payload;
    })
    .addCase(fetchFavoriteOffers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || 'Failed to load favorite offers';
    });

});

