<template>
  <b-container>
  <b-row>
    <b-col>
      <script src="https://kit.fontawesome.com/e5ee1a6fb9.js" crossorigin="anonymous"></script>
      <figure style="clear:both;position:relative;">
        <video ref="videoplayer" :src="videoUrl" :poster="posterUrl" playsinline @loadeddata="resumePosition" @timeupdate="update">
          <!-- <track kind="chapters" :src="require('~/assets/'+ $i18n.locale +'/chapters.vtt')" default=""> -->
          <track kind="chapters" :src="chapterUrl" @load="generate" default="">
        </video>
        <transition name="expand">
          <div class="CC" v-if="CCactive"></div>
        </transition>
        <div ref="video-controls" class="controls" data-state="hidden">
          <progress @click="setTime" ref="progress" :value="PlayTime" min="0" max="100">
            <span ref="progress-bar" :style="'width:'+PlayTime+'%'"></span>
          </progress>
          <button ref="playpause" @click="setPlaying" type="button" data-state="play" :aria-label="isPaused?$t('play'):$t('pause')" :title="isPaused?$t('play'):$t('pause')"><i :class="{'fas fa-play':isPaused,'fas fa-pause':!isPaused}"></i></button>
          <button ref="mute" @click="isMuted=!isMuted" type="button" data-state="mute" :title="'Volume: '+setVolume+'%'"><i :class="{'fas fa-volume-mute':isMuted,'fas fa-volume-up':!isMuted}" /></button>
          <input type="range" v-model="setVolume" :title="'Volume: '+setVolume+'%'" :aria-label="'Volume: '+setVolume+'%'">
          <!-- <button type="button" data-state="go-fullscreen"><i class="fas fa-compress"></i></button> -->
          <button @click="showCC" style="float:right" type="button" :title="$t('closedcaptionning')" :aria-label="$t('closedcaptionning')"><i class="fas fa-closed-captioning"></i></button>
        </div>
      </figure>
    </b-col>
  </b-row>
    <ul id="bar" ref="linkBar">
      <li v-for="(item,index) in navBarTracks" :class="'chaptersLink '+ isItPlaying(index)">
        <p>{{ item }}</p><br>
        <a href="#mainPlayer" @click="seek" class="playButton" :key="index" :data-start="Math.ceil(startTime[index]+0.5)+.01" :data-end="endTime[index]"><img src="~/assets/VideoIcon.svg" :data-start="Math.ceil(startTime[index]+0.5)+.01" :data-end="endTime[index]" :alt="$t('playIcon')" width="48" height="48" :title="$t('playSegment') + ' - ' +navBarTracks[index]"><span class="v-inv">{{$t('playSegment')}}: {{navBarTracks[index]}}</span></a>
        <a href="javascript:" class="activityButton" @click="accessibleModal(index)" :title="$t('jumpModalPartsWP') + ' - ' +navBarTracks[index]"><img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="48" height="48"> </a>
      </li>
    </ul>
    <div v-if="debugging">
      <!-- Used for troublehooting video -->
      <span>currentFrame :{{currentFrame}}</span><br><span>startTime : {{startTime}}</span><br>
      <span>endTime : {{endTime}}</span><br>
      <span>isPlayingNow : {{ isPlayingNow}}</span> FPS: <span>{{ byFrame }}</span><br>
      <span v-for="(segments, index) in hasPlayed">HP {{ hasPlayed }}P: {{ segments }}</span></div>
  </b-row>
