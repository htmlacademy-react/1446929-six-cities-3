import { combineReducers } from '@reduxjs/toolkit';
import { appReducer } from './app-reducer';
import { offersReducer } from './offers-reducer';
import { favoriteOffersReducer } from './favorites-reducer';
import { userReducer } from './user-reducer';

export const rootReducer = combineReducers({
  app: appReducer,
  offers: offersReducer,
  favorites: favoriteOffersReducer,
  user: userReducer
});
