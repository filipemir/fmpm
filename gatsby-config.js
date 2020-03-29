const path = require('path');

module.exports = {
    plugins: [
        `gatsby-plugin-typescript`,
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
}
