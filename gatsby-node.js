exports.onCreateWebpackConfig = ({
    stage,
    rules,
    loaders,
    plugins,
    actions,
  }) => {
    actions.setWebpackConfig({
        module: {
            rules: [
                {
                    test: /\.(j|t)sx?$/,
                    exclude: /node_modules/,
                    loader: 'eslint-loader',
                    options: {},
                },
                {
                    test: /\.(j|t)sx?$/,
                    use: {
                        loader: 'prettier-loader',
                        options: {
                            exclude: /node_modules/,
                        }
                    }
                }
            ]
        }
    })
  }