import * as React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

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
      <html lang="en">
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: data.site.siteMetadata.description,
            },
          ]}
        />
        <body>
          <h1>Test</h1>
          {props.children}
        </body>
      </html>
    )}
  />
);

export default IndexLayout;
