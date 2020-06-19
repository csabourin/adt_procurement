<template>
  <div class="learningElement">
    <nuxt-link :to="localePath(path)">
      <div :class="highlighted ? ['highlighted', 'box'] : 'box'" :style="boxSize" style="color:#212529">
        <div class="completed" :style="completionBar" :data-percent="completion"></div>
        <div class="timeEstimate"><span v-if="time">&nbsp; {{time}} Minutes <span class="v-inv" v-if="$i18n.locale=='en' && completion">({{completion}}% complete)</span><span class="v-inv" v-if="$i18n.locale=='fr' && completion">(complété à {{completion}}%)</span></span></div>
        <transition name="highlight-fade">
          <div class="highlight" v-show="!highlighted && chosenScenario != 'takeCourse' && !noGrey"></div>
        </transition>
      </div>
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
    },
    noGrey: {
      type: Boolean,
      default: false
    }
  },
  methods:{
    setHighlight(){
      this.$nextTick(function() {
        console.log(this.$el.innerHTML)
        this.$el.querySelector("div.highlight").style.height = this.size + "px";
        this.$el.querySelector("div.highlight").style.width = this.size + "px";
      });
    },
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
    },
    chosenScenario: {
      set(scenario) {
        this.$store.commit('currentPlaying/setChosenScenario', scenario);
      },
      get() { 
        return this.$store.state.currentPlaying.chosenScenario;
      }
    }
  },
  watch:{
    highlighted: function(value){
      if(value){
        this.setHighlight();
      }
    }
  },
  mounted: function(){
    this.setHighlight();
    
    console.log(this.chosenScenario);
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
  bottom: 1.7em;
  height: 10px;
  background-color: currentColor;
}

.completed:after {
  color: #212529;
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
  transition: all 0.3s;
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
  
  .box.highlighted{
    /*border: 3px solid black;*/
    box-shadow: 0px 0px 20px 3px rgba(0, 0, 0, 0.3);
    transform: scale(1.05);
  }
  
  .box:not(.highlighted) .highlight{
    position: absolute;
    left: 0px;
    top: 0px;
    background-color: rgba(0, 0, 0, 0.1);
  }
  
  .highlight-fade-enter{
    opacity: 0;
    transform: scale(0.9);
    transition: all 0.3s;
  }
  .highlight-fade-enter-to{
    opacity: 1;
    transform: scale(1);
    transition: all 0.3s;
  }
  .highlight-fade-leave{
    opacity: 1;
    transform: scale(1);
    transition: all 0.3s;
  }
  .highlight-fade-leave-to{
    opacity: 0;
    transform: scale(0.9);
    transition: all 0.3s;
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