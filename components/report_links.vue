<template>
  <span>
    <div v-if="$i18n.locale=='fr'">
      <div>
        <h4>Rapports</h4>
        <ul>
          <li><externalLink link="https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=31300">Politique sur les résultats</externalLink></li>
          <li><externalLink link="https://www.tbs-sct.gc.ca/ems-sgd/edb-bdd/index-fra.html#start">InfoBase du GC</externalLink> (Trouver l’information la plus récente sur les finances, l’effectif et les résultats du gouvernement)</li>
          <li><externalLink link="https://www.canada.ca/fr/secretariat-conseil-tresor/services/etablissement-rapports-depenses/rapports-financiers-trimestriels.html">Rapports financiers trimestriels</externalLink></li>
          <li><externalLink link="https://www.canada.ca/fr/secretariat-conseil-tresor/sujets/verifications-evaluations.html">Audit interne et évaluation</externalLink></li>
        </ul>
      </div>
    </div>
    <div v-if="$i18n.locale=='en'">
      <div>
        <h4>Report</h4>
        <ul class="list-unstyled">
          <li><externalLink link="https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=31300">Policy on Results</externalLink></li>
          <li><externalLink link="https://www.tbs-sct.gc.ca/ems-sgd/edb-bdd/index-eng.html#start">GC InfoBase</externalLink> (Find the latest information on all government finances, people and results)</li>
          <li><externalLink link="https://www.canada.ca/en/treasury-board-secretariat/services/reporting-government-spending/quarterly-financial-reporting.html">Quarterly Financial Report</externalLink></li>
          <li><externalLink link="https://www.canada.ca/en/treasury-board-secretariat/topics/audit-evaluation.html">Internal Audit and Evaluation</externalLink></li>
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
