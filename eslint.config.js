import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginAstro from 'eslint-plugin-astro';
import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';

export default tseslint.config(
    {
        ignores: ['dist/**', '.astro/**', '.vercel/**', 'node_modules/**']
    },
    js.configs.recommended,
    ...tseslint.configs.recommended,
    ...eslintPluginAstro.configs['flat/recommended'],
    {
        // Browser-loaded scripts (wired up via <script src> in .astro pages),
        // not Node — they run against DOM/window globals, not Node's.
        files: ['src/scripts/**/*.js'],
        languageOptions: {
            globals: globals.browser
        }
    },
    {
        rules: {
            // Allow deliberately-unused function params when prefixed with _
            // (e.g. bands.js's per-frame `tick` param some effects don't use).
            '@typescript-eslint/no-unused-vars': [
                'warn',
                { argsIgnorePattern: '^_' }
            ]
        }
    },
    eslintConfigPrettier
);
