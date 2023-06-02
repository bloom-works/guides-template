import "./scss/app.scss";

// - Completion indicator?
// - Nested? (See the end of the playbook)


export default {
  title: 'Components/Checklist',
  args: {
    'item1': 'A project charter has been drafted.',
    'item2': 'Key roles for the partner have been identified.',
    'item3': 'Background material and related research has been shared.',
    'item4': 'Identify responsibility gaps or areas of ambiguity to address before kickoff.',
    'item5': 'Internal client research participants identified for week 1 sessions.',
  },
  parameters: {
    // Remove layout parameter for full-width components
    layout: 'centered',
  },
};

export const Checklist = (args) => `
  <h2>Checklist</h2>
  <ul class="l-stack checklist">
    <li class="checked">${args.item1}</li>
    <li class="checked">${args.item2}</li>
    <li>${args.item3}</li>
    <li>${args.item4}</li>
    <li>${args.item5}</li>
  </ul>
`;