# Fail if any command exits with a non-zero exit code
set -e

echo 'Run Node tests'
# Run Playwright tests
npx playwright test

echo 'Run accessibility tests'
# Run Cypress accessibility tests
npm run serve & npx wait-on http://localhost:8080
npx cypress run
