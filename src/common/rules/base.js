module.exports = {
  rules: {
    camelcase: 'off',
    'max-len': [
      'error',
      {
        code: 120, // This should match our prettier config's printWidth
        ignoreUrls: true,
        ignoreTrailingComments: true,
      },
    ],
    'no-underscore-dangle': 'off',
    radix: 'off',
  },
};
