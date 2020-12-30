const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            extensions: ['.js', '.json', '.ts', '.tsx'],
            modules: [path.resolve(__dirname, './src'), 'node_modules']
        }
    });
};
