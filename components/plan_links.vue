<template>
  <span>
    <div v-if="$i18n.locale=='fr'">
      <h2>Liens externes et descriptions</h2>
      <dl>
        <dt><a href="https://www.canada.ca/fr/conseil-prive/campagnes/discours-trone.html" target="_blank">Discours du Tr&ocirc;ne</a></dt>
        <dt><a href="https://www.canada.ca/fr/gouvernement/systeme/priorites.html" target="_blank">Priorit&eacute;s du gouvernement</a></dt>
        <dt><a href="https://www.fin.gc.ca/access/budinfo-fra.asp" target="_blank">Budget f&eacute;d&eacute;ral</a></dt>
        <dt><a href="https://pm.gc.ca/fra/lettres-de-mandat-des-ministres" target="_blank">Lettres de mandat des ministres</a></dt>
        <dt><a href="https://www.canada.ca/fr/secretariat-conseil-tresor/organisation/programmes.html" target="_blank">Le cadre minist&eacute;riel des r&eacute;sultats et le r&eacute;pertoire des programmes du Secr&eacute;tariat du Conseil du Tr&eacute;sor</a></dt>
        <dt><a href="https://www.canada.ca/fr/secretariat-conseil-tresor/services/cadre-responsabilisation-gestion.html" target="_blank">Cadre de responsabilisation de gestion (CRG)</a></dt>
        <dt><a href="http://laws-lois.justice.gc.ca/fra/lois/R-8/index.html" target="_blank">Loi sur les fonds renouvelables</a></dt>
        <dt><a href="https://www.canada.ca/fr/secretariat-conseil-tresor/services/presentations-conseil-tresor/guide.html" target="_blank">Guide d&eacute;taill&eacute; &agrave; l&rsquo;intention des r&eacute;dacteurs</a></dt>
        <dt><a href="https://www.canada.ca/fr/secretariat-conseil-tresor/services/depenses-prevues/rapports-plans-priorites.html" target="_blank">Consulter votre Plan minist&eacute;riel (PM)</a></dt>
        <dt><a href="http://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=18796" target="_blank">Politique sur la gestion financi&egrave;re des ressources, l&rsquo;information et les rapports financiers</a></dt>
        <dt><a href="http://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=17589" target="_blank">Politique sur la g&eacute;rance des syst&egrave;mes de gestion financi&egrave;re.</a></dt>
        <dt><a href="http://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=15790" target="_blank">Directive sur la v&eacute;rification des comptes</a></dt>
        <dt><a href="http://intranet.canada.ca/wg-tg/gf-fg/ems-sgd/cal-fra.asp" target="_blank">Calendrier des activit&eacute;s de gestion des d&eacute;penses</a></dt>
        <dt><a href="https://www.canada.ca/fr/secretariat-conseil-tresor/services/rapports-ministeriels-rendement.html" target="_blank">Consulter votre Rapport sur les r&eacute;sultats minist&eacute;riels</a></dt>
        <dt><a href="https://ouvert.canada.ca/fr/divulgation-proactive" target="_blank">&Eacute;tablissement de rapports &agrave; l&rsquo;&eacute;chelle du gouvernement&nbsp;&ndash; Divulgation proactive</a></dt>
        <dt><a href="https://www.canada.ca/fr/secretariat-conseil-tresor/organisation/programmes.html" target="_blank">Cadre minist&eacute;riel des r&eacute;sultats et r&eacute;pertoire de programmes du SCT</a></dt>
        <dt><a href="https://www.canada.ca/fr/secretariat-conseil-tresor/sujets/depenses-prevues.html" target="_blank">Dépenses prévues du gouvernement</a></dt>
      </dl>
    </div>
    <div v-if="$i18n.locale=='en'">
      <h2>External Links and Descriptions</h2>
      <dl>
        <p><strong>PLAN</strong></p>
        <ul class="list-unstyled">
          <li><a href="http://laws-lois.justice.gc.ca/eng/acts/f-11/"><strong>Financial Administration Act</strong></a></li>
          <li><a href="https://www.canada.ca/en/government/system/priorities.html"><strong>Government priorities</strong></a>
            <ul>
              <li><a href="https://pm.gc.ca/eng/mandate-letters"><strong>Ministerial Mandate Letters</strong></a></li>
              <li><a href="https://www.canada.ca/en/privy-council/campaigns/speech-throne.html"><strong>Speech from the Throne</strong></a></li>
              <li><a href="https://www.canada.ca/en/treasury-board-secretariat/services/planned-government-spending/reports-plans-priorities.html"><strong>Departmental Plan (DP)</strong></a></li>
            </ul>
          </li>
          <li><a href="https://www.fin.gc.ca/access/budinfo-eng.asp"><strong>Federal Budget</strong></a></li>
          <li><a href="https://www.canada.ca/en/treasury-board-secretariat/services/management-accountability-framework.html"><strong>Management Accountability Framework (MAF)</strong></a></li>
          <li><a href="https://www.canada.ca/en/treasury-board-secretariat/topics/planned-government-spending.html"><strong>Planned government spending</strong></a></li>
          <li><a href="https://www.canada.ca/en/treasury-board-secretariat/services/departmental-performance-reports.html"><strong>Departmental Results Reports (DRR)</strong></a></li>
          <li><a href="https://open.canada.ca/en/proactive-disclosure"><strong>Proactive Disclosure</strong></a>
            <ul>
              <li><a href="https://www.canada.ca/en/treasury-board-secretariat/services/reporting-government-spending/proactive-disclosure-department-agency.html"><strong>Proactive Disclosure by Department or Agency</strong></a></li>
            </ul>
          </li>
          <li><a href="https://www.canada.ca/en/treasury-board-secretariat/services/treasury-board-submissions/guidance.html"><strong>Detailed Guidance for Treasury Board Submission Writers</strong></a></li>
          <li><a href="https://www.canada.ca/en/privy-council/services/publications/memoranda-cabinet.html"><strong>Guide and templates for Memoranda to Cabinet</strong></a></li>
          <li><span style="font-weight: 400;">&nbsp;</span></li>
        </ul>
        <p><span style="font-weight: 400;">&nbsp;</span><strong>SPEND</strong></p>
        <ul class="list-unstyled">
          <li><a href="http://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=32495"><strong>Policy on Financial Management</strong></a></li>
          <li><a href="http://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=32503"><strong>Directive on Delegation of Spending and Financial Authorities</strong></a>
            <ul>
              <li><a href="https://papp.csps-efpc.gc.ca/ProdContent/cninv000000000015255/index_en.html"><strong>Delegation of Spending and Financial Signing Authorities Chart</strong></a> <span style="font-weight: 400;">(Link to a fictitious chart)</span></li>
            </ul>
          </li>
          <li><a href="http://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=27228"><strong>Directive on Travel, Hospitality, Conference and Event Expenditures</strong></a>
            <ul>
              <li><a href="https://intranet.canada.ca/pol/doc-eng.aspx?id=32553"><strong>Guide to Travel, Hospitality, Conference and Event Expenditures</strong></a></li>
              <li><a href="https://www.gcpedia.gc.ca/wiki/Financial_Management_Policy_Suite/Conference_versus_training"><strong>Determination of training vs. conferences for functional communities</strong></a></li>
            </ul>
          </li>
          <li><a href="http://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=32504"><strong>Directive on Payments</strong></a></li>
          <li><a href="http://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=32502"><strong>Directive on Charging and Special Financial Authorities</strong></a></li>
          <li><a href="https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=32505"><strong>Directive on Public</strong></a></li>
          <li><a href="https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=32505"><strong>Money and Receivables</strong></a></li>
        </ul>
        <p><strong>REPORT</strong></p>
        <ul class="list-unstyled">
          <li><a href="https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=31300"><strong>Policy on Results</strong></a></li>
          <li><a href="https://www.tbs-sct.gc.ca/ems-sgd/edb-bdd/index-eng.html#start"><strong>GC InfoBase</strong></a></li>
        </ul>
      </dl>
    </div>
  </span>
</template>
