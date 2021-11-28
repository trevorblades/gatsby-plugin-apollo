# gatsby-plugin-apollo

This plugin sets up your Gatsby project to use [Apollo Client](https://www.apollographql.com/docs/react). It wraps your app in an `ApolloProvider` so that you can use GraphQL queries and mutations in your components.

```js
import {useQuery} from '@apollo/client';

function Cupcake() {
  const {data, loading, error} = useQuery(GET_CUPCAKE); // <-- just works
}
```

> To learn all about GraphQL and Apollo, check out the [Lift-off course](https://odyssey.apollographql.com/lift-off-part1/) on Odyssey, Apollo's learning platform.

- [Installation](#installation)
- [Configuration](#configuration)
  - [Plugin options](#plugin-options)
  - [Client shadowing](#client-shadowing)
- [License](#license)

## Installation

To use this plugin, you'll also need to install your own copy of `@apollo/client`. This package exports all of the tools you'll need to make GraphQL queries in your app.

```bash
npm install gatsby-plugin-apollo @apollo/client graphql
```

Once installed, add the plugin to your Gatsby config.

```js
// gatsby-config.js
module.exports = {
  plugins: ['gatsby-plugin-apollo']
};
```

## Configuration

This plugin supports two methods of configuration:

- [Installation](#installation)
- [Configuration](#configuration)
  - [Plugin options](#plugin-options)
  - [Client shadowing](#client-shadowing)
- [License](#license)

### Plugin options

For simple configurations, you can supply many of the [`ApolloClient` constructor options](https://www.apollographql.com/docs/react/api/core/ApolloClient/#options) directly to the plugin in your Gatsby config.

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-apollo',
      options: {
        uri: 'https://example.com/graphql'
      }
    }
  ]
};
```

Due to [a limitation](https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/configuring-usage-with-plugin-options/#what-can-be-passed-in-as-options) on the types of options that can be passed to a Gatsby plugin, only certain constructor options can be passed as plugin options. Options that require an instance of a JavaScript class, like `cache` or `link` can't be serialized as JSON, so they can't be configured in this way.

For more complex configurations, the [client shadowing](#client-shadowing) method allows you to define your own custom Apollo Client instance to be used by the plugin.

### Client shadowing

You can configure this plugin to use your own custom Apollo Client instance by creating a `client.js` file in `src/gatsby-plugin-apollo` that exports your client. You can create your client however you like, as long as you remember these important details:

1. You must provide an isomorphic fetch implementation (such as `isomorphic-fetch`) as an option to `HttpLink`
2. Your client instance must be the default export

```js
// src/gatsby-plugin-apollo/client.js
import fetch from 'isomorphic-fetch';
import {ApolloClient, HttpLink, InMemoryCache} from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://api.spacex.land/graphql/',
    fetch
  })
});

export default client;
```

This configuration method should be used if you need to customize your cache or use a complex link, such as [sending a JWT](https://www.apollographql.com/docs/react/networking/advanced-http-networking/#customizing-request-logic) along with every request or [enabling subscriptions](https://www.apollographql.com/docs/react/data/subscriptions/#3-split-communication-by-operation-recommended) using a `WebSocketLink`.

## License

[MIT](./LICENSE)
