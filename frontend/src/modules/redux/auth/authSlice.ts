/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { AuthState } from './types';

const initialState: AuthState = {
  message: '',
  data: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authenticate: (state, action: PayloadAction<AuthState>) => {
      state.data = action.payload.data;
    },
  },
});

export const { authenticate } = authSlice.actions;
export const selectCount = (state: RootState) => state.auth.data;
export default authSlice.reducer;
