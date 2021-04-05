import * as React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import './styles.scss';

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string;
      description: string;
    };
  };
}

interface LayoutProps {
  children: React.ReactNode;
}

const IndexLayout: React.FC<LayoutProps> = (props: LayoutProps) => (
  <StaticQuery
    query={graphql`
      query IndexLayoutQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={(data: StaticQueryProps) => (
      <div className="layout">
        <Helmet>
          <html lang="en" />
          <title>{data.site.siteMetadata.title}</title>
          <meta name="description" content={data.site.siteMetadata.description} />
        </Helmet>
        {props.children}
      </div>
    )}
  />
);

export default IndexLayout;
