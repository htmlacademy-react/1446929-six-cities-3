import { createAction } from '@reduxjs/toolkit';
import { SortType, AuthorizationStatus } from '../const';

export const changeCity = createAction<string>('app/changeCity');
export const setActiveOfferId = createAction<string>('app/setActiveOfferId');
export const changeSortType = createAction<SortType>('app/changeSortType');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setError = createAction<string | null>('app/setError');
