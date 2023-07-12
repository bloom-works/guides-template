# Fail if any command exits with a non-zero exit code
set -e

# -----
# REPLACE THE BELOW WITH YOUR COMMANDS
# -----
npx playwright install --with-deps
npx playwright test

echo 'Run accessibility tests'
# Run Cypress accessibility tests
# Installing wait-on ensures the application is up and running before Cypress.
npm install -g wait-on
npm run serve & wait-on http://localhost:8080
npx cypress run
