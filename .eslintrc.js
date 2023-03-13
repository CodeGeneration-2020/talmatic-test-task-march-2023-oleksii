module.exports = {
  extends: './eslint-config/base.js',

  rules: {
    'import/prefer-default-export': 'error',
    'react/jsx-props-no-spreading': 'off',
  },

  overrides: [
    {
      files: ['*.test.@(ts|tsx)'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};
