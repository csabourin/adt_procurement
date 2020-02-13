<template>
  <b-container>
    <b-row>
      <b-col>
        <figure style="clear:both;position:relative;background-color: #000;padding: 0 0 2em;">
          <Spinner v-if="!canPlay" />
          <video :id="vId" @waiting="loading" @cuechange="readCaptions" @click="setPlaying" ref="videoplayer" :src="videoUrl" :poster="posterUrl" playsinline @loadedmetadata="resumePosition" @timeupdate="update" @ended="isPaused=!isPaused">
            <track :key="'chap'+$i18n.locale" v-if="chapterFile" kind="chapters" :src="chapterUrl" @load="generate" default="">
            <track :key="'sub'+$i18n.locale" kind="metadata" :src="ccUrl" :srclang="$i18n.locale" label="captions" @cuechange="readCaptions">
          </video>
          <transition name="expand">
            <figcaption class="CC" v-if="CCactive">
              <p aria-live="polite">{{Captions}}</p>
            </figcaption>
          </transition>
          <div ref="video-controls" class="controls" data-state="hidden">
            <progress @click="setTime" ref="progress" :title="Math.ceil(PlayTime)+'%'" :value="PlayTime" min="0" max="100">
              <span class="progress" ref="progress-bar" :style="'width:'+PlayTime+'%'"></span>
            </progress>
            <button class="videoControls" ref="playpause" @click="setPlaying" type="button" :aria-label="isPaused?$t('play'):$t('pause')" :title="isPaused?$t('play'):$t('pause')">
              <font-awesome-icon :icon="isPaused?'play':'pause'" />
            </button>
            <button class="videoControls" ref="backward" @click="goBackwards" type="button" :aria-label="$t('backward')" :title="$t('backward')">
              <font-awesome-icon icon="backward" />
            </button>
            <button class="videoControls" ref="forward" @click="goForward" type="button" :aria-label="$t('forward')" :title="$t('forward')">
              <font-awesome-icon icon="forward" />
            </button>
            <button class="videoControls" ref="mute" @click="isMuted=!isMuted" type="button" :title="isMuted?$t('unmute'):$t('mute')" :aria-label="isMuted?$t('unmute'):$t('mute')">
              <font-awesome-icon :icon="isMuted?'volume-mute':'volume-up'" />
            </button>
            <input id="volumeSlider" type="range" v-model="setVolume" :title="'Volume: '+setVolume+'%'" :aria-label="'Volume: '+setVolume+'%'"><label for="volumeSlider" class="v-inv">Volume</label>
            <!-- <button type="button" data-state="go-fullscreen"><i class="fas fa-compress"></i></button> -->
            <p class="mediaTime">{{isPlayingNow | formatTime}} / {{totalTime | formatTime}}</p>
            <button class="videoControls" :aria-pressed="CCactive" @click="showCC" style="float:right" type="button" :title="(CCactive?$t('hide'):$t('show'))+$t('closedcaptionning')" :aria-label="(CCactive?$t('hide'):$t('show'))+$t('closedcaptionning')">
              <font-awesome-icon :icon="[solidOrRegular,'closed-captioning']" />
            </button>
          </div>
        </figure>
      </b-col>
    </b-row>
    <ul v-if="chapters" class="bar" ref="linkBar">
      <li v-for="(item,index) in navBarTracks" :class="'chaptersLink '+ isItPlaying(index)">
        <p>{{ item }}</p><br>
        <a :href="'#'+vId" @click="seek" class="playButton" :key="index" :data-start="Math.ceil(startTime[index]+0.5)+.01" :data-end="endTime[index]"><img src="~/assets/VideoIcon.svg" :data-start="Math.ceil(startTime[index]+0.5)+.01" :data-end="endTime[index]" :alt="$t('playIcon')" width="48" height="48" :title="$t('playSegment') + ' - ' +navBarTracks[index]"><span class="v-inv">{{$t('playSegment')}}: {{navBarTracks[index]}}</span></a>
        <button v-if="modalArray[index]" class="activityButton" @click.prevent="accessibleModal(index)" :title="$t('jumpModalPartsWP') + ' - ' +navBarTracks[index]"><img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="48" height="48"> </button>
      </li>
    </ul>
    <!-- Used for troublehooting video set debugging to true in data-->
    <div v-if="debugging">
      <span>currentFrame :{{currentFrame}}</span><br><span>startTime : {{startTime}}</span><br>
      <span>endTime : {{endTime}}</span><br>
      <span>isPlayingNow : {{ isPlayingNow}}</span> FPS: <span>{{ byFrame }}</span><br>
      <span v-for="(segments, index) in hasPlayed">HP {{ hasPlayed }}P: {{ segments }}</span>
    </div>
    <!-- Used for troublehooting video -->
  </b-container>
