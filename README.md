# Bloom Works Guides Starter Template

## Run Instructions

This requires Docker to be installed and running

1. Build the container: `docker build -t bloom-works/guides-template .`
1. Start the server: `docker run -it --rm -p "8080:8080" bloom-works/guides-template`
1. View the site in your browser at [http://localhost:8080](http://localhost:8080)

## Developer Setup

### Docker Version

This sets up the site with a consistent runtime environment, and requires Docker to be installed and running.

1. Navigate to the base of this repo
1. Build the container: `docker build -t bloom-works/guides-template .`
1. Start a terminal inside the container: `docker run -it --rm -p "8080:8080" -v "$PWD:/app" bloom-works/guides-template bash`
1. Install dependencies (first time only or when `package.json` changes): `npm install`
1. Start server: `npm run serve`
1. View the site in your browser at [http://localhost:8080](http://localhost:8080)

From here, changes to files locally will rebuild the site.

### Local Version

This uses whatever NPM and Node version you have installed on your machine, and might use fewer system resources than the Docker install (i.e. better for lower powered machines). If something is not working using this setup, use the Docker version to see if the problem exists there.

1. Navigate to the base of this repo
1. Install dependencies (first time only or when `package.json` changes): `npm install`
1. Start server: `npm run serve`
1. View the site in your browser at [http://localhost:8080](http://localhost:8080)

From here, changes to files will rebuild the site.
## Checking code before PR
### Running Linters
1. Navigate to the base of this repo
1. Run `sh ./ci/linter.sh`

#### CSS -- stylelint https://stylelint.io/user-guide/cli
1. If there are errors, `npx stylelint --fix "**/*.css"` will perform a dry-run of fixing all errors and those errors will not be saved.  Then `npx eslint --ext .js --fix [file or directory here]` will fix and save all errors.

#### JS -- ESLint https://eslint.org/docs/latest/use/command-line-interface
1. If there are errors, `npx eslint --ext .js --fix-dry-run [file or directory here]` will perform a dry-run of fixing all errors and those errors will not be saved.  Then `npx eslint --ext .js --fix [file or directory here]` will fix and save all errors.

#### Nunjucks -- djlint https://www.djlint.com/docs/linter/
1. From the base of this repo run `djlint ./ -e .njk --profile=nunjucks` to only run djlint.  Manually fix errors.
   
## Node Tests

We are using Playwright Tests to accomodate our testing needs for this project on destop and mobile.

Before pushing up a PR, tests can be run using `npx playwright test` for the command line output or `npx playwright test --ui` to open the tests in UI mode.
