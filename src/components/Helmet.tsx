import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import 'styles/global.scss';
import { Helmet as ReactHelmet } from 'react-helmet';

interface HelmetProps {
    pageTitle?: string;
    description: string;
    location?: Location;
}

export default function Helmet({ pageTitle, description, location = window.location }: HelmetProps) {
    const data = useStaticQuery(graphql`
            query HelmetQuery {
                site {
                    siteMetadata {
                        baseTitle
                        baseCanonicalUrl
                    }
                }
            }
        `),
        { baseTitle, baseCanonicalUrl } = data.site.siteMetadata,
        title = pageTitle ? pageTitle + ' | ' + baseTitle : baseTitle,
        canonicalUrl = baseCanonicalUrl + location.pathname;

    return (
        <ReactHelmet>
            <title>{title}</title>
            <meta property='description' content={description} />
            <meta property='og:title' content={title} />
            <meta property='og:type' content='website' />
            <meta property='og:url' content={canonicalUrl} />
            {/*<meta property="og:image" content={shareImageUrl} />*/}
            <meta property='og:description' content={description} />
            <meta name='description' content={description} />
            {/*<meta name="twitter:card" content="summary_large_image" />*/}
            <meta name='twitter:description' content={description} />
        </ReactHelmet>
    );
}
