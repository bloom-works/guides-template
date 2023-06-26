function renderChecklist(content){
  return `
    <div class="l-section checklist">
      <h3 class="h4">Checklist</h3>
      <ul class="l-stack-basic">
        ${content}
      </ul>
    </div>
  `
}

module.exports = renderChecklist;
