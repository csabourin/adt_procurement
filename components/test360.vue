<template>
  <div>
    <h3>{{$t('Test360')}}</h3>
    <p>{{ instructions }}</p>
    <b-container>
      <b-row>
        <b-col><a href="ADT_Ressources_360.pdf" download>
            <genericFile :title="$t('Test360')" :line1="$t('t360Line1')" :line2="$t('t360Line2')" /></a><br>{{$t('Test360')}}</b-col>
        <b-col>
          <p>
            <genericFile :line1="$t('wpLine1')" :line2="$t('wpLine2')" iconStyle="planBackground" :title="$t('wpExample')" /><br>{{$t('wpExample')}}</p>
        </b-col>
        <b-col>
          <p>
            <genericFile :line1="$t('bLine1')" :line2="$t('bLine2')" iconStyle="spendBackground" :title="$t('bExample')" /><br>{{$t('bExample')}}</p>
        </b-col>
        <b-col>
          <p>
            <genericFile :line1="$t('rLine1')" :line2="$t('rLine2')" iconStyle="reportBackground" :title="$t('rExample')" /><br>{{$t('rExample')}}</p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<i18n>
  {
  "en":{
  "instructions":"Review the following documents and apply the questions of 360 Scan to them",
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
  "wpExample":"Plan de travail",
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
import Scan360 from "~/components/icons/360scan"
import genericFile from "~/components/icons/genFileIcon"
export default {
  data() {
    return Scan360
  },
  components: {
    Scan360,
    genericFile
  }
}

</script>
