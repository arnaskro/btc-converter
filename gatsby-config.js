require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: `BTC Converter`,
    description: `Convert Bitcoin (BTC) to United States Dollar (USD), Euro (EUR), British Pound Sterling (GBP).`,
    author: `@arnaskro`,
    disclaimer:
      'This data was produced from the CoinDesk Bitcoin Price Index (USD). Non-USD currency data converted using hourly conversion rate from openexchangerates.org'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bitcoin Converter`,
        short_name: `BTC Convert`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#49c5b6`,
        display: `minimal-ui`,
        icon: `src/images/bitcoin.png`
      }
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts the following options, all of which are defined by `@emotion/babel-plugin` plugin.
        // The values for each key in this example are the defaults the plugin uses.
        sourceMap: true,
        autoLabel: 'dev-only',
        labelFormat: `[local]`,
        cssPropOptimization: true
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: `Work Sans`,
            variable: true,
            weights: ['400..700']
          }
        ]
      }
    },
    `gatsby-plugin-offline`
  ]
}
