import js from '@eslint/js';
import pluginImport from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import prettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['dist', 'build', '**/*.stories.tsx', 'node_modules', '**/*.d.ts'],
  },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['src/**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
      'unused-imports': unusedImports,
      react,
      prettier,
      'simple-import-sort': simpleImportSort,
      import: pluginImport,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...jsxA11y.flatConfigs.recommended.rules,
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'react/jsx-pascal-case': 'error',
      'react/jsx-no-useless-fragment': 'warn',
      'react/jsx-no-constructed-context-values': 'error',
      'react/jsx-props-no-spread-multi': 'error',
      'react/no-array-index-key': 'error',
      'react/no-unstable-nested-components': 'error',
      'react/style-prop-object': 'error',
      'react/hook-use-state': 'warn',
      'react/forward-ref-uses-ref': 'warn',
      'react/prop-types': 'off',
      'react/jsx-max-depth': 'off',
      'react/void-dom-elements-no-children': 'error',
      'react/jsx-sort-props': [
        'warn',
        {
          callbacksLast: true,
          shorthandFirst: true,
        },
      ],
      'react/button-has-type': [
        'warn',
        {
          button: true,
          submit: true,
          reset: true,
        },
      ],
      'jsx-a11y/lang': 'error',
      'jsx-a11y/anchor-ambiguous-text': 'error',
      'jsx-a11y/no-aria-hidden-on-focusable': 'error',
      'jsx-a11y/prefer-tag-over-role': 'warn',
      'jsx-a11y/alt-text': 'error',
      'jsx-a11y/label-has-associated-control': [
        'error',
        {
          required: {
            some: ['nesting', 'id'],
          },
        },
      ],
      'jsx-a11y/no-redundant-roles': [
        'error',
        {
          nav: ['navigation'],
          ul: ['list'],
        },
      ],
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
          ignoreRestSiblings: true,
          caughtErrors: 'none',
        },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/dot-notation': 'off',
      '@typescript-eslint/no-unused-expressions': [
        2,
        {
          allowShortCircuit: true,
          allowTernary: true,
        },
      ],
      '@typescript-eslint/no-use-before-define': [
        'error',
        { functions: false, classes: false },
      ],
      // 'import/order': 'warn',
      'simple-import-sort/imports': [
        'warn',
        {
          groups: [
            // Packages `react` related packages come first.
            ['^react', '^@?\\w'],
            // Internal packages.
            ['^(@|components)(/.*|$)'],
            // Side effect imports.
            ['^\\u0000'],
            // Parent imports. Put `..` last.
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            // Other relative imports. Put same-folder imports and `.` last.
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
            // Style imports.
            ['^.+\\.?(css)$'],
          ],
        },
      ],
      'simple-import-sort/exports': 'warn',
      'import/first': 'error',
      'import/newline-after-import': 'off',
      'import/no-duplicates': 'error',
      'prettier/prettier': [
        'warn',
        {
          singleQuote: true,
          jsxSingleQuote: true,
          bracketSameLine: true,
          singleAttributePerLine: true,
          endOfLine: 'auto',
          trailingComma: 'es5',
        },
      ],
    },
  }
);
