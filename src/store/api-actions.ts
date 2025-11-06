import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { OfferItems, Offer } from '../types/offer';
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
  'favorite/fetchFavoriteOffers',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<OfferItems>(APIRoute.Favorite);
    return data;
  }
);

export const toggleFavoriteStatus = createAsyncThunk<Offer, { offerId: string; status: boolean }, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'favorite/toggleFavoriteStatus',
  async ({ offerId, status }, { extra: api }) => {
    const { data } = await api.post<Offer>(`${APIRoute.Favorite}/${offerId}/${status ? 1 : 0}`);
    return data;
  }
);
