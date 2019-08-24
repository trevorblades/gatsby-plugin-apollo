import ApolloClient from 'apollo-boost';
import React from 'react';
import fetch from 'isomorphic-fetch';
import {ApolloProvider} from '@apollo/react-common';

// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({element}, {uri, headers, credentials}) => {
  const client = new ApolloClient({fetch, uri, headers, credentials});
  return <ApolloProvider client={client}>{element}</ApolloProvider>;
};
