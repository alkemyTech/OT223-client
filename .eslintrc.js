module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  ignorePatterns: ['public/**/*.js', 'test/**'],
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'jsx-quotes': ['error', 'prefer-single'],
    'no-param-reassign': 0,
    'no-use-before-define': 0,
    'react/prop-types': 0,
    'react/jsx-filename-extension': 0,
    'linebreak-style': 'off',
    'import/no-unresolved': 0
  },
};
