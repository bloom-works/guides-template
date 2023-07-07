const { html } = require('common-tags');
const markdown = require('../../markdown');

function renderResourcePrivate (content, url) {
  const resourceText = markdown.render(content);

  return html`
    <li>
      <a href="${url}" data-link-private>
        <span class="resource-icon">
          <svg class="bi" width="1em" height="1em" fill="currentColor" title="For Bloom Staff Only">
            <use xlink:href="/bootstrap-icons.svg#file-earmark-lock"></use>
          </svg>
        </span>
        <span class="resource-text">${resourceText}</span>
      </a>
    </li>
  `
}

module.exports = renderResourcePrivate;
