const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    devtool: 'eval-source-map',
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  // Sometimes, optional fields tend to get not picked up by the GraphQL
  // interpreter if not a single content uses it. Therefore, we're putting them
  // through `createNodeField` so that the fields still exist and GraphQL won't
  // trip up. An empty string is still required in replacement to `null`.
  if (node.internal.type === 'MarkdownRemark') {
    const { layout, description } = node.frontmatter;
    const { relativePath } = getNode(node.parent);

    let { slug } = node.frontmatter;

    if (!slug) {
      slug = `/${relativePath.replace('.md', '')}/`;
    }

    // Used to generate URL to view this content.
    createNodeField({
      node,
      name: 'slug',
      value: slug || '',
    });

    createNodeField({
      node,
      name: 'description',
      value: description || '',
    });

    // Used to determine a page layout.
    createNodeField({
      node,
      name: 'layout',
      value: layout || '',
    });
  }
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            fields {
              slug
              layout
            }
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.');
    return;
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const { slug, layout } = node.fields;
    createPage({
      path: slug,
      component: path.resolve(`./src/templates/${layout || 'main'}.tsx`),
      context: {
        // additional data can be passed via context
        slug,
      },
    });
  });
};
