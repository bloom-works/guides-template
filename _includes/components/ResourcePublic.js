const { html } = require('common-tags')
const markdown = require("../../markdown");

function renderResourcePublic(content, url){
  const resourceText = markdown.render(content);

  return html`
    <li>
      <a href="${url}">
        <span class="resource-icon">
          <svg class="bi" width="1em" height="1em" fill="currentColor">
            <use xlink:href="//bootstrap-icons.svg#file-earmark-text"></use>
          </svg>
        </span>
        <span class="resource-text">${resourceText}</span>
      </a>
    </li>
  `
};

module.exports = renderResourcePublic;
