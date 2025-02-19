# Fail if any command exits with a non-zero exit code
set -e

echo 'Running ESLint'
# Add JavaScript files or directories here.  Using ESLint for JS https://eslint.org/.
npx eslint

echo 'Running stylelint'
# Using stylelint for CSS https://stylelint.io/user-guide/cli
npx stylelint "**/*.css"

echo 'Run djlint'
# Using djlint for nunjucks https://www.djlint.com/docs/linter/
djlint ./ -e .njk --profile=nunjucks

