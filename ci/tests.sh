# Fail if any command exits with a non-zero exit code
set -e

# -----
# REPLACE THE BELOW WITH YOUR COMMANDS
# -----
npx playwright install --with-deps
npx playwright test

# Run Cypress accessibility tests
apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb
npx cypress run