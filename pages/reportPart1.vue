<template>
  <div>
    <h2 class="pageTitle" v-html="$t('ConductPeriodicVarianceReporting')" />
    <section>
      <videoPlayer ref="vp" videoFile="SpendPart3.mp4" chapters chapterFile="ReportPart1.vtt" posterFile="S32Part1Poster.jpg" :restartAt="parseInt(thatPoint)" toResume="setReportPart1" :modalArray="modalArray" />
      <div role="tablist" class="transcriptionBox">
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block href="#" v-b-toggle.cbTranscript-1 variant="light">{{$t('transcript')}}</b-button>
          </b-card-header>
          <b-collapse id="cbTranscript-1" role="tabpanel">
            <b-card-body>
              <b-card-text>
                <span v-if="$i18n.locale=='en'">Transcripts here</span>
                <span v-if="$i18n.locale=='fr'">Transcription ici</span>
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
    </section>
    <section>
      <b-modal no-stacking id="whatIsFSR" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-title><img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('whatIsFSR')}}</template>
        <whatIsFSR />
      </b-modal>
      <b-modal id="keyPeriods" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-title><img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('KeyPeriodsFSRTitle')}}</template>
        <keyPeriods />
      </b-modal>
      <b-modal id="FSRActivities" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-title><img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('FSRActivitiesTitle')}}</template>
        <FSRActivities />
      </b-modal>
      <b-modal id="UpdatingAnnualForecast" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-title><img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('UpdatingAnnualForecastTitle')}}</template>
        <UpdatingAnnualForecast />
      </b-modal>
      <b-modal no-stacking id="RecordingFinancialSystem" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-title><img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('UpdatingAnnualForecast')}}</template>
        <RecordingFinancialSystem />
      </b-modal>
      <b-modal no-stacking id="quiz" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-title><img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('TakeTheQuiz')}}</template>
        <budgetQuiz />
      </b-modal>
    </section>
    <div class="bottomNav reportSection">
      <div class="reportSectionBar"><span>{{$t('reportSectionBar')}}</span></div>
      <microlearning path="reportKey" size="140" imagePath="KeyMessR.png" :text="$t('KeyMessages')" />
      <microlearning youAreHere path="reportPart1" imagePath="R-Conduct.svg" size="140" time="20" :text="$t('ConductPeriodicVarianceReporting')" />
      <microlearning path="reportPart2" imagePath="R-Contribute.svg" size="140" time="20" :text="$t('ContributeReporting')" />
      <microlearning path="exam3" size="140" time="15" imagePath="R-Test.svg" :text="$t('Test')" />
    </div>
  </div>
</template>
<script type="text/javascript">
import videoPlayer from '~/components/interface/videoPlayer'
import microlearning from '~/components/microlearning'
import whatIsFSR from '~/components/slides/report/whatIsFSR'
import UpdatingAnnualForecast from '~/components/slides/report/UpdatingAnnualForecast'
import FSRActivities from '~/components/slides/report/FSRActivities'
import keyPeriods from '~/components/slides/report/keyPeriods'
export default {
  data() {
    return {
      modalArray: ["whatIsFSR", "keyPeriods", "FSRActivities", "UpdatingAnnualForecast"]
    }
  },
  components: {
    videoPlayer,
    microlearning,
    whatIsFSR,
    FSRActivities,
    keyPeriods,
    UpdatingAnnualForecast
  },
  computed: {
    thatPoint() {
      return this.$store.state.currentPlaying.reportPart1
    }
  },
  methods: {
    resumePlay() {
      this.$refs.vp.resumePlay()
    }
  }
}

</script>
<style scoped>
.reportSectionBar {
  position: absolute;
  background-color: #e5dddc;
  width: 100vw;
  height: 30px;
  text-align: left;
  left: -15px;
  top: 38%;
}

.reportSectionBar span {
  padding: 2px 10px 0;
  color: #4d4d4d;
  font-weight: bold;
  background-color: #fff;
  display: inline-block;
  height: 100%;
  margin-left: 15px;
}

</style>
<i18n>{
  "en":{
  "TakeTheQuiz":"Take the Quiz",
  "tryItTitle":"Activity: Try it!",
  "adjustwptitle":"Activity: Adjust the Work plan",
  "KeyPeriodsFSRTitle":"Activity: Key Periods for Financial Situation Reports",
  "whatIsFSR":"Activity: What is a Financial Situation Report?",
  "FSRActivitiesTitle":"Activity: Forecast Budget Requirements",
  "UpdatingAnnualForecastTitle":"Activity: Updating the Annual Forecast",
  "gotIt":"Continue to next segment",
  "jumpModalParts":"Jump to activity",
  "playSegment":"Play video segment",
  "transcriptText":"",
  "reportSectionBar": "REPORT"
  },
  "fr":{
  "TakeTheQuiz":"Répondez au questionnaire",
  "completewptitle":"Activité: Compléter le plan de travail",
  "adjustwptitle":"Activité: Ajuster le plan de travail",
  "KeyPeriodsFSRTitle":"Activité: Périodes clés pour les rapports sur la situation financière",
  "whatIsFSR":"Activité: Vérifiez votre budget",
  "tryItTitle":"Activité: Essayons-le!",
  "FSRActivitiesTitle":"Activité: Prévoyez vos besoins budgétaires",
  "UpdatingAnnualForecastTitle":"Activité: Mise à jour des prévisions annuelles",
  "gotIt":"Continuer au segment suivant.",
  "jumpModalParts":"Sauter à l'activité",
  "playSegment":"Faire jouer le segment vidéo",
  "transcriptText":"",
  "reportSectionBar": "RAPPORTS"
  }
  }
</i18n>
