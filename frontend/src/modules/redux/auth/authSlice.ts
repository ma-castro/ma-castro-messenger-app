/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InitialState } from '../../models/auth';
import type { RootState } from '../store';

const initialState: InitialState = {
  message: '',
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authenticate: (state, action: PayloadAction<InitialState>) => {
      state.user = action.payload.user;
    },
    fetchCurrentUser: (state, action: PayloadAction<InitialState>) => {
      state = {
        ...state,
        user: action.payload.user,
      };
    },
  },
});

export const { authenticate, fetchCurrentUser } = authSlice.actions;
export const authUser = (state: RootState) => state.auth.user;
export default authSlice.reducer;
