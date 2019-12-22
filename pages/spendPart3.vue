<template>
  <div>
    <h1 class="pageTitle" v-html="$t('MonitorControlFinances')" />
    
    <section>
      <video ref="videoplayer" id="mainPlayer" :poster="require('~/assets/'+ $i18n.locale +'/S32Part1Poster.jpg')" :src="require('~/assets/'+ $i18n.locale +'/SpendPart3.mp4')" controls playsinline @loadeddata="resumePosition" @timeupdate="update" @canplaythrough="isReady">
        <track :src="require('~/assets/'+ $i18n.locale +'/SpendPart3.vtt')" kind="chapters" default="" @load="generate">
      </video>
      <div role="tablist" class="transcriptionBox">
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block href="#" v-b-toggle.cbTranscript-1 variant="light">{{$t('transcript')}}</b-button>
          </b-card-header>
          <b-collapse id="cbTranscript-1" role="tabpanel">
            <b-card-body>
              <b-card-text>
                <!-- <button class="accessibilityButton" v-for="(tracks, index) in navBarTracks" :key="index" @click="accessibleModal(index)">{{$t('jumpModalParts') + ' - ' +navBarTracks[index]}}</button> -->
                <span v-if="$i18n.locale=='en'">

                  <h2>Continuous Monitoring</h2>
                  <p>As a manager, you are responsible for ensuring that commitments and expenditures are monitored throughout the year and that they are accurately recorded in the financial system.</p>
                  <p>This monitoring is both at a transactional level and at a strategic level. Depending on the situation, it may involve one or more of the following actions: </p>
                  <ul>
                    <li>Close commitments that are no longer required;</li>
                    <li>Amend contracts for scope, time, and amount;</li>
                    <li>Update the salary forecast to reflect your current and planned staffing needs;  </li>
                    <li>Plan for potential budget shortfalls or pressures;</li>
                    <li>Flag budget surpluses to senior management; and</li>
                    <li>Make expenditure adjustments.</li>
                  </ul>
                  <p>Let’s play with a few examples.</p>

                  <hr>

                  <h2>Data Comparison</h2>
                  <p>Taking care of your budget is really important because the decisions you make within your budget may influence your sector, your branch, or even your department. </p>
                  <p>At year-end, you will need to justify any deficit or surplus. </p>
                  <p>On one hand, overspending can cause a deficit, which puts a lot of pressure on senior management to find additional sources of funds to compensate. </p>
                  <p>On the other hand, a surplus should be flagged as early as possible so that your unit doesn’t miss an opportunity to reallocate unused funds to another activity or to another unit. </p>
                  <p>Monthly reports help you track your financials. They are sometimes called “Financial Situation Reports” - or FSRs -  and are usually produced by the finance team within your organization. </p>
                  <p>What is in the FSR needs to match what is actually going on in your unit. If it doesn’t, then you need to take appropriate action to resolve it. </p>
                  <p>In the next activity, you will have a chance to review and adjust your financials according to new information. </p>

                  <hr>

                  <h2>Year-End Procedures</h2>
                  <p>Since most budgets are allocated by Parliament on an annual basis and must be used within the fiscal year, goods and services must be received on or before March 31. </p>
                  <p>However, you will most likely have a number of outstanding expenditures that you will not be able to pay before the end of the fiscal year. To help with that, the Finance unit will establish Payables at Year-End (PAYE) or Receivables at Year-End (RAYE) in the financial system after receiving your list of outstanding payables.  </p>
                  <p>A P-A-Y-E is an amount owed for goods and/or services delivered in the old fiscal year using old year funds but paid in the new fiscal year when the supplier invoice is received. </p>
                  <p>An R-A-Y-E is an amount due from another department for goods and/or services delivered in the old fiscal year, for which receipt of payment will be in the new fiscal year.</p>
                  <p>Usually - again, depending on the practices within your department - Finance will send out year-end instructions about how to establish a P-A-Y-E or R-A-Y-E. These instructions will also include specific requirements with respect to the minimum dollar amount and the timeline. </p>
                  <p>Contracts can be a bit tricky when we get close to the end of the fiscal year. Here are a couple of things to keep in mind. </p>
                  <ol>
                    <li>Pay attention to the deadlines set by procurement. You may not be able to create a purchase order as you near year-end. </li>
                    <li>Follow up with suppliers to make sure that the goods or services will be delivered before year-end. If the supplier is unable to deliver before March 31, talk to procurement about possible steps. </li>
                  </ol>

                  <hr>

                  <h2>Quiz</h2>
                  <p>So now that you know how to initiate expenditures, authorize commitments, exercise financial authority and monitor and control finances, let’s see what you remember by taking this short quiz.</p>

                  <h2>Section Completed</h2>

                </span>
                <span v-if="$i18n.locale=='fr'">

                  <h2>Suivi continu </h2>
                  <p>En tant que gestionnaire, vous avez la responsabilité de veiller à ce que les engagements et les dépenses soient suivis tout au long de l'année et qu’ils soient enregistrés avec exactitude dans le système financier.</p>
                  <p>Ce suivi se fait à la fois au niveau transactionnel et au niveau stratégique. Selon la situation, cela se traduit par l’une ou l’autre des actions suivantes : </p>
                  <ul>
                    <li>Fermer les engagements qui ne sont plus requis; </li>
                    <li>Modifier les contrats en fonction de leur portée, de leur durée et des montants qui leur sont alloués;</li>
                    <li>Mettre à jour les prévisions salariales pour tenir compte de vos besoins actuels et futurs en matière de dotation;  </li>
                    <li>Planifier pour les insuffisances ou les pressions budgétaires;</li>
                    <li>Signaler les excédents budgétaires à la haute direction; et</li>
                    <li>Apporter des ajustements aux dépenses.</li>
                  </ul>
                  <p>Amusons-nous maintenant avec quelques exemples.</p>

                  <hr>

                  <h2>Comparaison des données</h2>
                  <p>Il est essentiel de porter une attention particulière et soutenue à votre budget parce que les décisions que vous prenez au sein de votre budget peuvent avoir une incidence sur votre secteur, votre direction générale, ou même votre ministère. </p>
                  <p>À la fin de l'année fiscale, vous devez justifier tout déficit ou surplus.</p>
                  <p>D’une part, le fait de dépasser votre budget pourrait causer un déficit, ce qui met beaucoup de pression sur la haute direction de trouver d'autres sources de financement pour compenser.</p>
                  <p>D’autre part, un surplus devrait être signalé le plus tôt possible sans quoi on pourrait manquer l’occasion de réaffecter les fonds inutilisés à une autre activité ou à une autre unité.</p>
                  <p>Les rapports mensuels vous aident à suivre vos dépenses. On les appelle parfois “ Rapports sur la situation financière” - ou RSF - et sont habituellement produits par l’unité des Finances de votre organisation. </p>
                  <p>Ce qui se trouve dans votre RSF doit refléter ce qui se passe dans votre unité. Si ce n’est pas le cas, vous devez faire un suivi afin de résoudre cet écart.</p>
                  <p>Dans la prochaine activité, vous aurez l’occasion de réviser et d’ajuster vos données financières selon les nouvelles informations.</p>

                  <hr>

                  <h2>Procédures de fin d’année</h2>
                  <p>Étant donné que la plupart des budgets sont établis par le Parlement sur une base annuelle et qu’ils doivent être utilisés au cours de l'exercice financier, les biens et services doivent être reçus au plus tard le 31 mars. </p>
                  <p>Il est toutefois fort probable que vous ne soyez pas en mesure de compléter le paiement de toutes vos dépenses avant la fin de l'exercice financier. C'est pourquoi l’unité des Finances vous demandera d'établir des créditeurs à la fin de l'exercice (CAFE) ou des débiteurs à la fin de l'exercice (DAFE) après avoir reçu votre liste de payables non réglés. </p>
                  <p>Un CAFE est un montant dû pour des biens et/ou des services fournis dans l’année financière précédente, en se servant des fonds de l’année financière précédente, mais payés dans la nouvelle année financière alors qu’on aura reçu la facture du fournisseur. </p>
                  <p>Un DAFE est un montant dû d’un autre ministère pour des biens et/ou des services fournis dans l’année financière précédente pour lesquels le paiement sera fait dans la nouvelle année financière. </p>
                  <p>D’habitude, encore une fois selon les pratiques courantes au sein de votre ministère, vous recevrez des instructions de fin d'année pour l’établissement des CAFE et des DAFE. Ces instructions incluront aussi les critères quant au montant minimal requis et à l'échéancier. </p>
                  <p>Lorsqu’on s’approche de la fin de l’année financière, les choses peuvent se compliquer un peu en ce qui a trait aux contrats. Voici deux choses à tenir à l’esprit.</p>
                  <ol>
                    <li>Portez attention aux délais fixés par le service d’approvisionnement. Il se peut que vous ne puissiez pas créer de commande d'achat en fin d'année. </li>
                    <li>Faites un suivi auprès des fournisseurs pour vous assurer que les biens ou services seront livrés avant la fin de l'année. Si le fournisseur n'est pas en mesure de livrer avant le 31 mars, discutez des étapes possibles avec le service d’approvisionnement. </li>
                  </ol>

                  <hr>

                  <h2>Quiz</h2>
                  <p>Maintenant que vous savez comment engager des dépenses, autoriser des engagements, exercer des pouvoirs financiers, et puis surveiller et contrôler les finances, voyons ce dont vous vous souvenez en répondant à ce petit quiz!</p>

                  <h2>Section complétée</h2>

                </span>
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
      <ul id="bar" ref="linkBar">
        <li  v-for="(item,index) in navBarTracks" :class="'chaptersLink '+ isItPlaying(index)">
          <p>{{ item }}</p><br>
          <a href="#mainPlayer" @click="seek" class="playButton" :key="index" :data-start="Math.ceil(startTime[index]+0.5)+.01" :data-end="endTime[index]"><img src="~/assets/VideoIcon.svg" :data-start="Math.ceil(startTime[index]+0.5)+.01" :data-end="endTime[index]"  :alt="$t('playIcon')"  width="48" height="48"   :title="$t('playSegment') + ' - ' +navBarTracks[index]"><span class="v-inv">{{$t('playSegment')}}: {{navBarTracks[index]}}</span></a>
          <a href="javascript:" class="activityButton" @click="accessibleModal(index)" :title="$t('jumpModalParts') + ' - ' +navBarTracks[index]"><img src="~/assets/ActivityIcon.svg" alt="" width="48" height="48"> </a>
        </li>
      </ul>
      <div v-if="false"><span>currentFrame :{{currentFrame}}</span><br><span>startTime : {{startTime}}</span><br>
        <span>endTime : {{endTime}}</span><br>
        <span>isPlayingNow : {{ isPlayingNow}}</span> FPS: <span>{{ byFrame }}</span><br>
        <span v-for="(segments, index) in hasPlayed">HP {{ hasPlayed }}P: {{ segments }}</span></div>
    </section>
    <section>
      <b-modal no-stacking id="ContinuousMonitoring" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-title><img src="~/assets/ActivityIcon.svg" alt="" width="32" height="32"> {{$t('ContinuousMonitoringTitle')}}</template>
    <ContinuousMonitoring />
        </b-modal>
      <b-modal id="DataComparison" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-title><img src="~/assets/ActivityIcon.svg" alt="" width="32" height="32"> {{$t('DataComparisonTitle')}}</template>
        <DataComparison />
      </b-modal>
      <b-modal id="YearEndProcedures" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-title><img src="~/assets/ActivityIcon.svg" alt="" width="32" height="32"> {{$t('YearEndProceduresTitle')}}</template>
        <YearEndProcedures />
      </b-modal>
      <b-modal id="spendQuizModal" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-title><img src="~/assets/ActivityIcon.svg" alt="" width="32" height="32"> {{$t('TakeTheQuiz')}}</template>
        <spendQuiz />
      </b-modal>
    </section>
    <div class="bottomNav spendSection">
      <div class="spendSectionBar"><span>{{$t('spendSectionBar')}}</span></div>
      <microlearning path="spendKey" size="140" completion="100" imagePath="KeyMessS.png" :text="$t('KeyMessages')" />
      <microlearning path="spendPart1"  imagePath="InitiateAuthSpending.svg" size="140" time="20" completion="80" :text="$t('InitiateAuthorizeSpending')" />
      <microlearning path="spendPart2" imagePath="ExerciseFinancialAuthority.svg" size="140" time="20" completion="80" :text="$t('ExerciseFinancialAuthority')" />
      <microlearning path="spendPart3" youAreHere size="140" ime="20" completion="10" imagePath="MonitContFinances.svg" :text="$t('MonitorControlFinances')" />
      <microlearning path="exam2" size="140" time="15" imagePath="S-Test.svg" :text="$t('Test')" :completion="$store.state.spend.allDone"/>
    </div>
  </div>
