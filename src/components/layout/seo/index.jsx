import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const Seo = ({ title }) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    query Seo {
      site {
        siteMetadata {
          lang
          meta
        }
      }
    }
  `);

  return (
    <Helmet>
      <html lang={siteMetadata.lang} />
      <title>{title}</title>
      {siteMetadata.meta.map((values, i) => (
        <meta key={i} {...Object.fromEntries(values)} />
      ))}
    </Helmet>
  );
};

export default Seo;
