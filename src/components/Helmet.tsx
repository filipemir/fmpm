import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import 'styles/global.scss';
import { Helmet as ReactHelmet } from 'react-helmet';
import { getPath } from 'utils/location';
import Page from 'models/page';

interface HelmetProps {
    page?: Page;
    pageTitle?: string;
    description?: string;
}

export default function Helmet({ page, pageTitle, description }: HelmetProps) {
    const data = useStaticQuery(graphql`
            query HelmetQuery {
                site {
                    siteMetadata {
                        baseTitle
                        siteUrl
                        shareImageUrl
                    }
                }
            }
        `),
        { baseTitle, siteUrl, shareImageUrl } = data.site.siteMetadata,
        title = pageTitle ? pageTitle + ' | ' + baseTitle : baseTitle,
        canonicalUrl = page && siteUrl + getPath(page);

    return (
        <ReactHelmet>
            <title>{title}</title>
            {description && (
                <meta property='description' content={description} />
            )}
            <meta property='og:title' content={title} />
            <meta property='og:type' content='website' />
            {canonicalUrl && <meta property='og:url' content={canonicalUrl} />}
            <meta property='og:image' content={shareImageUrl} />
            <meta property='og:description' content={description} />
            <meta name='description' content={description} />
            <meta name='twitter:card' content='summary_large_image' />
            <meta name='twitter:description' content={description} />
        </ReactHelmet>
    );
}
