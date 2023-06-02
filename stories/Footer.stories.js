import "./scss/app.scss";

export default {
  title: 'Layout/Footer',
  parameters: {
    // Remove layout parameter for full-width components
    layout: 'centered',
  },
};

export const Footer = (args) => `
  <p>This should contain:</p>
  <ul>
    <li>A "Contact Us" link</li>
    <li>The standard black footer on <a href="https://bloomworks.digital">Bloomworks.digital</a></li>
    <li>Maybe: links to other guides?</li>
  </ul>
`;