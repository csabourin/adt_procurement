<template>
  <span>
    <div v-if="$i18n.locale=='fr'">
      <div>
        <h4>Rapports</h4>
        <ul>
          <li><a target="_blank" rel="external" aria-aspopup="true" class="external" href="https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=31300">Politique sur les résultats</a></li>
          <li><a target="_blank" rel="external" aria-aspopup="true" class="external" href="https://www.tbs-sct.gc.ca/ems-sgd/edb-bdd/index-fra.html#start">InfoBase du GC</a> (Trouver l’information la plus récente sur les finances, l’effectif et les résultats du gouvernement)</li>
        </ul>
      </div>
    </div>
    <div v-if="$i18n.locale=='en'">
      <div>
        <h4>Report</h4>
        <ul class="list-unstyled">
          <li><a target="_blank" rel="external" aria-aspopup="true" class="external" href="https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=31300">Policy on Results</a></li>
          <li><a target="_blank" rel="external" aria-aspopup="true" class="external" href="https://www.tbs-sct.gc.ca/ems-sgd/edb-bdd/index-eng.html#start">GC InfoBase</a></li>
        </ul>
      </div>
    </div>
  </span>
</template>
<style scoped>
  p {
    font-weight: bold;
  }
</style>
