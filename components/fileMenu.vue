<template>
  <span>
    <a href="javascript:" v-b-modal.fileFolder>
      <fileIcon :title="$t('fileFolder')" width="50" />
    </a>
    <b-modal id="fileFolder" :title="$t('fileFolder')" okOnly size="lg">
      <a :href="require('~/assets/'+ $i18n.locale +'/ADT_Ressources_360.pdf')" download="ADT_Ressources_360.pdf" target="_blank">
        <genericFile
        iconWidth="128"
        :title="$t('download360')"
        :line1="$t('t360Line1')"
        :line2="$t('t360Line2')" />
        </a>
      <a :href="require('~/assets/'+ $i18n.locale +'/WorkPlan_Template.docx')" download="WorkPlan_Template.docx" :title="$t('downloadPlan')" target="_blank">
      <genericFile
        :line1="$t('dwnPlanLine1')"      
      :line2="$t('dwnPlanLine2')"      
      iconStyle="planBackground"      
      iconWidth="128"      
      :title="$t('downloadPlan')" />
    </a>
    <p>&nbsp;</p><span v-if="$i18n.locale=='en'">
      Have a look at your organization's DP by selecting the following link: <a href="https://www.canada.ca/en/treasury-board-secretariat/services/planned-government-spending/reports-plans-priorities.html" target="_blank">Departmental Plans</a></span>
      <span v-if="$i18n.locale=='fr'">
      Jetez un coup d'oeil au PM de votre organisation en sélectionnant le lien suivant: <a href="https://www.canada.ca/fr/secretariat-conseil-tresor/services/depenses-prevues/rapports-plans-priorites.html" target="_blank">Plans ministériels</a>
    
    </span></p>
  
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
