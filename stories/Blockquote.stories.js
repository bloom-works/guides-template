import "./scss/app.scss";

export default {
  title: 'Out of Scope?/Elements/Blockquote',
  parameters: {
    // Remove layout parameter for full-width components
    layout: 'centered',
  },
  decorators: [(Story) => `
    <div class="l-text-wrapper">
      ${Story()}
    </div>
  `],
};

export const Blockquote = (args) => `
  <figure class="blockquote-figure">
    <blockquote>
      We don’t have an adequate way of expressing the harm of a non-approached donor. There are significant harms — the donor’s decision to donate may not be honored, the family may not get closure or comfort, patients on the waiting list die, and costs increase to the national health care system. And yet OPOs are able to keep these harms invisible.
    </blockquote>
    <figcaption>—Researcher</figcaption>
  </figure>
`;