import * as React from 'react';
import Helmet from 'react-helmet';

import './styles.scss';
import { SiteMetadata, useSiteMetadata } from '../../hooks/useSiteMetadata';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const IndexLayout: React.FC<LayoutProps> = ({
  children,
  description,
  title,
}: LayoutProps) => {
  const meta: SiteMetadata = useSiteMetadata();
  const metaDescription = description || meta.description;

  return (
    <div className="layout">
      <Helmet>
        <html lang="en" />
        <title>{title || meta.title}</title>
        { metaDescription && <meta name="description" content={metaDescription} /> }
      </Helmet>
      {children}
    </div>
  );
};

export default IndexLayout;
