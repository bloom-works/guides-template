# Fail if any command exits with a non-zero exit code
set -e 

echo 'Run djlint'
# Using djlint for nunjucks https://www.djlint.com/docs/linter/
djlint ./ -e .njk --profile=nunjucks