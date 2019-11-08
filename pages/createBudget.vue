<template>
  <div>
    <h1 class="pageTitle">
      {{ $t('CreateBudget')}}
    </h1>
    <section>
      <video ref="videoplayer" id="mainPlayer" :poster="require('~/assets/'+ $i18n.locale +'/buildwp.jpg')" :src="require('~/assets/'+ $i18n.locale +'/buildworkplan.mp4')" controls playsinline @loadeddata="resumePosition" @timeupdate="update" @canplaythrough="isReady">
        <track :src="require('~/assets/'+ $i18n.locale +'/BudgetChapters.vtt')" kind="chapters" default="" @load="generate">
      </video>
      <div role="tablist" class="transcriptionBox">
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block href="#" v-b-toggle.accordion-1 variant="light">{{$t('transcript')}}</b-button>
          </b-card-header>
          <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>
                <button class="accessibilityButton" v-for="(tracks, index) in navBarTracks" :key="index" @click="accessibleModal(index)">{{$t('jumpModalPartsWP') + ' - ' +navBarTracks[index]}}</button>
                <span v-if="$i18n.locale=='en'"></span>
                <span v-if="$i18n.locale=='fr'"></span>
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
      <div id="bar" ref="linkBar">
        <a href='#mainPlayer' v-for="(item,index) in navBarTracks" :key="index" :class="'chaptersLink '+ isItPlaying(index)" :data-start="Math.ceil(startTime[index]+0.5)+.01" :data-end="endTime[index]" @click="seek">
          {{ item }}<br>
          <a href="javascript:" class="plusButton" variant="light" pill @click.stop="accessibleModal(index)" :title="$t('jumpModalPartsWP') + ' - ' +navBarTracks[index]">
            <plusIcon iconWidth="28" /> </a>
        </a>
      </div>
      <div v-if="false"><span>currentFrame :{{currentFrame}}</span><br><span>startTime : {{startTime}}</span><br>
        <span>endTime : {{endTime}}</span><br>
        <span>isPlayingNow : {{ isPlayingNow}}</span> FPS: <span>{{ byFrame }}</span><br>
        <span v-for="(segments, index) in hasPlayed">HP {{ hasPlayed }}P: {{ segments }}</span></div>
    </section>
    <section>
      <b-modal no-stacking id="purpose" @hide="resumePlay()" okOnly>{{ $t('gotIt') }}</b-modal>
      <b-modal no-stacking id="alignworkplan" @hide="resumePlay()" size="xl" okOnly>
        <planLinks /><!-- {{ $t('gotIt') }} -->
      </b-modal>
      <b-modal no-stacking id="partsofwp" @hide="resumePlay()" size="xl" okOnly>
        <AnalyzeBudgetKT />
      </b-modal>
      <b-modal no-stacking id="threesixty" @hide="resumePlay()" size="lg" okOnly :title="$t('scan360Title')">
        <test360 />
      </b-modal>
      <b-modal no-stacking id="completedraft" @hide="resumePlay()" size="xl" okOnly :title="$t('completewpDrafttitle')">
        <prepareWorkPlan />
      </b-modal>
      <b-modal no-stacking id="completewp" @hide="resumePlay()" size="xl" okOnly :title="$t('completewptitle')">
        <completeWorkplan />
      </b-modal>
      <b-modal no-stacking id="adjustwp" @hide="resumePlay()" size="xl" okOnly :title="$t('adjustwptitle')">
        <adjustWorkplan />
      </b-modal>
      <b-modal no-stacking id="reallife" @hide="resumePlay()" :title="$t('InRealLife')" okOnly>
        <span v-html="$t('IRLText')"></span>
      </b-modal>
      <b-modal no-stacking id="quiz" @hide="resumePlay()" :title="$t('TakeTheQuiz')" size="xl" okOnly>
        <planQuiz />
      </b-modal>
    </section>
    <div class="bottomNav planSection">
      <microlearning path="planKey" size="140" completion="100" imagePath="KeyMessP.png">
        {{ $t('KeyMessages') }}
      </microlearning>
      <microlearning path="buildWP" imagePath="KeyMessR.png" size="140" time="20" completion="80">
        {{ $t('BuildWorkPlan') }}
      </microlearning>
      <microlearning size="140" youAreHere time="20" completion="10" tmp_imagePath="CreateBud.png">
        {{ $t('CreateBudget') }}
      </microlearning>
      <microlearning size="140" time="15" tmp_imagePath="TestPlan.png">
        {{$t('Test')}}
      </microlearning>
    </div>
  </div>
