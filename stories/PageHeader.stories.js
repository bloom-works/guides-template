import "./scss/app.scss";

export default {
  title: 'Layout/Page Header',
  args: {
    'title': 'Section 1: About the Playbook',
  }
};

export const PageHeader = (args) => `
  <div class="page-header">
    <h1>${args.title}</h1>
  </div>
`;