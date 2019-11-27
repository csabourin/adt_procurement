<template functionnal>
  <span>
    <a href="javascript:" v-b-modal.fileFolder>
      <fileIcon :title="$t('fileFolder')" width="44" />
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
              <b-card-text>
                <planLinks />
                <spendLinks />
                <reportLinks />
              </b-card-text>
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
import spendLinks from "~/components/spend_links"
import reportLinks from "~/components/report_links"
export default {
  components: {
    fileIcon,
    download,
    planLinks,
    spendLinks,
    reportLinks
  }
}

</script>
<style type="text/css" scoped>
.card-header a.btn-light {
  text-transform: uppercase;
  color: #707070;
  font-weight: 500;
  font-size: 28px;
  text-align: left
}

</style>
