---
layout: layouts/base.njk
permalink: "components/table/"
---

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
