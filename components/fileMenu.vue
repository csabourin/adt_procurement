<template functionnal>
  <span>
    <a href="javascript:" v-b-modal.fileFolder>
      <fileIcon :title="$t('fileFolder')" width="50" />
    </a>
    <b-modal id="fileFolder" :title="$t('fileFolder')" okOnly size="xl">
      <div role="tablist">
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block href="#" v-b-toggle.toolbox-2 class="fileHead" variant="light"><img src="~/assets/FilesIcon.svg" width="50" height="50">{{$t('files')}}</b-button>
          </b-card-header>
          <b-collapse id="toolbox-2" visible accordion="my-toolbox" role="tabpanel">
            <b-card-body>
              <b-card-text>
                <download filename="ADT_Ressources_360.pdf" iconColor="Scan360Background" size=128 :title="$t('download360')" :line1="$t('t360Line1')" :line2="$t('t360Line2')" />
                <download filename="WorkPlan_Template.docx" size=128 iconColor="planBackground" :title="$t('downloadPlan')" :line1="$t('dwnPlanLine1')" :line2="$t('dwnPlanLine2')" />
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block href="#" v-b-toggle.toolbox-1 variant="light"><img src="~/assets/LinksIcon.svg" width="50" height="50"> {{$t('links')}}</b-button>
          </b-card-header>
          <b-collapse id="toolbox-1" accordion="my-toolbox" role="tabpanel">
            <b-card-body>
              <b-card-text><planLinks />
              <p>&nbsp;</p><span v-if="$i18n.locale=='en'">
        Have a look at your organization's DP by selecting the following link: <a href="https://www.canada.ca/en/treasury-board-secretariat/services/planned-government-spending/reports-plans-priorities.html" target="_blank">Departmental Plans</a></span>
      <span v-if="$i18n.locale=='fr'">
        Jetez un coup d'oeil au PM de votre organisation en sélectionnant le lien suivant: <a href="https://www.canada.ca/fr/secretariat-conseil-tresor/services/depenses-prevues/rapports-plans-priorites.html" target="_blank">Plans ministériels</a>
      </span></p></b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block href="#" v-b-toggle.toolbox-3 variant="light"><img src="~/assets/GlossaryIcon.svg" width="50" height="50"> {{$t('glossary')}}</b-button>
          </b-card-header>
          <b-collapse id="toolbox-3" accordion="my-toolbox" role="tabpanel">
            <b-card-body>
              <b-card-text></b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block href="#" v-b-toggle.toolbox-3 variant="light"><img src="~/assets/HelpIcon.svg" width="50" height="50"> {{$t('help')}}</b-button>
          </b-card-header>
          <b-collapse id="toolbox-3" accordion="my-toolbox" role="tabpanel">
            <b-card-body>
              <b-card-text></b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
    </b-modal>
  </span>
</template>
<script type="text/javascript">
import fileIcon from '~/components/icons/FileIcon'
import download from "~/components/fileDownload"
import planLinks from "~/components/plan_links"
export default {
  components: {
    fileIcon,
    download,
    planLinks
  }
}

</script>
<style type="text/css" scoped>
  .card-header a.btn-light {text-transform: uppercase; color:#707070;font-weight: 500;font-size:28px; text-align: left}
</style>
