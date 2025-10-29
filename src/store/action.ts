import { createAction } from '@reduxjs/toolkit';
import { OfferItems } from '../types/offer';

export const changeCity = createAction<string>('app/changeCity');
export const setActiveOfferId = createAction<string>('app/setActiveOfferId');
export const loadOffers = createAction<OfferItems>('app/loadOffers');
