import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';

function IndexPage(): React.ReactNode {
  return (
    <Layout>
      <h1>Index Page</h1>
      <p>Welcome to your new Gatsby site.</p>
      <Link to="/about/">About</Link>
    </Layout>
  );
}

export default IndexPage;
