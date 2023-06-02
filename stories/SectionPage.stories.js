import "./scss/app.scss";

import { Callout } from "./Callout.stories";
import { PageHeader } from "./PageHeader.stories";

// organ donation foreword

export default {
  title: 'Rough Example Pages/Section Page',
  args: {
    header: {
      title: 'Section 1: About the Playbook',
    },
    body: `
      <h2>1.1 What is a discovery sprint?</h2>
      
      <p>A discovery sprint is a time-bound, deep-dive investigation by a cross-functional team of skilled Bloomers* into a gnarly challenge facing an organization. The team gets to be professionally curious for about a month, working closely with a client organization to learn about a complex organizational problem or system, and view it with fresh eyes. The goal of discovery is to understand dynamics and organizational realities in order to deliver actionable recommendations and deliver actionable recommendations, not solve them in this time frame.
      
      <p>Typically, the team will interview key stakeholders and users to learn as much as it can about the problem in a short amount of time. Partners and stakeholders are encouraged to participate in research activities and synthesis sessions and learn alongside the team. As research progresses, the team distills insights and synthesizes findings in an iterative way.  The team should bring a learning mindset (and empathy) to the discovery sprint, as well as well-honed skills and craft. Best to leave preconceptions at the door. 
      
      <p>Rather than the team re-emerging at the end of the sprint with a fully baked plan - tada! - the team delivers findings and recommendations framed as actionable next steps to address the problems. What the team finds and recommends is as important as how the team tells the story: a well-crafted narrative and artifacts such as journey maps and technical diagrams provide a comprehensive account of what the team learned, why it’s recommending the next actions, and how to go about accomplishing them.  

      ${Callout({content: "The “sprint team” refers to the members of the Bloom team involved in the discovery sprint, including full-time staff and contractors, and sometimes members of other firms or organizations (e.g., Office of Data & Innovation (ODI), Skylight). While clients work closely and collaboratively with the team, for the purposes of this playbook, they are not included in the definition of “sprint team.”"})}

      <h2>1.2 How to use the playbook</h2>
      
      <p>Use this playbook to map out your sprint from start to finish. Discovery sprints are fast-paced and fluid, and can vary significantly in scope — but even so, there are universal, tried-and-true human-centered approaches and steps that apply to any sprint. We created this playbook to serve as a field guide for Bloomers to navigate their own journey - no matter their role - and include strategic, actionable guidance to do so successfully.</p>
    `,
  },
  parameters: {
  },
};

export const SectionPage = (args) => `
${PageHeader(args.header)}
<div class="l-wrapper">
  <section class="l-text-wrapper">
    <div class="l-stack-basic">
      ${args.body}
    </div>
  </section>
</div>
`;