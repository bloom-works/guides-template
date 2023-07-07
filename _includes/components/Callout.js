const { html } = require('common-tags');
const markdown = require('../../markdown');

function renderCallout (content, type) {
  const text = markdown.render(content);

  let icon = '';
  let title = '';

  switch (type) {
    case 'event':
      icon = 'calendar-week';
      title = 'Upcoming event';
      break;
    case 'pep-talk':
      icon = 'heart';
      title = 'A pep talk';
      break;
    case 'warning':
      icon = 'exclamation';
      title = 'Warning';
      break;
    default:
      icon = 'lightbulb';
      title = 'Important information';
  }

  return html`
    <section class='l-section callout' data-type='${type || 'info'}'>
      <div class='callout-inner'>
        <span class='callout-icon'>
          <svg title='${title}' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 16 16'>
            <use xlink:href='/bootstrap-icons.svg#${icon}'></use>
          </svg>
        </span>
        <div class='l-stack-basic'>${text}</div>
      </div>
    </section>
  `
}

module.exports = renderCallout;
