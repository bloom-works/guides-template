const { html } = require('common-tags');
const markdown = require('../../markdown');

function renderChecklist (content) {
  const items = markdown.render(content);

  return html`
    <section class='l-section icon-list' data-icon-type='checklist'>
      <h3 class='h4'>Checklist</h3>
      ${items}
    </section>
  `
}

module.exports = renderChecklist;
