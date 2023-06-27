const { html } = require('common-tags')

function renderGrid(content){

  return html`
    <div class="l-wrapper">
      <div class="l-grid icon-grid">
        ${content}
      </div>
    </div>
  `
}

module.exports = renderGrid;
