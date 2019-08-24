# gatsby-plugin-apollo

This plugin will set up a Gatsby project for use with [Apollo](https://www.apollographql.com/docs/react/), in the most minimal way imaginable.

**Note:** This plugin accepts [only a few](#options) of the [options accepted by Apollo Boost](https://www.apollographql.com/docs/react/essentials/get-started/#apollo-boost). If you need to use a more advanced Apollo Client configuration, use [gatsby-theme-apollo](https://github.com/apollographql/gatsby-theme-apollo/packages/gatsby-theme-apollo) instead.

- [Installation](#installation)
- [Usage](#usage)
  - [Options](#options)
- [License](#license)

## Installation

If you're using this package, you'll also need to install `graphql` and some `@apollo/react-*` package. I personally recommend using `@apollo/react-hooks`, but you might want to use `@apollo/react-components` or `@apollo/react-hoc` instead.

```bash
$ npm install gatsby-plugin-apollo graphql
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

[MIT](LICENSE)
