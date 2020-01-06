<template>
  <div>
    <h2 class="pageTitle" v-html="$t('ContributeReporting')" />
    <section>
<videoPlayer ref="vp" videoFile="SpendPart3.mp4" chapters chapterFile="ReportPart2.vtt" posterFile="S32Part1Poster.jpg" :restartAt="parseInt(thatPoint)" toResume="setReportPart1" :modalArray="modalArray" />
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
      <b-modal no-stacking id="externalGovtReports" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-title><img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('externalGovtReports')}}</template>
        <externalGovtReports />
      </b-modal>
      <b-modal id="identifyResults" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-title><img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('delegateAuthority')}}</template>
        <identifyResults />
      </b-modal>
      <b-modal id="inRealLife" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-title><img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('inRealLifeTitle')}}</template>
        <div v-if="$i18n.locale=='en'">
          <p>Look up your organization&rsquo;s Performance Information Profiles and its external reports, such as the Departmental Results Report.&nbsp;</p>
          <p>Your organization will have their own ways of doing financial situation reports, and reporting on spending and results. Talk to your finance or planning section and director. Ask them:</p>
          <ul>
            <li>What do we call our financial situation reports and what do they look like? Where can I find them?</li>
            <li>How frequently do we prepare financial situation reports?&nbsp;</li>
            <li>Do we complete these reports in the financial system or in a spreadsheet?</li>
            <li>What is my role?</li>
            <li>What information will I provide to feed into external reports?</li>
          </ul>
        </div>
        <div v-if="$i18n.locale=='fr'">
          <p>Faites une recherche afin de localiser les profils d'information sur le rendement de votre organisation et ses rapports externes, comme le Rapport minist&eacute;riel sur les r&eacute;sultats.&nbsp;</p>
          <p>Votre organisation aura sa propre fa&ccedil;on de produire des rapports sur la situation financi&egrave;re et de rendre compte de ses d&eacute;penses et de ses r&eacute;sultats. Parlez-en &agrave; votre section des finances ou de la planification et &agrave; votre directeur. Demandez-leur :</p>
          <ul>
            <li>Comment appelons-nous nos rapports sur la situation financi&egrave;re et &agrave; quoi ressemblent-ils ? &Agrave; quel endroit puis-je les trouver?</li>
            <li>&Agrave; quelle fr&eacute;quence pr&eacute;parons-nous des rapports sur la situation financi&egrave;re?&nbsp;</li>
            <li>Doit-on remplir ces rapports dans le syst&egrave;me financier ou dans un tableur?</li>
            <li>Quel est mon r&ocirc;le?</li>
            <li>Quelles informations vais-je fournir pour alimenter les rapports externes?</li>
          </ul>
        </div>
      </b-modal>
      <b-modal no-stacking id="reportQuiz" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-title><img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('TakeTheQuiz')}}</template>
        <reportQuiz />
      </b-modal>
    </section>
    <div class="bottomNav reportSection">
      <div class="reportSectionBar"><span>{{$t('reportSectionBar')}}</span></div>
      <microlearning path="reportKey" size="140" imagePath="KeyMessR.png" :text="$t('KeyMessages')" />
      <microlearning path="reportPart1" imagePath="R-Conduct.svg" size="140" time="20" :text="$t('ConductPeriodicVarianceReporting')" />
      <microlearning youAreHere path="reportPart2" imagePath="R-Contribute.svg" size="140" time="20" :text="$t('ContributeReporting')" />
      <microlearning path="exam3" size="140" time="15" imagePath="R-Test.svg" :text="$t('Test')" />
    </div>
  </div>
</template>
<script type="text/javascript">
import videoPlayer from '~/components/interface/videoPlayer'
import microlearning from '~/components/microlearning'
import externalGovtReports from '~/components/slides/report/externalGovtReports'
import identifyResults from '~/components/slides/report/identifyResults'
import reportQuiz from '~/components/slides/report/reportQuiz'
export default {
  data() {
    return {
      modalArray: ["externalGovtReports", "identifyResults", "inRealLife", "reportQuiz"]
    }
  },
  components: {
    videoPlayer,
    microlearning,
    externalGovtReports,
    identifyResults,
    reportQuiz
  },
  computed: {
    thatPoint() {
      return this.$store.state.currentPlaying.reportPart2
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
  "delegateAuthority":"Activity: Delegation of Authority",
  "externalGovtReports":"Activity: What is a Financial Situation Report?",
  "inRealLifeTitle":"Activity: In Real Life",
  "RecordingTitle":"Activity: Recording in the Financial System",
  "transcriptText":"",
  "reportSectionBar": "REPORT"
  },
  "fr":{
  "TakeTheQuiz":"Répondez au questionnaire",
  "completewptitle":"Activité: Compléter le plan de travail",
  "delegateAuthority":"Activité: Délégation des pouvoirs",
  "externalGovtReports":"Activité: Vérifiez votre budget",
  "tryItTitle":"Activité: Essayons-le!",
  "inRealLifeTitle":"Activité: Dans la vraie vie",
  "RecordingTitle":"Activité: Enregistrement dans le système financier",
  "transcriptText":"",
  "reportSectionBar": "RAPPORTS"
  }
  }
</i18n>
