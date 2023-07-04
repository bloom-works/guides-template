# Fail if any command exits with a non-zero exit code
set -e 

echo 'Running stylelint'
# Using stylelint for CSS https://stylelint.io/user-guide/cli
npx stylelint "**/*.css"