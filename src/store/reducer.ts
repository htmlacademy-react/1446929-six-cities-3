import { createReducer } from '@reduxjs/toolkit';
import { changeCity, setActiveOfferId, loadOffers, changeSortType } from './action';
import { CITIES, SortType } from '../const';
import { OfferItems } from '../types/offer';
import { MOCK_OFFERS } from '../mocks/mock-offers';

type AppState = {
  activeCity: string;
  activeOfferId: string;
  offers: OfferItems;
  sortType: SortType;
}

const initialState: AppState = {
  activeCity: CITIES[0],
  activeOfferId: '',
  offers: MOCK_OFFERS,
  sortType: SortType.Popular
};

export const appReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.activeCity = action.payload;
      state.sortType = SortType.Popular;
    })
    .addCase(setActiveOfferId, (state, action) => {
      state.activeOfferId = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeSortType, (state, action) => {
      state.sortType = action.payload;
    });
});
