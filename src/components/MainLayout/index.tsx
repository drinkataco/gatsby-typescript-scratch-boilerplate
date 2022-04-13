import * as React from 'react';
import Helmet from 'react-helmet';

import './styles.scss';
import Navigation from '../Navigation';
import { SiteMetadata, useSiteMetadata } from '../../hooks/useSiteMetadata';

interface LayoutProps {
  children: React.ReactNode | React.ReactNode[];
  title?: string;
  description?: string;
}

function MainLayout({ children, description, title }: LayoutProps) {
  const siteTitle = 'Gatsby Template';
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
      <div className="layout">
        <header>
          <h1>
            { siteTitle }
            { title && ` - ${title}` }
          </h1>
        </header>
        <Navigation />
        {children}
      </div>
    </>
  );
}

export default MainLayout;
