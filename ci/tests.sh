# Fail if any command exits with a non-zero exit code
set -e 

npx playwright install
npx playwright test
