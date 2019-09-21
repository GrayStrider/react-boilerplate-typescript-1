const fs = require('fs')
const path = require('path')

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
)

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['plugin:@typescript-eslint/recommended', 'eslint:all'],
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'redux-saga', 'jsx-a11y', 'import'],
  env: {
    jest: true,
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {

    /**
     * Reviewed
     */
    '@typescript-eslint/no-empty-interface': 'off',

    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'array-element-newline': 'off',
    'arrow-body-style': 'off',
    'arrow-parens': ['warn', 'as-needed'],
    'capitalized-comments': 'off',
    'comma-dangle': 'off',
    'dot-location': ['warn', 'property'],
    'implicit-arrow-linebreak': 'off',
    'indent': 'off',
    'max-len': ['warn', { code: 100 }],
    'newline-per-chained-call': ['warn', { 'ignoreChainWithDepth': 2 }],
    'no-console': 'off',
    'no-implicit-coercion': [2, { 'allow': ['!!'] }],
    'no-magic-numbers': 'off',
    'object-curly-spacing': 'off',
    'one-var': 'off',
    'prefer-template': 2,
    'quotes': 'off',
    'require-yield': 1,
    'semi': 0,
    'sort-imports': 'off',
    'spaced-comment': 1,
    'jsx-quotes': ['warn', 'prefer-single'],
    'padded-blocks': 'off',
    'function-call-argument-newline': ['error', 'consistent'],


    'no-process-env': 'off',
    'no-extra-parens': 'off',
    'no-negated-condition': 'off',
    'init-declarations': 'off',

    'no-shadow': ['warn', { 'allow': ['App'] }],
    'space-before-function-paren': "off",

    /**
     * Fixed by editor
     */
    'no-trailing-spaces': 'off',


    /**
     * ???
     */
    'class-methods-use-this': 0,
    'import/imports-first': 0,
    'import/newline-after-import': 1,
    'import/no-dynamic-require': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 0,
    'import/no-unresolved': 2,
    'import/no-webpack-loader-syntax': 0,
    'import/prefer-default-export': 1,
    'jsx-a11y/aria-props': 2,
    'jsx-a11y/heading-has-content': 0,
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/mouse-events-have-key-events': 2,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/role-has-required-aria-props': 2,
    'jsx-a11y/role-supports-aria-props': 2,
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        // NOTE: If this error triggers, either disable it or add
        // your custom components, labels and attributes via these options
        // See https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-associated-control.md
        controlComponents: ['Input'],
      },
    ],
    'no-param-reassign': 1,
    'no-unused-vars': 0,
    'no-use-before-define': 0,
    'object-shorthand': 0,
    'prettier/prettier': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react/destructuring-assignment': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-closing-tag-location': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-first-prop-new-line': 0,
    'react/jsx-no-target-blank': 0,
    'react/jsx-uses-vars': 2,
    'react/no-array-index-key': 0,
    'react/prefer-es6-class': 1,
    'react/require-default-props': 0,
    'react/require-extension': 0,
    'react/self-closing-comp': 0,
    'react/sort-comp': 0,
    'redux-saga/no-yield-in-race': 2,
    'redux-saga/yield-effects': 2,
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: './internals/webpack/webpack.prod.babel.js',
      },
    },
  },
}