</template>
<script type="text/javascript">
import microlearning from '~/components/microlearning'
import ContinuousMonitoring from '~/components/slides/spend/spendPart3ContinuousMonitoring'
import DataComparison from '~/components/slides/spend/spendPart3DataComparison'
import YearEndProcedures from '~/components/slides/spend/spendPart3YearEnd'
import spendQuiz from '~/components/slides/spend/spendPart3Quiz'
export default {
  data() {
    return {
      currentFrame: 0,
      accessiblePopup: false,
      modalArray: ["ContinuousMonitoring", "DataComparison", "YearEndProcedures","spendQuizModal"],
      startTime: [],
      endTime: [],
      hasPlayed: {},
      navBarTracks: [],
      isPlayingNow: 0,
      isPlayingSoon: 0,
      byFrame: 0,
      justSeeked: false,
      isItReady: false
    }
  },
  components: {
    microlearning,
    ContinuousMonitoring,
    DataComparison,
    YearEndProcedures,
    spendQuiz
  },
  methods: {
    isReady() { this.isItReady = true },
    generate() {
      const c = this.$refs.videoplayer.textTracks[0].cues
      for (let i = 0; i < c.length; i++) {
        this.navBarTracks.push(c[i].text)
        this.startTime[i] = c[i].startTime
        this.endTime[i] = Math.floor(c[i].endTime)
      }
      this.startTime.push(this.startTime[this.startTime.length - 1])
    },
    resumePlay() {
      if (!this.accessiblePopup) {
        const videoPlayer = this.$refs.videoplayer
        setTimeout(function() { videoPlayer.play(); }, 250)
      }
    },
    accessibleModal(i) {
      this.accessiblePopup = true
      this.$refs.videoplayer.pause()
      this.$bvModal.show(this.modalArray[i])
      // this.$refs.videoplayer.currentTime = this.startTime[i + 1]
    },
    showModal(i) {

      if (!this.$refs.videoplayer.paused) {
        this.$refs.videoplayer.pause()
        if (this.startTime[i + 1]) {
          this.$refs.videoplayer.currentTime = this.startTime[i + 1]
        }
        this.$bvModal.show(this.modalArray[i])
      }

    },
    seek(e) {
      const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
      this.accessiblePopup = false
      this.justSeeked = true
      const videoPlayer = this.$refs.videoplayer
      const timeData = e.target.getAttribute('data-start')
      videoPlayer.pause()
      this.isPlayingSoon = timeData
      if (!iOS) { videoPlayer.currentTime = timeData } else { videoPlayer.currentTime = timeData + 2 }

      this.isPlayingNow = videoPlayer.currentTime
      const isNow = this.isPlayingNow
      this.currentFrame = this.startTime.findIndex(element => element === isNow)
      this.$store.commit('currentPlaying/setSpendPart3',this.currentFrame)
      this.$nextTick(function() {
        setTimeout(function() { videoPlayer.play() }, 250)
        this.justSeeked = false
      })
    },
    resumePosition() {
     const savedPosition = this.startTime[this.$store.state.currentPlaying.spendPart3]
      if (savedPosition) {
        this.$refs.videoplayer.currentTime = savedPosition
      }
    },
    update(e) {
      if (!this.justSeeked) {
        const v = e.target
        this.isPlayingNow = v.currentTime
        const isNow = this.isPlayingNow
        this.hasPlayed = v.played.length
        this.currentFrame = this.endTime.findIndex(element => element > isNow)
       this.$store.commit('currentPlaying/setSpendPart3',this.currentFrame)
        this.byFrame = (this.isPlayingNow - this.isPlayingSoon)
        if ((this.isPlayingNow + this.byFrame) > this.endTime[this.currentFrame]) this.showModal(this.currentFrame)
        this.isPlayingSoon = v.currentTime
      } else { window.alert("seeking") }
    },
    isItPlaying(i) {
      const isNow = this.isPlayingNow
      if (i === this.endTime.findIndex(element => element > isNow)) {
        return 'isPlaying'
      } else { return '' }
    }
  }
}
</script>
<style scoped>

