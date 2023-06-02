import "./scss/app.scss";

export default {
  title: 'Layout/Navigation',
  parameters: {
    // Remove layout parameter for full-width components
    layout: 'centered',
  },
};

export const Navigation = (args) => `
  <p>This should contain:</p>
  <ul>
    <li>The name of the guide</li>
    <li>Links to every section of the guide</li>
    <li>A "back to all guides" link</li>
  </ul>
`;