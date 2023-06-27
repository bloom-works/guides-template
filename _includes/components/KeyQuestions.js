const { html } = require("common-tags");
const markdown = require("../../markdown");

function renderKeyQuestions(content){
  const items = markdown.render(content);

  return html`
    <section class="l-section icon-list" data-icon-type="key-questions">
      <h3 class="h4">Key Questions</h3>
      <ul class="l-stack-basic">
        ${items}
      </ul>
    </section>
  `
}

module.exports = renderKeyQuestions;