video {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  background: #000;
  cursor: pointer;
}

#mainPlayer {
  width: 60vw;
  margin: auto;
  display: block;
}

#bar {
  display: flex;
  flex-wrap: wrap;
  width: 60vw;
  margin: auto;
  position: relative;
  color: #CCC;
  justify-content: flex-start;
  counter-reset: episode;
}
#bar > li {
  list-style-type:none;
}
#bar > li > p {
  display: inline-block;
  height:2.6em;
}
/*#bar > li.chaptersLink:first-child > a.activityButton { display:none; }*/
/*#bar > li.chaptersLink:nth-child(2) > a.activityButton { display:none; }*/

#bar > li:last-child > a {
  display:none;
}

.chaptersLink {
  position: relative;
  align-content: flex-start;
  text-align: center;
  width: 200px;
  height: 171px;
  overflow: hidden;
  padding: 1.2em 1.5em;
  line-height: 17px;
  color: #575757;
  background-color: #ebebeb;
  background-image: url('~assets/Film_strip.svg');
  background-size: cover;
  border-radius: 2px;
  border: 1px solid #c3bfb6;
  margin: 5px 5px 10px;
  font-weight: bolder;
}


.chaptersLink:before {
  counter-increment: episode;
  content: "0"counter(episode);
  position: absolute;
  background-color: #7d677d;
  height: 2em;
  right: 0px;
  top: 0px;
  border-radius: 0 0 0 30px;
  padding: .1em .25em 0 .5em;
  color: white;
}
.chaptersLink:nth-child(-n+9):before {
  content: "0"counter(episode);
}

