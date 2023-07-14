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
// Array of page urls to map through for accessibility testing
const urls = ['/', '/components/callout', '/components/checklist', '/components/table-of-contents', '/components/grid', '/components/key-questions', '/components/resources', '/components/page-header'];

describe('Component accessibility', () => {
  urls.forEach(url => {
    describe(`url: ${url}`, () => {
      beforeEach(() => {
        cy.visit(url)
        cy.injectAxe();
      });

      it('should pass accessibility check', () => {
        cy.checkA11y(null, {
          rules: {
            'color-contrast': { enabled: false },
            'heading-order': { enabled: false },
            'landmark-one-main': { enabled: false }
          }
        });
      });

      it('Logs violations to the terminal', () => {
        cy.checkA11y(null, {
          rules: {
            'color-contrast': { enabled: false },
            'heading-order': { enabled: false },
            'landmark-one-main': { enabled: false }
          }
        }, terminalLog)
      })
    });
  });
});
