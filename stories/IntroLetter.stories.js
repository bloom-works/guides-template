import "./scss/app.scss";

import { Navigation } from "./Navigation.stories";
import { PageHeader } from "./PageHeader.stories";

// organ donation foreword

export default {
  title: 'Rough Example Pages/Intro Letter',
  args: {
    header: {
      title: 'Foreword',
    },
    'signatory1_photo': 'park.jpg',
    'signatory1_name': 'Todd Park',
    'signatory1_title': 'HHS Chief Technology Officer, 2009-2012<br/>United States Chief Technology Officer, 2012-2014',
    'signatory2_photo': 'sivak.jpg',
    'signatory2_name': 'Bryan Sivak',
    'signatory2_title': 'HHS Chief Technology Officer, 2012-2015',
    'signatory3_photo': 'fox.jpg',
    'signatory3_name': 'Susannah Fox',
    'signatory3_title': 'HHS Chief Technology Officer, 2015-2017',
    'signatory4_photo': 'greenstein.jpg',
    'signatory4_name': 'Bruce Greenstein',
    'signatory4_title': 'HHS Chief Technology Officer, 2017–2018',
    'signatory5_photo': 'simcox.jpg',
    'signatory5_name': 'Ed Simcox',
    'signatory5_title': 'HHS Chief Technology Officer, 2018-2020',
  },
  parameters: {
  },
};

export const IntroLetter = (args) => `
${Navigation({guideName: 'The Costly Effects of an Outdated Organ Donation System'})}
${PageHeader(args.header)}
<div class="l-wrapper">
  <section class="intro-letter">
    <div class="l-stack-basic">
      <p><em>The following was written by former Chief Technology Officers of the U.S. Department of Health and Human Services.</em></p>
      
      <p>As former Chief Technology Officers of the U.S. Department of Health and Human Services (HHS), we have seen first-hand the impact that thoughtful systems reforms can have on patient outcomes.</p>

      <p>We have also all worked on organ donation reform, one of the very few issues that is so bipartisan that it has been supported by both the Trump and Obama Administrations. We are strongly motivated by data that show organ donation reform can save thousands of lives every year - as well as billions of dollars to the taxpayer - and help address racial disparities in our healthcare system.</p>

      <p>The results of this discovery sprint make clear that reforms to governance, process, and technology can help thousands more patients receive life-saving organ transplants each year. Patients deserve the very best both from their government and from the government contractors tasked with managing the organ donation system.</p>

      <p>To realize that basic errors in process (e.g., contractors never showing up to donor hospitals) and technology (e.g., organ offers going to deceased patients) are preventing tens of thousands of patients from receiving transplants, highlights exactly where we should focus.</p>

      <p>Patients deserve accountability. Proposed reforms from HHS, once finalized, coupled with Congressional oversight, can transform the system. As a patient care issue, an equity issue, and an issue of the best use of taxpayer dollars, policymakers have every reason to get this right. With this thoughtful set of recommendations, there is a clear path forward that will save lives.</p>
    
      <div class="l-cluster">
        <div class="intro-letter-signatory">
          <img src="/images/${args.signatory1_photo}" alt="Photo of ${args.signatory1_name}" />
          <div>
            <strong>${args.signatory1_name}</strong>
            <p>${args.signatory1_title}</p>
          </div>
        </div>
        <div class="intro-letter-signatory">
          <img src="/images/${args.signatory2_photo}" alt="Photo of ${args.signatory2_name}" />
          <div>
            <strong>${args.signatory2_name}</strong>
            <p>${args.signatory2_title}</p>
          </div>
        </div>
        <div class="intro-letter-signatory">
          <img src="/images/${args.signatory3_photo}" alt="Photo of ${args.signatory3_name}" />
          <div>
            <strong>${args.signatory3_name}</strong>
            <p>${args.signatory3_title}</p>
          </div>
        </div>
        <div class="intro-letter-signatory">
          <img src="/images/${args.signatory4_photo}" alt="Photo of ${args.signatory4_name}" />
          <div>
            <strong>${args.signatory4_name}</strong>
            <p>${args.signatory4_title}</p>
          </div>
        </div>
        <div class="intro-letter-signatory">
          <img src="/images/${args.signatory5_photo}" alt="Photo of ${args.signatory5_name}" />
          <div>
            <strong>${args.signatory5_name}</strong>
            <p>${args.signatory5_title}</p>
          </div>
        </div>
      </div>
    </div>

  </section>
</div>
`;