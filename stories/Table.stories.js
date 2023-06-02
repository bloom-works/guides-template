import "./scss/app.scss";

// Section 1.3, definitely necessary for Organ Donation Section 10 Appendices

export default {
  title: 'Out of Scope?/Elements/Table',
  decorators: [(Story) => `
    <div class="l-wrapper">
      ${Story()}
    </div>
  `],
};

export const Table = (args) => `
<table>
  <thead>
    <tr>
      <th>Data Point</th>
      <th>Source</th>
      <th>Information Provided</th>
      <th>Availability  (e.g., public, upon request, not public)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Organ utilization: Organs recovered for transplant, transplanted by donation service area (DSA)
      </td>
      <td>Scientific Registry of Transplant Recipients
      </td>
      <td>Data on the number of organs, by type, that are authorized and successfully transplanted
      </td>
      <td>Public
      </td>
    </tr>
     <tr>
      <td>Number of recovered organ donors, by race/ethnicity (%) by donation service area (DSA)
      </td>
      <td>Scientific Registry of Transplant Recipients
      </td>
      <td>Data on the demographics of organ donor patients; provides insight for researchers tracking procurement and transplantation equity
      </td>
      <td>Public, suppressed if &lt;10 patients annually within DSA
      </td>
    </tr>
    <tr>
      <td>Number of vented patients referred to OPO care stratified by demographic
      </td>
      <td>OPO, currently collected by OPTN contractor on the DNR
      </td>
      <td>Data on the demographics of potential organ donor patients; provides insight for researchers tracking procurement and transplantation equity, quality of care and access to care
      <br>
      <br>
      Counts number of patient interactions for regulators
      </td>
      <td>Public, suppressed if &lt;10 patients annually within DSA
      </td>
    </tr>
    <tr>
      <td>Number of patients meeting referral criteria without appropriate hospital referral (adverse event)
      </td>
      <td>OPO, currently collected by OPTN contractor on the DNR
      </td>
      <td>Data on the demographics of potential organ donor patients; provides insight for researchers tracking procurement and transplantation equity , quality of care, access to care
      <br>
      <br>
      Counts adverse events for regulators
      </td>
      <td>Not public at DSA level (small number of patients), should be public when aggregated at hospital system level/transplant system level
      </td>
    </tr>
    </tr>
      <td>Onsite patient evaluations (sometimes called “referral response”) rate
      </td>
      <td>OPO, currently collected at the organizational level but not reported to OPTN
      </td>
      <td>Provides insight for researchers tracking procurement and transplantation equity, quality of care, access to care
      <br>
      <br>
      Provides quality of care data for regulators
      </td>
      <td>Public
      </td>
    </tr>
    </tr>
      <td>Onsite response to referred patient within 60 minutes
      </td>
      <td>OPO, currently collected at the organizational level but not reported to OPTN
      </td>
      <td>Provides insight for researchers tracking procurement and transplantation equity, quality of care, access to care
      <br>
      <br>
      Provides quality of care data for regulators
      <br>
      <br>
      Allows hospitals to validate OPO quality of care for patients referred
      </td>
      <td>Public
      </td>
    </tr>
    </tr>
      <td>Rate of referred patients per 100 CALC deaths (using seasonally-adjusted forecasts of CALC deaths)
      </td>
      <td>OPO, CMS denominator
      </td>
      <td>Provides insight for researchers tracking procurement and transplantation equity, quality of care, access to care
      <br>
      <br>
      Provides quality of care data and measures effectiveness of OPO referral criteria for regulators
      </td>
      <td>Public
      </td>
    </tr>
    </tr>
      <td>Rate of referred patients ruled medically suitable
      </td>
      <td>OPO,  currently collected by OPTN contractor on the DNR
      </td>
      <td>Provides insight for researchers tracking procurement and transplantation equity, quality of care, access to care
      <br>
      <br>
      Provides quality of care data and measures effectiveness of OPO referral criteria for regulators
      </td>
      <td>Public
      </td>
    </tr>
    </tr>
      <td>Rate of ruled medically suitable patients per 100 CALC deaths (using seasonally-adjusted forecasts of CALC deaths)
      </td>
      <td>OPO, CMS denominator
      </td>
      <td>Provides insight for researchers tracking procurement and transplantation equity, quality of care, access to care
      <br>
      <br>
      Provides quality of care data and measures effectiveness of OPO referral criteria for regulators
      </td>
      <td>Public
      </td>
    </tr>
    </tr>
      <td>Rate of referred patients with approach (stratified by age, race/ethnicity, and OPTN cause of death)
      </td>
      <td>OPO, only authorization outcome is currently collected on the DNR (authorized yes/no), but all OPOs collect these data at the organizational level
      </td>
      <td>Provides insight for researchers tracking procurement and transplantation equity, quality of care, access to care
      <br>
      <br>
      Provides quality of care data and effectiveness of selection for approach for regulators
      <br>
      <br>
      Allows hospitals to validate OPO quality of care for patients referred
      </td>
      <td>Public, suppressed if &lt;10 patients annually within DSA
      </td>
    </tr>
    </tr>
      <td>Rate of family approach per 100 vented referrals
      </td>
      <td>OPOOPO, only authorization outcome is currently collected on the DNR (authorized yes/no), but all OPOs collect these data at the organizational level, CMS denominator
      </td>
      <td>Provides insight for researchers tracking procurement and transplantation equity, quality of care, access to care
      <br>
      <br>
      Provides quality of care data and effectiveness of selection for approach for regulators
      </td>
      <td>Public
      </td>
    </tr>
    </tr>
      <td>Rate of family authorization per 100 approaches (stratified by age, race/ethnicity, and OPTN cause of death)
      </td>
      <td>OPO, only authorization outcome is currently collected on the DNR (authorized yes/no), but all OPOs collect these data at the organizational levelOPO
      </td>
      <td>Provides insight for researchers tracking procurement and transplantation equity, quality of care, access to care
      <br>
      <br>
      Provides quality of care data and effectiveness of approach for regulators
      <br>
      <br>
      Allows hospitals to validate OPO quality of care for patients referred
      </td>
      <td>Public
      </td>
    </tr>
    </tr>
      <td>Rate of “huddles” with hospital provider of all medically suitable patients
      </td>
      <td>OPO, all OPOs collect these data at the organizational levelOPO
      </td>
      <td>Provides insight for researchers tracking procurement and transplantation equity, quality of care, access to care, coordination of care
      <br>
      <br>
      Provides quality of care data for regulators
      <br>
      <br>
      Allows hospitals to validate OPO quality of care for patients referred
      </td>
      <td>Public
      </td>
    </tr>
    </tr>
      <td>Number of organs recovered by type
      </td>
      <td>OPTN (DDR), SRTR
      </td>
      <td>Data on the number of organs, by type, that are authorized and successfully transplanted
      </td>
      <td>Public
      </td>
    </tr>
    </tr>
      <td>Rate of recovered organs transplanted by type
      </td>
      <td>OPTN (DDR), SRTR
      </td>
      <td>Data on the number of organs, by type, that are authorized and successfully transplanted
      </td>
      <td>Public
      </td>
    </tr>
    </tr>
      <td>Rate of hospital compliance for appropriate referral of patients (i.e., number patients referred appropriately / number patients eligible to be referred per OPO death record review)
      </td>
      <td>OPTN, SRTR, OPO (available on the DNR, which currently characterizes timeliness, but does not describe compliance with clinical triggers)
      </td>
      <td>Provides insight for researchers tracking procurement and transplantation equity, quality of care, access to care, coordination of care
      <br>
      <br>
      Provides quality of care, effectiveness of OPO referral criteria and associated data for regulators
      <br>
      <br>
      Allows hospitals to validate OPO quality of care for patients referred
      </td>
      <td>Public
      </td>
    </tr>
    </tr>
      <td>Rate of family decline by category (stratified by age, race/ethnicity, and OPTN cause of death)
      </td>
      <td>OPO, only authorization outcome is currently collected on the DNR (authorized yes/no), but all OPOs collect these data at the organizational levelOPO
      </td>
      <td>Provides insight for researchers tracking procurement and transplantation equity, quality of care, access to care
      <br>
      <br>
      Provides quality of care data and effectiveness of approach for regulators
      <br>
      <br>
      Allows hospitals to validate OPO quality of care for patients referred
      </td>
      <td>Public, suppressed if &lt;10 patients annually within DSA
      </td>
    </tr>
    </tr>
      <td>Rate of potential donor patients authorized but not recovered
      </td>
      <td>OPO, DDR and DNR
      </td>
      <td>Provides insight for researchers tracking procurement and transplantation equity, quality of care, access to care
      <br>
      <br>
      Provides quality of care data and effectiveness of donor management for regulators
      </td>
      <td>Public
      </td>
    </tr>
    </tr>
      <td>Rate of non-allocated organs by category for refusal
      </td>
      <td>OPO, OPTN
      </td>
      <td>Provides insight for researchers tracking procurement and transplantation equity, quality of care, access to care
      <br>
      <br>
      Provides quality of care data and effectiveness of allocation and donor management for regulators
      </td>
      <td>Public
      </td>
    </tr>
    </tr>
      <td>Count of refusal codes associated with procurement adverse event
      </td>
      <td>OPO, OPTN
      </td>
      <td>Provides insight for researchers tracking procurement and transplantation equity, quality of care, access to care
      <br>
      <br>
      Provides quality of care data and effectiveness of allocation and donor management for regulators
      </td>
      <td>Upon request
      </td>
    </tr>
    </tr>
      <td>Rate of discarded organs of all recovered organs, by type
      </td>
      <td>OPO, OPTN, DDR
      </td>
      <td>Provides insight for researchers tracking procurement and transplantation equity, quality of care, access to care
      <br>
      <br>
      Provides quality of care data and effectiveness of allocation and donor management for regulators
      </td>
      <td>Public
      </td>
    </tr>
  </tbody>
</table>
`;