import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { OfferItems, Offer } from '../types/offer';
import { ReviewItems, ReviewData, ReviewItem } from '../types/review';
import { APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../const';
import { requireAuthorization, setError } from './action';
import { saveToken, removeToken } from '../services/token';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { store } from './';

export const clearError = createAsyncThunk(
  'app/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  }
);

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

export const fetchOffersNearby = createAsyncThunk<OfferItems, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/fetchOffersNearby',
  async (offerId, { extra: api }) => {
    const { data } = await api.get<OfferItems>(`${APIRoute.Offers}/${offerId}/nearby`);
    return data;
  }
);

export const fetchOfferById = createAsyncThunk<Offer, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/fetchOfferById',
  async (offerId, { extra: api }) => {
    const { data } = await api.get<Offer>(`${APIRoute.Offers}/${offerId}`);
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

export const fetchReviews = createAsyncThunk<ReviewItems, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'reviews/fetchReviews',
  async (offerId, { extra: api }) => {
    const { data } = await api.get<ReviewItems>(`${APIRoute.Comments}/${offerId}`);
    return data;
  }
);

export const postReview = createAsyncThunk<ReviewItem, ReviewData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'reviews/postReview',
  async ({ offerId, comment, rating }, { extra: api }) => {
    const { data } = await api.post<ReviewItem>(
      `${APIRoute.Comments}/${offerId}`,
      { comment, rating }
    );
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

export const checkAuthAction = createAsyncThunk<UserData | null, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<UserData>(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(fetchFavoriteOffers());
      return data;
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
      return null;
    }
  },
);

export const loginAction = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const { data } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(data.token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(fetchFavoriteOffers());
    return data;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    removeToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);


