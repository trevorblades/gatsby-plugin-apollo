import React from 'react';
import client from './src/client';
import fetch from 'isomorphic-fetch';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';

export const wrapRootElement = ({element}, options) => (
  <ApolloProvider
    client={
      client instanceof ApolloClient
        ? client
        : new ApolloClient({
            ...options,
            fetch,
            cache: new InMemoryCache()
          })
    }
  >
    {element}
  </ApolloProvider>
);
