<template>
  <div>
    <hamburger />
    <h1 class="pageTitle">
      {{ $t('BuildWorkPlan')}}
    </h1>
    <section>
      <video ref="videoplayer" width="800" height="600" :poster="require('~/assets/'+ $i18n.locale +'/buildwp.jpg')" :src="videoUrl" controls @timeupdate="update">
        <track :src="require('~/assets/'+ $i18n.locale +'/chapters.vtt')" kind="chapters" default="" @load="generate">
      </video>
      <div id="bar" ref="linkBar">
        <a href='javascript:void()' v-for="(item,index) in navBarTracks" :key="index" :class="'chaptersLink '+ isItPlaying(index)" :data-start="startTime[index]" @click="seek">
          {{ item }}
        </a>
      </div>
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
import vttUrlen from '~/assets/en/chapters.vtt'
import vttUrlfr from '~/assets/fr/chapters.vtt'
import videoUrl from '~/assets/Slide_2_-_Gov_priorities.mp4'
import hamburger from '~/components/hamburger'
import microlearning from '~/components/microlearning'
export default {
  data() {
    return {
      vttUrlen,
      vttUrlfr,
      videoUrl,
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
    seek(e) {
      this.$refs.videoplayer.currentTime = e.target.getAttribute('data-start')
      if (this.$refs.videoplayer.paused) { this.$refs.videoplayer.play() }
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
      this.isPlayingNow = e.target.currentTime
    },
    checkpoint(x) {

    },
    isItPlaying(i) {
      const isNow = this.isPlayingNow
      if (i === this.endTime.findIndex(element => element > isNow)) return 'isPlaying'
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
  height: 7em;
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
