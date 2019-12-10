<template>
  <div>
    <ul style="float:left;list-style:none">
      <li v-for="(item,index) in $t('dotsRight')">
        <input @focus="whereSvg" type="radio" name="left" :id="'left'+index" :value="index" @change="findLeft" v-model="activeRight">
        <label :for="'left'+index">{{item}}</label>
      </li>
    </ul>
    <span>
      <svg :key="$i18n.locale" ref="refSVG" style="float:left" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid slice" :viewBox="'0 0 180 '+svgSize" width="180" :height="svgSize">
        <path ref="svgPath" v-for="(item, index) in coordinates" :d="'M'+coordinates[index][0][0]+','+coordinates[index][0][1]+' '+coordinates[index][1][0]+','+coordinates[index][1][1]" stroke-width="2" :stroke="colorChoices[index]" fill="" stroke-linecap='round' />
      </svg>
    </span>
    <ul style="float:left;list-style:none">
      <li v-for="(item,index) in $t('dotsLeft')"><input @focus="whereSvg" type="radio" @change="findRight" ref="thatis" name="right" :id="'name2'+index" :value="index" v-model="activeLeft"><label :for="'name2'+index">{{item}}</label></li>
    </ul>
    <br style="clear:both">
    <b-button @click="submitAnswer">{{$t('submit')}}</b-button>
    <div v-if="debugging">
      <p>SVG Position: {{svgPosx}} , {{svgPosy}}</p>
      <p>Left {{left.x}} {{left.y}} Right {{right.x}} {{right.y}}</p>
      <p>Active Left {{activeLeft}} Active Right {{activeRight}}</p>
      <p>{{coordinates}}</p>
      <p>{{finalAnswer}} <span v-if="arraysMatch(finalAnswer,correctAnswer)" class="v-right">Correct</span></p>
      <p>{{correctAnswer}}</p>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      debugging: true,
      colorChoices: ['#A5955F', '#92C3D0', '#AE9FFF', '#429924', '#A652B4', '#952929'],
      coordinates: {},
      activeRight: undefined,
      activeLeft: undefined,
      left: { x: 0, y: 0 },
      right: { x: 0, y: 0 },
      svgPosx: 0,
      svgPosy: 0,
      correctAnswer:[["0","0"],["1","1"],["2","2"],["3","3"],["4","4"],["5","5"]]
    }
  },

  methods: {
     submitAnswer(){
      this.isSubmitted=true
      this.$emit('response',this.Quest2)
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
      const left = event.target.parentNode.getBoundingClientRect().left
      const top = event.target.parentNode.getBoundingClientRect().top
      this.right.x = left - this.svgPosx - 45
      this.right.y = top - this.svgPosy + 16
      if (this.activeRight && this.activeLeft) {

        this.$set(this.coordinates, this.activeRight, [
          [this.left.x, this.left.y],
          [this.right.x, this.right.y],
          [this.activeLeft,this.activeRight]
        ])

        this.activeRight = undefined
        this.activeLeft = undefined
      }

    },
    findLeft(event) {

      const left = event.target.parentNode.getBoundingClientRect().right
      const top = event.target.parentNode.getBoundingClientRect().top
      this.left.x = left - this.svgPosx + 20
      this.left.y = top - this.svgPosy + 16
      if (this.activeRight && this.activeLeft) {
        this.$set(this.coordinates, this.activeRight, [
          [this.left.x, this.left.y],
          [this.right.x, this.right.y],
          [this.activeLeft,this.activeRight]
        ])
        this.activeRight = undefined
        this.activeLeft = undefined
      }
    },
    whereSvg() {
      this.$nextTick(() => {
        this.svgPosx = this.$refs.refSVG.getBoundingClientRect().left
        this.svgPosy = this.$refs.refSVG.getBoundingClientRect().top
      })
    }
  },
  computed: {
    finalAnswer(){
      const answers = Object.keys(this.coordinates).length
      var final=[]
      for(let i in this.coordinates){
final.push(this.coordinates[i][2])
      }
      return final
    },
    svgSize() {
      const arrayLength = Object.values(this.$i18n.t('dotsRight')).length * 36
      return arrayLength
    },
    numItems() {
      return Object.values(this.$i18n.t('dotsRight')).length
    }
  }
}

</script>
<i18n>
  {
  "en":{
  "dotsRight":[
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six"
  ],
  "dotsLeft":[
  "Un",
  "Deux",
  "Trois",
  "Quatre",
  "Cinq",
  "Six"
  ]
  },
  "fr":{
  "dotsRight":[
  "Un",
  "Deux",
  "Trois",
  "Quatre",
  "Cinq",
  "Six"
  ],
  "dotsLeft":[
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six"
  ]
  }
  }
</i18n></template>
