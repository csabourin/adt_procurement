<template>
  <span>
    <div v-if="$i18n.locale=='fr'">
      <div>
        <p>RAPPORTS</p>
        <ul>
          <li><a href="https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=31300">Politique sur les résultats</a></li>
          <li><a href="https://www.tbs-sct.gc.ca/ems-sgd/edb-bdd/index-fra.html#start">InfoBase du GC</a> (Trouver l&rsquo;information la plus récente sur les finances, l&rsquo;effectif et les résultats du gouvernement)</li>
        </ul>
      </div>
    </div>
    <div v-if="$i18n.locale=='en'">
      <div>
        <p>REPORT</p>
        <ul class="list-unstyled">
          <li><a href="https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=31300">Policy on Results</a></li>
          <li><a href="https://www.tbs-sct.gc.ca/ems-sgd/edb-bdd/index-eng.html#start">GC InfoBase</a></li>
        </ul>
      </div>
    </div>
  </span>
</template>
