import { createReducer } from '@reduxjs/toolkit';
import { OfferItems } from '../types/offer';
import { fetchFavoriteOffers, toggleFavoriteStatus } from './api-actions';

type FavoritesState = {
  favoriteOffers: OfferItems;
  isLoading: boolean;
  error: string | null;
}

const initialFavoritesState: FavoritesState = {
  favoriteOffers: [],
  isLoading: false,
  error: null,
};

export const favoriteOffersReducer = createReducer(initialFavoritesState, (builder) => {
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
    })
    .addCase(toggleFavoriteStatus.fulfilled, (state, action) => {
      const updatedOffer = action.payload;
      if (updatedOffer.isFavorite) {
        state.favoriteOffers.push(updatedOffer);
      } else {
        state.favoriteOffers = state.favoriteOffers.filter(
          (offer) => offer.id !== updatedOffer.id
        );
      }
    });
});

