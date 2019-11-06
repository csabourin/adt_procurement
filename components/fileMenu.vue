<template>
  <span>
    <a href="javascript:" v-b-modal.fileFolder>
      <fileIcon :title="$t('fileFolder')" width="50" />
    </a>
    <b-modal id="fileFolder" :title="$t('fileFolder')" okOnly size="lg">
      <a href="ADT_Ressources_360.pdf" download target="_blank">
        <genericFile iconWidth="128" :title="$t('Test360')" :line1="$t('t360Line1')" :line2="$t('t360Line2')" />
        </a>
      <a href="WorkPlan_Template.docx" :title="$t('downloadPlan')">
      <genericFile
        :line1="$t('dwnPlanLine1')"      
      :line2="$t('dwnPlanLine2')"      
      iconStyle="planBackground"      
      iconWidth="128"      
      :title="$t('downloadPlan')" /></a>
    </b-modal>
  </span>
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
  "t360Line1":"360",
  "t360Line2":"Scan",
  "downloadPlan":"Download a Word template of the work plan",
  "dwnPlanLine1":"Work Plan",
  "dwnPlanLine2":"Template"

  },
  "fr":{
  "fileFolder":"Fichiers et outils à télécharger",
  "downloadPlan":"Télécharger un modèle Word du plan de travail",
  "t360Line1":"Aperçu",
  "t360Line2":"360",
  "dwnPlanLine1":"Plan de",
  "dwnPlanLine2":"travail"
  }
  }</i18n>
