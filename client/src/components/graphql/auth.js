import { ApolloClient, InMemoryCache } from "@apollo/client";

export const GRAPHQL_URL = "http://localhost:9000/";

  /**
   * * APOLLO GRAPHQL API
   */

export const client = new ApolloClient({
    uri: GRAPHQL_URL,
    cache: new InMemoryCache(),
  });