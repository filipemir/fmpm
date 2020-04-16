const path = require('path');

const BASE_TITLE = 'Filipe Miranda | Software Engineer';

module.exports = {
    siteMetadata: {
        baseTitle: BASE_TITLE,
        baseCanonicalUrl: 'https://fmpm.dev'
    },
    plugins: [
        `gatsby-plugin-typescript`,
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-plugin-alias-imports`,
            options: {
                alias: {
                    "components": path.resolve(__dirname, 'src/components')
                },
                extensions: []
            }
        },
        {
            resolve: `gatsby-plugin-emotion`,
            options: {},
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: path.join(__dirname, `src`, `images`),
            },
        },
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-react-svg`,
        `gatsby-plugin-layout`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: 'gatsby-plugin-page-creator',
            options: {
                path: `${__dirname}/src/pages`,
                ignore: {
                  patterns: [`**/styles.(js|ts)?(x)`],
                }
              },
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
            },
        }
    ]
};
