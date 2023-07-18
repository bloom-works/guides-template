---
layout: layouts/base.njk
permalink: "/components/all-components/"
subhead: "Section 2"
title: "About the Playbook"
tags: playbook
---


## At-will notice


Your employment is At-Will. You are not hired for any definite or specified period of time even though your wages are paid regularly. You are an at-will employee of Bloom and your employment can be terminated at any time, with or without cause and with or without prior notice. Company policy requires all employees to be hired at-will and this policy cannot be changed by any oral modifications. There have been no implied or verbal agreements or promises to you that you will be discharged only under certain circumstances or after certain procedures are followed. There is no implied employment contract created by this Guidebook or any other Company document or written or verbal statement or policy.


Only authorized management may alter or modify any of the policies in this Employee Guidebook with the exception of the "At-Will Employment" provision, which cannot be altered by anybody. Nothing in this guidebook is intended to infringe upon employee rights under Section Seven (7) of the National Labor Relations Act (NLRA).


## Equal employment


Bloom provides equal employment opportunities and administers all aspects and conditions of employment without regard to age, race, color, national origin, gender (including pregnancy, childbirth or medical condition related to pregnancy or childbirth), gender identity or expression, sexual orientation, religion, physical or mental disability, medical condition, genetic information, marital status, veteran status, military status, or any other characteristic protected by federal, state, or local law. Bloom takes allegations of discrimination, intimidation, harassment and retaliation very seriously and will promptly conduct an investigation when warranted.


Equal employment opportunity includes, but is not limited to, employment, training, promotion, demotion, transfer, leaves of absence, and termination.


## Reasonable accommodations


It is the policy of Bloom to comply with all the relevant and applicable provisions of the federal Americans with Disabilities Act (ADA), as well as state and local laws concerning the employment of persons with disabilities. Bloom will not discriminate against any qualified employee or job applicant because of a person's physical or mental disability with respect to any terms, privileges, or conditions of employment, including but not limited to hiring, advancement, discharge, compensation, and training.


Employees who become disabled should notify administration if the conditions of the disability impair their ability to perform the essential functions of their position. Where necessary and feasible, reasonable accommodations will be made for qualified disabled employees to perform the essential functions of the job in question, as long as the accommodation does not cause Bloom undue hardship.


## Exempt v. non-exempt


**Exempt:** Employees whose positions meet specific tests established by the Fair Labor Standards Act (FLSA) and applicable state law and who are exempt from overtime pay requirements. The basic premise of exempt status is that the exempt employee is to work the hours required to meet his/her work responsibilities. This includes managers and assistant managers as well as designated office personnel.


**Non-exempt:** Employees whose positions do not meet FLSA and state exemption tests and who are paid a multiple of their regular rate of pay for overtime hours worked.


### Info (default layout)


{% Callout %}
**Here’s an example of turning a story into a solid recommendation.**


**Story:** Kin caregivers that had legal support expressed how much of a positive difference it made


**Recommendation:** Develop partnerships to provide independent, free or affordable legal support to kin families
{% endCallout %}


### Warnings


{% Callout "warning" %}
This page was written in 2020 and has outdated information.


We'll bring it up to date soon.
{% endCallout %}


### Pep Talk


{% Callout "pep-talk" %}
This part of the process can be really challenging. But we guarantee that if you stick with it, you'll get great results. Make sure to lean on your colleagues for support!
{% endCallout %}




### Upcoming Events


{% Callout "event" %}
We're holding a virtual workshop on this topic on <strong>April 27 at 10am.</strong>


You can <a href="#">register here</a> if you'd like!
{% endCallout %}


