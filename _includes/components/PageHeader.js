// Strip whitespace
const { html } = require('common-tags');

function renderPageHeader (title) {
  return html`
    <header role="banner" class="page-header">
      <div class="l-wrapper">
        <h1>
          <span class="sr-only">: </span>
          ${title}
        </h1>
      </div>
    </header>
  `
}

module.exports = renderPageHeader;
