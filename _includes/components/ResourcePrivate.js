function renderResourcePrivate(content, url){
  return `
    <li>
      <a href="${url}" data-link-private>
        <span class="resource-icon">
          <svg class="bi" width="1em" height="1em" fill="currentColor" title="For Bloom Staff Only">
            <use xlink:href="/assets/images/bootstrap-icons.svg#file-earmark-lock"></use>
          </svg>
        </span>
        <span class="resource-text">${content}</span>
      </a>
    </li>
  `
}

module.exports = renderResourcePrivate;
