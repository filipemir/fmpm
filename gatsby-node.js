const path = require("path");

exports.onCreateWebpackConfig = ({ stage, rules, loaders, plugins, actions }) => {
    actions.setWebpackConfig({
        resolve: {
            extensions: [".js", ".json", ".ts", ".tsx"],
            modules: [path.resolve(__dirname, "./src"), "node_modules"],
        },
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