import * as React from 'react';
import { graphql } from 'gatsby';

import IndexLayout from '../components/Layout';

interface PageTemplateProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
    markdownRemark: {
      html: string;
      excerpt: string;
      frontmatter: {
        title: string;
        date: string;
      };
    };
  };
}

const PageTemplate: React.FC<PageTemplateProps> = ({
  data,
}: PageTemplateProps) => (
  <IndexLayout>
    {/* eslint-disable-next-line react/no-danger */}
    <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
  </IndexLayout>
);

export default PageTemplate;

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
