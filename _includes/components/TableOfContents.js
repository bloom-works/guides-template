function renderTableOfContents(content) {
  return `
    <nav class="toc" aria-labelledby="toc-nav">
      <header id="toc-nav">In this section</header>
      <div class="toc-body">
        ${content}
      </div>
    </nav>
  `
}

module.exports = renderTableOfContents;
