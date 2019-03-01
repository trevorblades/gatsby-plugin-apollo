import ApolloClient from 'apollo-boost';
import React from 'react';
import {ApolloProvider} from 'react-apollo';

// eslint-disable-next-line react/prop-types
export default function injectProvider({element}, options) {
  const client = new ApolloClient(options);
  return <ApolloProvider client={client}>{element}</ApolloProvider>;
}
