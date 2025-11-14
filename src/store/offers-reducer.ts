import { createReducer } from '@reduxjs/toolkit';
import { OfferItems, Offer } from '../types/offer';
import { fetchOffers, fetchOffersNearby, fetchOfferById, fetchFavoriteOffers, toggleFavoriteStatus } from './api-actions';

type OffersState = {
  offers: OfferItems;
  offersNearby: OfferItems;
  currentOffer: Offer | null;
  isLoading: boolean;
  error: string | null;
}

const initialOffersState: OffersState = {
  offers: [],
  offersNearby: [],
  currentOffer: null,
  isLoading: false,
  error: null,
};

export const offersReducer = createReducer(initialOffersState, (builder) => {
  builder
    //Fetch all offers
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

    // Fetch nearby offers
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

    // Fetch single offer by ID
    .addCase(fetchOfferById.pending, (state) => {
      state.isLoading = true;
      state.currentOffer = null;
      state.error = null;
    })
    .addCase(fetchOfferById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.currentOffer = action.payload;
    })
    .addCase(fetchOfferById.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || 'Failed to load current offer';
    })
    .addCase(fetchFavoriteOffers.fulfilled, (state, action) => {
      const favorites = action.payload;
      state.offers = state.offers.map((offer) => {
        const isFavorite = favorites.some((favorite) => favorite.id === offer.id);
        return { ...offer, isFavorite: isFavorite };
      });
    })

    // Toggle favorite status
    .addCase(toggleFavoriteStatus.fulfilled, (state, action) => {
      const updatedOffer = action.payload;
      const offerIndex = state.offers.findIndex((offer) => offer.id === updatedOffer.id);
      if (offerIndex !== -1) {
        state.offers[offerIndex] = updatedOffer;
      }

      const nearbyIndex = state.offersNearby.findIndex((offer) => offer.id === updatedOffer.id);
      if (nearbyIndex !== -1) {
        state.offersNearby[nearbyIndex] = updatedOffer;
      }

      if (state.currentOffer && state.currentOffer.id === updatedOffer.id) {
        state.currentOffer = updatedOffer;
      }
    });
});
