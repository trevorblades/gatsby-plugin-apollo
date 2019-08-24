import ApolloClient from 'apollo-boost';
import React from 'react';
import {ApolloProvider} from '@apollo/react-common';

// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({element}, pluginOptions) => {
  const client = new ApolloClient(pluginOptions);
  return <ApolloProvider client={client}>{element}</ApolloProvider>;
};
