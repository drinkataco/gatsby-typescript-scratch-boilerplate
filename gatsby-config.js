module.exports = {
  siteMetadata: {
    title: 'gatsby-typescript-scratch-boilerplate',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown-pages',
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        /* eslint-disable global-require */
        implementation: require('sass'),
        useResolveUrlLoader: true,
      },
    },
  ],
};
