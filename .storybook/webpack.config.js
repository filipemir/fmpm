const path = require('path');

module.exports = ({ config }) => {
    const rules = config.module.rules;

    // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
    rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/];

    // use installed babel-loader which is v8.0-beta (which is meant to work with @babel/core@7)
    rules[0].use[0].loader = require.resolve('babel-loader');

    // use @babel/preset-react for JSX and env (instead of staged presets)
    rules[0].use[0].options.presets = [
        require.resolve('@babel/preset-react'),
        require.resolve('@babel/preset-env'),
        require.resolve('@emotion/babel-preset-css-prop')
    ];

    rules[0].use[0].options.plugins = [
        // use @babel/plugin-proposal-class-properties for class arrow functions
        require.resolve('@babel/plugin-proposal-class-properties'),
        // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
        require.resolve('babel-plugin-remove-graphql-queries')
    ];

    // Prefer Gatsby ES6 entrypoint (module) over commonjs (main) entrypoint
    config.resolve.mainFields = ['browser', 'module', 'main'];

    rules.push({
        test: /\.(ts|tsx)$/,
        loader: require.resolve('babel-loader'),
        options: {
            presets: [
                ['react-app', { flow: false, typescript: true }],
                require.resolve('@emotion/babel-preset-css-prop')
            ],
            plugins: [
                require.resolve('@babel/plugin-proposal-class-properties'),
                // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
                require.resolve('babel-plugin-remove-graphql-queries')
            ]
        }
    });

    config.resolve.extensions.push('.ts', '.tsx');
    config.resolve.modules = [path.resolve(__dirname, '../src'), 'node_modules'];

    rules.push({
        test: /\.(j|t)sx?$/,
        loader: require.resolve('prettier-loader'),
        options: {
            exclude: /node_modules/
        }
    });

    rules.push({
        test: /\.(s)?css$/,
        use: [
            { loader: 'style-loader', options: { sourceMap: false } }, // Necessary for hot module replacement
            { loader: 'css-loader', options: { sourceMap: false } },
            { loader: 'sass-loader', options: { sourceMap: true } }
        ]
    });

    // Override the default svg loader to use svg-react-loader:
    const fileLoaderRule = config.module.rules.find((rule) => rule.test.test('.svg'));
    fileLoaderRule.exclude = /\.svg$/;
    config.module.rules.push({
        test: /\.svg$/,
        use: ['svg-react-loader']
    });

    // No need for Webpack's max asset size warnings here:
    config.performance.hints = false;

    return config;
};
