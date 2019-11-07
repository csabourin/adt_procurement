<template>
  <span>
    <a href="javascript:" v-b-modal.fileFolder>
      <fileIcon :title="$t('fileFolder')" width="50" />
    </a>
    <b-modal id="fileFolder" :title="$t('fileFolder')" okOnly size="lg">
      <a href="ADT_Ressources_360.pdf" download target="_blank">
        <genericFile
        iconWidth="128"
        :title="$t('download360')"
        :line1="$t('t360Line1')"
        :line2="$t('t360Line2')" />
        </a>
      <a href="WorkPlan_Template.docx" :title="$t('downloadPlan')">
      <genericFile
        :line1="$t('dwnPlanLine1')"      
      :line2="$t('dwnPlanLine2')"      
      iconStyle="planBackground"      
      iconWidth="128"      
      :title="$t('downloadPlan')" />
    </a>
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
  "fileFolder":"Download files and tools"


  },
  "fr":{
  "fileFolder":"Fichiers et outils à télécharger"
  }
  }</i18n>
