import { useStaticQuery, graphql } from 'gatsby';

interface SiteContentPage {
  fields: {
    slug: string,
  }
  frontmatter: {
    title: string,
  }
}

interface SiteContentPagesResult {
  allMarkdownRemark: {
    nodes: SiteContentPage[];
  }
}

const useSiteContentPages = (): SiteContentPage[] => {
  const result: SiteContentPagesResult = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark {
          nodes {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    `,
  );

  return result.allMarkdownRemark.nodes;
};

export { SiteContentPage, SiteContentPagesResult, useSiteContentPages };
