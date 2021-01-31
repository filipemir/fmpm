const path = require('path');

const isImageUrlLoaderRule = (rule) => {
    const loader = rule.use && rule.use[0] && rule.use[0].loader,
        testRegExp = new RegExp(rule.test),
        isUrlLoader = loader && loader.includes('url-loader'),
        isJpgOrPng = testRegExp.test('.jpg') || testRegExp.test('.png');

    return isUrlLoader && isJpgOrPng;
};

exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
    const prevConfig = getConfig(),
        rulesWithoutImgUrlLoader = prevConfig.module.rules.filter(
            (rule) => !isImageUrlLoaderRule(rule)
        );

    actions.replaceWebpackConfig({
        ...prevConfig,
        module: {
            ...prevConfig.module,
            rules: [
                ...rulesWithoutImgUrlLoader,
                {
                    test: /\.(ico|jpg|jpeg|png|gif|webp)(\?.*)?$/i,
                    use: [
                        {
                            loader: 'img-optimize-loader',
                            options: {
                                compress: {
                                    webp: true
                                }
                            }
                        },
                        'webpack-image-resize-loader'
                    ]
                }
            ]
        },
        resolve: {
            ...prevConfig.resolve,
            extensions: ['.js', '.json', '.ts', '.tsx'],
            modules: [path.resolve(__dirname, './src'), 'node_modules']
        }
    });
};
