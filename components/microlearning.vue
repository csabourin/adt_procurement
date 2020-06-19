<template>
  <div class="learningElement">
    <nuxt-link :to="localePath(path)">
      <div :class="highlighted ? ['highlighted', 'box'] : 'box'" :style="boxSize" style="color:#212529">
        <div class="timeEstimate">
          <span v-if="time">&nbsp; {{time}} Minutes <span class="v-inv" v-if="$i18n.locale=='en' && completion">({{completion}}% complete)</span>
            <span class="v-inv" v-if="$i18n.locale=='fr' && completion">(complété à {{completion}}%)</span></span>
        </div>
      </div>
      <div class="completed" :style="completionBar" :data-percent="completionBar.width"></div>
      <p class="text-left" :style="'width:'+size+'px'">
        <span v-html="text" />
      </p>
      <p v-if="highlighted" class="v-inv">{{$t('highlighted')}}</p>
      <div v-if="youAreHere" class="floatOver"><img :alt="$t('youAreHere')" :src="require('~/assets/YouAreHere.svg')"></div>
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
    },
    highlighted: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    getImgUrl(pic) {
      return require('~/assets/' + pic)
    },
    completionBar() {
      if (this.completion) { return { width: `${this.completion}%` } } else { return {} }
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
  color: #212529;
}

a:focus {
  text-decoration: underline;
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
  top: 0px;
  height: 10px;
  background-color: currentColor;
}

.completed:after {
  color: #212529;
  background-color: rgba(255, 255, 255, .8);
  position: absolute;
  right: 0;
  bottom: -2px;
  font-size: 10px;
  content: attr(data-percent);
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

.box.highlighted {
  border: 4px solid rgba(96, 114, 147, 1);
  border-radius: 3px;
  animation: border-pulsate 3s infinite;
}

@keyframes border-pulsate {
    0%   { border-color: rgba(96, 114, 147, 1); }
    50%  { border-color: rgba(96, 114, 147, 0.25); }
    100% { border-color: rgba(96, 114, 147, 1); }
}

</style>
<i18n>
  {
  "en": {
  "youAreHere": "You are on this page",
  "highlighted": "You should focus on this page as part of the scenario you chose."
  },
  "fr": {
  "youAreHere": "Vous êtes sur cette page",
  "highlighted": "Vous devriez vous concentrer sur cette page dans le cadre du scénario que vous avez choisi."
  }
  }
</i18n>
