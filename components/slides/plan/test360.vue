<template>
  <div>
    <h3>{{ $t('instructions') }}</h3>
    <b-container>
      <b-row>
        <b-col class="text-center" cols="6" md="4" lg="2">
          <download :texts="$t('threeSixty')" size=128 iconColor="Scan360Background" :title="$t('download360')" :fileSize="this.$i18n.locale == 'en' ? '118' : '124'" name="threeSixty" />
        </b-col>
        <b-col class="text-center" cols="6" md="4" lg="2">
          <download :texts="$t('WPTemplate')" size="128" iconColor="planBackground" :fileSize="this.$i18n.locale == 'en' ? '15.9' : '17,5'" name="WorkPlanTemplate" />
        </b-col>
        <b-col class="text-center" cols="6" md="4" lg="2">
          <download :texts="$t('WPLastYear')" size=128 iconColor="planBackground" :fileSize="this.$i18n.locale == 'en' ? '120' : '120'" name="WorkPlan_lastYear" />
        </b-col>
        <b-col class="text-center" cols="6" md="4" lg="2">
          <download :texts="$t('budgetLastYear')" size=128 iconColor="spendBackground" :fileSize="this.$i18n.locale == 'en' ? '9.96' : '9,62'" name="Budget_lastYear" />
        </b-col>
        <b-col class="text-center" cols="6" md="4" lg="2">
          <download :texts="$t('reportsLastYear')" size=128 iconColor="reportBackground" :fileSize="this.$i18n.locale == 'en' ? '16.6' : '19,4'" name="ReportLast" />
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