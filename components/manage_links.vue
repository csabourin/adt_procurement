<template>
  <span>
    <div v-if="$i18n.locale=='fr'">
      <div>
        <h4>Gestion</h4>
        <ul class="list-unstyled">
          <li><externalLink link="https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=14671">Guide de gestion du matériel</externalLink></li>
        </ul>
      </div>
    </div>
    <div v-if="$i18n.locale=='en'">
      <div>
        <h4>Manage</h4>
        <ul class="list-unstyled">
          <li><externalLink link="https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=14671">Guide to Management of Materiel</externalLink></li>
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
