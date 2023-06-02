import "./scss/app.scss";

export default {
  title: 'Out of Scope?/Elements/Footnote',
  parameters: {
    // Remove layout parameter for full-width components
    layout: 'centered',
  },
  decorators: [(Story) => `
    <div class="l-text-wrapper">
      <div class="l-stack-basic">
        ${Story()}
      </div>
    </div>
  `],
};

export const Footnote = (args) => `
  <p>How often this happens varies depending on organ type and OPO practices. As reported to the OPTN in 2018, 19% of kidneys, 21% of pancreases, 8% of livers, 3% of intestines, 1% of hearts, and 7% of lungs were recovered for transplant but not transplanted.<sup id="fnref:115" role="doc-noteref"><a href="#fn:115" class="footnote" rel="footnote">3</a></sup></p>

  <h3 class="h4">Notes</h3>

  <div class="footnotes" role="doc-endnotes">
  <ol>
  <li id="fn:115" role="doc-endnote">
    <p>“<a href="https://onlinelibrary.wiley.com/doi/full/10.1111/ajt.15678">OPTN/SRTR 2018 Annual Data Report: Deceased Organ Donation</a>,” <em>American Journal of Transplantation</em>, 2020.&nbsp;<a href="#fnref:115" class="reversefootnote" role="doc-backlink">↩</a></p>
  </li>
  </ol>
`;