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
    });
  });
});
