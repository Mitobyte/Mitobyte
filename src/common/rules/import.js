module.exports = {
  rules: {
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'import/no-cycle': ['warn', { maxDepth: 3 }],
    'sort-imports': ['error', { ignoreCase: true, ignoreDeclarationSort: true }],
    // Allows us to use package exports without ESLint complaining (typescript will still catch bad imports)
    'import/no-unresolved': [2, { ignore: ['^@littleotter/kit/*'] }],
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        groups: [['builtin', 'external'], 'internal', 'parent', 'sibling', 'index', 'object'],
        pathGroupsExcludedImportTypes: [],
        pathGroups: [
          {
            pattern: '@littleotter/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '@/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '$*/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '*.{json,graphql}',
            patternOptions: { matchBase: true, nocase: true },
            group: 'object',
            position: 'after',
          },
          {
            pattern: '*.{css,scss,eot,otf,ttf,woff,woff2,svg,jpg,jpeg,png,gif,html}',
            patternOptions: { matchBase: true, nocase: true },
            group: 'object',
            position: 'after',
          },
        ],
        'newlines-between': 'always',
      },
    ],
    // we had this on for a long time, but it's too much of a pain to maintain in the context of a monorepo and kept
    // having issues with typescript aliased paths.
    'import/no-extraneous-dependencies': 'off',
  },
};
