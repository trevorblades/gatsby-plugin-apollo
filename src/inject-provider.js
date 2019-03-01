import React from 'react';
import {ApolloClient} from 'apollo-client';
import {ApolloProvider} from 'react-apollo';

// eslint-disable-next-line react/prop-types
export default function injectProvider({element}, options) {
  const client = new ApolloClient(options);
  return <ApolloProvider client={client}>{element}</ApolloProvider>;
}
