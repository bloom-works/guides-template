function renderPageHeader(subhead, title){
  return `
    <header role="banner" class="page-header">
      <div class="l-wrapper">
        <h1>
          ${ subhead ? `<span>${ subhead }</span>` : `` }
          <span class="sr-only">: </span>${ title }
        </h1>
      </div>
    </header>
  `
}

module.exports = renderPageHeader;
