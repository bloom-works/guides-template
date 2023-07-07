const { html } = require('common-tags');

function renderResourceGroup (content, headline) {
  return html`
    <h2>${headline || 'Additional Resources'}</h2>
    <div class="resources">
      <ul class="l-grid">${content}</ul>
    </div>
  `
}

module.exports = renderResourceGroup;
