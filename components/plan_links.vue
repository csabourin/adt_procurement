<template>
  <span>
    <div v-if="$i18n.locale=='fr'">
      <div>
        <h4>Planification</h4>
        <ul class="list-unstyled">
          <li><externalLink link="https://catalogue.csps-efpc.gc.ca/product?catalog=COR250&cm_locale=fr">Utiliser les fonds publics de manière responsable (cours)</externalLink></li>
        </ul>
      </div>
    </div>
    <div v-if="$i18n.locale=='en'">
      <h4>Plan</h4>
      <ul class="list-unstyled">
        <li><externalLink link="https://catalogue.csps-efpc.gc.ca/product?catalog=COR250&cm_locale=en">Using Public Funds Responsibly course</externalLink></li>
      </ul>
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
