import "./scss/app.scss";

export default {
  title: 'Layout/Table of Contents',
  parameters: {
    // Remove layout parameter for full-width components
    layout: 'centered',
  },
};

export const TableofContents = (args) => `
  <p>This should contain:</p>

  <ul>
    <li>A "Table of Contents" header</li>
    <li>Links to each section of the page</li>
  </ul>
`;