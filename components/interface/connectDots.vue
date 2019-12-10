<template>
  <div @scroll="updateOffsets">
    <p><strong v-html="$t('instructions')"></strong></p>
    <ul ref="questionHeight" style="float:left;list-style:none">
      <li v-for="(item,index) in question.dotsRight" :key="item">
        <input type="radio" name="left" :id="'left'+index" :value="index" @change="findLeft" v-model="activeRight">
        <label :for="'left'+index">{{item}}</label>
      </li>
    </ul>
    <svg :key="$i18n.locale" ref="refSVG" style="float:left" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid slice" :viewBox="'0 0 120 '+ulSize" width="120" :height="ulSize">
      <path v-for="(item, index) in coordinates" :d="'M'+coordinates[index][0][0]+','+coordinates[index][0][1]+' '+coordinates[index][1][0]+','+coordinates[index][1][1]" stroke-width="2" :stroke="colorChoices[index]" fill="" stroke-linecap='round' />
    </svg>
    <!-- <transition-group name="flip-list" tag="ul" style="float:left;list-style:none"> -->
    <ul style="float:left;list-style:none">
      <li v-for="(item,index) in answers" :key="item" ref="leftItems">
        <input type="radio" @change="findRight" ref="thatIs" name="right" :id="'name2'+index" :value="index" v-model="activeLeft"><label :for="'name2'+index">{{item}}</label></li>
    </ul>
    <!-- </transition-group> -->
    <br style="clear:both">
    <div v-if="isSubmitted">
      <span v-if="arraysMatch(finalAnswer,correctAnswer)" class="v-right">Correct!</span>
      <span v-else class="v-wrong">Incorrect.</span>
    </div>
    <b-button @click="submitAnswer">{{$t('submit')}}</b-button>
    <span v-if="debugging">
      <p>SVG Position: {{svgPosx}} , {{svgPosy}}</p>
      <p>Left {{left.x}} {{left.y}} Right {{right.x}} {{right.y}}</p>
      <p>Active Left {{activeLeft}} Active Right {{activeRight}}</p>
      <p>{{coordinates}}</p>
      <p>{{finalAnswer}}
        <p>{{correctAnswer}}</p>
        <p>{{randomOrder}}</p>
    </span>
  </div>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      debugging: false,
      colorChoices: ['#A5955F', '#92C3D0', '#AE9FFF', '#429924', '#A652B4', '#952929', '#B7B94F', '#D07733', '#FF58F0', '#623434', '#100065', '#78957F'],
      coordinates: {},
      activeRight: undefined,
      activeLeft: undefined,
      left: { x: 0, y: 0 },
      right: { x: 0, y: 0 },
      svgPosx: 0,
      svgPosy: 0,
      ulSize: 0,
      response: "",
      isSubmitted: false,
      answers: []
    }
  },
  props: {
    question: {
      type: Object,
      default: function() { return { "dotsLeft": ["1", "2", "3"], "dotsRight": ["3", "1", "2"] } }
    },
    correctAnswer: {
      type: Array,
      default: function() {
        return [
          ["0", "1"],
          ["1", "2"],
          ["2", "1"]
        ]
      }
    }
  },

  methods: {
    offset(el) {
      var rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { x: rect.left + scrollLeft, y: rect.top + scrollTop }
    },
    submitAnswer() {
      this.isSubmitted = true
      this.$emit('response', this.arraysMatch(this.finalAnswer, this.correctAnswer))
      // this.answers = Object.values(this.question.dotsLeft).sort(() => Math.random() - 0.5)
    },
    arraysMatch(arr1, arr2) {
      if (arr1.length !== arr2.length) return false
      const arrayOne = arr1.concat().flat()
      const arrayTwo = arr2.concat().flat()
      for (let i in arrayOne) {
        if (arrayOne[i] !== arrayTwo[i]) return false
      }
      return true
    },
    findRight(event) {
      this.isSubmitted = false
      const left = event.target.parentNode.getBoundingClientRect().left
      const top = event.target.parentNode.getBoundingClientRect().top + window.scrollY
      this.right.x = left - this.svgPosx - 45
      this.right.y = top - this.svgPosy + 16
      if (this.activeRight && this.activeLeft) {

        this.$set(this.coordinates, this.activeRight, [
          [this.left.x, this.left.y],
          [this.right.x, this.right.y],
          [this.activeLeft, this.activeRight]
        ])
        this.$nextTick(() => {
          this.activeRight = undefined
          this.activeLeft = undefined
        })

      }

    },
    findLeft(event) {
      this.isSubmitted = false
      const left = event.target.parentNode.getBoundingClientRect().right
      const top = event.target.parentNode.getBoundingClientRect().top + window.scrollY
      this.left.x = left - this.svgPosx + 20
      this.left.y = top - this.svgPosy + 16
      if (this.activeRight && this.activeLeft) {
        this.$set(this.coordinates, this.activeRight, [
          [this.left.x, this.left.y],
          [this.right.x, this.right.y],
          [this.activeLeft, this.activeRight]
        ])
        this.$nextTick(() => {
          this.activeRight = undefined
          this.activeLeft = undefined
        })
      }
    },
    updateOffsets() {
      const svgPos = this.offset(this.$refs.refSVG)
      this.answers = this.question.dotsLeft
      this.svgPosx = svgPos.x
      this.svgPosy = svgPos.y
    }
  },
  mounted() {
    const svgPos = this.offset(this.$refs.refSVG)
    this.ulSize = this.$refs.questionHeight.offsetHeight
    this.answers = this.question.dotsLeft
    this.svgPosx = svgPos.x
    this.svgPosy = svgPos.y

  },
  computed: {
    finalAnswer() {
      const answers = Object.keys(this.coordinates).length
      var final = []
      for (let i in this.coordinates) {
        final.push(this.coordinates[i][2])
      }
      return final
    },
    randomOrder() {
      var posArray = []
      this.$nextTick(() => {
          for (let i in this.question.dotsLeft) {
            let j = this.offset(this.$refs.leftItems[i])
            posArray.push([j.x-this.svgPosx, j.y-this.svgPosy])
          }
        })
        return posArray
      }
    }
  }

</script>
<i18n>
  {
  "en":{
  "instructions":"Match the items on the left with the corresponding answer to the right"
  },
  "fr":{
  "instructions":"Associez les items à la gauche avec leur réponse correspondante à droite"
  }
  }
</i18n>
<style type="text/css">
.flip-list-move {
  transition: transform 1s;
}

</style>
