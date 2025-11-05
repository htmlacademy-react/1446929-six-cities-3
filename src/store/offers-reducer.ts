import { createReducer } from '@reduxjs/toolkit';
import { toggleFavorite } from './action';
import { OfferItems } from '../types/offer';
import { fetchOffers } from './api-actions';

type OffersState = {
  offers: OfferItems;
  isLoading: boolean;
  error: string | null;
}

const initialOffersState: OffersState = {
  offers: [],
  isLoading: false,
  error: null,
};

export const offersReducer = createReducer(initialOffersState, (builder) => {
  builder
    .addCase(fetchOffers.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(fetchOffers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.offers = action.payload;
    })
    .addCase(fetchOffers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || 'Failed to load offers';
    })
    .addCase(toggleFavorite, (state, action) => {
      const offer = state.offers.find((offerItem) => offerItem.id === action.payload);
      if (offer) {
        offer.isFavorite = !offer.isFavorite;
      }
    });
});
