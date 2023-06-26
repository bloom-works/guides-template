const { html } = require('common-tags');
function renderChecklist(content){
  return html`
    <div class="l-section icon-list" data-icon-type="checklist">
      <h3 class="h4">Checklist</h3>
      <ul class="l-stack-basic">
        ${content}
      </ul>
    </div>
  `
}

module.exports = renderChecklist;
