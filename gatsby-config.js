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
        }
    ]
};
