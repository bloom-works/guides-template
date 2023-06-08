import "./scss/app.scss";

import { Callout } from "./Callout.stories";
import { Checklist } from "./Checklist.stories";
import { KeyQuestions } from "./KeyQuestions.stories";
import { PageHeader } from "./PageHeader.stories";
import { Footer } from "./Footer.stories";

const bootstrapIconArrowRight = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg>
`;

// organ donation foreword

export default {
  title: 'Rough Example Pages/Section 1',
  args: {
    header: {
      title: 'Section 1: About the Playbook',
    },
    body: `
      <h2 id="1-1-what-is-a-discovery-sprint">1.1 What is a discovery sprint?</h2>

      <p>
      A discovery sprint is a time-bound, deep-dive investigation by a cross-functional team of skilled Bloomers* into a gnarly challenge facing an organization. The team gets to be professionally curious for about a month, working closely with a client organization to learn about a complex organizational problem or system, and view it with fresh eyes. The goal of discovery is to understand dynamics and organizational realities in order to deliver actionable recommendations and deliver actionable recommendations, not solve them in this time frame.
      </p>
      <p>
      Typically, the team will interview key stakeholders and users to learn as much as it can about the problem in a short amount of time. Partners and stakeholders are encouraged to participate in research activities and synthesis sessions and learn alongside the team. As research progresses, the team distills insights and synthesizes findings in an iterative way.  The team should bring a learning mindset (and empathy) to the discovery sprint, as well as well-honed skills and craft. Best to leave preconceptions at the door.
      </p>
      <p>
      Rather than the team re-emerging at the end of the sprint with a fully baked plan - <em>tada!</em> - the team delivers findings and recommendations framed as actionable next steps to address the problems. What the team finds and recommends is as important as how the team tells the story: a well-crafted narrative and artifacts such as journey maps and technical diagrams provide a comprehensive account of what the team learned, why it’s recommending the next actions, and how to go about accomplishing them.
      </p>

      ${Callout({'content': 'The “sprint team” refers to the members of the Bloom team involved in the discovery sprint, including full-time staff and contractors, and sometimes members of other firms or organizations (e.g., Office of Data & Innovation (ODI), Skylight). While clients work closely and collaboratively with the team, for the purposes of this playbook, they are not included in the definition of “sprint team.”'})}
      </p>
      <h2 id="1-2-how-to-use-the-playbook">1.2 How to use the playbook</h2>


      <p>
      Use this playbook to map out your sprint from start to finish. Discovery sprints are fast-paced and fluid, and can vary significantly in scope — but even so, there are universal, tried-and-true human-centered approaches and steps that apply to any sprint. <strong>We created this playbook to serve as a field guide for Bloomers to navigate their own journey - no matter their role - and include strategic, actionable guidance to do so successfully.</strong>
      </p>
      <h3>What can I expect?</h3>


      <p>
      The playbook is broken down into 5 phases (not including this one, obvs):
      </p>
      <ol>

      <li><strong><a href="#section-2-prepare-for-a-discovery-sprint">Prepare</a></strong> — Everything you need to get up to speed for a sprint, leading up to kick-off

      <li><strong><a href="#section-3-define-a-discovery-sprint">Define</a></strong> — Learn how to gain an intimate understanding of the problem space, and start to generate a plan to conduct discovery.

      <li><strong><a href="#section-4-discover">Discover</a></strong> — Time to get professionally curious! We’ll cover methods and techniques on how to conduct research and synthesis

      <li><strong><a href="#section-5-design-&-refine">Design & Refine</a></strong> — Take what you’ve learned in discovery and begin to interpret findings and generate paths forward

      <li><strong><a href="#section-6-deliver">Deliver</a></strong> — How to prepare to present to your partners, deliver deliverables, and wrap up the sprint
      </li>
      </ol>
      <p>
      In each phase are plays, which are instructions formed from best practices on how to successfully complete sprint milestones. Each play includes:
      </p>
      <ul>

      <li>An<strong> Overview</strong> — What’s the play, who’s involved, and how do you do it?

      <li><strong>Checklist</strong> — Things to remember, or activities to complete

      <li><strong>Key questions</strong> — Prompts for critical thinking and reflection<br>
      </li>
      </ul>
      <p>
      And that’s it! This playbook is by no means exhaustive, or set in stone. We chose the “playbook” format for its modularity and concision — and fully expect this document to expand and change as the landscape evolves and we gain more knowledge. So, if you learn something in your own sprints that you don’t see here, add it!
      </p>

      ${Checklist({'item1': 'I understand what the heck this thing is now', 'nextSection': true})}

      ${KeyQuestions({
        'prevSection': true,
        'question1': 'Are you ready to dive into the fast-paced, exciting world of Discovery Sprints? Let’s go!',
      })}

      <h2 id="1-3-what-to-expect">1.3 What to expect</h2>


      <p>
      Every sprint will progress differently. For the sake of creating a shared understanding of what to expect during a discovery sprint, we outlined typical milestones during a 4 week sprint, including a week for preparation. Use these as guidance for charting and navigating your own sprint, and adjust the timing to fit the length and scale of your sprint engagement. Be aware there are always things that will directly impact your timing as well, like: a very large research participant pool, multiple participant groups or hard to reach participants. Or, a project may be longer because it includes multiple research tracks. <br>
      </p>

      <table>
        <thead>
        <tr>
         <th><strong>Week 0: Prepare for the sprint</strong>
         </th>
         <th><strong>Week 1: Define</strong>
         </th>
         <th><strong>Week 2: Discovery</strong>
         </th>
         <th><strong>Week 3: Design & Refine</strong>
         </th>
         <th><strong>Week 4: Deliver</strong>
         </th>
        </tr>
        </thead>
        <tr>
         <td>
      <ul>

      <li>Team alignment and ritual setting

      <li>Identify team and task leads

      <li>Set up contract language and relationship with partner

      <li>Internal kickoff

      <li>Prepare for recruitment
      </li>
      </ul>
         </td>
         <td>
      <ul>

      <li>Sprint kick off

      <li>Dive into and define the problem space

      <li>Identify audiences, methods, and recruitment for research

      <li>Write the research plan

      <li>Begin recruitment
      </li>
      </ul>
         </td>
         <td>
      <ul>

      <li>Conduct interviews and other research activities

      <li>Analyze data

      <li>Start to synthesize findings
      </li>
      </ul>
         </td>
         <td>
      <ul>

      <li>Finish synthesis and form conclusions

      <li>Draft recommendations

      <li>Draft final report

      <li>Put pen to paper — design visuals and products to deliver with the final report
      </li>
      </ul>
         </td>
         <td>
      <ul>

      <li>Present findings and recs to the partner

      <li>Deliver all files

      <li>Close out project

      <li>Final team retro
      </li>
      </ul>
         </td>
        </tr>
      </table>


      <h3>Keys to success </h3>


      <h4>Be intentional</h4>


      <p>
      Being intentional means proceeding with purpose. The goal of a discovery sprint is to quickly build an intimate understanding of a particular thing — be it a process, system, or service. Luckily, having a limited time frame to work in means there’s really not enough time to lose focus of the goal — but what’s important to keep top of mind throughout is everyone on the sprint team is moving toward said goal. To maintain momentum (and sanity), do your best to:
      </p>

      <h4>Get in the right “frame” of mind</h4>


      <ul>

      <li>Remember we’re trying to <strong>frame</strong> the problem, not solve it
      </li>
      </ul>
      <h4>Stay curious and flexible</h4>


      <ul>

      <li>Discovery sprints are all about absorbing as much information as possible — Be The Sponge

      <li>Use new findings to further shape and refine your understanding, and iterate on what will be your final deliverables

      <li>Know that partners can and will shift things — and that’s OK!
      </li>
      </ul>
      <h4>Communicate communicate communicate</h4>


      <ul>

      <li>Share knowledge — keep each other (including the client)  up to date on new discoveries, brick walls, and pivots

      <li>Create spaces for co-design both with each other and with the client, like working together passively on zoom

      <li>Check-in on each other on a regular cadence, especially during an emotionally taxing sprint — we’re all human, after all
      </li>
      </ul>
      <h4>Bake in time to be human with each other</h4>


      <ul>

      <li>Set up semi-regular activities, like ice breakers, casual coffee chats/meals, group games, and devoted time to blow off steam or retro

      <li>Everyone has different needs, work styles, and approaches — embrace it! Take the time to learn about each other and how to work together to achieve greatness
      </li>
      </ul>
      <h3><br>Working with diverse and marginalized populations</h3>


      <p>
      Projects at Bloom center the needs of people who rely on digital government services, and advance equity by making government work better for people. Participants we may engage and co-design with include people who have been marginalized by structural inequalities including race, gender, sexuality, age, socioeconomic status, ability, immigration status, religion, and other intersections of oppression. In our discovery and research practices, we seek to center, uplift, and make change that centers these perspectives while acknowledging the power we hold as researchers and designers. Cultural competence with these populations, includes:
      </p>
      <ul>

      <li>Protecting participant consent, data, and right to withdraw at any time

      <li>Taking a trauma-informed approach to how we design discovery sprints - both with each other and the participants we engage

      <li>Co-designing with participants whenever possible

      <li>Being accountable, and sharing back research learnings and how data will be used  with participants

      <li>Considering language and accessibility needs and ways to participate

      <li>Assessing the risks of participation, putting participant safety before the needs of the project, and conducting research in a way that’s least extractive

      <li>Setting and communicating a clear schedule for when participant data will be deleted
      </li>
      </ul>
      <h4>Cross-cultural competence</h4>


      <p>
      Our default is to assume our own cultural lens when approaching our work. Acknowledging and learning about differences across the cultures of the participants you will be working with, is an important aspect of how you can make participants feel comfortable, safe, and willing to engage fully. This might include thinking about the below dynamics when assembling the project team:
      </p>
      <ul>

      <li>What are the cultures, languages, and needs of the research participants you will be working with? How will this impact how you shape the research team (ie. a need for researchers who speak the language of participant groups, or who will feel more comfortable speaking to someone of the same gender?)

      <li>Write and speak in plain language and avoid jargon when possible. It’s recommended to try and keep key written communications to a Grade 5 reading level. You can use a tool like Hemingway to assess what grade level you have written in. Also, if a participant uses a certain word, use that instead as long as there is a shared understanding of what it means.

      <li>During research engagements, think about the way that you present in different spaces. Visiting someone’s home for an interview and attending a partner organization meeting, call for different attention to how we prepare, dress, or what we bring to these spaces.

      <li>Demonstrate humility, a willingness to learn, and own your mistakes. If you get this wrong, apologize and learn how to do better in the future to make the work more inclusive.
      </li>
      </ul>
    `,
  },
};

export const Section1 = (args) => `
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