</b-container>
</template>
<script type="text/javascript">
export default {
  props: {
    videoFile: { type: String, default: 'IntroVideoPrototype.mp4' },
    posterFile: { type: String, default: 'video_poster.PNG' },
    chapterFile: { type: String, default: 'chapters.vtt' },
    ccFile: { type: String, default: 'chapters.vtt' },
    modalArray: { type: Array, default () { return [] } }
  },
  data() {
    return {
      debugging: false,
      setVolume: 100,
      oldVolume: 100,
      isMuted: false,
      isPaused: true,
      ready: false,
      PlayTime: 0,
      CCactive: false,
      videoUrl: require('~/assets/' + this.$i18n.locale + '/' + this.videoFile),
      posterUrl: require('~/assets/' + this.$i18n.locale + '/' + this.posterFile),
      ccUrl: require('~/assets/' + this.$i18n.locale + '/' + this.ccFile),
      currentFrame: 0,
      accessiblePopup: false,
      startTime: [],
      endTime: [],
      hasPlayed: {},
      navBarTracks: [],
      isPlayingNow: 0,
      isPlayingSoon: 0,
      byFrame: 0,
      justSeeked: false
    }
  },
  computed: {
    chapterUrl() {
      if (this.chapterFile) {
        return require('~/assets/' + this.$i18n.locale + '/' + this.chapterFile)
      }
    }
  },
  watch: {
    isMuted() {
      const video = this.$refs.videoplayer
      if (this.isMuted) {
        this.oldVolume = this.setVolume
        this.setVolume = 0
        video.muted = true

      } else {
        video.muted = false
        this.setVolume = this.oldVolume
        video.volume = this.setVolume / 100
      }
    },
    setVolume(volume) {
      const video = this.$refs.videoplayer
      if (volume == 0) {
        this.isMuted = true
      } else {
        this.isMuted = false
        video.volume = (volume / 100)
        this.oldVolume = this.setVolume
      }
    }
  },
  methods: {
    generate() {
      this.$nextTick(() => {
        const c = this.$refs.videoplayer.textTracks[0].cues
        for (let i = 0; i < c.length; i++) {
          this.navBarTracks.push(c[i].text)
          this.startTime[i] = c[i].startTime
          this.endTime[i] = Math.floor(c[i].endTime)
          this.startTime.push(this.startTime[this.startTime.length - 1])
        }
      })
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
      this.$store.commit('currentPlaying/setBuildWP', this.currentFrame)
      this.$nextTick(function() {
        setTimeout(function() { videoPlayer.play() }, 250)
        this.justSeeked = false
      })
    },
    resumePosition() {
      const savedPosition = this.startTime[this.$store.state.currentPlaying.buildWP]
      if (savedPosition) {
        this.$refs.videoplayer.currentTime = savedPosition
      }
    },
    update(e) {
      let currentTime = this.$refs.videoplayer.currentTime
      let duration = this.$refs.videoplayer.duration
      this.PlayTime = (currentTime / duration) * 100
      if (!this.justSeeked) {
        const v = e.target
        this.isPlayingNow = v.currentTime
        const isNow = this.isPlayingNow
        this.hasPlayed = v.played.length
        this.currentFrame = this.endTime.findIndex(element => element > isNow)
        this.$store.commit('currentPlaying/setBuildWP', this.currentFrame)
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
    },
    showCC() {
      this.CCactive = !this.CCactive
    },
    stopVideo() {
      const video = this.$refs.videoplayer

    },

    setTime(e) {
      const video = this.$refs.videoplayer
      var pos = (e.pageX - (this.$refs.progress.getBoundingClientRect().left)) / this.$refs.progress.offsetWidth;
      video.currentTime = pos * video.duration;

    },
    isReady() { this.ready = true },
    setPlaying() {
      this.isPaused = !this.isPaused
      if (!this.isPaused) {
        this.$refs.videoplayer.play()
      } else {
        this.$refs.videoplayer.pause()
      }
    }
  }
}

</script>
<i18n>
  {
  "en":{
  "play":"Play",
  "pause":"Pause",
  "closedcaptionning":"Closed Captions",
  "jumpModalPartsWP":"Jump to activity",
  "playSegment":"Play video segment"
  },
  "fr":{
  "play":"Jouer",
  "pause":"Pause",
  "closedcaptionning":"Sous-titrage codé",
  "jumpModalPartsWP":"Sauter à l'activité",
  "playSegment":"Faire jouer le segment vidéo"
  }
  }
</i18n>
<style type="text/css" scoped>
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
  counter-reset: WPepisode;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  position: relative;
  color: #CCC;
  justify-content: flex-start
}

