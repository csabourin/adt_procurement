<template>
  <div>
    <a href="javascript:" v-b-modal.fileFolder>
      <fileIcon :title="$t('fileFolder')" width="50" />
    </a>
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
