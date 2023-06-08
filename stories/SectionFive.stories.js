import "./scss/app.scss";

import { Callout } from "./Callout.stories";
import { Checklist } from "./Checklist.stories";
import { Footer } from "./Footer.stories";
import { KeyQuestions } from "./KeyQuestions.stories";
import { PageHeader } from "./PageHeader.stories";
import { Resources } from "./Resources.stories";

const bootstrapIconArrowRight = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg>
`;

// organ donation foreword

export default {
  title: 'Rough Example Pages/Section 5',
  args: {
    header: {
      title: 'Section 5: Design & Refine',
    },
    body: `
      <h2>
      5.1 Interpret and synthesize data</h2>

      <p>After collecting data, the next step is to interpret, analyze, and synthesize the data. This involves sorting, categorizing, and transforming raw data into something that is valuable and meaningful. Identifying new relationships within the existing data allows us to understand the problem in a new way. <br><br>To accomplish this, it is essential to involve all team members. Having everyone on the same page ensures that all perspectives are considered and any biases are accounted for. If it’s not feasible to have everyone present, it’s crucial to complete the synthesis process with at least one other teammate. This will help to avoid any misunderstandings and ensure that the data is interpreted accurately. <br><br>During the synthesis process, use tools such as Mural or Miro to organize the data. These tools can assist in identifying patterns, trends, and relationships within the data. By using this approach, it’s easier to make sense of complex data sets and identify relevant insights that can inform decision making.
      </p>


      ${Callout({
        'content': '<p>Online whiteboarding tools like Mural and Miro are not the most accessible tools. Please check in with your team to make necessary accommodations.</p>'
      })}

      <p>Lastly, it is important to allot at least one to two weeks to synthesize the raw data. It’s also critical to keep in mind that data synthesis is an iterative process, and may require multiple rounds of analysis and revision to arrive at meaningful conclusions and recommendations. Therefore, it is vital to allow sufficient time for review and refinement of the analysis as needed.  <br><br>To summarize, the synthesis process is important for transforming raw data into valuable insights. By validating the data, we can ensure that the insights are reliable and accurate, enabling us to draw conclusions and formulate recommendations.
      </p>
      <p>
      Depending on the level of engagement of the partner organization in the data collection and synthesis activities, consider what role partner team members can play in collaborating on synthesis activities. Some partners may prefer to stay hands-off, others might request access to notes, and others may want to actively see and participate in decisions about how data is analyzed. Consider sensitivity of the data and identifying participant information when deciding to invite in or work in the open with clients on synthesis activities.
      </p>

      ${Checklist({
        'item1': 'Build in enough time in the schedule to interpret, analyze, and synthesize the collected data',
        'item2': 'Assign a point person to lead the synthesis process',
        'item3': 'Be intentional about making the synthesis process a collaborative effort with the team',
        'item4': 'Schedule multiple team synthesis sessions',
        'item5': 'Decide on the tool the team will use to synthesize the data',
        'nextSection': true,
      })}

      ${KeyQuestions({
        'prevSection': true,
        'question1': 'Are we allowing sufficient time to interpret, analyze, and synthesize the data so as to not rush the process?',
        'question2': 'Are the themes and sub themes in the synthesis process clear?',
        'question3': 'Do the pulled notes/quotes/etc. provide context? Or is there a risk of the data being misconstrued?',
      })}

      <h2>5.2 Draw conclusions</h2>

      <p>
      After interpreting, analyzing, and synthesizing the data, drawing conclusions is the next essential step. It involves identifying key insights, patterns, and themes from the data that can help inform decision-making.
      </p>
      <p>
      To ensure the process of drawing conclusions is thorough, allocate at least 1 for a team, or at least 2 members to work collaboratively and identify the stories that emerge from the focus areas/themes. The team should consider the most impactful stories and themes based on the greatest need and the number of individuals they will affect. Consider which stories led to surprising “aha” moments or changed the team’s ideas and understanding of the problem. A prioritization exercise is helpful to pull out the most impactful stories and themes.
      </p>
      <p>
      As the team identifies the most impactful stories and themes, the team can seed these into a collaborative space, such as Mural, and proceed to draft recommendations. The team should use these stories and themes to inform the recommendations and ensure that they are actionable and practical.
      </p>

      ${Callout({
        'content': '<p>Here’s an example of turning a story into a solid recommendation.</p> <p><strong>Story:</strong> Kin caregivers that had legal support expressed how much of a positive difference it made</p><p><strong>Recommendation:</strong> Develop partnerships to provide independent, free or affordable legal support to kin families.</p>',
        'nextSection': true,
      })}

      ${Checklist({
        'prevSection': true,
        'item1': 'Schedule sufficient time (ideally 1 week) as a team to convene to pull out stories and draft recommendations based on data',
        'item2': 'Double check to verify if the recommendation overlaps with a current partner program or service',
        'nextSection': true,
      })}

      ${KeyQuestions({
        'prevSection': true,
        'question1': 'Have we budgeted sufficient time to draw conclusions?',
        'question2': 'Is more research required?',
        'question3': 'Are the findings in line with the research questions?',
        'question4': 'Are there any alternative explanations for the findings?',
        'question5': 'Are there any potential biases in the data that need to be addressed?'
      })}

      <h2 id="5-3-draft-recommendations">5.3 Draft recommendations</h2>


      <p>
      Developing recommendations is a key step to identify opportunities for partners to take meaningful action and implement change based on your findings. Think about what gaps or pain points identified in the findings offer an opportunity for the partner to make positive and actionable changes. The types of recommendations you develop might include (but not be limited to):
      </p>
      <ul>

      <li>building new tech solutions,

      <li>redesigning content on a website,

      <li>organizational change on internal/external processes,

      <li>augmenting staffing or contracts, or

      <li>advocating for policy changes

      <li>collaborating/connecting with certain stakeholders

      <li>enabling data collection to better understand problems/bottlenecks/performance<br>
      </li>
      </ul>
      <p>
      Use ”how might we” questions as a prompt to turn insights into actions. This ensures you are linking your recommendations to the insights you’ve uncovered, and what they can do about it. You may want to take this further and hold internal ideation workshops with team members to hold space for big picture thinking before prioritizing solutions and implementing constraints. As you start to prioritize ideas, consider high impact initiatives. These may address major pain points, benefit a large number of people, or act as enablers for future work and recommendations.
      </p>
      <p>
      Workshop draft recommendations with the client as a pulse check on direction, before delivering the final sprint findings which you’ll read about next! Consider using consequence scanning as a method to explore the intended and unintended consequences of solutions the partner organization may choose to implement.
      </p>
      ${Callout({
        'content': '<p>Sometimes research can be purely transactional, and your client may not want to be involved in workshopping recommendations, and that’s fine! Find an approach that works best for your client relationship!</p>',
      })}

      ${Resources({
        'headline': 'Examples',
        'resource1Title': 'ODI Impact/effort matrix for prioritizing recommendations',
        'resource1Link': 'https://docs.google.com/presentation/d/1ZqLmCTULwd_4q6tERoXWLHRw0xsRb14W/edit?usp=share_link&ouid=105196013299210443277&rtpof=true&sd=true',
        'resource2Title': 'CW Sprint 4 workshop mural board',
        'resource2Link': 'https://app.mural.co/t/bloom5049/m/bloom5049/1678886914944/1c0c55de1bfed76220b8e1417bd181ce7d16392f?sender=u7364d65dfc9363e3b77f0668',
        'resource3Title': 'Consequence scanning manual',
        'resource3Link': 'https://docs.google.com/presentation/d/1ZqLmCTULwd_4q6tERoXWLHRw0xsRb14W/edit?usp=share_link&ouid=105196013299210443277&rtpof=true&sd=true https://app.mural.co/t/bloom5049/m/bloom5049/1678886914944/1c0c55de1bfed76220b8e1417bd181ce7d16392f?sender=u7364d65dfc9363e3b77f0668',
      })}

      ${Checklist({
        'item1': 'Prioritize recommendations with an eye to what is high impact and lower effort',
        'item2': 'Consider your design constraints, and any partner limitations to keep in mind',
        'item3': 'Get feedback on findings and emerging recommendations by workshopping ideas with partners',
        'nextSection': true,
      })}

      ${KeyQuestions({
        'prevSection': true,
        'question1': 'How can the findings be turned into actionable solutions?',
        'question2': 'What recommendations can be implemented immediately and what might be long-term future work?',
        'question3': 'What recommendations will deliver the highest impact?',
        'question4': 'What time, effort, resources, and expertise is required to implement the solutions?',
      })}


      <h2>5.4 Generate your deliverables as a team! </h2>


      <p>
      Your team has likely been sketching out ideas throughout the sprint, and now it’s time to begin combining said sketches with your findings to create tangible, actionable products for delivery. As a team, you’ll work together to identify which artifacts make the most sense to convey the story you’re trying to tell.
      </p>
      <p>
      A reminder that we’re not delivering a definitive answer as a result of a discovery sprint — we’re providing context for what we’ve learned, and recommended next steps so our partners can take action.
      </p>
      <p>
      Final delivery typically consists of a few different elements (documents, slide decks, individual graphics — sometimes referred to as “artifacts” or “assets”) combined into a single “deliverable”. Typical deliverables generated during a discovery sprint are:
      </p>
      <ul>

      <li>A sprint report, including a 2 page executive summary

      <li>A slide deck that you’ll present

      <li>Maps (e.g.; service, tech, journey) and diagrams (technical, process flows)

      <li>Competitive analysis

      <li>Personas

      <li>Lightweight prototypes and wireframes
      </li>
      </ul>
      <p>
      What you’ll actually develop will vary from sprint to sprint, but it’s usually some combination of the above. These deliverables are often built using a combination of a whiteboard platform like Mural, Miro or Figjam, a web building tool like Figma or Sketch, content generation tool like Google Docs or Coda, or good ole HTML.
      </p>

      ${Callout({
        'content': '<p>Remember that folks that might have different usability needs might access them now or in the future. Diagrams and virtual whiteboards are lovely, but should be complements to plain-language text.</p>',
        'nextSection': true,
      })}

      ${Checklist({
        'prevSection': true,
        'item1': 'Identify which concepts would be best to visualize in order to tell the story you want',
        'item2': 'When possible, walk partners through potential artifacts so they can help identify what will appeal the most to the partner',
        'item3': 'Scale artifacts to the talents you have on the team',
        'item4': 'Create artifacts that are actionable',
        'item5': 'Artifacts are <a href="https://www.gsa.gov/policy-regulations/policy/information-technology-policy/it-accessibility-section-508">508 </a>and/or <a href="https://en.wikipedia.org/wiki/Web_Content_Accessibility_Guidelines">WCAG</a> compliant',
        'nextSection': true,

      })}

      ${KeyQuestions({
        'prevSection': true,
        'question1': 'Which findings and recommendations are central to the story you’re trying to tell?',
        'question2': 'What capabilities do you have on the team that’ll enable you to make certain artifacts?',
        'question3': 'What do you expect your partner to do with the artifacts? What actions can they take?',
        'question4': 'What problems are we illuminating? Why are we illuminating them?',
      })}
    `,
  },
};

export const Section5 = (args) => `
${PageHeader(args.header)}
<div class="l-text-wrapper">
<div class="l-stack-basic">
${args.body}
<p class="l-center">
  <a href="#" class="button button-icon">Read the next section ${bootstrapIconArrowRight}</a>
</p>
</div>
</div>
${Footer()}
`;