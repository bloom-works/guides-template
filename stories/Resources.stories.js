import "./scss/app.scss";

const bootstrapIconFiletypePDF = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-filetype-pdf" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM1.6 11.85H0v3.999h.791v-1.342h.803c.287 0 .531-.057.732-.173.203-.117.358-.275.463-.474a1.42 1.42 0 0 0 .161-.677c0-.25-.053-.476-.158-.677a1.176 1.176 0 0 0-.46-.477c-.2-.12-.443-.179-.732-.179Zm.545 1.333a.795.795 0 0 1-.085.38.574.574 0 0 1-.238.241.794.794 0 0 1-.375.082H.788V12.48h.66c.218 0 .389.06.512.181.123.122.185.296.185.522Zm1.217-1.333v3.999h1.46c.401 0 .734-.08.998-.237a1.45 1.45 0 0 0 .595-.689c.13-.3.196-.662.196-1.084 0-.42-.065-.778-.196-1.075a1.426 1.426 0 0 0-.589-.68c-.264-.156-.599-.234-1.005-.234H3.362Zm.791.645h.563c.248 0 .45.05.609.152a.89.89 0 0 1 .354.454c.079.201.118.452.118.753a2.3 2.3 0 0 1-.068.592 1.14 1.14 0 0 1-.196.422.8.8 0 0 1-.334.252 1.298 1.298 0 0 1-.483.082h-.563v-2.707Zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638H7.896Z"/>
</svg>
`;

const bootstrapIconFileEarmarkText = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-text" viewBox="0 0 16 16">
  <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
  <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
</svg>`;

const bootstrapIconFileEarmarkLock = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-lock" viewBox="0 0 16 16">
  <path d="M10 7v1.076c.54.166 1 .597 1 1.224v2.4c0 .816-.781 1.3-1.5 1.3h-3c-.719 0-1.5-.484-1.5-1.3V9.3c0-.627.46-1.058 1-1.224V7a2 2 0 1 1 4 0zM7 7v1h2V7a1 1 0 0 0-2 0zM6 9.3v2.4c0 .042.02.107.105.175A.637.637 0 0 0 6.5 12h3a.64.64 0 0 0 .395-.125c.085-.068.105-.133.105-.175V9.3c0-.042-.02-.107-.105-.175A.637.637 0 0 0 9.5 9h-3a.637.637 0 0 0-.395.125C6.02 9.193 6 9.258 6 9.3z"/>
  <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>
</svg>
`;

export default {
  title: 'Components/Resources',
  args: {
    'headline': 'Additional Resources',
    'resource1Title': 'Casey Predictive Analytics Research Plan',
    'resource1Link': "#",
    'resource1Private': false,
    'resource2Title': 'Child Welfare Background Check Research Plan',
    'resource2Link': "#",
    'resource2Private': true,
    'resource3Title': 'ODI CalHR Sprint 2 Research Plan',
    'resource3Link': "#",
    'resource3Private': true,
    'resource4Title': 'Figure 1: Governance and Oversight in the Organ Donation Process',
    'resource4Link': "#",
    'resource4Private': false,
  },
  parameters: {
    // Remove layout parameter for full-width components
    layout: 'centered',
  },
  decorators: [(Story) => `
    <section class="l-text-wrapper">
      ${Story()}
    </section>
  `],
};

export const Resources = (args) => `
<h2>${args.headline}</h2>
<div class="resources">
  <ul class="l-cluster">
    ${args.resource1Title ? `
      <li>
        <a href="${args.resource1Link}"${ args.resource1Private ? ` data-link-private` : ``}>
          <span class="resource-icon">
            ${ args.resource1Private ? bootstrapIconFileEarmarkLock : bootstrapIconFileEarmarkText}
          </span>
          <span class="resource-text">${args.resource1Title}</span>
        </a>
      </li>
    ` : ``}

    ${args.resource2Title ? `
      <li>
        <a href="${args.resource2Link}"${ args.resource2Private ? ` data-link-private` : ``}>
          <span class="resource-icon">
            ${ args.resource2Private ? bootstrapIconFileEarmarkLock : bootstrapIconFileEarmarkText}
          </span>
          <span class="resource-text">${args.resource2Title}</span>
        </a>
      </li>
    `: ``}

    ${args.resource3Title ? `
      <li>
        <a href="${args.resource3Link}"${ args.resource3Private ? ` data-link-private` : ``}>
          <span class="resource-icon">
            ${ args.resource3Private ? bootstrapIconFileEarmarkLock : bootstrapIconFileEarmarkText}
          </span>
          <span class="resource-text">${args.resource3Title}</span>
        </a>
      </li>
    `: ``}

    ${args.resource4Title ? `
      <li>
        <a href="${args.resource4Link}"${ args.resource4Private ? ` data-link-private` : ``}>
          <span class="resource-icon">
            ${ args.resource4Private ? bootstrapIconFileEarmarkLock : bootstrapIconFiletypePDF}
          </span>
          <span class="resource-text">${args.resource4Title}</span>
        </a>
      </li>
    `: ``}
  </ul>
</div>
`;