import "./scss/app.scss";

export default {
  title: 'Elements/Typography',
  parameters: {
    // Remove layout parameter for full-width components
    layout: 'centered',
  },
};

export const Typography = (args) => `
  <h1>Heading One</h1>
  <h2>Heading 2</h2>
  <h3>Heading 3</h3>
  <h4>Heading 4</h4>
  <h5>Heading 5</h5>
  <h6>Heading 6</h6>
  <p>Paragraph text goes here</p>
  <ul>
    <li>Item One</li>
    <li>Item Two</li>
    <li>Item Three</li>
  </ul>
  <ol>
    <li>Item One</li>
    <li>Item Two</li>
    <li>Item Three</li>
  </ol>
`;