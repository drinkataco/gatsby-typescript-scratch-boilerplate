module.exports = {
  siteMetadata: {
    title: 'gatsby-typescript-scratch-boilerplate',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown-pages',
        path: `${__dirname}/src/content`,
      },
    },
    'gatsby-transformer-remark',
  ],
};
