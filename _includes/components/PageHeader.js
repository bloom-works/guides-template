// Strip whitespace
const { html } = require('common-tags');

//
function renderPageHeader(subhead, title) ß{
  return html`
    <header role="banner" class="page-header">
      <div class="l-wrapper">
        <h1>
          ${ subhead ? `<span>${ subhead }</span>` : `` }
          <span class="sr-only">: </span>
          ${ title }
        </h1>
      </div>
    </header>
  `
}

module.exports = renderPageHeader;
