import React from 'react';
import {ApolloProvider} from 'react-apollo';

// eslint-disable-next-line react/prop-types
export default function injectProvider({element}, {client}) {
  return <ApolloProvider client={client}>{element}</ApolloProvider>;
}
