<template>
  <div>
    <p>{{ $t('instructions') }}</p>
    <b-container>
      <b-row>
        <b-col>
          <download
           filename="ADT_Ressources_360.pdf"
           iconColor="Scan360Background"
           size=128 :title="$t('Test360')"
           :line1="$t('t360Line1')"
           :line2="$t('t360Line2')" />
          <br>{{$t('Test360')}}</b-col>
        <b-col>
          <download
           filename="WorkPlan_lastYear.pdf"
           iconColor="planBackground"
           size=128 :title="$t('wpExample')"
           :line1="$t('wpLine1')"
           :line2="$t('wpLine2')" />
          <br>{{$t('wpExample')}}</b-col>
        <b-col>
          <download
           filename="Budget.xlsx"
           iconColor="spendBackground"
           size=128 :title="$t('bExample')"
           :line1="$t('bLine1')"
           :line2="$t('bLine2')" />
          <br>{{$t('bExample')}}</b-col>
        <b-col>
          <download
           filename="ReportLast.docx"
           iconColor="reportBackground"
           size=128 :title="$t('rExample')"
           :line1="$t('rLine1')"
           :line2="$t('rLine2')" />
          <br>{{$t('rExample')}}</b-col>
      </b-row>
    </b-container>
  </div>
</template>
<i18n>
  {
  "en":{
  "instructions":"Examine each of the following documents.",
  "Test360":"360 Scan",
  "t360Line1":"360",
  "t360Line2":"Scan",
  "wpExample":"Last Year's Work Plan",
  "wpLine1":"Work",
  "wpLine2":"Plan",
  "bExample":"Last Year's Budget",
  "bLine1":"Last year's",
  "bLine2":"Budget",
  "rExample":"Last Years's Reports",
  "rLine1":" ",
  "rLine2":"Reports"
  },
  "fr":{
  "instructions":"Examinez chacun des documents suivants :",
  "Test360":"Aperçu 360",
  "t360Line1":"Aperçu",
  "t360Line2":"360",
  "wpExample":"Plan de travail de l&rsquo;année passée",
  "wpLine1":"Plan de",
  "wpLine2":"travail",
  "bExample":"Budget de l&rsquo;année passée",
  "bLine1":" ",
  "bLine2":"Budget",
  "rExample":"Rapport de l&rsquo;année passée",
  "rLine1":" ",
  "rLine2":"Rapport"
  }
  }
</i18n>
<script type="text/javascript">
import download from "~/components/fileDownload"
export default {
  components: {
    download
  }
}

</script>