</template>
<script type="text/javascript">
import Spinner from "~/components/icons/Spinner"
export default {
  components: {
    Spinner
  },
  props: {
    vId: { type: String, default: 'mainPlayer' },
    restartAt: { type: Number, default: 0 },
    toResume: { type: String, default: 'setHomepage' },
    chapters: { type: Boolean, default: false },
    enVideoFile: { type: String, required: true, default: 'IntroVideoPrototype.mp4' },
    frVideoFile: { type: String, required: true, default: 'IntroVideoPrototype.mp4' },
    posterFile: { type: String, default: 'video_poster.PNG' },
    chapterFile: { type: String, default: '' },
    ccFile: { type: String, default: '' },
    modalArray: { type: Array, default () { return [] } }
  },
  data() {
    return {
      debugging: false,
      setVolume: this.$store.state.currentPlaying.volume,
      oldVolume: this.$store.state.currentPlaying.volume,
      isMuted: false,
      isPaused: true,
      ready: false,
      canPlay: false,
      PlayTime: 0,
      playToPercent: 0,
      totalTime: 0,
      CCactive: false,
      videoUrl: this.$i18n.locale == 'en' ? this.enVideoFile:this.frVideoFile,
      posterUrl: require('~/assets/' + this.$i18n.locale + '/' + this.posterFile),
      currentFrame: 0,
      accessiblePopup: false,
      startTime: [],
      endTime: [],
      hasPlayed: {},
      navBarTracks: [],
      isPlayingNow: 0,
      isPlayingSoon: 0,
      byFrame: 0,
      justSeeked: false,
      Captions: ""
    }
  },
  filters: {
    formatTime(time) {
      let minutes = Math.floor(time / 60),
        seconds = Math.floor(time - minutes * 60),
        minuteValue, secondValue

      if (minutes < 10) {
        minuteValue = "0" + minutes;
      } else {
        minuteValue = minutes;
      }

      if (seconds < 10) {
        secondValue = "0" + seconds;
      } else {
        secondValue = seconds;
      }

      return minuteValue + ":" + secondValue
    }
  },
  computed: {
    solidOrRegular() {
      return this.CCactive ? 'far' : 'fas'
    },
    ccUrl() {
      if (this.ccFile) {
        return require('~/assets/' + this.$i18n.locale + '/' + this.ccFile)
      }
    },
    chapterUrl() {
      if (this.chapterFile) {
        return require('~/assets/' + this.$i18n.locale + '/' + this.chapterFile)
      }
    },
    trackNumber() {
      if (this.chapters) { return 1 } else { return 0 }
    }
  },
  watch: {
    playToPercent(newValue) {
      this.$emit('timeupdate', newValue)
    },
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
      this.$store.commit('currentPlaying/setVolume', volume)
    }
  },
  methods: {
    loading() {
      this.canPlay = false
    },
    readCaptions(e) {
      const v = e.target.parentNode
      const tt = v.textTracks[this.trackNumber]
      const cuesThere = tt.activeCues
      if (cuesThere.length > 0) { this.Captions = tt.activeCues[0].text } else { this.Captions = "" }

    },
    showCC() {
      this.CCactive = !this.CCactive
      this.$store.commit('currentPlaying/setShowCC', this.CCactive)
      if (this.CCactive) {
        this.$refs.videoplayer.textTracks[this.trackNumber].mode = "showing"
      } else {
        this.$refs.videoplayer.textTracks[this.trackNumber].mode = "hidden"
      }
    },
    generate() {
      this.$nextTick(() => {
        this.navBarTracks=[]
        const c = this.$refs.videoplayer.textTracks[0].cues
        for (let i = 0; i < c.length; i++) {
          this.navBarTracks.push(c[i].text)
          this.startTime[i] = c[i].startTime
          this.endTime[i] = Math.floor(c[i].endTime)
          this.startTime.push(this.startTime[this.startTime.length - 1])
        }
      })
      this.resumePosition()
    },
    resumePlay() {
      if (!this.accessiblePopup) {
        const videoPlayer = this.$refs.videoplayer
        setTimeout(function() { videoPlayer.play(); }, 250)
      }
    },
    accessibleModal(i) {
      const videoPlayer = this.$refs.videoplayer
      this.accessiblePopup = true
      videoPlayer.pause()
      this.$bvModal.show(this.modalArray[i])
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
      this.ready = false
      const videoPlayer = this.$refs.videoplayer
      const timeData = e.target.getAttribute('data-start')
      videoPlayer.pause()
      this.isPlayingSoon = timeData
      if (!iOS) { videoPlayer.currentTime = timeData } else { videoPlayer.currentTime = timeData + 2 }
      this.isPlayingNow = videoPlayer.currentTime
      const isNow = this.isPlayingNow
      this.currentFrame = this.startTime.findIndex(element => element === isNow)
      this.$store.commit('currentPlaying/' + this.toResume, this.currentFrame)
      this.$nextTick(function() {
        this.isPaused = false
        setTimeout(function() {
          videoPlayer.play()
        }, 250)
        this.justSeeked = false

      })
    },
    resumePosition() {
      this.canPlay = true
      this.totalTime = this.$refs.videoplayer.duration
      this.$refs.videoplayer.volume = this.setVolume / 100
      const savedPosition = this.startTime[this.restartAt]
      if (savedPosition) {
        this.$refs.videoplayer.currentTime = savedPosition
      }
    },
    update(e) {
      let currentTime = e.target.currentTime
      let duration = e.target.duration
      this.canPlay = true
      this.PlayTime = (currentTime / duration) * 100
      this.playToPercent = 10 * (parseInt(Math.ceil(this.PlayTime / 10)))
      if (!this.justSeeked) {
        const v = e.target
        v.volume = this.setVolume / 100
        this.isPlayingNow = v.currentTime
        const isNow = this.isPlayingNow
        this.hasPlayed = v.played.length
        this.currentFrame = this.endTime.findIndex(element => element > isNow)
        this.$store.commit('currentPlaying/' + this.toResume, this.currentFrame)
        this.byFrame = (this.isPlayingNow - this.isPlayingSoon)
        if ((this.isPlayingNow + this.byFrame) > this.endTime[this.currentFrame]) this.showModal(this.currentFrame)
        this.isPlayingSoon = v.currentTime
      }
    },
    isItPlaying(i) {
      const isNow = this.isPlayingNow
      if (i === this.endTime.findIndex(element => element > isNow)) {
        return 'isPlaying'
      } else { return '' }
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
    goBackwards() {
      const video = this.$refs.videoplayer
      if (this.isPlayingNow) {
        if (this.isPlayingNow - 20 >= 0) { video.currentTime -= 20 } else { video.currentTime = 0 }
      }
    },
    goForward() {
      const video = this.$refs.videoplayer
      if (this.isPlayingNow) {
        if (this.isPlayingNow + 20 < this.totalTime) { video.currentTime += 20 } else { video.currentTime = this.totalTime - 2 }
      }
    },
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
  "forward":"Forward 10 s.",
  "backward":"Rewind 10 s.",
  "mute":"Mute",
  "unmute":"Unmute",
  "show":"Show ",
  "hide":"Hide ",
  "closedcaptionning":"Closed Captions",
  "jumpModalPartsWP":"Jump to activity",
  "playSegment":"Play video segment"
  },
  "fr":{
  "play":"Jouer",
  "pause":"Pause",
  "forward":"Avancer 10 s.",
  "backward":"Reculer 10 s.",
  "mute":"Désactiver le son",
  "unmute":"Activer le son",
  "show":"Afficher le ",
  "hide":"Cacher le ",
  "closedcaptionning":"sous-titrage codé",
  "jumpModalPartsWP":"Sauter à l’activité",
  "playSegment":"Faire jouer le segment vidéo"
  }
  }
