const { html } = require("common-tags");
function renderKeyQuestions(content){
  return html`
    <div class="l-section icon-list" data-icon-type="key-questions">
      <h3 class="h4">Key Questions</h3>
      <ul class="l-stack-basic">
        ${content}
      </ul>
    </div>
  `
}

module.exports = renderKeyQuestions;