.chaptersLink.isPlaying:before {
  background-color: #b54142;
}

.chaptersLink.isPlaying:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background-color: #b54142;
}

.playButton, .activityButton {
  display: inline-block;
  width:58px;
}
.playButton:hover, .activityButton:hover,.playButton:focus, .activityButton:focus {
  /*Insert hover animation here, placeholder for now*/
  opacity:0.8;
}
.playButton{
  left: 20px;
}
.activityButton {
  right: 20px;
}

button.accessibilityButton {
  margin: 5px;
  border-radius: 5px;
}
.spendSection {
  position: relative;
}
.spendSectionBar {
  position: absolute;
  background-color: #cac1ca;
  width: 100vw;
  height: 30px;
  text-align: left;
  left:-15px;
  top:38%;
}
.spendSectionBar span {
  padding:2px 10px 0;
  color: #4d4d4d;
  font-weight: bold;
  background-color: #fff;
  display: inline-block;
  height:100%;
  margin-left:15px;
}
</style>
<i18n>{
  "en":{
  "TakeTheQuiz":"Take the Quiz",
  "DataComparisonTitle":"Activity: Data Comparison",
  "ContinuousMonitoringTitle":"Activity: Continuous Monitoring",
  "YearEndProceduresTitle":"Activity: Year-End Procedures",
  "gotIt":"Continue to next segment",
  "jumpModalParts":"Jump to activity",
  "playSegment":"Play video segment",
  "transcriptText":"",
  "spendSectionBar": "SPEND"
  },
  "fr":{
  "TakeTheQuiz":"Répondez au questionnaire",
  "DataComparisonTitle":"Activité: Comparaison des données",
  "ContinuousMonitoringTitle":"Activité: Suivi continu",
  "YearEndProceduresTitle":"Activité: Procédures de fin d’année",
  "gotIt":"Continuer au segment suivant.",
  "jumpModalParts":"Sauter à l'activité",
  "playSegment":"Faire jouer le segment vidéo",
  "transcriptText":"",
  "spendSectionBar": "DÉPENSES"
  }
  }
</i18n>



