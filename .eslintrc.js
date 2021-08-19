const env = process.env.NODE_ENV,
    isDev = env === 'development';

module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended'
    ],
    settings: {
        react: {
            version: 'detect'
        }
    },
    env: {
        browser: true,
        node: true,
        es6: true
    },
    plugins: ['@typescript-eslint', 'react'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    rules: {
        'react/prop-types': 'off', // Disable prop-types as we use TypeScript for type checking
        '@typescript-eslint/explicit-function-return-type': 'off',
        'no-console': isDev ? 'warn' : 'error',
        'no-debugger': isDev ? 'warn' : 'error'
    },
    overrides: [
        // Override some TypeScript rules just for .js files
        {
            files: ['*.js'],
            rules: {
                '@typescript-eslint/no-var-requires': 'off'
            }
        }
    ]
};
