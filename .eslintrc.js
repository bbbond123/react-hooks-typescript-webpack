module.exports = {
  env: {
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'prettier',
    'prettier/react',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
  rules: {
    // Common
    'padded-blocks': ['warn', 'never'],
    'comma-dangle': ['error', 'never'],
    'arrow-parens': ['error', 'always'],
    'no-use-before-define': ['error', { functions: false }],
    'spaced-comment': 'warn',
    'no-extra-semi': 'warn',

    'no-return-assign': ['error', 'except-parens'],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-underscore-dangle': ['error'],
    'no-nested-ternary': 'warn',
    'consistent-return': 'warn',
    'max-depth': ['error', { max: 3 }],
    'max-lines-per-function': ['warn', { max: 150 }],
    'max-nested-callbacks': ['error', { max: 3 }],
    complexity: ['error', { max: 10 }],
    eqeqeq: 'error',
    'max-classes-per-file': ['error', 1],
    'prefer-const': 'warn',

    // Typescript Rules
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/interface-name-prefix': [
      'warn',
      {
        prefixWithI: 'always'
      }
    ],

    // React Rules
    'react/prop-types': 'off',
    'react/jsx-filename-extension': 'off',
    'react/no-array-index-key': 'warn',
    'react/jsx-one-expression-per-line': 'off',
    'react/prefer-stateless-function': 'warn',
    'react/jsx-indent': 'off',

    // React-Hooks Plugin
    // The following rules are made available via `eslint-plugin-react-hooks`
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    'react/display-name': 'off'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
