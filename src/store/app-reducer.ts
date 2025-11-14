
import { createReducer } from '@reduxjs/toolkit';
import { changeCity, changeSortType, requireAuthorization, setError } from './action';
import { CITIES, SortType, AuthorizationStatus } from '../const';


type AppState = {
  activeCity: string;
  sortType: SortType;
  authorizationStatus: AuthorizationStatus;
  error: string | null;
}

const initialAppState: AppState = {
  activeCity: CITIES[0],
  sortType: SortType.Popular,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null
};

export const appReducer = createReducer(initialAppState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.activeCity = action.payload;
      state.sortType = SortType.Popular;
    })
    .addCase(changeSortType, (state, action) => {
      state.sortType = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});
