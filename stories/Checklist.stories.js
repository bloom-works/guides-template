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
};

export const Checklist = (args) => `
</div> <!-- /.l-stack-basic -->
</div> <!-- /.l-text-wrapper -->
<div class="l-section checklist">
  <div class="l-text-wrapper">
    <h3 class="h4">Checklist</h3>
    <ul class="l-stack">
      <li>${args.item1}</li>
      <li>${args.item2}</li>
      <li>${args.item3}</li>
      <li>${args.item4}</li>
      <li>${args.item5}</li>
    </ul>
  </div>
</div>
<div class="l-text-wrapper">
<div class="l-stack-basic">
`;