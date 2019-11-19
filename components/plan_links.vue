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
        <dt><a href="https://www.canada.ca/en/privy-council/campaigns/speech-throne.html" target="_blank">Speech from the Throne</a></dt>
        <dt><a href="https://www.canada.ca/en/government/system/priorities.html" target="_blank">Government&rsquo;s current priorities</a></dt>
        <dt><a href="https://www.fin.gc.ca/access/budinfo-eng.asp" target="_blank">Federal Budget</a></dt>
        <dt><a href="https://pm.gc.ca/eng/mandate-letters" target="_blank">Ministerial Mandate Letters</a></dt>
        <dt><a href="https://www.canada.ca/en/treasury-board-secretariat/corporate/programs.html" target="_blank">DRF and PI of TBS</a></dt>
        <dt><a href="https://www.canada.ca/en/treasury-board-secretariat/services/management-accountability-framework.html" target="_blank">Management Accountability Framework (<abbr title="Management Accountability Framework">MAF</abbr>)</a></dt>
        <dt><a href="http://laws-lois.justice.gc.ca/eng/acts/R-8/index.html" target="_blank">Revolving Funds Act</a></dt>
        <dt><a href="https://www.canada.ca/en/treasury-board-secretariat/services/treasury-board-submissions/guidance.html" target="_blank">Detailed Guidance for Writers</a></dt>
        <dt><a href="https://www.canada.ca/en/treasury-board-secretariat/services/planned-government-spending/reports-plans-priorities.html" target="_blank">Departmental Plans</a></dt>
        <dt><a href="http://intranet.canada.ca/wg-tg/gf-fg/ems-sgd/cal-eng.asp" target="_blank">Expenditure Management Calendar of Events</a></dt>
        <dt><a href="https://www.canada.ca/en/treasury-board-secretariat/services/departmental-performance-reports.html" target="_blank">Departmental Results Reports</a></dt>
        <dt><a href="https://www.canada.ca/en/treasury-board-secretariat/services/reporting-government-spending/proactive-disclosure-department-agency.html" target="_blank">Government-wide Reporting&nbsp;&ndash; Proactive Disclosure</a></dt>
        <dt><a href="https://www.canada.ca/en/treasury-board-secretariat/topics/planned-government-spending.html" target="_blank">Planned government spending</a></dt>
      </dl>
    </div>
  </span>
</template>
