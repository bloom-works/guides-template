import "./scss/app.scss";

// "Frequency / Size of Drop-Off" in Organ Donation Section 4

export default {
  title: 'Out of Scope?/Components/Alert',
  args: {
    header: 'Hello',
    body: 'xx',
  },
  decorators: [(Story) => `
    <div class="container">
      <section class="l-text-wrapper">
        <div class="l-stack-basic">
          ${Story()}
        </div>
      </section>
    </div>
  `],

};

export const Alert = (args) => `
  <p class="alert alert-high"><strong>High</strong> frequency / size of drop-off</p>

  <p class="alert alert-medium"><strong>Medium</strong> frequency / size of drop-off</p>

  <p class="alert alert-low"><strong>Low</strong> frequency / size of drop-off</p>
`;