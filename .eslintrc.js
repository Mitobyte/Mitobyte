module.exports = {
  root: true,
  extends: [
    require.resolve('./src/common/rules/parserOptions'),
    'airbnb-base',
    require.resolve('./src/common/rules/base'),
    require.resolve('./src/common/rules/import'),
    'turbo',
    'plugin:prettier/recommended',
  ],
  plugins: ['import'],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  overrides: [
    /**
     * Configures ESLint for Typescript projects
     */
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
        require.resolve('./src/common/rules/typescript'),
      ],
      plugins: ['@typescript-eslint'],
      settings: {
        'import/resolver': {
          typescript: {
            // ! Required for eslint to resolve typescript alias paths
            project: ['tsconfig.json'],
          },
        },
      },
    },
  ],
};
