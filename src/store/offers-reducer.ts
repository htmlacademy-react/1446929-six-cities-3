import { createReducer } from '@reduxjs/toolkit';
import { OfferItems } from '../types/offer';
import { fetchOffers, fetchOffersNearby, toggleFavoriteStatus } from './api-actions';

type OffersState = {
  offers: OfferItems;
  offersNearby: OfferItems;
  isLoading: boolean;
  error: string | null;
}

const initialOffersState: OffersState = {
  offers: [],
  offersNearby: [],
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
    .addCase(fetchOffersNearby.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchOffersNearby.fulfilled, (state, action) => {
      state.isLoading = false;
      state.offersNearby = action.payload;
    })
    .addCase(fetchOffersNearby.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || 'Failed to load nearby offers';
    })
    .addCase(toggleFavoriteStatus.fulfilled, (state, action) => {
      const updatedOffer = action.payload;
      const index = state.offers.findIndex((offer) => offer.id === updatedOffer.id);
      if (index !== -1) {
        state.offers[index] = updatedOffer;
      }
    });
});
