module.exports = {
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/ban-types': 'warn',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'warn',
    '@typescript-eslint/consistent-type-imports': ['error', { fixStyle: 'inline-type-imports' }],
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-unused-vars': 'error',

    // TODO: Remove this and fix the relevant errors
    '@typescript-eslint/no-explicit-any': 'warn',

    // disable rules that are already checked by TS
    'consistent-return': 'off',
    'no-use-before-define': 'off',
    'no-shadow': 'off',
  },
};
