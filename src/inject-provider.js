import ApolloClient from 'apollo-boost';
import React from 'react';
import {ApolloProvider} from 'react-apollo';

// eslint-disable-next-line react/prop-types
export default function injectProvider({element}, {uri}) {
  const client = new ApolloClient({uri});
  return <ApolloProvider client={client}>{element}</ApolloProvider>;
}
