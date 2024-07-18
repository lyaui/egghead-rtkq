import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getService: builder.query({
      query: () => ({
        url: '/services',
      }),
    }),
  }),
});

export const { useGetServiceQuery } = api;
