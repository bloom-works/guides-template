module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  plugins: ['css'],
  extends: ['standard', 'plugin:css/standard'],
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
    // Semicolon is not required in JS but can be useful to avoid syntax errors when compiler cannot auto-add.  We use it sometimes, if we want to require it "semi: ['error', 'always']"
    semi: 'off'
  }
}
