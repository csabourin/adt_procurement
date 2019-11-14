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
           filename="ADT_Ressources_360.pdf"
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
  "instructions":"Review the following documents and apply the questions of the 360 Scan to them",
  "Test360":"360 Scan",
  "t360Line1":"360",
  "t360Line2":"Scan",
  "wpExample":"Last year's Work Plan",
  "wpLine1":"Work",
  "wpLine2":"Plan",
  "bExample":"Last year's Budget",
  "bLine1":"Last year's",
  "bLine2":"Budget",
  "rExample":"Last years's Reports",
  "rLine1":" ",
  "rLine2":"Reports"
  },
  "fr":{
  "instructions":"Révisez les documents suivants et appliquez-y les questions de l'apperçu 360",
  "Test360":"Aperçu 360",
  "t360Line1":"Aperçu",
  "t360Line2":"360",
  "wpExample":"Plan de travail de l'année passée",
  "wpLine1":"Plan de",
  "wpLine2":"travail",
  "bExample":"Budget de l'année passée",
  "bLine1":" ",
  "bLine2":"Budget",
  "rExample":"Rapport de l'année passée",
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
