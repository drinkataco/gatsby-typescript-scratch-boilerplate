import * as React from 'react';
import { Link } from 'gatsby';

import IndexLayout from '../components/Layout';

const NotFound = (): React.ReactNode => (
  <IndexLayout>
    <h1>404 Not Found</h1>
    <Link to="/">Back to Index</Link>
  </IndexLayout>
);

export default NotFound;
