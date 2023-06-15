import "./scss/app.scss";

const bootstrapIconPlus = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg>
`;

export default {
  title: 'Layout/Table Of Contents',
  args: {
    "link1": "",
    "item1": "At-will notice",
    "link2": "",
    "item2": "Equal employment",
    "link3": "",
    "item3": "Reasonable accommodations",
    "link4": "",
    "item4": "Exempt v. non-exempt",
    "link5": "",
    "item5": "Confidentiality",
    "link6": "",
    "item6": "Outside activities",
    "link7": "",
    "item7": "Corrective action",
    "link8": "",
    "item8": "Reporting irregularities",
    "link9": "",
    "item9": "Conflict of interest",
    "link10": "",
    "item10": "Background checks",
    "link11": "",
    "item11": "Immigration law compliance",
    "link12": "",
    "item12": "Employment classifications",
    "link13": "",
    "item13": "Personnel (and personal) records",
    "link14": "",
    "item14": "Employee references",
    "link15": "",
    "item15": "E-Verify",
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

export const TableOfContents = (args) => `
  <details class="toc">
    <summary>In this chapter ${bootstrapIconPlus}</summary>
    <ol>
      ${args.item1 ? `<li><a href="#${args.link1}">${args.item1}</a></li>` : ``}
      ${args.item2 ? `<li><a href="#${args.link2}">${args.item2}</a></li>` : ``}
      ${args.item3 ? `<li><a href="#${args.link3}">${args.item3}</a></li>` : ``}
      ${args.item4 ? `<li><a href="#${args.link4}">${args.item4}</a></li>` : ``}
      ${args.item5 ? `<li><a href="#${args.link5}">${args.item5}</a></li>` : ``}
      ${args.item6 ? `<li><a href="#${args.link6}">${args.item6}</a></li>` : ``}
      ${args.item7 ? `<li><a href="#${args.link7}">${args.item7}</a></li>` : ``}
      ${args.item8 ? `<li><a href="#${args.link8}">${args.item8}</a></li>` : ``}
      ${args.item9 ? `<li><a href="#${args.link9}">${args.item9}</a></li>` : ``}
      ${args.item10 ? `<li><a href="#${args.link10}">${args.item10}</a></li>` : ``}
      ${args.item11 ? `<li><a href="#${args.link11}">${args.item11}</a></li>` : ``}
      ${args.item12 ? `<li><a href="#${args.link12}">${args.item12}</a></li>` : ``}
      ${args.item13 ? `<li><a href="#${args.link13}">${args.item13}</a></li>` : ``}
      ${args.item14 ? `<li><a href="#${args.link14}">${args.item14}</a></li>` : ``}
      ${args.item15 ? `<li><a href="#${args.link15}">${args.item15}</a></li>` : ``}
    </ol>
  </details>
`;