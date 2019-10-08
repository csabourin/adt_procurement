<template>
  <div>
    <hamburger />
    <h1 class="pageTitle">
      {{ $t('BuildWorkPlan')}}
    </h1>
    <section>
      <video ref="videoplayer" width="800" height="600" :poster="require('~/assets/'+ $i18n.locale +'/buildwp.jpg')" :src="require('~/assets/'+ $i18n.locale +'/buildworkplan.mp4')" controls @timeupdate="update">
        <track :src="require('~/assets/'+ $i18n.locale +'/chapters.vtt')" kind="chapters" default="" @load="generate">
      </video>
      <div><span>oldFrame : {{ oldFrame }}</span> <span>currentFrame :{{currentFrame}}</span></div>
      <div id="bar" ref="linkBar">
        <a href='javascript:' v-for="(item,index) in navBarTracks" :key="index" :class="'chaptersLink '+ isItPlaying(index)" :data-start="startTime[index]" @click="seek">
          {{ item }}
        </a>
      </div>
    </section>
    <section>
      <b-modal id="purpose" @hide="resumePlay()">Purpose of a Work Plan</b-modal>
      <b-modal id="partsofwp" @hide="resumePlay()">Parts of a Work Plan</b-modal>
      <b-modal id="alignworkplan" @hide="resumePlay()">Align you Work Plan</b-modal>
      <b-modal id="threesixty" @hide="resumePlay()">Test 360</b-modal>
      <b-modal id="completedraft" @hide="resumePlay()">Complete Draft</b-modal>
      <b-modal id="completewp" @hide="resumePlay()">Complete WP</b-modal>
      <b-modal id="adjustwp" @hide="resumePlay()">Adjust WP</b-modal>
      <b-modal id="reallife" @hide="resumePlay()">In Real Life</b-modal>
      <b-modal id="quiz" @hide="resumePlay()">Take the quiz</b-modal>
    </section>
    <div class="bottomNav planSection">
      <microlearning path="planKey" size="small" completion="100">
        {{ $t('KeyMessages') }}
      </microlearning>
      <microlearning path="buildWP" size="small" time="20" completion="80">
        {{ $t('BuildWorkPlan') }}
      </microlearning>
      <microlearning size="small" time="20" completion="10">
        {{ $t('CreateBudget') }}
      </microlearning>
      <microlearning size="small" time="15">
        Test
      </microlearning>
    </div>
  </div>
</template>
<script type="text/javascript">
import videoUrl from '~/assets/Slide_2_-_Gov_priorities.mp4'
import hamburger from '~/components/hamburger'
import microlearning from '~/components/microlearning'
export default {
  data() {
    return {
      currentFrame: 0,
      oldFrame: -1,
      videoUrl,
      modalArray: ["purpose", "alignworkplan", "partsofwp", "threesixty","completedraft","completewp","adjustwp","reallife","quiz"],
      startTime: [],
      endTime: [],
      navBarTracks: [],
      isPlayingNow: 0
    }
  },
  components: {
    hamburger,
    microlearning
  },
  methods: {
    resumePlay() {
      const videoPlayer = this.$refs.videoplayer
      setTimeout(function() { videoPlayer.play(); }, 500)
    },
    showModal(i) {
      this.$refs.videoplayer.pause()
      this.$bvModal.show(this.modalArray[i])
    },
    seek(e) {
      const videoPlayer = this.$refs.videoplayer
      videoPlayer.pause()
      this.$refs.videoplayer.currentTime = e.target.getAttribute('data-start')
    },
    generate() {
      const c = this.$refs.videoplayer.textTracks[0].cues
      for (let i = 0; i < c.length; i++) {
        this.navBarTracks.push(c[i].text)
        this.startTime[i] = c[i].startTime
        this.endTime[i] = c[i].endTime
      }
    },
    update(e) {
      if (this.oldFrame != this.currentFrame) {
        this.$refs.videoplayer.pause()
        this.showModal(this.currentFrame)
      }
      this.isPlayingNow = e.target.currentTime
      this.oldFrame = this.currentFrame
    },
    checkpoint(x) {

    },
    isItPlaying(i) {
      const isNow = this.isPlayingNow
      if (i === this.endTime.findIndex(element => element > isNow)) {
        this.currentFrame = i
        return 'isPlaying'
      }
    }
  }
}

</script>
<style>
body {
  counter-reset: episode;
}

video {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  background: #000;
  cursor: pointer;
}

#bar {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  cursor: pointer;
  color: #CCC;
  width: 800px;
}

.chaptersLink {
  display: flex;
  position: relative;
  align-content: middle;
  text-align: center;
  height: 8em;
  overflow: hidden;
  padding: 2em;
  line-height: 14px;
  color: #575757;
  background-color: #ebebeb;
  margin: 5px;
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
  background-color: #608993;
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

</style>
