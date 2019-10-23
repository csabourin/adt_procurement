<template>
  <div class="learningElement">
    <nuxt-link :to="localePath(path)">
      <div class="box" :style="boxSize" style="background-image:url('/adt_finance-R1/_nuxt/assets/KeyMessR.png')">
        <div class="completed" :style="completionBar" :percent="completion"></div>
        <div class="timeEstimate"><span v-if="time">&nbsp; {{time}} Minutes</span></div>
      </div>
      <p class="text-left" :style="'width:'+size+'px'">
      <slot /></p>
    </nuxt-link>
  </div>
</template>
<script type="text/javascript">
export default {
  props: {
    size: {
      type: String,
      default: "200"
    },
    time: String,
    completion: {
      type: String,
      default: "0"
    },
    path: {
      type: String,
      default: "index"
    },
    imagePath: {
      type: String,
      default: "KeyMessR.png"
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
        backgroundImage: "url(" + require('~/assets/' + this.imagePath) + ")",
        backgroundSize: "cover",
      }

    }

  }
}

</script>
<style type="text/css" scoped>
a{color:black;}
.completed {
  position: absolute;
  left: 0;
  bottom: 1.7em;
  height: 10px;
  background-color: #000;
}

.completed:after {
  color: #000;
  background-color: rgba(255, 255, 255, .8);
  position: absolute;
  right: 0em;
  bottom: 0em;
  font-size: 12px;
  content: attr(percent)"%";
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
