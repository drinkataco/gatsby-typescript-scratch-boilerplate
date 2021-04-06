import * as React from 'react';
import Helmet from 'react-helmet';

import './styles.scss';
import { SiteMetadata, useSiteMetadata } from '../../hooks/useSiteMetadata';

interface LayoutProps {
  children: React.ReactNode;
}

const IndexLayout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  const meta: SiteMetadata = useSiteMetadata();

  return (
    <div className="layout">
      <Helmet>
        <html lang="en" />
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>
      {children}
    </div>
  );
};

export default IndexLayout;
