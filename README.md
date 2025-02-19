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

## Editing Instructions

### Available Components

To see examples of different components, see the following:

- [Rendered](https://bloom-guides-template.netlify.app/components/all-components)
- Code: See `/components/all-components.md`

### Adding a Section

To add a new section to the site:

1. Add a new Markdown file to the `sections` folder (example: `sections/my-new-section.md`)
1. At the top of the file, add two lines with `---` and between those two lines put:
    - `layout: layouts/section`
    - `title: My New Section's Title`
1. Add content below the second `---`

Feel free to look at any of the existing sections as a starting point.

## Checking code before PR
### Running Linters
1. Navigate to the base of this repo
1. Run `sh ./ci/linter.sh`

 #### CSS -- [Stylelint Docs](https://stylelint.io/user-guide/cli)
1. If there are errors, `npx stylelint --fix "**/*.css"` will perform a dry-run of fixing all errors and those errors will not be saved.  Then `npx eslint --ext .js --fix [file or directory here]` will fix and save all errors.

#### JS -- [ESLint Docs](https://eslint.org/docs/latest/use/command-line-interface)
1. If there are errors, `npx eslint --ext .js --fix-dry-run [file or directory here]` will perform a dry-run of fixing all errors and those errors will not be saved.  Then `npx eslint --ext .js --fix [file or directory here]` will fix and save all errors.

 #### Nunjucks -- [djLint Docs](https://www.djlint.com/docs/linter/)
1. From the base of this repo run `djlint ./ -e .njk --profile=nunjucks` to only run djlint.  Manually fix errors.

## Running Node Tests

We are using Playwright Tests to accomodate our testing needs for this project on destop and mobile.

1. From the base of this repo run `npx playwright test` for the command line output or `npx playwright test --ui` to open the tests in UI mode.

## Running Accessibility Tests

We are using [Cypress](https://docs.cypress.io/guides/overview/why-cypress) and [Axe core](https://github.com/dequelabs/axe-core#axe-core) as our testing framework and engine for our accessibility tests.

1. Start your local server and make sure it's running at http://localhost:8080
1. Navigate to the base of this repo and run `npx cypress run` for tests to execute in the command line. To execute tests in Cypress' UI window, run `npx cypress open` and select E2E testing.
1. We have added functionality that will print an error table in the command line on test execution. This table includes the name and description of the error along with a `helpUrl` containing a URL where more information on how to fix that particular error can be found. Additionally, you can visit the official [axe-core rules](https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md) github to view the different axe-core rule descriptions.
1. Cypress captures snapshots at the time of test execution, these can be viewed by navigating to the `cypress/screenshots` folder.

### **Additional Notes on Cypress Testing for Local Development

- During local development, it is important to restart your server if you're making code or package changes while http://localhost:8080 is still running. This will ensure the Cypress tests are running and passing correctly in your local environment.
- If you are running Cypress tests in Docker and/or on a virtual machine, there are [additional dependencies](https://docs.cypress.io/guides/continuous-integration/introduction#Dependencies) you will need to install depending on what type of environment you have.
- If you are running Docker on your machine and get an error that `Cypress is not installed` and that it cannot find the cypress file at `/root/.cache/Cypress/12.17.1/Cypress`, this could be a permissions issue and you would run `node_modules/.bin/cypress install` inside of the Docker container to install Cypress.