</i18n>
<style type="text/css" scoped>
video {
  /*box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);*/
  background: #transparent;
  cursor: pointer;
}

.mediaTime {
  color: #fff;
  background-color: #000;
  float: left;
  position: relative;
  display: inline-block;
  padding: .5em;

}

.bar {
  counter-reset: WPepisode;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  position: relative;
  color: #CCC;
  justify-content: flex-start
}

.bar>li {
  list-style-type: none;
}

.bar>li>p {
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
  height: min-content;
  background-color: transparent;
  float: none;
}

.playButton:hover,
.activityButton:hover,
.playButton:focus,
.activityButton:focus {
  /*Insert hover animation here, placeholder for now*/
  opacity: 0.8;
  background-color: transparent;
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

.CC {
  height: 4em;
  padding: .5em;
  padding-top: 1.5em;
  background-color: #000;
  color: #FFF;
  font-family: sans-serif;
  text-align: center;
  width: 100%;

}

.expand-enter-active,
.expand-leave-active {
  transition: all 1s ease;
  padding: 0 10px;
  overflow: hidden;
  max-height: 15em;
}

/* .expand-enter defines the starting state for entering */
/* .expand-leave defines the ending state for leaving */
.expand-enter,
.expand-leave-to {
  height: 0px;
  padding: 0 10px;
  opacity: 0;
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
  background: #000;
  background-clip: padding-box;
  border: 2px solid #4d4d4d;
  color: #b54142;
  display: block;
  left: 0;
  padding: 2px;
  position: relative;
  clear: both;
  top: 0;
  width: 100%
}

.videoControls {
  margin: .5em 1em;
  background-color: #000;
  color: #fff;
}

.videoControls:hover,
.videoControls:focus {
  color: #6d6d6d;
}

.videoControls:active {
  color: #b54142;

}


progress::-moz-progress-bar {
  background: -moz-linear-gradient(45deg, transparent, transparent 33%, rgba(0, 0, 0, 0.1) 33%, rgba(0, 0, 0, 0.1) 66%, transparent 66%);
  background: linear-gradient(45deg, transparent, transparent 33%, rgba(0, 0, 0, 0.1) 33%, rgba(0, 0, 0, 0.1) 66%, transparent 66%);
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.25), rgba(0, 0, 0, 0.2));
  border-radius: 50px;
  background-color: #b54142;
  background-image: (45deg, transparent, transparent 33%, rgba(0, 0, 0, 0.1) 33%, rgba(0, 0, 0, 0.1) 66%, transparent 66%), (to right, #bc1339, #4a0000);
  background-size: 25px 14px, 100% 100%, 100% 100%;
}

.progress {
  height: 14px
}

progress {
  width: 100%;
  height: 14px;
  margin: 0 auto;
  display: block;
  /* Important Thing */
  -webkit-appearance: none;
  border: none;
  border-bottom: 1px solid #4d4d4d;
}

progress::-webkit-progress-bar {
  background: #000;
  border-radius: 50px;
  padding: 2px;
}

progress::-webkit-progress-value {
  border-radius: 50px;
  background:
    linear-gradient(45deg, transparent, transparent 33%, rgba(0, 0, 0, 0.1) 33%, rgba(0, 0, 0, 0.1) 66%, transparent 66%),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.25), rgba(0, 0, 0, 0.2)),
    linear-gradient(to right, #b54142, #b54142);
  background-size: 25px 14px, 100% 100%, 100% 100%;
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
  width: 40px;
  cursor: pointer;
}

input[type=range] {
  float: left;
}

/*button:hover,
button:focus {
  background-color: #ddd;
}

button:active {
  background-color: #ccc;
}*/

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
