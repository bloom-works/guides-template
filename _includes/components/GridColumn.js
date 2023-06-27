const { html } = require('common-tags')
const markdown = require("../../markdown");

function renderGridColumn(content, headline, icon){
  const headlineMd = markdown.render(headline);
  const contentMd = markdown.render(content);

  return html`
    <div class="col">
      <div class="grid-icon">
        <svg fill="currentColor">
          <use xlink:href="/bootstrap-icons.svg#${icon}"></use>
        </svg>
      </div>
      <h3>${headlineMd}</h3>
      <p>${contentMd}</p>
    </div>
  `
}

module.exports = renderGridColumn;
