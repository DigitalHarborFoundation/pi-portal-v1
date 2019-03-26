module.exports = {
  siteMetadata: {
    title: `Digital Harbor Foundation Pi Portal`,
    description: `Digital Harbor Foundation's Pi Portal project for the Pi Pilot project in Spring 2018.`,
    author: `@jonathanprozzi`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `lessons`,
        path: `${__dirname}/src/lessons`
      }
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#F5FCFF`,
        theme_color: `#F5FCFF`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
}
