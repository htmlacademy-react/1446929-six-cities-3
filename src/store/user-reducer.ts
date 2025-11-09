import { createReducer } from '@reduxjs/toolkit';
import { requireAuthorization } from './action';
import { loginAction, logoutAction, checkAuthAction } from './api-actions';
import { AuthorizationStatus } from '../const';
import { UserData } from '../types/user-data';

type UserState = {
  authorizationStatus: AuthorizationStatus;
  user: UserData | null;
};

const initialUserState: UserState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null,
};

export const userReducer = createReducer(initialUserState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(loginAction.fulfilled, (state, action) => {
      state.authorizationStatus = AuthorizationStatus.Auth;
      state.user = action.payload;
    })
    .addCase(logoutAction.fulfilled, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
      state.user = null;
    })
    .addCase(checkAuthAction.fulfilled, (state, action) => {
      state.authorizationStatus = AuthorizationStatus.Auth;
      state.user = action.payload || null;
    });
});
