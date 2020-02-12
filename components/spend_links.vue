<template>
  <span>
    <div v-if="$i18n.locale=='fr'">
      <div>
        <p>D&Eacute;PENSES</p>
        <ul>
          <li><a href="https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=32495">Politique sur la gestion financière</a></li>
          <li><a href="https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=32503">Directive sur la délégation des pouvoirs de dépenser et des pouvoirs financiers</a>
            <ul>
              <li><a href="https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=32584&amp;section=html">Guide de délégation</a></li>
            </ul>
          </li>
          <li><a href="https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=32584&amp;section=html">et de mise en &oelig;uvre des pouvoirs de dépenser et des pouvoirs financiers</a>
            <ul>
              <li><a href="https://papp.csps-efpc.gc.ca/ProdContent/cninv000000000015255/index_fr.html">Tableau de délégation des pouvoirs de dépenser et de signer des documents financiers</a> (Lien vers un graphique fictif)&nbsp;</li>
            </ul>
          </li>
          <li><a href="https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=27228">Directive sur les dépenses de voyages, d&rsquo;accueil, de conférences et d&rsquo;événements</a>
            <ul>
              <li><a href="https://intranet.canada.ca/pol/doc-fra.aspx?id=32553">Guide sur les dépenses de voyages, d&rsquo;accueil, de conférences et d&rsquo;événements</a></li>
              <li><a href="https://www.njc-cnm.gc.ca/directive/d10/fr">Directive sur les voyages du Conseil national mixte (CNM)</a></li>
              <li><a href="https://www.gcpedia.gc.ca/wiki/Ensemble_de_politiques_sur_la_gestion_financi%C3%A8re/Conf%C3%A9rence_par_opposition_%C3%A0_formation">Conférence par opposition à formation</a></li>
            </ul>
          </li>
          <li><a href="https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=32504">Directive sur les paiements</a></li>
          <li><a href="https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=14662">Directive sur la réinstallation du CNM</a></li>
          <li>Directive sur l&rsquo;imputation et les autorisations financières spéciales</li>
          <li><a href="https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=32505">Directive sur la gestion des fonds publics et des comptes débiteurs</a></li>
        </ul>
      </div>
    </div>
    <div v-if="$i18n.locale=='en'">
      <div>
        <p>SPEND</p>
        <ul class="list-unstyled">
          <li><a href="http://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=32495">Policy on Financial Management</a></li>
          <li><a href="http://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=32503">Directive on Delegation of Spending and Financial Authorities</a>
            <ul>
              <li><a href="https://papp.csps-efpc.gc.ca/ProdContent/cninv000000000015255/index_en.html">Delegation of Spending and Financial Signing Authorities Chart</a> (Link to a fictitious chart)</li>
            </ul>
          </li>
          <li><a href="http://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=27228">Directive on Travel, Hospitality, Conference and Event Expenditures</a>
            <ul>
              <li><a href="https://intranet.canada.ca/pol/doc-eng.aspx?id=32553">Guide to Travel, Hospitality, Conference and Event Expenditures</a></li>
              <li><a href="https://www.gcpedia.gc.ca/wiki/Financial_Management_Policy_Suite/Conference_versus_training">Determination of training vs. conferences for functional communities</a></li>
            </ul>
          </li>
          <li><a href="http://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=32504">Directive on Payments</a></li>
          <li><a href="http://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=32502">Directive on Charging and Special Financial Authorities</a></li>
          <li><a href="https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=32505">Directive on Public</a></li>
          <li><a href="https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=32505">Money and Receivables</a></li>
        </ul>
      </div>
    </div>
  </span>
</template>
