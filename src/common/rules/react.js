module.exports = {
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/no-unescaped-entities': 'off',
    'react/require-default-props': 'off', // Not needed with typescript
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.ts', '.tsx'] }],
    /**
     * Disallow except for single expressions
     * https://stackoverflow.com/questions/62488035/why-react-fc-doesnt-allow-me-to-just-return-children
     */
    'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
    'react/display-name': 'warn',
    'react/function-component-definition': [
      'error',
      { namedComponents: ['arrow-function'], unnamedComponents: ['arrow-function'] },
    ],
  },
};
