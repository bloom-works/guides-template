import "./scss/app.scss";

export default {
  title: 'Layout/Page Header',
  args: {
    'subhead': 'Section 1',
    'title': 'About the Playbook',
  }
};

export const PageHeader = (args) => `
  <header role="banner" class="page-header">
      <h1>
        ${args.subhead ? `<span>${args.subhead}</span>` : ``}
        <span class="sr-only">: </span>${args.title}
      </h1>
  </header>
`;