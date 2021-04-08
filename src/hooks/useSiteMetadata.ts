import { useStaticQuery, graphql } from 'gatsby';

interface SiteMetadata {
  title: string;
  description: string;
}

interface SiteMetadataQueryResult {
  site: {
    siteMetadata: SiteMetadata;
  };
}

const useSiteMetadata = (): SiteMetadata => {
  const data: SiteMetadataQueryResult = useStaticQuery(
    graphql`
      query IndexLayout {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `,
  );

  return data.site.siteMetadata;
};

export { SiteMetadataQueryResult, SiteMetadata, useSiteMetadata };
