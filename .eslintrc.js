module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  ignorePatterns: ['public/**/*.js'],
  extends: ['plugin:react/recommended', 'airbnb'],
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
  },
};
