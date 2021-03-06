# gatsby-plugin-apollo

This plugin will set up a Gatsby project for use with [Apollo Client](https://www.apollographql.com/docs/react/v3.0-beta), in the most minimal way imaginable.

**Note:** This plugin accepts [only a few](#options) of the [options accepted by the `ApolloClient` constructor](https://www.apollographql.com/docs/react/v3.0-beta/api/core/ApolloClient/#the-apolloclient-constructor). If you need to use a more advanced Apollo Client configuration, try [gatsby-theme-apollo](https://github.com/apollographql/gatsby-theme-apollo/tree/master/packages/gatsby-theme-apollo) instead.

- [Installation](#installation)
- [Usage](#usage)
  - [Options](#options)
- [License](#license)

## Installation

To use this plugin, you'll also need to install your own copy of `@apollo/client`. This is what you'll use to make GraphQL queries in your React components.

```bash
$ npm install gatsby-plugin-apollo @apollo/client
```

## Usage

Add the plugin to your Gatsby config, and supply the location of your desired GraphQL API to the `uri` option. There are [more options](#options) available for _slighty_ advanced configurations.

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

### Options

| Option | Type | Description|
| - | - | - |
| `uri` | string | A string representing your GraphQL server endpoint. Defaults to `/graphql`. |
| `credentials` | string | Is set to `same-origin` by default. This option can be used to indicate whether the user agent should send cookies with requests. |
| `headers` | Object | Header key/value pairs to pass along with the request. |

## License

[MIT](./LICENSE)
