<template>
  <span>
    <div v-if="$i18n.locale=='fr'">
      <div>
        <p>PLANIFICATION</p>
        <ul>
          <li><a target="_blank" href="https://laws-lois.justice.gc.ca/fra/lois/f-11/">Loi sur la gestion des finances publiques</a></li>
          <li><a target="_blank" href="https://www.canada.ca/fr/gouvernement/systeme/priorites.html">Priorit&eacute;s du gouvernement</a>
            <ul>
              <li><a target="_blank" href="https://pm.gc.ca/fr/lettres-de-mandat">Lettres de mandat</a> des Ministres</li>
              <li><a target="_blank" href="https://www.canada.ca/fr/conseil-prive/campagnes/discours-trone.html">Discours du Tr&ocirc;ne</a></li>
              <li><a target="_blank" href="https://www.canada.ca/fr/secretariat-conseil-tresor/services/depenses-prevues/rapports-plans-priorites.html">Plan minist&eacute;riels (PM)</a>&nbsp;</li>
            </ul>
          </li>
          <li><a target="_blank" href="https://www.fin.gc.ca/access/budinfo-fra.asp">Budget f&eacute;d&eacute;ral</a></li>
          <li><a target="_blank" href="https://www.canada.ca/fr/secretariat-conseil-tresor/services/cadre-responsabilisation-gestion.html">Cadre de responsabilisation de gestion (CRG)</a></li>
          <li><a target="_blank" href="https://www.canada.ca/fr/secretariat-conseil-tresor/sujets/depenses-prevues.html">D&eacute;penses pr&eacute;vues du gouvernement</a></li>
          <li><a target="_blank" href="https://www.canada.ca/fr/secretariat-conseil-tresor/services/rapports-ministeriels-rendement.html">Rapport sur les r&eacute;sultats minist&eacute;riels (RRM)</a></li>
          <li><a target="_blank" href="https://ouvert.canada.ca/fr/divulgation-proactive">Divulgation proactive</a> (&agrave; l'&eacute;chelle du gouvernement)
            <ul>
              <li><a target="_blank" href="https://www.canada.ca/fr/secretariat-conseil-tresor/services/etablissement-rapports-depenses/divulgation-proactive-ministeres-organismes.html">Divulgation proactive par ordre de minist&egrave;res ou d&rsquo;organismes</a>&nbsp;</li>
            </ul>
          </li>
          <li><a target="_blank" href="https://www.canada.ca/fr/secretariat-conseil-tresor/services/presentations-conseil-tresor/guide.html">Guide d&eacute;taill&eacute; &agrave; l&rsquo;intention des r&eacute;dacteurs</a></li>
          <li><a target="_blank" href="https://www.canada.ca/fr/conseil-prive/services/publications/memoires-cabinet.html">Guide et gabarits pour M&eacute;moires au Cabinet</a></li>
        </ul>
      </div>
    </div>
    <div v-if="$i18n.locale=='en'">
      <p>PLAN</p>
      <ul class="list-unstyled">
        <li><a target="_blank" href="http://laws-lois.justice.gc.ca/eng/acts/f-11/">Financial Administration Act</a></li>
        <li><a target="_blank" href="https://www.canada.ca/en/government/system/priorities.html">Government Priorities</a>
          <ul>
            <li><a target="_blank" href="https://pm.gc.ca/eng/mandate-letters">Ministerial Mandate Letters</a></li>
            <li><a target="_blank" href="https://www.canada.ca/en/privy-council/campaigns/speech-throne.html">Speech from the Throne</a></li>
            <li><a target="_blank" href="https://www.canada.ca/en/treasury-board-secretariat/services/planned-government-spending/reports-plans-priorities.html">Departmental Plan (DP)</a></li>
          </ul>
        </li>
        <li><a target="_blank" href="https://www.fin.gc.ca/access/budinfo-eng.asp">Federal Budget</a></li>
        <li><a target="_blank" href="https://www.canada.ca/en/treasury-board-secretariat/services/management-accountability-framework.html">Management Accountability Framework (MAF)</a></li>
        <li><a target="_blank" href="https://www.canada.ca/en/treasury-board-secretariat/topics/planned-government-spending.html">Planned Government Spending</a></li>
        <li><a target="_blank" href="https://www.canada.ca/en/treasury-board-secretariat/services/departmental-performance-reports.html">Departmental Results Reports (DRR)</a></li>
        <li><a target="_blank" href="https://open.canada.ca/en/proactive-disclosure">Proactive Disclosure</a>
          <ul>
            <li><a target="_blank" href="https://www.canada.ca/en/treasury-board-secretariat/services/reporting-government-spending/proactive-disclosure-department-agency.html">Proactive Disclosure by Department or Agency</a></li>
          </ul>
        </li>
        <li><a target="_blank" href="https://www.canada.ca/en/treasury-board-secretariat/services/treasury-board-submissions/guidance.html">Detailed Guidance for Treasury Board Submission Writers</a></li>
        <li><a target="_blank" href="https://www.canada.ca/en/privy-council/services/publications/memoranda-cabinet.html">Guide and templates for Memoranda to Cabinet</a></li>
      </ul>
    </div>
  </span>
</template>
