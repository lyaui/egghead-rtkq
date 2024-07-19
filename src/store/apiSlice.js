import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getServices: builder.query({
      query: () => ({
        url: '/services',
      }),
    }),
    getService: builder.query({
      query: (id) => ({
        url: `/services/${id}`,
      }),
    }),
  }),
});

export const { useGetServicesQuery, useGetServiceQuery } = api;
