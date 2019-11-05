<template>
  <div>
    <a href="javascript:" v-b-modal.fileFolder>
      <fileIcon :title="$t('fileFolder')" width="50" />
    </a>
    <b-modal id="fileFolder" :title="$t('fileFolder')" okOnly>
      <a href="ADT_Ressources_360.pdf" download target="_blank"><genericFile iconWidth="64" title="Scan 360"/></a>
      <a href="WorkPlan_Template.docx" :title="$t('downloadPlan')">
      <genericFile iconWidth="64" :title="$t('downloadPlan')" /></a>
    </b-modal>
  </div>
</template>
<script type="text/javascript">
import fileIcon from '~/components/icons/fileIcon'
import Scan360 from "~/components/icons/360scan.vue"
import genericFile from "~/components/icons/genFileIcon"
export default {
  components: {
    fileIcon,
    Scan360,
    genericFile
  }
}

</script>
<i18n>{
  "en":{
  "fileFolder":"Download files and tools",
  "downloadPlan":"Download a Word template of the work plan"
  },
  "fr":{
  "fileFolder":"Fichiers et outils à télécharger",
  "downloadPlan":"Télécharger un modèle Word du plan de travail"
  }
  }</i18n>
