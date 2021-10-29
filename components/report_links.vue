<template>
  <span>
    <div v-if="$i18n.locale=='fr'">
      <div>
        <h4>Rapports</h4>
        <ul class="list-unstyled">
          <li><externalLink link="http://opo-boa.gc.ca/index-fra.html">Bureau de l’ombudsman de l’approvisionnement</externalLink></li>
          <li><externalLink link="https://www.citt-tcce.gc.ca/">Tribunal canadien du commerce extérieur</externalLink></li>
          <li><externalLink link="https://www.fct-cf.gc.ca/fr/accueil">Cour fédérale</externalLink></li>
        </ul>
      </div>
    </div>
    <div v-if="$i18n.locale=='en'">
      <div>
        <h4>Report</h4>
        <ul class="list-unstyled">
          <li><externalLink link="http://opo-boa.gc.ca/index-eng.html">Office of the Procurement Ombudsman</externalLink></li>
          <li><externalLink link="https://www.citt-tcce.gc.ca/">Canadian International Trade Tribunal</externalLink></li>
          <li><externalLink link="https://www.fct-cf.gc.ca/en/home">Federal Court</externalLink></li>
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
