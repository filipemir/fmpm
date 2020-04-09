const path = require('path');

module.exports = {
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
        `gatsby-plugin-layout`
    ]
};
