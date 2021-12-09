import Head from 'next/head';

import { SITE_TITLE, SHARE_IMAGE_URL } from '../../config';
import Page from '../models/page';

interface SEOProps {
    page?: Page;
    pageTitle?: string;
    description?: string;
}

export default function SEO({ description, pageTitle }: SEOProps) {
    const title = pageTitle ? pageTitle + ' | ' + SITE_TITLE : SITE_TITLE;

    return (
        <Head>
            <title>{title}</title>
            {description && <meta name='description' content={description} />}
            <meta property='og:type' content='website' />
            <meta property='og:title' content={title} />
            <meta property='og:description' content={description} />
            <meta property='og:site_name' content={SITE_TITLE} />
            <meta property='og:image' content={SHARE_IMAGE_URL} />
            <meta property='twitter:card' content='summary_large_image' />
            <meta property='twitter:title' content={title} />
            <meta property='twitter:description' content={description} />
        </Head>
    );
}
