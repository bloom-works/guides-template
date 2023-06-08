import "./scss/app.scss";

export default {
  title: 'Components/Key Questions',
  args: {
    'question1': 'How can the findings be turned into actionable solutions?',
    'question2': 'What recommendations can be implemented immediately and what might be long-term future work?',
    'question3': 'What recommendations will deliver the highest impact?',
    'question4': 'What time, effort, resources, and expertise is required to implement the solutions?',
    'question5': '',
    'prevSection': false,
    'nextSection': false,
  },
};

export const KeyQuestions = (args) => `
 ${args.prevSection ? `` : `
    </div> <!-- /.l-stack-basic -->
    </div> <!-- /.l-text-wrapper -->`
  }

  <div class="l-section key-questions">
    <div class="l-text-wrapper">
      <h3 class="h4">Key Questions</h3>
      <ul class="l-stack">
        ${args.question1 ? `<li>${args.question1}</li>` : ``}
        ${args.question2 ? `<li>${args.question2}</li>` : ``}
        ${args.question3 ? `<li>${args.question3}</li>` : ``}
        ${args.question4 ? `<li>${args.question4}</li>` : ``}
        ${args.question5 ? `<li>${args.question5}</li>` : ``}
      </ul>
    </div>
  </div>

  ${args.nextSection ? `` :
  `<div class="l-text-wrapper">
  <div class="l-stack-basic">`
  }
`;