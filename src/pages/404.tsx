import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import { SiteContentPage, useSiteContentPages } from '../hooks/useSiteContentPages';

function NotFound(): React.ReactNode {
  const pages: SiteContentPage[] = useSiteContentPages();

  return (
    <Layout>
      <h1 className="font-bold mb-6">404 Not Found</h1>
      <h3>Why don&apos;t you try...</h3>
      <ul>
        {pages.map((page: SiteContentPage) => (
          <li key={page.fields.slug}>
            <Link to={page.fields.slug}>{page.frontmatter.title}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export default NotFound;
