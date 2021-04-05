import * as React from 'react';
import { Link } from 'gatsby';

import IndexLayout from '../components/Layout';

const IndexPage = (): React.ReactNode => (
  <IndexLayout>
    <h1>Index Page</h1>
    <p>Welcome to your new Gatsby site.</p>
    <Link to="/about/">About</Link>
  </IndexLayout>
);

export default IndexPage;
