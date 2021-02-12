/* eslint-disable @typescript-eslint/camelcase */

const path = require('path');

const BASE_TITLE = 'Filipe Miranda | Software Engineer';

module.exports = {
    siteMetadata: {
        baseTitle: BASE_TITLE,
        siteUrl: 'https://fmpm.dev',
        shareImageUrl: 'https://fmpm.dev/share.png'
    },
    plugins: [
        `gatsby-plugin-typescript`,
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-plugin-alias-imports`,
            options: {
                alias: {
                    components: path.resolve(__dirname, 'src/components')
                },
                extensions: []
            }
        },
        {
            resolve: `gatsby-plugin-emotion`,
            options: {}
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: path.join(__dirname, `src`, `images`)
            }
        },
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-react-svg`,
        `gatsby-plugin-layout`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sitemap`,
        {
            resolve: 'gatsby-plugin-page-creator',
            options: {
                path: `${__dirname}/src/pages`,
                ignore: {
                    patterns: [`**/styles.(js|ts)?(x)`]
                }
            }
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: BASE_TITLE,
                short_name: 'fmpm.dev',
                start_url: `/`,
                background_color: '#F0EFEF',
                theme_color: '#BC4124',
                display: `standalone`,
                icon: `src/images/favicon.png`
            }
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: 'UA-164614103-1',
                head: true,
                anonymize: true,
                respectDNT: true
            }
        },
        {
            resolve: 'gatsby-plugin-prettier-eslint',
            options: {
                prettier: {
                    patterns: [
                        // the pattern "**/*.{js,jsx,ts,tsx}" is not used because we will rely on `eslint --fix`
                        '**/*.{css,scss,less}',
                        '**/*.{json,json5}',
                        '**/*.{graphql}',
                        '**/*.{md,mdx}',
                        '**/*.{html}',
                        '**/*.{yaml,yml}'
                    ]
                },
                eslint: {
                    patterns: '**/*.{js,jsx,ts,tsx}',
                    customOptions: {
                        fix: true,
                        cache: true
                    }
                }
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `posts`,
                path: path.join(__dirname, `src`, `posts`)
            }
        },
        {
            resolve: 'gatsby-plugin-page-creator',
            options: {
                path: `${__dirname}/src/posts`
            }
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                defaultLayouts: {
                    default: require.resolve(
                        `${__dirname}/src/layouts/post.tsx`
                    )
                }
            }
        }
    ]
};
