<template>
  <div class="learningElement">
    <nuxt-link :to="localePath(path)">
      <div class="box" :style="boxSize" style="color:#000">
        <div class="completed" :style="completionBar" :data-percent="completion"></div>
        <div class="timeEstimate"><span v-if="time">&nbsp; {{time}} Minutes</span></div>
      </div>
      <p class="text-left" :style="'width:'+size+'px'">
        <span v-html="text" />
      </p>
      <div v-if="youAreHere" class="floatOver"><img alt="" :src="require('~/assets/YouAreHere.svg')"></div>
    </nuxt-link>
  </div>
</template>
<script type="text/javascript">
export default {
  props: {
    text: { type: String, default: "Tile Name" },
    size: {
      type: String,
      default: "200"
    },
    time: String,
    completion: {
      type: Number,
      default: 0
    },
    path: {
      type: String,
      default: "index"
    },
    imagePath: {
      type: String,
      default: "disabledTile.png"
    },
    youAreHere: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    getImgUrl(pic) {
      return require('~/assets/' + pic)
    },
    completionBar() {
      return {
        width: `${this.completion}%`
      }
    },
    boxSize() {

      return {
        width: this.size + "px",
        height: this.size + "px",
        backgroundImage: "url(" + require('~/assets/' + this.imagePath) + ")"
      }

    }

  }
}

</script>
<style type="text/css" scoped>
a {
  color: black;
}

.floatOver {
  position: absolute;
  top: -36px;
  left: 40%;
  margin: auto;
  width: 32px;
}

.completed {
  position: absolute;
  left: 0;
  bottom: 1.7em;
  height: 10px;
  background-color: currentColor;
}

.completed:after {
  color: #000;
  background-color: rgba(255, 255, 255, .8);
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: 12px;
  content: attr(data-percent)"%";
}

.learningElement {
  display: inline-block;
  position: relative;
  float: left;
  margin: 50px 25px;
}

.box {
  overflow: hidden;
  background-color: #fff;
  display: flex;
  align-items: bottom;
  justify-content: center;
  border-radius: 2px;
  position: relative;
  border: 1px solid hsl(42, 10%, 74%);
  margin-bottom: .5em;
  background-size: contain;
  background-repeat: no-repeat;
  background-position-y: center;
}

.timeEstimate {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1.75em;
  color: white;
  text-align: left;
  /*border-radius: 0 0 15px 15px;*/
}

</style>
