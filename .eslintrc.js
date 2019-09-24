module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['airbnb-base', 'plugin:jest/all'],
  plugins: ['@typescript-eslint'],
  env: { node: true },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
      },
    },
  },
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    'jest/prefer-expect-assertions': 'off',
  },
};
