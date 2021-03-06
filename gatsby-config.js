module.exports = {
  siteMetadata: {
    title: `Pi Portal`,
    description: `Digital Harbor Foundation's Pi Portal project for the Pi Pilot project in Spring 2019.`,
    author: `@jonathanprozzi`,
    siteUrl: `https://piportal.digitalharbor.org`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
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
        path: `${__dirname}/src/lessons`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // Adjust based on determined max-width in the image container
              maxWidth: 600,
              quality: 100,
              wrapperStyle: `margin-left: 0px; margin-right: 0px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              // optional CSS for the iframe wrapper
              wrapperStyle: `margin-bottom: 1.45rem`,
            },
          },
          {
            resolve: `gatsby-remark-smartypants`,
            options: {
              // placeholder for options as discovered
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              showLineNumbers: false,
              noInlineHighlight: true,
            },
          },
          `gatsby-remark-copy-linked-files`,
        ],
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pi Portal v1`,
        short_name: `pi-portal-v1`,
        start_url: `/`,
        background_color: `#fafafa`,
        theme_color: `#0091c9`,
        display: `minimal-ui`,
        icon: `src/images/favicon.ico`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: 'piportal.digitalharbor.org',
      },
    },
    `gatsby-mdx`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
  ],
};
