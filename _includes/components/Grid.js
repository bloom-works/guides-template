const { html } = require('common-tags')
const markdown = require("../../markdown");

function renderGrid(content, columns){
  const text = markdown.render(content);

  const validColumns = columns === 2 || columns === 3;
  if (validColumns) {
    return html`
      </div> <!-- /.l-stack-basic -->
      </div> <!-- /.l-text-wrapper -->
      <div class="l-wrapper">
        <div class="l-grid grid-${columns}col">
          ${text}
        </div>
      </div>
      <div class="l-text-wrapper">
      <div class="l-stack-basic">
    `
  } else {
    throw new Error(
    `Grid components can only have 2 columns or 3 columns.`
  );
  }
}

module.exports = renderGrid;