Link to FLSA coverage: [http://www.flsa.com/coverage.html](http://www.flsa.com/coverage.html)


| Data Point  | Source  | Information   | Availability (e.g., public, upon request, not public)   |
|---  |---  |---  |---  |
| Organ utilization: Organs recovered for transplant, transplanted by donation service area (DSA)   | Scientific Registry of Transplant Recipients  | Data on the number of organs, by type, that are authorized and successfully transplanted  | Public  |
| Number of recovered organ donors, by race/ethnicity (%) by donation service area (DSA)  | Scientific Registry of Transplant Recipients  | Data on the demographics of organ donor patients; provides insight for researchers tracking procurement and transplantation equity  | Public, suppressed if <10 patients annually within DSA  |
| Number of vented patients referred to OPO care stratified by demographic  | OPO, currently collected by OPTN contractor on the DNR  | Data on the demographics of potential organ donor patients; provides insight for researchers tracking procurement and transplantation equity, quality of care and access to care<br><br>Counts number of patient interactions for regulators  | Public, suppressed if <10 patients annually within DSA  |
| Number of patients meeting referral criteria without appropriate hospital referral (adverse event)  | OPO, currently collected by OPTN contractor on the DNR  | Data on the demographics of potential organ donor patients; provides insight for researchers tracking procurement and transplantation equity , quality of care, access to care<br><br>Counts adverse events for regulators  | Not public at DSA level (small number of patients), should be public when aggregated at hospital system level/transplant system level   |
| Onsite patient evaluations (sometimes called “referral response”) rate  | OPO, currently collected at the organizational level but not reported to OPTN   | Provides insight for researchers tracking procurement and transplantation equity, quality of care, access to care<br><br>Provides quality of care data for regulators   | Public  |
| Onsite response to referred patient within 60 minutes   | OPO, currently collected at the organizational level but not reported to OPTN   | Provides insight for researchers tracking procurement and transplantation equity, quality of care, access to care<br><br>Provides quality of care data for regulators<br><br>Allows hospitals to validate OPO quality of care for patients referred   | Public  |
| Rate of referred patients per 100 CALC deaths (using seasonally-adjusted forecasts of CALC deaths)  | OPO, CMS denominator  | Provides insight for researchers tracking procurement and transplantation equity, quality of care, access to care<br><br>Provides quality of care data and measures effectiveness of OPO referral criteria for regulators   | Public  |
| Rate of referred patients ruled medically suitable  | OPO, currently collected by OPTN contractor on the DNR  | Provides insight for researchers tracking procurement and transplantation equity, quality of care, access to care<br><br>Provides quality of care data and measures effectiveness of OPO referral criteria for regulators   | Public  |


<script>
  const tableCells = document.querySelectorAll("tbody td");


  function prevElement(el, selector) {
    const prevEl = el.previousElementSibling;
    if (prevEl && prevEl.matches(selector)) {
      return prevEl;
    }
    return null;
  }


  tableCells.forEach(td => {
    const index = [...td.parentNode.children].indexOf(td);
    const thead = prevElement(td.closest('tbody'), 'thead');
    const tableHeaders = thead.querySelectorAll('th');
    const tableHeaderContent = tableHeaders[index].textContent;
    td.dataset.label = tableHeaderContent;
  });
</script>


{% KeyQuestions %}
- Are there any gaps — however small! — in expectations about key aspects of the project?
- How much experience/understanding does the partner have with human-centered design methods and Agile?
- What methods of research does the client have experience with (qualitative, quantitative)?
- Is the initial timeline for the project realistic given scope and known constraints?
- Has the team discussed how they will pivot if scope and timeline change?
- Will it be necessary to work with a firm or external stakeholders to support participant recruitment?
{%- endKeyQuestions -%}


{% Checklist %}
- A project charter has been drafted.
- Key roles for the partner have been identified.
- Background material and related research has been shared.
- Identify responsibility gaps or areas of ambiguity to address before kickoff.
- Internal client research participants identified for week 1 sessions.
{%- endChecklist -%}


{% ResourceGroup %}
  {% PublicResource "Bloom Works Homepage", "https://bloomworks.digital/" %}
  {% PublicResource "18F Guides", "https://18f.gsa.gov/guides/" %}
  {% PublicResource "DCYF Compensation Trigger Process", "https://docs.google.com/document/d/1jXK7_bcTCZxEi99LcmKyLMkohRmVFNwGthSwFJS0YwQ/edit" %}
  {% PublicResource "HHS Payment Information Report", "https://www.hhs.gov/sites/default/files/hhs-734.pdf" %}
  {% PrivateResource "Private Google Doc", "https://docs.google.com" %}
{% endResourceGroup %}




This is a {%- PrivateLink "https://docs.google.com/" -%}invite-only Google Doc{%- endPrivateLink -%} for Bloom Works staff.


{%- Grid -%}
  {%- GridColumn "Phase 1: Procurement", "hospital" -%}
    Coordinating with donor hospitals to procure organs from deceased donor patients who meet clinical criteria for donation.
  {%- endGridColumn -%}
  {%- GridColumn "Phase 2: Match & Recovery", "person-rolodex" -%}
    Matching the procured organ(s) with a patient on the waiting list to receive that organ, and overseeing surgical recovery of the organ(s).
  {%- endGridColumn -%}
  {%- GridColumn "Phase 3: Transport & Transplant", "car-front" -%}
    Transporting the recovered organ to the transplant center in sufficient time so that it can be transplanted successfully.
  {%- endGridColumn -%}
{%- endGrid -%}






