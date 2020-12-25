module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-param-reassign': 'off',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'import/no-cycle': 'off',
    'import/extensions': 'off',
    'object-curly-newline': 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
