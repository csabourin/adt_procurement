<template>
  <div @mousemove="updateOffsets">
    <fieldset>
      <legend><strong v-html="$t('instructions')"></strong></legend>
      <p>&nbsp;</p>
      <b-container>
        <b-row>
          <b-col class="col-4">
            <ul class="leftCol">
              <li v-for="(item,index) in questions" :key="index">
                <label @keyup.enter="findLeft" @dblclick="findLeft" @keyup.space="findLeft" ref="leftInput" style='text-align:right' :for="'left'+qId+index">{{item}}</label>
                <input @click="getLeft" @focus="updateOffsets" type="radio" name="left" :id="'left'+qId+index" :value="index+1" @keyup.enter="findLeft" @dblclick="findLeft" @keyup.space="findLeft" v-model="activeRight">
              </li>
            </ul>
          </b-col>
          <b-col class="col-4" ref="centerCol">
            <svg ref="refSVG" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" :width="colWidth" :height="ulSize">
              <transition-group name="fade" tag="g" ref="pathGroup">
                <line v-for="(item, index) in coordinates" :x1="coordinates[index][0][0]" :y1="coordinates[index][0][1]" :x2="coordinates[index][1][0]" :y2="coordinates[index][1][1]" stroke-width="2" :stroke="colorChoices[index]" fill="" stroke-linecap='round' :key="'pathKey'+index" ref="svgPath" />
              </transition-group>
            </svg>
          </b-col>
          <b-col class="col-4">
            <div style="height:100%">
              <transition-group name="flip-list" tag="ul" class="rightCol" @transitionend="generateCorrect">
                <li class="answerSide" v-for="(item,index) in answers" :key="item[0]" ref="questionHeight">
                  <input :data-coords="getCoords(index)" @click="getRight" @focus="updateOffsets" type="radio" @dblclick="findRight" @keyup.enter="findRight" @keyup.space="findRight" name="right" :id="'right'+qId+index" :value="item[0]" v-model="activeLeft">
                  <label ref="rightInput" @dblclick="findRight" @keyup.enter="findRight" @keyup.space="findRight" :for="'right'+qId+index">{{item[1]}}</label>
                </li>
              </transition-group>
            </div>
          </b-col>
        </b-row>
      </b-container>
      <div v-if="isSubmitted">
        <p v-if="incomplete">{{$t('incomplete')}}</p>
        <p v-else>
          <span v-if="arraysMatch(finalAnswer,correctAnswer)" class="v-right">Correct!</span>
          <span v-else class="v-wrong">Incorrect.</span>
        </p>
      </div>
      <br style="clear:both">
      <b-button @click="submitAnswer">{{$t('submit')}}</b-button>
      <b-button @click="resetAnswer">{{$t('reset')}}</b-button>
    </fieldset>
    <div class="debugWindow" v-if="debugging">
      <p>ul size: {{ulSize}}</p>
      <p>SVG Position: {{svgPosx}} , {{svgPosy}}</p>
      <p>Active Left {{activeLeft}} Active Right {{activeRight}}</p>
      <p>Left {{left.x}} {{left.y}} Right {{right.x}} {{right.y}}</p>
      <p>coordinates: {{coordinates}}</p>
      <p>Correctcoordinates: {{correctCoordinates}}</p>
      <p>givenlAnswer: {{givenAnswer}}</p>
      <p>finalAnswer: {{finalAnswer}}</p>
      <p>correctAnswer: {{correctAnswer}}</p>
    </div>
    <p>&nbsp;</p>
  </div>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      debugging: false,
      isMounted:false,
      isGenerated: false,
      colorsChoices: ['#167777', '#6C076C', '#6F1E0D', '#577a90', '#3A8251', '#616EB8', '#8D9245', '#775F75', '#607293', '#B35685', '#C35522'],
      coordinates: {},
      correctCoordinates: {},
      givenAnswer: {},
      activeRight: undefined,
      activeLeft: undefined,
      left: { x: 0, y: 0 },
      right: { x: 0, y: 0 },
      svgPosx: 0,
      svgPosy: 18,
      ulSize: 0,
      colWidth: 1,
      response: "",
      isSubmitted: false,
      incomplete: true,
      answers: [],
      questions: []
    }
  },
  props: {
    qId: {
      type: String,
      default: Math.random() * 10
    },
    question: {
      type: Object,
      default: function() { return { "dotsLeft": ["1", "2", "3"], "dotsRight": ["3", "1", "2"] } }
    },
    correctAnswer: {
      type: Array,
      default: function() {
        var tmpArray = []
        for (let i in this.question.dotsLeft) {
          let j = String(Number(i) + 1)
          tmpArray.push(j)
        }
        return tmpArray
      }
    }
  },
  methods: {
    getCoords(i){
      if(!this.$refs.questionHeight){
      return i  
      } else {
        return parseInt(this.$refs.questionHeight[i].getBoundingClientRect().y)-this.svgPosy
      }
      
    },

    generateCorrect() {
      var leftx, lefty, rightx, righty, right, topright, left, topleft, rightInput
      for (let i in this.question.dotsLeft) {
        // var rightInput=document.querySelector('#right'+this.qId+i)
        // topright = rightInput.getBoundingClientRect().top + (window.pageYOffset || document.documentElement.scrollTop)
        right = this.$refs.rightInput[i].parentNode.getBoundingClientRect().left
        left = this.$refs.leftInput[i].parentNode.getBoundingClientRect().right
        topleft = ((this.$refs.leftInput[i].parentNode.getBoundingClientRect().top + this.$refs.leftInput[i].parentNode.getBoundingClientRect().bottom) / 2) + (window.pageYOffset || document.documentElement.scrollTop)
        topright = ((this.$refs.rightInput[i].getBoundingClientRect().top + this.$refs.rightInput[i].getBoundingClientRect().bottom) / 2) + (window.pageYOffset || document.documentElement.scrollTop)
        rightx = right - this.svgPosx - 8
        righty = topright - this.svgPosy - 16
        leftx = left - this.svgPosx + 8
        lefty = topleft - this.svgPosy
        this.$set(this.correctCoordinates, (Number(i) + 1).toString(), [
          [leftx, lefty],
          [rightx, righty]
        ])
      }
      this.isGenerated = true
    },
    generateAnswers() {
      var tmpArray = []
      for (let i in this.question.dotsLeft) {
        let j = String(Number(i) + 1)
        tmpArray.push([j, this.question.dotsLeft[i]])
      }
      return tmpArray
    },
    resetAnswer() {
      this.updateOffsets()
      this.isGenerated = true
      this.coordinates = {}
      this.givenAnswer = {}
      this.answers = this.answers.sort(() => Math.random() - 0.5)
      this.isSubmitted = false
    },
    offset(el) {
      var rect = el.getBoundingClientRect(),
        scrollLeft = parseInt(window.pageXOffset || document.documentElement.scrollLeft),
        scrollTop = parseInt(window.pageYOffset || document.documentElement.scrollTop);
      return { x: rect.left + scrollLeft, y: rect.top + scrollTop }
    },
    submitAnswer() {
      this.isSubmitted = true
      if (this.finalAnswer.length == this.correctAnswer.length) {
        this.incomplete = false
        this.$emit('response', this.arraysMatch(this.finalAnswer, this.correctAnswer))
        this.answers = this.generateAnswers()
        if (!this.isGenerated) { this.generateCorrect() }
        this.coordinates = Object.assign({}, this.coordinates, this.correctCoordinates)
      } else { this.incomplete = true }
    },
    arraysMatch(arr1, arr2) {
      if (arr1.length !== arr2.length) return false
      for (let i in arr1) { if (arr1[i] !== arr2[i]) return false }
      return true
    },
    getRight(event) {
      this.isSubmitted = false
      const right = event.target.parentNode.getBoundingClientRect().left
      const top = event.target.parentNode.getBoundingClientRect().top + (window.pageYOffset || document.documentElement.scrollTop)
      this.right.x = parseInt(right - this.svgPosx) - 8
      this.right.y = parseInt(top - this.svgPosy + 10)
    },
    getLeft(event) {
      this.isSubmitted = false
      const left = event.target.parentNode.getBoundingClientRect().right
      const top = ((event.target.parentNode.getBoundingClientRect().top + event.target.parentNode.getBoundingClientRect().bottom) / 2) + (window.pageYOffset || document.documentElement.scrollTop)
      this.left.x = parseInt(left - this.svgPosx) + 8
      this.left.y = parseInt(top - this.svgPosy)
    },
    findRight(event) {
      if (this.activeRight && this.activeLeft) {
        this.$set(this.coordinates, this.activeRight.toString(), [
          [this.left.x, this.left.y],
          [this.right.x, this.right.y]
        ])
        this.$set(this.givenAnswer, this.activeRight.toString(), this.activeLeft.toString())
        this.$nextTick(() => {
          this.activeRight = undefined
          this.activeLeft = undefined
        })
      }
    },
    findLeft(event) {
      if (this.activeRight && this.activeLeft) {
        this.$set(this.coordinates, this.activeRight.toString(), [
          [this.left.x, this.left.y],
          [this.right.x, this.right.y]
        ])
        this.$set(this.givenAnswer, this.activeRight.toString(), this.activeLeft.toString())
        this.$nextTick(() => {
          this.activeRight = undefined
          this.activeLeft = undefined
        })
      }
    },
    updateOffsets() {
      this.ulSize = parseInt(this.$refs.questionHeight[0].parentNode.offsetHeight, 10)
      this.colWidth = 30 + this.$refs.centerCol.offsetWidth - 30
      const svgPos = this.offset(this.$refs.refSVG)
      this.svgPosx = parseInt(svgPos.x)
      this.svgPosy = parseInt(svgPos.y)
    }
  },
  mounted() {
    this.isMounted=true
    window.addEventListener('resize', this.updateOffsets)
    // this.generateAnswers()
    this.answers = this.generateAnswers().sort(() => Math.random() - 0.5)
    this.questions = Object.values(this.question.dotsRight)
    this.$nextTick(() => {
      this.updateOffsets()
    })
  },

  beforeDestroy: function() {
    window.removeEventListener('resize', this.updateOffsets)
  },
  computed: {
    colorChoices() { return this.colorsChoices.sort(() => Math.random() - 0.5) },
    finalAnswer() {
      const answers = Object.keys(this.givenAnswer).length
      var final = []
      for (let i in this.givenAnswer) {
        final.push(this.givenAnswer[i])
      }
      return final
    }
  }
}
</script>
<i18n>
  {
  "en":{
  "instructions":"Match the items on the left with the corresponding answer to the right. Double-click to confirm or select with the keyboard",
  "incomplete":"Please answer every questions"
  },
  "fr":{
  "instructions":"Associez les items de gauche avec leur réponse correspondante à droite. Double-cliquez pour confirmer ou sélectionnez avec le clavier.",
  "incomplete":"Veuillez répondre à chaque question."
  }
  }
</i18n>
<style type="text/css" scoped>
.answerSide input:before {
  content: attr(data-coords) "px";
  font-size: 10px;
  position: absolute;
  left: -25px;
}

.leftCol {
  list-style: none;
  text-align: right;
  padding-left: 0px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.rightCol {
  list-style: none;
  text-align: left;
  padding-left: 0px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.debugWindow {
  width: 200px;
  position: fixed;
  top: 10px;
  left: 10px;
  z-index: 1000000;
  background-color: #fff;
  font-size: 10px;
  padding: 1em;
}

.debugWindow p {
  margin-bottom: .25em;
}

.fade-enter-active-move,
.fade-leave-active-move {
  transition: opacity .5s;
}

.fade-enter-move,
.fade-leave-to-move

/* .fade-leave-active below version 2.1.8 */
  {
  opacity: 0;
}

.flip-list-move {
  transition: transform 2s;
}

li {
  margin-bottom: 1em;
}

label {
  display: inline;
  padding-bottom: 1.5em
}

label:focus,
label:active {
  outline: 1px solid blue;
}

/** {
  outline: 1px solid red
}

input:after{
  position: absolute;
  content:attr(id);
}*/

;
</style>