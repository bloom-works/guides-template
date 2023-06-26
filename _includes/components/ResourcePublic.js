function renderResourcePublic(content, url){
  return `
    <li>
      <a href="${url}">
        <span class="resource-icon">
          <svg class="bi" width="1em" height="1em" fill="currentColor">
            <use xlink:href="/assets/images/bootstrap-icons.svg#file-earmark-text"></use>
          </svg>
        </span>
        <span class="resource-text">${content}</span>
      </a>
    </li>
  `
};

module.exports = renderResourcePublic;
