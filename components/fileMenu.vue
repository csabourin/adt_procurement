<template>
  <div>
    <b-button pill v-b-modal.fileFolder variant="light">
      <fileIcon :title="$t('fileFolder')" width="32" />
    </b-button>
    <b-modal id="fileFolder" :title="$t('fileFolder')" okOnly>
      <a href="ADT_Ressources_360.pdf" download target="_blank"><Scan360 /></a>
    </b-modal>
  </div>
</template>
<script type="text/javascript">
import fileIcon from '~/components/icons/fileIcon'
import Scan360 from "~/assets/360scan.vue"
export default {
  components: {
    fileIcon,
    Scan360
  }
}

</script>
<i18n>{
  "en":{
  "fileFolder":"Download files and tools"
  },
  "fr":{
  "fileFolder":"Fichiers et outils à télécharger"
  }
  }</i18n>
