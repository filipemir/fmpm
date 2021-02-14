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
                    test: /\.(jpe?g|png|webp)(\?.*)?$/i,
                    use: [
                        {
                            loader: 'responsive-loader',
                            options: {
                                name: '[name]-[width].[hash].[ext]',
                                adapter: require('responsive-loader/sharp'),
                                sizes: [160, 320, 640, 960, 1920], // [thumb, small, medium, large, full]
                                placeholder: true,
                                format: 'webp'
                            }
                        }
                    ]
                },
                {
                    test: /\.(ico|gif)(\?.*)?$/i,
                    use: [
                        {
                            loader: 'file-loader'
                        }
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
