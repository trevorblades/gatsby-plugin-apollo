import React from 'react';
import fetch from 'isomorphic-fetch';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';

const cache = new InMemoryCache();

// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({element}, {uri, headers, credentials}) => {
  const client = new ApolloClient({fetch, uri, headers, credentials, cache});
  return <ApolloProvider client={client}>{element}</ApolloProvider>;
};