#bar>li {
  list-style-type: none;
}

#bar>li>p {
  display: inline-block;
  height: 2.6em;
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
  counter-increment: WPepisode;
  content: counter(WPepisode);
  position: absolute;
  background-color: #587C84;
  height: 2em;
  right: 0px;
  top: 0px;
  border-radius: 0 0 0 30px;
  padding: .1em .25em 0 .5em;
  color: white;
}

.chaptersLink:nth-child(-n+9):before {
  content: "0"counter(WPepisode);
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

.playButton,
.activityButton {
  display: inline-block;
  width: 58px;
}

.playButton:hover,
.activityButton:hover,
.playButton:focus,
.activityButton:focus {
  /*Insert hover animation here, placeholder for now*/
  opacity: 0.8;
}

.playButton {
  left: 20px;
}

.activityButton {
  right: 20px;
}

button.accessibilityButton {
  margin: 5px;
  border-radius: 5px;
}

.expand-enter-active,
.expand-leave-active {
  transition: all 1s ease;
  padding: .5em;
  overflow: hidden;
}

/* .expand-enter defines the starting state for entering */
/* .expand-leave defines the ending state for leaving */
.expand-enter,
.expand-leave-to {
  height: 0;
  padding: 0 10px;
  opacity: 0;
}

.CC {
  height: 4em;
  padding: .5em;
  background-color: #000;
  color: #FFF;
  font-family: sans-serif;
  text-align: center;
  width: 100%;

}

input[type=range] {
  -webkit-appearance: none;
  background: 0 0;
  display: inline-block;
  height: 2.5em;
  padding: 0;
  width: 7em;
}

input[type=range]:focus {
  outline-offset: 0
}

input[type=range]::-webkit-slider-runnable-track {
  background: #aaa;
  height: 4px
}

input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  background: #fff;
  border: 1px solid #707070;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  height: 1.3em;
  margin-top: -9px;
  width: 10px
}

input[type=range]::-moz-range-track {
  background: #aaa;
  border: 0
}

input[type=range]::-moz-range-thumb {
  background: #fff;
  border: 1px solid #707070;
  border-radius: 0;
  height: 1.3em;
  width: 10px
}

input[type=range]::-ms-track {
  border: 0;
  color: transparent;
  height: 4px
}

input[type=range]::-ms-fill-upper {
  background: #aaa
}

input[type=range]::-ms-fill-lower {
  background: #aaa
}

input[type=range]::-ms-thumb {
  background: #fff;
  border: 1px solid #707070;
  height: 1.3em;
  width: 10px
}

.fd-slider {
  display: inline-block;
  height: 100%;
  margin-top: 10px;
  width: 7em
}

.fd-slider-handle {
  background: #fff;
  border: 1px solid #707070;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  width: 10px
}

progress {
  -webkit-appearance: none;
  background: #fff;
  background-clip: padding-box;
  border: 2px solid #4d4d4d;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  border-radius: 0px 0px 4px 4px;
  color: #587C84;
  display: block;
  height: 30px;
  left: 0;
  padding: 2px;
  position: relative;
  clear: both;
  top: 0;
  width: 100%
}


progress::-webkit-progress-bar {
  background: #fff
}

progress::-webkit-progress-value {
  background: #587C84;
  border-radius: 1px
}

progress::-moz-progress-bar {
  background: #587C84;
  border-radius: 1px
}

.progress {
  height: 22px
}


.player {
  width: 480px;
  margin: 10px auto;
  border: 1px solid #ccc;
}

video,
audio,
.controls {
  width: 100%;
}

.controls {
  height: 36px;
}

button {
  display: block;
  float: left;
  border: 0;
  margin-right: 2px;
  height: 100%;
  width: 50px;
  cursor: pointer;
}

input[type=range] {
  float: left;
}

button:hover,
button:focus {
  background-color: #ddd;
}

button:active {
  background-color: #ccc;
}

.controls div {
  font-size: 12px;
  display: inline-block;
  line-height: 36px;
  width: 45px;
  float: right;
}

video {
  margin-bottom: -5px;
}

</style>
