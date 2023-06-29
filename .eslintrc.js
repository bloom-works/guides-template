// TODO .eslintrc.js example
module.exports = {
    "env": {
        "browser": true,
        //"es2021": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    rules: {
        'no-restricted-imports': [
          'error',
          {
            paths: [
              {
                name: 'date-fns/locale',
                message:
                  "Please, import a specific locale instead, e.g. `import enUS from 'date-fns/locale/en-US';`",
              },
            ],
            patterns: ['!date-fns/locale/*'],
          },
        ],
      },
    
  }