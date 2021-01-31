module.exports = {
  presets: [
    [
      '@babel/env', {
        modules: false,
        exclude: [
          '@babel/plugin-transform-regenerator',
        ],
      },
    ],
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
  ],
  env: {
    test: {
      presets: [
        [
          '@babel/env', {
            targets: { node: 'current' },
          },
        ],
      ],
      plugins: [
        '@babel/plugin-syntax-dynamic-import',
      ],
    },
  },
}
