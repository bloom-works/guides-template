function renderGridColumn(content, headline, icon){
  return `
    <div class="col">
      <div class="grid-icon">
        <svg fill="currentColor">
          <use xlink:href="./assets/images//bootstrap-icons.svg#${icon}"></use>
        </svg>
      </div>
      <h3>${headline}</h3>
      <p>${content}</p>
    </div>
  `
}

module.exports = renderGridColumn;
