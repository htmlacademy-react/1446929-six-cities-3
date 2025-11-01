import { createAction } from '@reduxjs/toolkit';
import { OfferItems } from '../types/offer';
import { SortType } from '../const';

export const changeCity = createAction<string>('app/changeCity');
export const setActiveOfferId = createAction<string>('app/setActiveOfferId');
export const loadOffers = createAction<OfferItems>('app/loadOffers');
export const changeSortType = createAction<SortType>('app/changeSortType');
export const toggleFavorite = createAction<string>('app/toggleFavorite');
