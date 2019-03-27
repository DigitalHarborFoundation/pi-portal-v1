const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              id
              frontmatter {
                title
                slug
              }
            }
          }
        }
      }
    `).then(results => {
      results.data.allMarkdownRemark.edges.forEach(({ node }) =>
        createPage({
          path: `/lessons${node.frontmatter.slug}`,
          component: path.resolve(`./src/templates/lesson-content.js`),
          content: {
            slug: node.frontmatter.slug,
          },
        })
      );
    });
    resolve();
  });
};
