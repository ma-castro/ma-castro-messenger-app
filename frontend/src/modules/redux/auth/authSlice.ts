/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IInitialState } from './types';

const initialState: IInitialState = {
  userInfo: null,
  token: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthUser: (state, action: PayloadAction<IInitialState>) => {
      state.userInfo = action.payload.userInfo;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.userInfo = null;
      state.token = null;
    },
  },
});

export const { setAuthUser } = authSlice.actions;
export default authSlice.reducer;
