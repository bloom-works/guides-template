// Strip whitespace
const { html } = require('common-tags');

function renderPageHeader(subhead, title, search) {
  const searchMarkup = `
  <form class="search-form l-stack-basic">
    <label for="search" class="sr-only">Search this guide</label>
    <input type="text" id="search" class="search-input" value="bloom">
  </form>
  `;

  return html`
    <header role="banner" class="page-header"${search && ` data-page-type="search"`}>
      <div class="l-wrapper">
        <h1>
          ${ subhead ? `<span>${ subhead }</span>` : `` }
          <span class="sr-only">: </span>
          ${ title }
          ${ search && searchMarkup }
        </h1>
      </div>
    </header>
  `
}

module.exports = renderPageHeader;
