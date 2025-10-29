import { createReducer } from '@reduxjs/toolkit';
import { changeCity, setActiveOfferId, loadOffers } from './action';
import { CITIES } from '../const';
import { OfferItems } from '../types/offer';
import { MOCK_OFFERS } from '../mocks/mock-offers';

type AppState = {
  activeCity: string;
  activeOfferId: string;
  offers: OfferItems;
}

const initialState: AppState = {
  activeCity: CITIES[0],
  activeOfferId: '',
  offers: MOCK_OFFERS
};

export const appReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(setActiveOfferId, (state, action) => {
      state.activeOfferId = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    });
});
