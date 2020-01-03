<template>
  <b-row>
    <b-col>
      <script src="https://kit.fontawesome.com/e5ee1a6fb9.js" crossorigin="anonymous"></script>
      <figure style="clear:both;position:relative;">
        <video ref="videoplayer" :src="videoUrl" :poster="require('~/assets/'+ $i18n.locale +'/video_poster.PNG')" @timeupdate="lookPlayTime">
          <track v-if="chapterFile" kind="chapters" :src="chapterFile">
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
</template>
<script type="text/javascript">
export default {
  props: {
    videoFile: { type: String, default: 'IntroVideoPrototype.mp4' },
    posterFile: { type: String, default: 'video_poster.PNG' },
    chapterFile: { type: String, default: '' },
    ccFile: { type: String, default: 'chapters.vtt' },
    modalArray: { type: Array, default () { return [] } }
  },
  data() {
    return {
      setVolume: 100,
      oldVolume: 100,
      isMuted: false,
      isPaused: true,
      ready: false,
      PlayTime: 0,
      CCactive: false,
      videoUrl: require('~/assets/' + this.$i18n.locale + '/' + this.videoFile),
      posterUrl: require('~/assets/' + this.$i18n.locale + '/' + this.posterFile),
      ccUrl: require('~/assets/' + this.$i18n.locale + '/' + this.ccFile)
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
    },
    lookPlayTime() {
      let currentTime = this.$refs.videoplayer.currentTime
      let duration = this.$refs.videoplayer.duration
      this.PlayTime = (currentTime / duration) * 100
    }
  }
}

</script>
<i18n>
  {
  "en":{
  "play":"Play",
  "pause":"Pause",
  "closedcaptionning":"Closed Captions"
  },
  "fr":{
  "play":"Jouer",
  "pause":"Pause",
  "closedcaptionning":"Sous-titrage codé"
  }
  }
</i18n>
<style type="text/css" scoped>
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
  border: 6px solid #4d4d4d;
  border-radius: 14px;
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
  border-radius: 7px
}

progress::-moz-progress-bar {
  background: #587C84;
  border-radius: 7px
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
