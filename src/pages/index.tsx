import * as React from 'react';

import Layout from '../components/Layout';

function IndexPage(): React.ReactNode {
  return (
    <Layout>
      <h1>Homepage</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>
        This is a template for you to build your new site with.
        This index page is static. But click around the navigation to
        see content rendered from Markdown!
      </p>
    </Layout>
  );
}

export default IndexPage;
