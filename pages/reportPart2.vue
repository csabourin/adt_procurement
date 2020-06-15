<template>
  <div>
    <h2 class="pageTitle" v-html="$t('ContributeReporting')" />
    <section>
      <videoPlayer ref="vp" enVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_u5d1t3f4/flavorId/0_i0r0o0lc/name/a.mp4" frVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_rvohbyn6/flavorId/0_e3qt7rpb/name/a.mp4" chapters chapterFile="ReportPart2.vtt" ccFile="ReportPart2_captions.vtt" posterFile="reportPart2_poster.png" :restartAt="parseInt(thatPoint)" toResume="setReportPart1" :modalArray="modalArray" @timeupdate="updatePercent($event)" />
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
    <div>
      <b-modal no-stacking id="externalGovtReports" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('externalGovtReports')}}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <externalGovtReports />
        <template v-slot:modal-ok>{{$t('close')}}</template>
      </b-modal>
      <b-modal id="identifyResults" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('IdentifyResultsTitle')}}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <identifyResults />
        <template v-slot:modal-ok>{{$t('close')}}</template>
      </b-modal>
      <b-modal id="inRealLife" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('inRealLifeTitle')}}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <img src="~/assets/R-Contribute.svg" class="img-real_Life" alt="">
        <div v-if="$i18n.locale=='en'">
          <p>Look up your organization’s Performance Information Profiles and its external reports, such as the Departmental Results Report.&nbsp;</p>
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
          <p>Faites une recherche afin de localiser les profils d’information sur le rendement de votre organisation et ses rapports externes, comme le Rapport ministériel sur les résultats.&nbsp;</p>
          <p>Votre organisation aura sa propre fa&ccedil;on de produire des rapports sur la situation financi&egrave;re et de rendre compte de ses dépenses et de ses résultats. Parlez-en à votre section des finances ou de la planification et à votre directeur. Demandez-leur :</p>
          <ul>
            <li>Comment appelons-nous nos rapports sur la situation financi&egrave;re et à quoi ressemblent-ils ? &Agrave; quel endroit puis-je les trouver?</li>
            <li>&Agrave; quelle fréquence préparons-nous des rapports sur la situation financi&egrave;re?&nbsp;</li>
            <li>Doit-on remplir ces rapports dans le syst&egrave;me financier ou dans un tableur?</li>
            <li>Quel est mon r&ocirc;le?</li>
            <li>Quelles informations vais-je fournir pour alimenter les rapports externes?</li>
          </ul>
        </div>
        <template v-slot:modal-ok>{{$t('close')}}</template>
      </b-modal>
      <b-modal no-stacking id="reportQuiz" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('TakeTheQuiz')}}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <reportQuiz />
        <template v-slot:modal-ok>{{$t('close')}}</template>
      </b-modal>
    </div>
    <div class="bottomNav reportSection">
      <div class="reportSectionBar"><span>{{$t('reportSectionBar')}}</span></div>
      <microlearning :completion="$store.state.currentPlaying.reportPart1_player" path="reportPart1" imagePath="R-Conduct.svg" size="140" time="20" :text="$t('ConductPeriodicVarianceReporting')" />
      <microlearning youAreHere :completion="$store.state.currentPlaying.reportPart2_player" path="reportPart2" imagePath="R-Contribute.svg" size="140" time="20" :text="$t('ContributeReporting')" />
      <microlearning :completion="$store.state.currentPlaying.kmReport" path="reportKey" size="140" imagePath="KeyMessR.svg" :text="$t('KeyMessages')" time="5" />
      <microlearning :completion="parseInt($store.getters['report/getScore'],10)" path="exam3" size="140" time="15" imagePath="R-Test.svg" :text="$t('Test')" />
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
    },
    updatePercent(e) {
      this.$store.commit('currentPlaying/setReportPart2_player', e)
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

.img-real_Life{
  width:265px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
<i18n>{
  "en":{
  "externalGovtReports":"Activity: External Government Reports",
  "IdentifyResultsTitle":"Activity: Identify Results",
  "inRealLifeTitle":"Activity: In Real Life",
  "TakeTheQuiz":"Take the Quiz",
  "transcriptText":"",
  "reportSectionBar": "REPORT"
  },
  "fr":{
  "externalGovtReports":"Activité: Rapports externes du gouvernement",
  "IdentifyResultsTitle":"Activité: Démontrer les résultats",
  "inRealLifeTitle":"Activité: Dans la vraie vie",
  "TakeTheQuiz":"Répondez au questionnaire",
  "transcriptText":"",
  "reportSectionBar": "RAPPORTS"
  }
  }
</i18n>
