<template>
  <div>
    <hamburger />
    <h1 class="pageTitle">{{$t('BuildWorkPlan')}}</h1>
    <section>
      <video ref="videoplayer" width="800" height="600" poster="/_nuxt/assets/sintel.jpg" src="/_nuxt/assets/Slide_2_-_Gov_priorities.mp4" controls v-on:timeupdate="update">
        <track :src="vttUrl" kind="chapters" default="" v-on:load="generate">
      </video>
      <div id="bar" ref="linkBar" v-if="1">
      </div>
    </section>
    <div class="bottomNav planSection">
      <microlearning path="planKey" size="small" completion=100>{{$t('KeyMessages')}}</microlearning>
      <microlearning path="buildWP" size="small" time="20" completion=80>{{$t('BuildWorkPlan')}}</microlearning>
      <microlearning size="small" time="20" completion=10>{{$t('CreateBudget')}}</microlearning>
      <microlearning size="small" time="15">Test</microlearning>
    </div>
  </div>
</template>
<script type="text/javascript">
import vttUrl from "~/assets/chapters.vtt"
import hamburger from "~/components/hamburger";
import microlearning from "~/components/microlearning";
import Vue from 'vue';
export default {
  data() {
    return {
      vttUrl
    }
  },
  computed: {
    // trackCues(){return this.$refs.videoplayer.textTracks[0].cues;}
  },
  components: {
    hamburger,
    microlearning
  },
  methods: {
    seek(e) {
      this.$refs.videoplayer.currentTime = e.target.getAttribute('data-start');
      console.log(e);
      if (this.$refs.videoplayer.paused) { this.$refs.videoplayer.play(); }
    },
    generate() {
      var c = this.$refs.videoplayer.textTracks[0].cues;
      for (let i = 0; i < c.length; i++) {
        let s = document.createElement("span");
        s.innerHTML = c[i].text;
        s.setAttribute('class', 'chaptersLink')
        s.setAttribute('data-start', c[i].startTime);
        s.setAttribute('data-end', c[i].endTime);
        s.setAttribute('v-on:click', "seek");
        s.setAttribute(':key', i);
        s.style.width = '150px';
        this.$refs.linkBar.appendChild(s);
      }

    },
    update(e) {
      var p = e.target.currentTime / e.target.duration * 100;
      console.log(p);
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
}

.chaptersLink:hover {
  color: #06f;
}

.chaptersLink:before {
  counter-increment: episode;
  content: "0"counter(episode);
  position: absolute;
  background-color: #b54142;
  height: 2em;
  right: 0px;
  top: 0px;
  border-radius: 0 0 0 30px;
  padding: .5em .5em 0 1em;
  color: white;

}

</style>
