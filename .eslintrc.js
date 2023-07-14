module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    jest: true
  },
  // Since ESLint ignores files beginning with a `.`, we want to explicity tell eslint to include the eleventy config file in the linting process
  ignorePatterns: '!.eleventy.js',
  extends: ['standard'],
  // ESLint needs this global cy variable to recognize the commands brought in from Cypress
  globals: {
    cy: true
  },
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    // Semicolon is not required in JS but can be useful to avoid syntax errors when compiler cannot auto-add.  We use it sometimes, if we want to require it 'semi: ['error', 'always']'
    semi: 'off',
    'no-unused-vars': 'off'
  }
}
