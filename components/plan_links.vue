<template>
  <span>
    <div v-if="$i18n.locale=='fr'">
      <div>
        <h4>Planification</h4>
        <ul>
          <li><externalLink link="https://adtfinance.netlify.app/fr">La saine gestion des fonds publics</externalLink></li>
          <li><externalLink link="https://www.canada.ca/fr/secretariat-conseil-tresor/services/depenses-prevues/system-gestion-depenses/cycle-rapports.html">Le cycle des rapports sur les dépenses gouvernementales</externalLink></li>
          <li><externalLink link="https://laws-lois.justice.gc.ca/fra/lois/f-11/">Loi sur la gestion des finances publiques</externalLink></li>
          <li><externalLink link="https://www.canada.ca/fr/gouvernement/systeme/priorites.html">Priorités du gouvernement</externalLink>
            <ul>
              <li><externalLink link="https://pm.gc.ca/fr/lettres-de-mandat">Lettres de mandat des Ministres</externalLink></li>
              <li><externalLink link="https://www.canada.ca/fr/conseil-prive/campagnes/discours-trone.html">Discours du Tr&ocirc;ne</externalLink></li>
              <li><externalLink link="https://www.canada.ca/fr/secretariat-conseil-tresor/services/depenses-prevues/rapports-plans-priorites.html">Plan ministériels (PM)</externalLink>&nbsp;</li>
            </ul>
          </li>
          <li><externalLink link="https://www.canada.ca/fr/ministere-finances/services/publications/budget-federal.html">Budget fédéral</externalLink></li>
          <li><externalLink link="https://www.canada.ca/fr/secretariat-conseil-tresor/services/cadre-responsabilisation-gestion.html">Cadre de responsabilisation de gestion (CRG)</externalLink></li>
          <li><externalLink link="https://www.canada.ca/fr/secretariat-conseil-tresor/sujets/depenses-prevues.html">Dépenses prévues du gouvernement</externalLink></li>
          <li><externalLink link="https://www.canada.ca/fr/secretariat-conseil-tresor/services/rapports-ministeriels-rendement.html">Rapport sur les résultats ministériels (RRM)</externalLink></li>
          <li><externalLink link="https://ouvert.canada.ca/fr/divulgation-proactive">Divulgation proactive</externalLink>
            <ul>
              <li><externalLink link="https://www.canada.ca/fr/secretariat-conseil-tresor/services/etablissement-rapports-depenses/divulgation-proactive-ministeres-organismes.html">Divulgation proactive par ordre de ministères ou d’organismes</externalLink>&nbsp;</li>
            </ul>
          </li>
          <li><externalLink link="https://www.canada.ca/fr/secretariat-conseil-tresor/services/presentations-conseil-tresor/guide.html">Guide à l’intention des rédacteurs de présentations au Conseil du Trésor</externalLink></li>
          <li><externalLink link="https://www.canada.ca/fr/conseil-prive/services/publications/memoires-cabinet.html">Guide et gabarits pour Mémoires au Cabinet</externalLink></li>
        </ul>
      </div>
    </div>
    <div v-if="$i18n.locale=='en'">
      <h4>Plan</h4>
      <ul class="list-unstyled">
        <li><externalLink link="https://adtfinance.netlify.app/en">Responsible Use of Public Funds</externalLink></li>
        <li><externalLink link="https://www.canada.ca/en/treasury-board-secretariat/services/planned-government-spending/expenditure-management-system/reporting-cycle.html">The Reporting Cycle for Government Expenditures</externalLink></li>
        <li><externalLink link="http://laws-lois.justice.gc.ca/eng/acts/f-11/">Financial Administration Act</externalLink></li>
        <li><externalLink link="https://www.canada.ca/en/government/system/priorities.html">Government Priorities</externalLink>
          <ul>
            <li><externalLink link="https://pm.gc.ca/en/mandate-letters">Ministerial Mandate Letters</externalLink></li>
            <li><externalLink link="https://www.canada.ca/en/privy-council/campaigns/speech-throne.html">Speech from the Throne</externalLink></li>
            <li><externalLink link="https://www.canada.ca/en/treasury-board-secretariat/services/planned-government-spending/reports-plans-priorities.html">Departmental Plan (DP)</externalLink></li>
          </ul>
        </li>
        <li><externalLink link="https://www.canada.ca/en/department-finance/services/publications/federal-budget.html">Federal Budget</externalLink></li>
        <li><externalLink link="https://www.canada.ca/en/treasury-board-secretariat/services/management-accountability-framework.html">Management Accountability Framework (MAF)</externalLink></li>
        <li><externalLink link="https://www.canada.ca/en/treasury-board-secretariat/topics/planned-government-spending.html">Planned Government Spending</externalLink></li>
        <li><externalLink link="https://www.canada.ca/en/treasury-board-secretariat/services/departmental-performance-reports.html">Departmental Results Reports (DRR)</externalLink></li>
        <li><externalLink link="https://open.canada.ca/en/proactive-disclosure">Proactive Disclosure</externalLink>
          <ul>
            <li><externalLink link="https://www.canada.ca/en/treasury-board-secretariat/services/reporting-government-spending/proactive-disclosure-department-agency.html">Proactive Disclosure by Department or Agency</externalLink></li>
          </ul>
        </li>
        <li><externalLink link="https://www.canada.ca/en/treasury-board-secretariat/services/treasury-board-submissions/guidance.html">Detailed Guidance for Treasury Board Submission Writers</externalLink></li>
        <li><externalLink link="https://www.canada.ca/en/privy-council/services/publications/memoranda-cabinet.html">Guide and templates for Memoranda to Cabinet</externalLink></li>
      </ul>
    </div>
  </span>
</template>

<script>

  import externalLink from "~/components/externalLink"
  export default{
    components:{
      externalLink
    }
  }

</script>

<style scoped>
  p {
    font-weight: bold;
  }
</style>
