import "./scss/app.scss";

const bootstrapIconLightbulb = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lightbulb" viewBox="0 0 16 16">
  <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z"/>
</svg>
`;

// Lightbulbs

export default {
  title: 'Components/Callout',
  args: {
    'content': `
      <p>Agile project management and human centered design methods may be new for the partner, and will require some socialization and training. Keep in mind that this method of working and the pace of the sprint may be an adjustment for the partner.</p>
    `,
    'prevSection': false,
    'nextSection': false,
  },
};

export const Callout = (args) => `
 ${args.prevSection ? `` : `
    </div> <!-- /.l-stack-basic -->
    </div> <!-- /.l-text-wrapper -->`
  }

  <div class="l-section callout">
    <div class="l-text-wrapper">
      <div class="callout-inner">
        <span class="callout-icon">${bootstrapIconLightbulb}</span>
        <div class="l-stack-basic">${args.content}</div>
      </div>
    </div>
  </div>

  ${args.nextSection ? `` : `
    <div class="l-text-wrapper">
    <div class="l-stack-basic">
  `}
`;