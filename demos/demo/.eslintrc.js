module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: [
    'plugin:vue/essential',
    '@vue/standard',
  ],

  parserOptions: {
    parser: 'babel-eslint',
  },

  rules: {
    'comma-dangle': ['error', 'always-multiline'],
  },
}
