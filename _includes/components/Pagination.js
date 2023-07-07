const { html } = require('common-tags');
const markdown = require('../../markdown');

function renderPagination (
  prevPageSubhead,
  prevPageTitle,
  prevPageURL,
  nextPageSubhead,
  nextPageTitle,
  nextPageURL
) {
  const prevPageTemplate = `
    <a class="button" data-icon data-size="small" href="${prevPageURL}">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
        <use xlink:href="/bootstrap-icons.svg#arrow-left-circle"></use>
      </svg>

      <span class="pagination-button-content">
        <span class="pagination-subhead">${prevPageSubhead}</span>
        <span class="sr-only">: </span>
        <span>${prevPageTitle}</span>
      </span>
    </a>
  `

  const nextPageTemplate = `
    <a class="button" data-icon data-size="small" href="${nextPageURL}">
      <span class="pagination-button-content">
        <span class="pagination-subhead">${nextPageSubhead}</span>
        <span class="sr-only">: </span>
        <span>${nextPageTitle}</span>
      </span>
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
        <use xlink:href="/bootstrap-icons.svg#arrow-right-circle"></use>
      </svg>
    </a>
  `
  return html`
    <div class="pagination">
      <div class="pagination-inner">
        ${prevPageTemplate}
        ${nextPageTemplate}
      </div>
    </div>
  `
}

module.exports = renderPagination;
