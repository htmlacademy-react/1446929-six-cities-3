import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { OfferItems } from '../types/offer';
import { APIRoute } from '../const';


export const fetchOffers = createAsyncThunk<OfferItems, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/fetchOffers',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<OfferItems>(APIRoute.Offers);
    return data;
  }
);

export const fetchFavoriteOffers = createAsyncThunk<OfferItems, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'favoriteOffers/fetchFavoriteOffers',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<OfferItems>(APIRoute.Favorite);
    return data;
  }
);
