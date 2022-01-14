module.exports = {
  presets: [
    [
      require('@babel/preset-env'), {
        modules: false,
        // exclude: [
        //   '@babel/plugin-transform-regenerator',
        // ],
      },
    ],
  ],
}
