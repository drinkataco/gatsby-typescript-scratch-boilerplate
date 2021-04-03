import * as React from 'react';
import { graphql } from 'gatsby';

import IndexLayout from '../layout';

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
    <h1>{data.markdownRemark.frontmatter.title}</h1>
    <h2>{data.markdownRemark.frontmatter.date}</h2>
    {/* eslint-disable-next-line react/no-danger */}
    <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
  </IndexLayout>
);

export default PageTemplate;

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "DD MMMM, YYYY")
        slug
        title
      }
    }
  }
`;
