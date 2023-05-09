export interface GraphQLRequest {
  query: string;
  variables?: Record<string, unknown>;
  headers?: Record<string, string>;
}
