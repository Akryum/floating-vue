module.exports = {
  root: true,
  env: {
    node: true,
    jest: true,
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/standard',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'comma-dangle': ['error', 'always-multiline'],
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  ignorePatterns: [
    'node_modules/',
    'dist/',
    '!.vuepress/',
  ],
}
