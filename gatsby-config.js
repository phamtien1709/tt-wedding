module.exports = {
  siteMetadata: {
    title: 'We are getting married - wedding - Tien Pham - Ha Thanh',
    author: 'Tien Pham',
    description: 'Website wedding of Tien-Thanh'
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Wedding',
        short_name: 'tt-wedding',
        start_url: '/',
        background_color: '#1b1f22',
        theme_color: '#7f828d',
        display: 'minimal-ui',
        icons: [
          {
            // Everything in /static will be copied to an equivalent
            // directory in /public during development and build, so
            // assuming your favicons are in /static/favicons,
            // you can reference them here
            src: `/pwa-icons/icon-192x192.png`,
            sizes: `192x192`,
            type: `image/png`
          },
          {
            src: `/pwa-icons/icon-512x512.png`,
            sizes: `512x512`,
            type: `image/png`
          }
        ]
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-styled-components`
  ]
}
