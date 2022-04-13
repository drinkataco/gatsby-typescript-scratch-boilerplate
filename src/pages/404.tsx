import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/MainLayout';

function NotFound(): React.ReactNode {
  return (
    <Layout>
      <h1>404 Not Found</h1>
      <Link to="/">Back to Index</Link>
    </Layout>
  );
}

export default NotFound;
