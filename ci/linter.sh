# Fail if any command exits with a non-zero exit code
set -e 

echo 'Running ESLint'

# Add JavaScript files or directories here.  Using ESLint for JS https://eslint.org/.
#npx eslint ./_includes/components/ --ext .js
npx eslint --ext .js ./