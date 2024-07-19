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
    makeContact: builder.mutation({
      query: (body) => ({
        url: `/contact`,
        method: 'post',
        body,
      }),
    }),
  }),
});

export const {
  useGetServicesQuery,
  useGetServiceQuery,
  useMakeContactMutation,
} = api;
