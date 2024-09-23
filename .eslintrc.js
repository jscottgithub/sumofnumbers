module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['airbnb', 'airbnb-typescript', 'plugin:@typescript-eslint/recommended-type-checked'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  rules: {
    'arrow-parens': 'off',
    'func-names': 'off',
    'linebreak-style': 'off',
    'max-len': ['error', 120],
    'no-console': 'off',
    'no-plusplus': 'off',
    'no-restricted-syntax': 'off',
    'no-return-assign': 'off',
    'prefer-arrow-callback': 'off',
    quotes: ['error', 'single']
  },
  overrides: [
    {
      files: ['*.js'],
      parserOptions: {
        project: null // Don't use TypeScript type checking for JS files
      }
    }
  ]
};
