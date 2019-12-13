<template>
  <div @mousemove="updateOffsets">
  	<fieldset>
    <legend><strong v-html="$t('instructions')"></strong></legend>
    <p>&nbsp;</p>
    <ul :key="" ref="questionHeight" style="float:left;list-style:none;text-align: right;padding-left: 0">
      <li v-for="(item,index) in questions" :key="index">
        <label @keyup.enter="findLeft" @dblclick="findLeft" @keyup.space="findLeft" style='text-align:right' :for="'left'+qId+index">{{item}}</label>
        <input @click="getLeft" @focus="updateOffsets" type="radio" name="left" :id="'left'+qId+index" :value="index+1" @keyup.enter="findLeft" @dblclick="findLeft" @keyup.space="findLeft" v-model="activeRight">
      </li>
    </ul>
    <svg ref="refSVG" style="float:left" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid slice" :viewBox="'0 0 70 '+ulSize" width="70" :height="ulSize">
      <path :class="{'isHidden':isSubmitted}" v-for="(item, index) in coordinates" :d="'M'+coordinates[index][0][0]+','+coordinates[index][0][1]+' '+coordinates[index][1][0]+','+coordinates[index][1][1]" stroke-width="2" :stroke="colorChoices[index]" fill="" stroke-linecap='round' :key="'pathKey'+index" ref="svgPath" />
      <style>
      .isHidden{visibility: hidden}
    </style>
    </svg>
    <transition-group name="flip-list" tag="ul" style="float:left;list-style:none;padding-left: 0">
    <!-- <ul style="float:left;list-style:none;    padding-left: 0"> -->
      <li v-for="(item,index) in answers" :key="item[0]" ref="leftItems">
        <input @click="getRight" @focus="updateOffsets" type="radio" @dblclick="findRight" @keyup.enter="findRight" @keyup.space="findRight" ref="thatIs" name="right" :id="'name2'+qId+index" :value="item[0]" v-model="activeLeft"><label @dblclick="findRight" @keyup.enter="findRight" @keyup.space="findRight" :for="'name2'+qId+index">{{item[1]}}</label></li>
    </<!-- ul -->>
    </transition-group>
    <br style="clear:both">
    <b-button @click="submitAnswer">{{$t('submit')}}</b-button>
    <b-button @click="resetAnswer">{{$t('reset')}}</b-button>
    </fieldset>
    <div v-if="isSubmitted">
      <span v-if="arraysMatch(finalAnswer,correctAnswer)" class="v-right">Correct!</span>
      <span v-else class="v-wrong">Incorrect.</span>
    </div>
    <span v-if="debugging">
      <p>SVG Position: {{svgPosx}} , {{svgPosy}}</p>
      <p>Active Left {{activeLeft}} Active Right {{activeRight}}</p>
      <p>Left {{left.x}} {{left.y}} Right {{right.x}} {{right.y}}</p>
      <p>coordinates: {{coordinates}}</p>
      <p>finalAnswer: {{finalAnswer}}</p>
      <p>correctAnswer: {{correctAnswer}}</p>
    </span>
      <p>&nbsp;</p>
  </div>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      debugging: false,
      colorsChoices: ['#A5955F', '#92C3D0', '#AE9FFF', '#429924', '#A652B4', '#952929', '#B7B94F', '#D07733', '#FF58F0', '#623434', '#100065', '#78957F'],
      coordinates: {},
      activeRight: undefined,
      activeLeft: undefined,
      left: { x: 0, y: 0 },
      right: { x: 0, y: 0 },
      svgPosx: 0,
      svgPosy: 18,
      ulSize: 1,
      response: "",
      isSubmitted: false,
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
      default: function() { var tmpArray=[]
      for (let i in this.question.dotsLeft){
        let j=String(Number(i)+1)
        tmpArray.push(j)
      }
      return tmpArray
      }
    }
  },

  beforeDestroy: function() {
    window.removeEventListener('resize', this.updateOffsets)
  },

  methods: {
    generateAnswers(){
      var tmpArray=[]
      for (let i in this.question.dotsLeft){
        let j=String(Number(i)+1)
        tmpArray.push([j,this.question.dotsLeft[i]])
      }
      return tmpArray
    }
    ,
    resetAnswer() {
      this.updateOffsets()
      this.coordinates = {}
      this.answers = this.answers.sort(() => Math.random() - 0.5)
      this.isSubmitted = false
    },
    offset(el) {
      var rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { x: rect.left + scrollLeft, y: rect.top + scrollTop }
    },
    submitAnswer() {
      this.isSubmitted = true
      this.$emit('response', this.arraysMatch(this.finalAnswer, this.correctAnswer))
      // this.coordinates = {}
      this.answers = this.generateAnswers()
    },
    arraysMatch(arr1, arr2) {
      if (arr1.length !== arr2.length) return false
      var arrayOne = arr1.concat()
      var arrayTwo = arr2.concat()
      for (let i in arrayOne) {
        if (arrayOne[i] !== arrayTwo[i]) return false
      }
      return true
    },
    getRight(event){this.isSubmitted = false
      const right = event.target.parentNode.getBoundingClientRect().left
      const top = event.target.parentNode.getBoundingClientRect().top + (window.pageYOffset || document.documentElement.scrollTop)
      this.right.x = right - this.svgPosx - 8
      this.right.y = top - this.svgPosy + 10},
    getLeft(event){this.isSubmitted = false
      const left = event.target.parentNode.getBoundingClientRect().right
      const top = event.target.parentNode.getBoundingClientRect().top + (window.pageYOffset || document.documentElement.scrollTop)
      this.left.x = left - this.svgPosx + 8
      this.left.y = top - this.svgPosy + 10},
    findRight(event) {
      
      if (this.activeRight && this.activeLeft) {

        this.$set(this.coordinates, this.activeRight.toString(), [
          [this.left.x, this.left.y],
          [this.right.x, this.right.y],
          [this.activeLeft.toString(), this.activeRight.toString()]
        ])
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
          [this.right.x, this.right.y],
          [this.activeLeft.toString(), this.activeRight.toString()]
        ])
        this.$nextTick(() => {
          this.activeRight = undefined
          this.activeLeft = undefined
        })
      }
    },
    updateOffsets() {
      this.ulSize = 1 + this.$refs.questionHeight.offsetHeight
      const svgPos = this.offset(this.$refs.refSVG)
      this.svgPosx = svgPos.x
      this.svgPosy = svgPos.y
    }
  },
  mounted() {
    window.addEventListener('resize', this.updateOffsets)
      this.generateAnswers()
      this.answers = this.generateAnswers().sort(() => Math.random() - 0.5)
      this.questions = Object.values(this.question.dotsRight)
    this.$nextTick(() => {
      this.updateOffsets()



    })

  },
  computed: {
    colorChoices() { return this.colorsChoices.sort(() => Math.random() - 0.5) },
    finalAnswer() {
      const answers = Object.keys(this.coordinates).length
      var final = []
      for (let i in this.coordinates) {
        final.push(this.coordinates[i][2][0])
      }
      return final
    }
  }
}

</script>
<i18n>
  {
  "en":{
  "instructions":"Match the items on the left with the corresponding answer to the right. Double-click to confirm or select with the keyboard"
  },
  "fr":{
  "instructions":"Associez les items de gauche avec leur réponse correspondante à droite. Double-cliquez pour confirmer ou sélectionnez avec le clavier."
  }
  }
</i18n>
<style type="text/css" scoped>
.flip-list-move {
  transition: transform 2s;
}

label:focus,
label:active {
  outline: 1px solid blue;
}

/**{outline:1px solid red};*/

</style>
