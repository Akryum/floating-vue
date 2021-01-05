module.exports = {
  theme: {
    extend: {
      maxWidth: theme => ({
        ...theme('width'),
      }),
    },
  },
}
