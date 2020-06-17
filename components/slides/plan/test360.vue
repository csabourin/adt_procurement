<template>
  <div>
    <h3>{{ $t('instructions') }}</h3>
    <b-container>
      <b-row>
        <b-col class="text-center" cols="3">
          <download 
            :filename="$t('fileName.threeSixty')"
            :HTMLFilename="$t('fileName.threeSixtyHTML')"
            iconColor="Scan360Background" 
            size=128 :title="$t('download360')"
            :line1="$t('t360Line1')"
            :line2="$t('t360Line2')"
            :lineTag="$t('threeSixtyExample')"
            :fileSize="this.$i18n.locale == 'en' ? '118' : '124'"
            name="threeSixty" />
        </b-col>
        <b-col class="text-center" cols="3">
          <download
            :filename="$t('fileName.WorkPlanTemplate')"
            iconColor="planBackground"
            size="128":title="$t('downloadPlan')"
            :line1="$t('dwnPlanLine1')"
            :line2="$t('dwnPlanLine2')"
            :lineTag="$t('WPExample')"
            :fileSize="this.$i18n.locale == 'en' ? '15.9' : '17,5'"
            name="WorkPlanTemplate" />
        </b-col>
        <b-col class="text-center" cols="3">
          <download
           :filename="$t('fileName.WorkPlan_lastYear')"
           :HTMLFilename="$t('fileName.WorkPlan_lastYearHTML')"
           iconColor="planBackground"
           size=128 :title="$t('wpExample')"
           :line1="$t('wpLine1')"
           :line2="$t('wpLine2')"
           :lineTag="$t('wpExample')"
           :fileSize="this.$i18n.locale == 'en' ? '120' : '120'"
           name="WorkPlan_lastYear" />
        </b-col>
        <b-col class="text-center" cols="3">
          <download
           :filename="$t('fileName.Budget_lastYear')"
           iconColor="spendBackground"
           size=128 :title="$t('bExample')"
           :line1="$t('bLine1')"
           :line2="$t('bLine2')"
           :lineTag="$t('bExample')"
           :fileSize="this.$i18n.locale == 'en' ? '9.96' : '9,62'"
           name="Budget_lastYear" />
        </b-col>
        <b-col class="text-center" cols="3">
          <download
           :filename="$t('fileName.ReportLast')"
           iconColor="reportBackground"
           size=128 :title="$t('rExample')"
           :line1="$t('rLine1')"
           :line2="$t('rLine2')"
           :lineTag="$t('rExample')"
           :fileSize="this.$i18n.locale == 'en' ? '16.6' : '19,4'"
           name="ReportLast" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<i18n>
  {
    "en":{
      "instructions":"Examine each of the following documents."
    },
    "fr":{
      "instructions":"Examinez chacun des documents suivants :"
    }
  }
</i18n>
<script type="text/javascript">
import download from "~/components/fileDownload"
import HTMLJobaidLink from "~/components/HTMLJobaidLink"
export default {
  components: {
    download,
    HTMLJobaidLink
  }
}

</script>
<style scoped>
  h3 {
    font-size:1.3em;
    padding-bottom:1em;
  }
  a {
    color:#212529;
  }
</style>