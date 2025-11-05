import { createReducer } from '@reduxjs/toolkit';
import { changeCity, setActiveOfferId, changeSortType, requireAuthorization } from './action';
import { CITIES, SortType, AuthorizationStatus } from '../const';


type AppState = {
  activeCity: string;
  activeOfferId: string;
  sortType: SortType;
  authorizationStatus: AuthorizationStatus;
}

const initialAppState: AppState = {
  activeCity: CITIES[0],
  activeOfferId: '',
  sortType: SortType.Popular,
  authorizationStatus: AuthorizationStatus.Unknown,
};

export const appReducer = createReducer(initialAppState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.activeCity = action.payload;
      state.sortType = SortType.Popular;
    })
    .addCase(setActiveOfferId, (state, action) => {
      state.activeOfferId = action.payload;
    })
    .addCase(changeSortType, (state, action) => {
      state.sortType = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});


