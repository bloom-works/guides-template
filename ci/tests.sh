# Fail if any command exits with a non-zero exit code
set -e

# -----
# REPLACE THE BELOW WITH YOUR COMMANDS
# -----
npx playwright install
npx playwright test
