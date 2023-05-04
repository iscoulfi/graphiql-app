import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from 'config';
import type { GraphQLRequest } from 'types';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getGraphQL: builder.query<string, GraphQLRequest>({
      query: ({ query, headers, variables }) => ({
        url: '',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
        body: {
          query,
          variables,
        },
      }),
    }),
  }),
});

export const { useGetGraphQLQuery, useLazyGetGraphQLQuery } = api;
