import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from 'config';
import type { GraphQLRequest } from 'types';
import { getIntrospectionQuery, type IntrospectionQuery } from 'graphql';

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
    getGraphQLSchema: builder.query<IntrospectionQuery, void>({
      query: () => ({
        url: '',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: {
          query: getIntrospectionQuery(),
        },
      }),
      transformResponse: ({ data }: { data: IntrospectionQuery }) => {
        return data;
      },
    }),
  }),
});

export const {
  useGetGraphQLQuery,
  useLazyGetGraphQLQuery,
  useGetGraphQLSchemaQuery,
  useLazyGetGraphQLSchemaQuery,
} = api;
