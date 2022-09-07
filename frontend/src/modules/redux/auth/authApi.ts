import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import config from 'modules/config';
// eslint-disable-next-line import/no-cycle
import { RootState } from 'modules/redux/store';
import { setAuthUser } from './authSlice';
import { IAuthPostInput, TAuthGetResponse, TAuthPostResponse } from './types';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${config.baseURL}/api`,
    prepareHeaders: (headers, { getState }) => {
      const { auth } = getState() as RootState;
      if (auth.token) {
        headers.set('Authorization', `Bearer ${auth.token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    authenticate: builder.mutation<TAuthPostResponse, IAuthPostInput>({
      query: (data) => ({
        url: 'auth',
        method: 'POST',
        body: data,
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          const { message, status, user, token } = data;

          if (status === 'failed') {
            throw new Error(message);
          }

          dispatch(setAuthUser({ userInfo: user, token }));
          // eslint-disable-next-line no-empty
        } catch (error) {}
      },
    }),
    me: builder.query<TAuthGetResponse, void>({
      query: () => 'auth',
    }),
  }),
});

export const { useAuthenticateMutation, useMeQuery } = authApi;
