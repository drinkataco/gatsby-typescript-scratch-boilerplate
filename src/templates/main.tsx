import * as React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';

interface PageTemplateProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
    markdownRemark: {
      html: string;
      frontmatter: {
        title: string;
        description: string;
      };
    };
  };
}

const PageTemplate: React.FC<PageTemplateProps> = ({
  data,
}: PageTemplateProps) => {
  const { description, title } = data.markdownRemark.frontmatter;
  return (
    <Layout description={description} title={title}>
      {/* eslint-disable-next-line react/no-danger */}
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </Layout>
  );
};

export default PageTemplate;

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
      }
    }
  }
`;
