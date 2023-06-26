function renderResourceGroup(content, headline){
  return `
    <h2>${headline || "Additional Resources"}</h2>
    <div class="resources">
      <ul class="l-cluster">
        ${content}
      </ul>
    </div>
  `
}

module.exports = renderResourceGroup;
