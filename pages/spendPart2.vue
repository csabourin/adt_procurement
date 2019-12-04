<template>
  <div>
    <h1 class="pageTitle" v-html="$t('ExerciseFinancialAuthority')" />
    
    <section>
      <video ref="videoplayer" id="mainPlayer" :poster="require('~/assets/'+ $i18n.locale +'/S32Part1Poster.jpg')" :src="require('~/assets/'+ $i18n.locale +'/S32Part1.mp4')" controls playsinline @loadeddata="resumePosition" @timeupdate="update" @canplaythrough="isReady">
        <track :src="require('~/assets/'+ $i18n.locale +'/SpendPart2.vtt')" kind="chapters" default="" @load="generate">
      </video>
      <div role="tablist" class="transcriptionBox">
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block href="#" v-b-toggle.cbTranscript-1 variant="light">{{$t('transcript')}}</b-button>
          </b-card-header>
          <b-collapse id="cbTranscript-1" role="tabpanel">
            <b-card-body>
              <b-card-text>
                <button class="accessibilityButton" v-for="(tracks, index) in navBarTracks" :key="index" @click="accessibleModal(index)">{{$t('jumpModalParts') + ' - ' +navBarTracks[index]}}</button>
                <span v-if="$i18n.locale=='en'"></span>
                <span v-if="$i18n.locale=='fr'"></span>
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
      <ul id="bar" ref="linkBar">
        <li href='#mainPlayer' v-for="(item,index) in navBarTracks" :class="'chaptersLink '+ isItPlaying(index)">
          <p>{{ item }}</p><br>
          <a href="#mainPlayer" class="playButton" :key="index"  ><img src="~/assets/VideoIcon.svg"  width="48" height="48" :data-start="Math.ceil(startTime[index]+0.5)+.01" :data-end="endTime[index]" @click="seek" :title="$t('playSegment') + ' - ' +navBarTracks[index]"></a>
          <a href="javascript:" class="activityButton" @click="accessibleModal(index)" :title="$t('jumpModalParts') + ' - ' +navBarTracks[index]"><img src="~/assets/ActivityIcon.svg" width="48" height="48"> </a>
        </li>
      </ul>
      <div v-if="false"><span>currentFrame :{{currentFrame}}</span><br><span>startTime : {{startTime}}</span><br>
        <span>endTime : {{endTime}}</span><br>
        <span>isPlayingNow : {{ isPlayingNow}}</span> FPS: <span>{{ byFrame }}</span><br>
        <span v-for="(segments, index) in hasPlayed">HP {{ hasPlayed }}P: {{ segments }}</span></div>
    </section>
    <section>
      <b-modal no-stacking id="CertificationAuthority" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-title><img src="~/assets/ActivityIcon.svg" width="32" height="32"> {{$t('CertAuthorityTitle')}}</template>
    <CertificationAuthority />
        </b-modal>
      <b-modal id="AccuracyOfInvoice" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-title><img src="~/assets/ActivityIcon.svg" width="32" height="32"> {{$t('delegateAuthority')}}</template>
        <AccuracyInvoice />
      </b-modal>
      <b-modal id="ProcessingInvoice" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-title><img src="~/assets/ActivityIcon.svg" width="32" height="32"> {{$t('forecastBudgetTitle')}}</template>
        <spendMechanisms />
      </b-modal>
    </section>
    <div class="bottomNav spendSection">
      <microlearning path="spendKey" size="140" completion="100" imagePath="KeyMessS.png" :text="$t('KeyMessages')" />
      <microlearning path="spendPart1"  imagePath="InitiateAuthSpending.svg" size="140" time="20" completion="80" :text="$t('InitiateAuthorizeSpending')" />
      <microlearning path="spendPart2" youAreHere imagePath="ExerciseFinancialAuthority.svg" size="140" time="20" completion="80" :text="$t('ExerciseFinancialAuthority')" />
      <microlearning path="spendPart3" size="140" ime="20" completion="10" imagePath="MonitContFinances.svg" :text="$t('MonitorControlFinances')" />
      <microlearning size="140" time="15" tmp_imagePath="TestPlan.png" :text="$t('Test')" />
    </div>
  </div>
</template>
<script type="text/javascript">
import microlearning from '~/components/microlearning'
import CertificationAuthority from '~/components/Spend2CertificationAuthority'
import spendMechanisms from '~/components/spendMechanisms'
import delegAuthority from '~/components/delegAuthority'
import spendS32tryIt from '~/components/spendS32tryIt'
import AccuracyInvoice from '~/components/Spend2AccuracyInvoice'
import budgetQuiz from '~/components/budgetQuiz'
import RecordingFinancialSystem from '~/components/RecordingFinancialSystem'
export default {
  data() {
    return {
      currentFrame: 0,
      accessiblePopup: false,
      modalArray: ["CertificationAuthority", "AccuracyOfInvoice", "spendMechanisms", "RecordingFinancialSystem","spendS32tryIt"],
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
    AccuracyInvoice,
    CertificationAuthority,
    spendMechanisms,
    budgetQuiz,
    RecordingFinancialSystem
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
      localStorage.setItem("CreateBudgetCurrentPlaying", this.currentFrame)
      this.$nextTick(function() {
        setTimeout(function() { videoPlayer.play() }, 250)
        this.justSeeked = false
      })
    },
    resumePosition() {
      const savedPosition = this.startTime[localStorage.getItem("CreateBudgetCurrentPlaying")]
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
        localStorage.setItem("CreateBudgetCurrentPlaying", this.currentFrame)
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
  width: 175px;
  height: 150px;
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
  padding: .5em .25em 0 1em;
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

</style>
<i18n>{
  "en":{
  "TakeTheQuiz":"Take the Quiz",
  "tryItTitle":"Activity: Try it!",
  "adjustwptitle":"Activity: Adjust the Work plan",
  "delegateAuthority":"Activity: Delegation of Authority",
  "CertAuthorityTitle":"Activity: Certification Authority",
  "forecastBudgetTitle":"Activity: Forecast Budget Requirements",
  "RecordingTitle":"Activity: Recording in the Financial System",
  "gotIt":"Continue to next segment",
  "jumpModalParts":"Jump to activity",
  "playSegment":"Play video segment",
  "transcriptText":""
  },
  "fr":{
  "TakeTheQuiz":"Répondez au questionnaire",
  "completewptitle":"Activité: Compléter le plan de travail",
  "adjustwptitle":"Activité: Ajuster le plan de travail",
  "delegateAuthority":"Activité: Délégation des pouvoirs",
  "CertAuthorityTitle":"Activité: Autorité de certification",
  "tryItTitle":"Activité: Essayons-le!",
  "forecastBudgetTitle":"Activité: Prévoyez vos besoins budgétaires",
  "RecordingTitle":"Activité: Enregistrement dans le système financier",
  "gotIt":"Continuer au segment suivant.",
  "jumpModalParts":"Sauter à l'activité",
  "playSegment":"Faire jouer le segment vidéo",
  "transcriptText":""
  }
  }
</i18n>