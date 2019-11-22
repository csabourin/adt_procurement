<template>
  <span>
    <div v-if="$i18n.locale=='fr'">
      <div>
        <p>RAPPORTS</p>
        <ul>
          <li><a href="https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=31300">Politique sur les r&eacute;sultats</a></li>
          <li><a href="https://www.tbs-sct.gc.ca/ems-sgd/edb-bdd/index-fra.html#start">InfoBase du GC</a> (Trouver l'information la plus r&eacute;cente sur les finances, l'effectif et les r&eacute;sultats du gouvernement)</li>
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
