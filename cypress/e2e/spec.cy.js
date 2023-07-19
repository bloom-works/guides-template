// Function that uses our tasks and pass it as the validationCallback argument to cy.checkA11y
// This function needs to go at the top of the spec file
function terminalLog (violations) {
  cy.task(
    'log',
    `${violations.length} accessibility violation${
      violations.length === 1 ? '' : 's'
    } ${violations.length === 1 ? 'was' : 'were'} detected`
  )
  // pluck specific keys to keep the table readable
  const violationData = violations.map(
    ({ id, description, helpUrl }) => ({
      id,
      description,
      helpUrl
    })
  )
  cy.task('table', violationData)
}

// Accessibility Testing
// Testing for MD file that contains all components at '/components/main-page'. Serves as a proof of concept for accessibility tests.

const mainUrl = 'components/all-components'

describe('All Components Accessiblity Test Page', () => {
  describe(`url: ${mainUrl}`, () => {
    it('Logs main accessibility testing page violations to the terminal', () => {
      cy.visit(mainUrl);
      cy.injectAxe();
      cy.checkA11y(null, null, terminalLog);
    });
  });
});

// Leaving the below accessibility tests as an example of some features that can be implemented for future devs if needed.

// Array of page urls to map through for accessibility testing
// const urls = ['/', '/components/callout', '/components/checklist', '/components/table-of-contents', '/components/grid', '/components/key-questions', '/components/resources', '/components/page-header'];

// describe('Component accessibility', () => {
//   urls.forEach(url => {
//     describe(`url: ${url}`, () => {
//       beforeEach(() => {
//         cy.visit(url)
//         cy.injectAxe();
//       });

//       it('Logs violations to the terminal', () => {
//         cy.checkA11y(null, {
//           rules: {
//             'color-contrast': { enabled: false },
//             'heading-order': { enabled: false },
//             'landmark-one-main': { enabled: false }
//           }
//         }, terminalLog);
//       });
//     });
//   });
// });
