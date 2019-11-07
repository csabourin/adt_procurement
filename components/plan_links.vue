<template>
  <span>
    <div v-if="$i18n.locale=='fr'">
      <h2>Liens externes et descriptions</h2>
      <dl>
        <!-- <dt><a href="https://papp.csps-efpc.gc.ca/ProdContent/cninv000000000015255/index_fr.html" target="_blank">Tableau de d&eacute;l&eacute;gation des pouvoirs de d&eacute;penser et de signer des documents financiers</a></dt>
        <dd>Lien vers une charte fictive</dd>-->
        <dt><a href="https://www.canada.ca/fr/conseil-prive/campagnes/discours-trone.html" target="_blank">Discours du Tr&ocirc;ne</a></dt>
        <dd>Lien vers le Discours du Tr&ocirc;ne</dd>
        <dt><a href="https://www.canada.ca/fr/gouvernement/systeme/priorites.html" target="_blank">Priorit&eacute;s du gouvernement</a></dt>
        <dd>Lien vers les Priorit&eacute;s du gouvernement</dd>
        <dt><a href="https://www.fin.gc.ca/access/budinfo-fra.asp" target="_blank">Budget f&eacute;d&eacute;ral</a></dt>
        <dd>Lien vers le Budget f&eacute;d&eacute;ral</dd>
        <dt><a href="https://pm.gc.ca/fra/lettres-de-mandat-des-ministres" target="_blank">Lettres de mandat des ministres</a></dt>
        <dd>Lien vers les lettres de mandat des ministres</dd>
        <dt><a href="https://www.canada.ca/fr/secretariat-conseil-tresor/organisation/programmes.html" target="_blank">Le cadre minist&eacute;riel des r&eacute;sultats et le r&eacute;pertoire des programmes du Secr&eacute;tariat du Conseil du Tr&eacute;sor</a></dt>
        <dd>Lien vers les programmes du Secr&eacute;tariat</dd>
        <dt><a href="https://www.canada.ca/fr/secretariat-conseil-tresor/services/cadre-responsabilisation-gestion.html" target="_blank">Cadre de responsabilisation de gestion (CRG)</a></dt>
        <dd>Lien vers le Cadre de responsabilisation de gestion (CRG)</dd>
        <!-- <dt>
          <p>Liens vers des exemples de plans minist&eacute;riels.</p>
        </dt>
        <dd>
          <p><a href="http://www.dfo-mpo.gc.ca/rpp/2017-18/dp-fra.html" target="_blank"><abbr title="Minist&egrave;re des P&ecirc;ches et Oc&eacute;ans">MPO</abbr>&nbsp;&ndash; Plan minist&eacute;riel de 2017-2018</a><br /><a href="http://www.veterans.gc.ca/public/pages/about-us/reports/PDFs/strategic-plan-2009-2014.pdf" target="_blank">Plan strat&eacute;gique quinquennal d&rsquo;Anciens Combattants Canada</a><br /><a href="https://crtc.gc.ca/fra/publications/reports/dp2017/dp2017.htm" target="_blank"><abbr title="Conseil de la radiodiffusion et des t&eacute;l&eacute;communications canadiennes">CRTC</abbr>&nbsp;&ndash; Plan minist&eacute;riel de 2017-2018</a></p>
        </dd> -->
        <!-- <dt><a href="http://laws-lois.justice.gc.ca/fra/lois/S-27/index.html" target="_blank">Loi sur les biens de surplus de la Couronne</a></dt>
        <dd>Lien vers le Loi sur les biens de surplus de la Couronne</dd> -->
        <dt><a href="http://laws-lois.justice.gc.ca/fra/lois/R-8/index.html" target="_blank">Loi sur les fonds renouvelables</a></dt>
        <dd>Lien vers le Loi sur les fonds renouvelables</dd>
        <dt><a href="https://www.canada.ca/fr/secretariat-conseil-tresor/services/presentations-conseil-tresor/guide.html" target="_blank">Guide d&eacute;taill&eacute; &agrave; l&rsquo;intention des r&eacute;dacteurs</a></dt>
        <dd>Lien vers le guide d&eacute;taill&eacute; &agrave; l&rsquo;intention des r&eacute;dacteurs</dd>
        <dt><a href="https://www.canada.ca/fr/secretariat-conseil-tresor/services/depenses-prevues/rapports-plans-priorites.html" target="_blank">Consulter votre votre Plan minist&eacute;riel (PM)</a></dt>
        <dd>Lien vers consulter votre Plan minist&eacute;riel</dd>
        <dt><a href="http://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=32503" target="_blank">Directive sur la d&eacute;l&eacute;gation des pouvoirs de d&eacute;penser et des pouvoirs financiers</a></dt>
        <dd>Lien vers la Directive sur la d&eacute;l&eacute;gation des pouvoirs de d&eacute;penser et des pouvoirs financiers</dd>
        <dt><a href="http://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=18796" target="_blank">Politique sur la gestion financi&egrave;re des ressources, l&rsquo;information et les rapports financiers</a></dt>
        <dd>Lien vers la politique sur la gestion financi&egrave;re des ressources, l&rsquo;information et les rapports financiers</dd>
        <dt><a href="http://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=17589" target="_blank">Politique sur la g&eacute;rance des syst&egrave;mes de gestion financi&egrave;re.</a></dt>
        <dd>Lien vers la politique sur la g&eacute;rance des syst&egrave;mes de gestion financi&egrave;re</dd>
        <!-- <dt><a href="http://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=32504" target="_blank">Directive sur les paiements</a></dt>
        <dd>Lien vers la Directive sur les paiements</dd>
        <dt><a href="http://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=32502" target="_blank">Directive sur l&rsquo;imputation et les autorisations financi&egrave;res sp&eacute;ciales</a></dt>
        <dd>Lien vers la Directive sur l&rsquo;imputation et les autorisations financi&egrave;res sp&eacute;ciales</dd> -->
        <dt><a href="http://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=15790" target="_blank">Directive sur la v&eacute;rification des comptes</a></dt>
        <dd>Lien vers la directive sur la v&eacute;rification des comptes</dd>
        <!-- <dt><a href="http://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=27228" target="_blank">Directive sur l&rsquo;engagement des d&eacute;penses et le contr&ocirc;le des engagements</a></dt>
        <dd>Lien vers la directive sur l&rsquo;engagement des d&eacute;penses et le contr&ocirc;le des engagements</dd>
        <dt><a href="https://ouvert.canada.ca/fr/divulgation-proactive" target="_blank">&Eacute;tablissement de rapports &agrave; l&rsquo;&eacute;chelle du gouvernement&nbsp;&ndash; Divulgation proactive</a></dt>
        <dd>Lien vers la &eacute;tablissement de rapports &agrave; l&rsquo;&eacute;chelle du gouvernement&nbsp;&ndash; divulgation proactive</dd> -->
        <!-- <dt><a href="http://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=15024" target="_blank">Politique sur l&rsquo;&eacute;valuation</a></dt>
        <dd>Lien vers le politique sur l&rsquo;&eacute;valuation</dd> -->
        <!-- <dt><a href="http://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=15681&amp;section=HTML" target="_blank">Directive sur la fonction d&rsquo;&eacute;valuation</a></dt>
        <dd>Lien vers la directive sur la fonction d&rsquo;&eacute;valuation</dd> -->
        <dt><a href="http://intranet.canada.ca/wg-tg/gf-fg/ems-sgd/cal-fra.asp" target="_blank">Calendrier des activit&eacute;s de gestion des d&eacute;penses</a></dt>
        <dd>Lien vers les calendrier des activit&eacute;s de gestion des d&eacute;penses</dd>
        <dt><a href="https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=31300" target="_blank">Politique sur les r&eacute;sultats</a></dt>
        <dd>Lien vers la Politique sur les r&eacute;sultats</dd>
        <dt><a href="https://www.canada.ca/fr/secretariat-conseil-tresor/services/rapports-ministeriels-rendement.html" target="_blank">Consulter votre Rapport sur les r&eacute;sultats minist&eacute;riels</a></dt>
        <dd>Lien vers consulter votre Rapport sur les r&eacute;sultats minist&eacute;riels</dd>
        <dt><a href="http://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=32495" target="_blank">Politique sur la gestion financi&egrave;re</a></dt>
        <dd>Lien vers la Politique sur la gestion financi&egrave;re</dd>
        <dt><a href="https://www.tbs-sct.gc.ca/ems-sgd/edb-bdd/index-fra.html#start" target="_blank">InfoBase du GC</a></dt>
        <dd>Lien vers l'InfoBase du GC</dd>
        <dt><a href="http://www.tbs-sct.gc.ca/pd-dp/index-fra.asp" target="_blank">Divulgation proactive</a></dt>
        <dd>Lien vers la divulgation proactive</dd>
        <!-- <dt><a href="http://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=16484" target="_blank">Politique du Conseil du Tr&eacute;sor sur l&rsquo;audit interne</a></dt>
        <dd>Lien vers la Politique du Conseil du Tr&eacute;sor sur l&rsquo;audit interne</dd> -->
        <dt><a href="https://www.canada.ca/fr/secretariat-conseil-tresor/organisation/programmes.html" target="_blank">Cadre minist&eacute;riel des r&eacute;sultats et r&eacute;pertoire de programmes du SCT</a></dt>
        <dd>Lien vers le Cadre minist&eacute;riel des r&eacute;sultats et r&eacute;pertoire de programmes du SCT</dd>
      </dl>
    </div>
    <div v-if="$i18n.locale=='en'">
      <h2>More Links</h2>
      <h2>External Links and Descriptions</h2>
      <dl>
        <!-- <dt><a href="https://papp.csps-efpc.gc.ca/ProdContent/cninv000000000015255/index_en.html" target="_blank">Delegation of Spending and Financial Signing Authorities Chart</a></dt>
        <dd>Link to a fictious chart.</dd>-->
        <dt><a href="https://www.canada.ca/en/privy-council/campaigns/speech-throne.html" target="_blank">Speech from the Throne</a></dt>
        <dd>Link to the Speech from the Throne</dd>
        <dt><a href="https://www.canada.ca/en/government/system/priorities.html" target="_blank">Government&rsquo;s current priorities</a></dt>
        <dd>Link to the Government&rsquo;s current priorities</dd>
        <dt><a href="https://www.fin.gc.ca/access/budinfo-eng.asp" target="_blank">Federal Budget</a></dt>
        <dd>Link to the Federal Budget</dd>
        <dt><a href="https://pm.gc.ca/eng/mandate-letters" target="_blank">Ministerial Mandate Letters</a></dt>
        <dd>Link to the Ministerial Mandate Letters</dd>
        <dt><a href="https://www.canada.ca/en/treasury-board-secretariat/corporate/programs.html" target="_blank">DRF and PI of TBS</a></dt>
        <dd>Link to the Departmental Results Framework and PI of TBS</dd>
        <dt><a href="https://www.canada.ca/en/treasury-board-secretariat/services/management-accountability-framework.html" target="_blank">Management Accountability Framework (<abbr title="Management Accountability Framework">MAF</abbr>)</a></dt>
        <dd>Link to the Management Accountability Framework (<abbr title="Management Accountability Framework">MAF</abbr>)</dd>
        <!-- <dt>
          <p>Links to examples of strategic plans:</p>
        </dt>
        <dd>
          <p><a href="http://www.dfo-mpo.gc.ca/rpp/2017-18/dp-eng.html" target="_blank">DFO 2017‐2018 Departmental Plan</a><br /><a href="http://www.veterans.gc.ca/public/pages/about-us/reports/PDFs/strategic-plan-2009-2014.pdf" target="_blank">Veterans Affairs Canada Departmental Plan</a><br /><a href="https://crtc.gc.ca/eng/publications/reports/dp2017/dp2017.htm" target="_blank">CRTC 2017‐2018 Departmental Plan</a></p>
        </dd> -->
        <!-- <dt><a href="http://laws-lois.justice.gc.ca/eng/acts/S-27/index.html" target="_blank">Surplus Crown Assets Act</a></dt>
        <dd>Link to the Surplus Crown Assets Act</dd> -->
        <dt><a href="http://laws-lois.justice.gc.ca/eng/acts/R-8/index.html" target="_blank">Revolving Funds Act</a></dt>
        <dd>Link to the Revolving Funds Act</dd>
        <dt><a href="https://www.canada.ca/en/treasury-board-secretariat/services/treasury-board-submissions/guidance.html" target="_blank">Detailed Guidance for Writers</a></dt>
        <dd>Link to the Detailed Guidance for Writers</dd>
        <dt><a href="https://www.canada.ca/en/treasury-board-secretariat/services/planned-government-spending/reports-plans-priorities.html" target="_blank">Departmental Plans</a></dt>
        <dd>Link to View the Departmental Plans</dd>
        <dt><a href="http://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=32503" target="_blank">The Directive on Delegation of Spending and Financial Authorities</a></dt>
        <dd>Link to The Directive on Delegation of Spending and Financial Authorities</dd>
        <!-- <dt><a href="http://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=32504" target="_blank">The Directive on Payments</a></dt>
        <dd>Link to The Directive on Payments</dd>
        <dt><a href="http://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=32502" target="_blank">The Directive on Charging and Special Financial Authorities</a></dt>
        <dd>Link to The Directive on Charging and Special Financial Authorities</dd>
        <dt><a href="http://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=27228" target="_blank">The Directive on Travel, Hospitality, Conference and Event Expenditures</a></dt>
        <dd>Link to The Directive on Travel, Hospitality, Conference and Event Expenditures</dd>
        <dt><a href="https://www.canada.ca/en/treasury-board-secretariat/services/reporting-government-spending/proactive-disclosure-department-agency.html" target="_blank">Government-wide Reporting&nbsp;&ndash; Proactive Disclosure</a></dt>
        <dd>Link to the Government-wide Reporting&nbsp;&ndash; Proactive Disclosure</dd> -->
        <!-- <dt><a href="http://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=15024" target="_blank">Policy on Evaluation</a></dt>
        <dd>Link to the Policy on Evaluation</dd> -->
        <!-- <dt><a href="http://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=15681&amp;section=HTML" target="_blank">Directive on the Evaluation Function</a></dt>
        <dd>Link to the Directive on the Evaluation Function</dd> -->
        <dt><a href="http://intranet.canada.ca/wg-tg/gf-fg/ems-sgd/cal-eng.asp" target="_blank">Expenditure Management Calendar of Events</a></dt>
        <dd>Link to the Expenditure Management Calendar of Events</dd>
        <dt><a href="https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=31300" target="_blank">Policy on Results</a></dt>
        <dd>Link to the Policy on Results</dd>
        <dt><a href="https://www.canada.ca/en/treasury-board-secretariat/services/departmental-performance-reports.html" target="_blank">Departmental Results Reports</a></dt>
        <dd>Link to Departmental Results Reports</dd>
        <dt><a href="http://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=32495" target="_blank">Policy on Financial Management</a></dt>
        <dd>Link to the Policy on Financial Management</dd>
        <dt><a href="https://www.tbs-sct.gc.ca/ems-sgd/edb-bdd/index-eng.html#start" target="_blank">GC InfoBase</a></dt>
        <dd>Link to Departmental Results Report</dd>
        <dt><a href="http://www.tbs-sct.gc.ca/pd-dp/index-eng.asp" target="_blank">Proactive Disclosure</a></dt>
        <dd>Link to Proactive Disclosure</dd>
        <!-- <dt><a href="http://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=16484" target="_blank">Policy on Internal Audit</a></dt>
        <dd>Link to Policy on Internal Audit</dd> -->
      </dl>
    </div>
  </span>
</template>
