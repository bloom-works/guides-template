const { oneLine } = require('common-tags');

function renderPrivateLink (content, url) {
  return oneLine`
    <a href="${url}" class="private-link">
      <span class="private-link-text">${content}</span>
      <span class="private-link-badge">
        <svg viewBox="0 0 16 16" fill="currentColor">
          <use xlink:href="/bootstrap-icons.svg#file-earmark-lock"></use>
        </svg>
        <span class="sr-only">(</span>
        Private
        <span class="sr-only">)</span>
      </span>
    </a>
  `
}

module.exports = renderPrivateLink;
