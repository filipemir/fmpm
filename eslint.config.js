import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginAstro from 'eslint-plugin-astro';
import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';

// Note: eslint-plugin-jsx-a11y is intentionally NOT included here. Its peer
// dependency range (eslint ^3-9) doesn't yet support the eslint 10 this repo
// is on, and its rules target JSX — this repo has zero .jsx/.tsx files, so
// there's nothing for it to check today. Revisit if/when a React island is
// ever justified (see CLAUDE.md's Islands & hydration rung 4) or the plugin
// adds eslint 10 support.

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
        // Node-executed scripts and config files.
        files: ['scripts/**/*.{js,mjs,ts}', '*.config.{js,mjs,ts}'],
        languageOptions: {
            globals: globals.node
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
