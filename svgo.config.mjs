export default {
  floatPrecision: 4,
  plugins: [
    {
      name: 'preset-default', // built-in plugins enabled by default
      params: {
        overrides: {
          removeViewBox: false,
        },
      },
    },
  ],
};
