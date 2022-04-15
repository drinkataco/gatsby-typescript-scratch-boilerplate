import * as React from 'react';
import Helmet from 'react-helmet';

import Header from '../Header';
import { SiteMetadata, useSiteMetadata } from '../../hooks/useSiteMetadata';

import './style.scss';

interface LayoutProps {
  children: React.ReactNode | React.ReactNode[];
  title?: string;
  description?: string;
}

function MainLayout({ children, description, title }: LayoutProps) {
  const siteTitle = 'Gatsby Starter Template';
  const meta: SiteMetadata = useSiteMetadata();
  const metaDescription = description || meta.description;

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{siteTitle && (title || meta.title)}</title>
        {metaDescription && (
          <meta name="description" content={metaDescription} />
        )}
      </Helmet>
      <div className="w-4/5 m-auto font-sans pb-3">
        <Header siteTitle={ siteTitle } />
        <main>
          {children}
        </main>
      </div>
    </>
  );
}

export default MainLayout;
