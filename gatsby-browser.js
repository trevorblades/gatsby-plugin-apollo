import ApolloClient from 'apollo-boost';
import React from 'react';
import fetch from 'isomorphic-fetch';
import {ApolloProvider} from '@apollo/react-common';

// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({element}, pluginOptions) => {
  const client = new ApolloClient({...pluginOptions, fetch});
  return <ApolloProvider client={client}>{element}</ApolloProvider>;
};