</template>
<script type="text/javascript">
import microlearning from '~/components/microlearning'
import partsOfWorkPlan from '~/components/parts_workplan'
import planLinks from '~/components/plan_links'
import AnalyzeBudgetKT from '~/components/AnalyzeBudgetKT'
import completeWorkplan from '~/components/complete_workplan'
import adjustWorkplan from '~/components/adjust_workplan'
import test360 from '~/components/test360'
import planQuiz from '~/components/planQuiz'
import plusIcon from '~/components/icons/PlusSign'
export default {
  data() {
    return {
      currentFrame: 0,
      accessiblePopup: false,
      modalArray: ["purpose", "alignworkplan", "partsofwp", "threesixty", "completedraft", "completewp", "adjustwp", "reallife", "quiz"],
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
    planLinks,
    AnalyzeBudgetKT,
    partsOfWorkPlan,
    completeWorkplan,
    adjustWorkplan,
    planQuiz,
    plusIcon
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
      localStorage.setItem("WPCurrentPlaying", this.currentFrame)
      this.$nextTick(function() {
        setTimeout(function() { videoPlayer.play() }, 250)
        this.justSeeked = false
      })
    },
    resumePosition() {
      const savedPosition = this.startTime[localStorage.getItem("WPCurrentPlaying")]
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
        localStorage.setItem("WPCurrentPlaying", this.currentFrame)
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
body {
  counter-reset: episode;
}

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
  cursor: pointer;
  color: #CCC;
  justify-content: space-evenly;
}

.chaptersLink {
  position: relative;
  align-content: flex-start;
  text-align: center;
  height: 150px;
  overflow: hidden;
  padding: 1.5em 1.5em;
  line-height: 17px;
  color: #575757;
  background-color: #ebebeb;
  background-image: url('~assets/Film_strip.svg');
  background-size: cover;
  border-radius: 2px;
  border: 1px solid #c3bfb6;
  margin: 5px 5px 10px;
  font-weight: bolder;
  width: 150px;
}

.chaptersLink:hover {
  color: #06f;
}

.chaptersLink:before {
  counter-increment: episode;
  content: "0"counter(episode);
  position: absolute;
  background-color: #587C84;
  height: 2em;
  right: 0px;
  top: 0px;
  border-radius: 0 0 0 30px;
  padding: .5em .25em 0 1em;
  color: white;

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

.plusButton {
  position: absolute;
  left: 60px;
  bottom: 1.6em;
  width: 36px;
}

button.accessibilityButton {
  margin: 5px;
  border-radius: 5px;
}
</style>
<i18n>{
  "en":{
  "TakeTheQuiz":"Take the Quiz",
  "completewptitle":"Activity: Complete the Work plan",
  "adjustwptitle":"Activity: Adjust the Work plan",
  "scan360Title":"Activity: Apply the 360 scan",
  "completewpDrafttitle":"Activity: Complete the Work Plan Draft",
  "InRealLife":"In Real Life",
  "IRLText":"<strong>Go ahead!</strong> Talk to your colleagues about work plans. Go <strong>now</strong>. ",
  "gotIt":"Continue to next segment",
  "jumpModalPartsWP":"Jump to activity",
  "transcriptText":""
  },
  "fr":{
  "TakeTheQuiz":"Répondez au questionnaire",
  "completewptitle":"Activité: Compléter le plan de travail",
  "adjustwptitle":"Activité: Ajuster le plan de travail",
  "scan360Title":"Activité: Appliquez l'apperçu 360",
  "completewpDrafttitle":"Activité: Compléter l'ébauche du plan de travail",
  "InRealLife":"Dans la vraie vie",
  "IRLText":"<strong>Allez-y!</strong> Parlez à vos collègues des plans de travail. Allez-y <strong>maintenant</strong>.",
  "gotIt":"Continuer au segment suivant.",
  "jumpModalPartsWP":"Sauter à l'activité",
  "transcriptText":""
  }
  }
</i18n>