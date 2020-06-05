<template>
  <div>
    <h3>{{ $t('instructions') }}</h3>
    <b-container>
      <b-row>
        <b-col class="text-center">
          <download 
            :filename="$t('fileName.threeSixty')" 
            iconColor="Scan360Background" 
            size=128 :title="$t('download360')"
            :line1="$t('t360Line1')"
            :line2="$t('t360Line2')"
            :lineTag="$t('threeSixtyExample')" />
          <HTMLJobaidLink :filename="$t('fileName.threeSixtyHTML')" />
        </b-col>
        <b-col class="text-center">
          <download
            :filename="$t('fileName.WorkPlanTemplate')"
            iconColor="planBackground"
            size="128":title="$t('downloadPlan')"
            :line1="$t('dwnPlanLine1')"
            :line2="$t('dwnPlanLine2')"
            :lineTag="$t('WPExample')" />
        </b-col>
        <b-col class="text-center">
          <download
           :filename="$t('fileName.WorkPlan_lastYear')"
           iconColor="planBackground"
           size=128 :title="$t('wpExample')"
           :line1="$t('wpLine1')"
           :line2="$t('wpLine2')"
           :lineTag="$t('wpExample')" />
        </b-col>
        <b-col class="text-center">
          <download
           :filename="$t('fileName.Budget_lastYear')"
           iconColor="spendBackground"
           size=128 :title="$t('bExample')"
           :line1="$t('bLine1')"
           :line2="$t('bLine2')"
           :lineTag="$t('bExample')" />
        </b-col>
        <b-col class="text-center">
          <download
           :filename="$t('fileName.ReportLast')"
           iconColor="reportBackground"
           size=128 :title="$t('rExample')"
           :line1="$t('rLine1')"
           :line2="$t('rLine2')"
           :lineTag="$t('rExample')" />
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
    color:#000;
  }
</style>