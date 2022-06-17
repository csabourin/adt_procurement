<template>
  <span>
    <div v-if="$i18n.locale=='fr'">
      <div>
        <h4>Achat</h4>
        <ul class="list-unstyled">
          <li><externalLink link="https://achatsetventes.gc.ca/">Achatsetventes.ca</externalLink></li>
          <li><externalLink link="https://achatsetventes.gc.ca/applications/Application-sur-les-offres-a-commande-et-arrangements-en-matiere-d-approvisionnement-appli-OCAMA">Application sur les offres à commandes et arrangements en matière d’approvisionnement (Appli OCAMA)</externalLink></li>
          <li><externalLink link="https://www.gcpedia.gc.ca/wiki/Fiches_d%27information_sur_les_approvisionnements_-_DPPA">Fiches d'information sur les approvisionnements – GCpédia</externalLink> (Doit être connecté au RPV pour consulter ce lien.)</li>
          <li><externalLink link="https://achatsetventes.gc.ca/politiques-et-lignes-directrices/guide-des-approvisionnements/section/1/55/10">Instruments préconcurrentiels d'achat</externalLink></li>
          <li><externalLink link="https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=28230">Ligne directrice sur les ententes contractuelles</externalLink></li>
          <li><externalLink link="https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=32593">Politique sur la planification et la gestion des investissements</externalLink></li>
          <li><externalLink link="https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=14494">Politique sur les marchés</externalLink></li>
          <li><externalLink link="https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=14494#appC">Politique sur les marchés, Appendice C – Directive sur les marchés</externalLink></li>
          <li><externalLink link="https://laws-lois.justice.gc.ca/fra/reglements/DORS-87-402/">Règlement sur les marchés de l’État (DORS/87-402)</externalLink></li>
            <ul>
              <li><externalLink link="https://laws-lois.justice.gc.ca/fra/reglements/DORS-87-402/page-2.html">Règlement sur les marchés de l’État (DORS/87-402) Partie 1</externalLink></li>
              <li><externalLink link="https://laws-lois.justice.gc.ca/fra/reglements/DORS-87-402/page-2.html#h-894217">Règlement sur les marchés de l’État (DORS/87-402) Partie 2</externalLink></li>
              <li><externalLink link="https://laws-lois.justice.gc.ca/fra/reglements/DORS-87-402/page-2.html#h-894235">Règlement sur les marchés de l’État (DORS/87-402) Partie 3</externalLink></li>
            </ul>
        </ul>
      </div>
    </div>
    <div v-if="$i18n.locale=='en'">
      <div>
        <h4>Procure</h4>
        <ul class="list-unstyled">
          <li><externalLink link="https://buyandsell.gc.ca/">Buyandsell.gc.ca</externalLink></li>
          <li><externalLink link="https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=14494">Contracting Policy</externalLink></li>
          <li><externalLink link="https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=14494#appC">Contracting Policy, Appendix C – Contracts Directive</externalLink></li>
          <li><externalLink link="https://laws-lois.justice.gc.ca/eng/regulations/SOR-87-402/">Government Contracts Regulations (SOR/87-402)</externalLink></li>
            <ul>
              <li><externalLink link="https://laws-lois.justice.gc.ca/eng/regulations/SOR-87-402/page-2.html#h-4">Government Contracts Regulations (SOR/87-402) – Part 1</externalLink></li>
              <li><externalLink link="https://laws-lois.justice.gc.ca/eng/regulations/SOR-87-402/page-2.html#h-905898">Government Contracts Regulations (SOR/87-402) – Part 2</externalLink></li>
              <li><externalLink link="https://laws-lois.justice.gc.ca/eng/regulations/SOR-87-402/page-2.html#h-905917">Government Contracts Regulations (SOR/87-402) – Part 3</externalLink></li>
            </ul>
          <li><externalLink link="https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=28230">Guidelines on Contractual Arrangements</externalLink></li>
          <li><externalLink link="https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=32593">Policy on the Planning and Management of Investments</externalLink></li>
          <li><externalLink link="https://buyandsell.gc.ca/policy-and-guidelines/supply-manual/section/1/55/10">Pre-Competed Procurement Instruments</externalLink></li>
          <li><externalLink link="https://www.gcpedia.gc.ca/wiki/Procurement_Information_Nuggets_-_APPD">Procurement Information Nuggets – GCpedia</externalLink> (Must be connected to VPN to see this link.)</li>
          <li><externalLink link="https://buyandsell.gc.ca/applications/standing-offers-and-supply-arrangements-application-SOSA-App">Standing Offers and Supply Arrangements Application (SOSA App)</externalLink></li>
        </ul>
      </div>
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
