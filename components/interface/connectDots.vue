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
        <path ref="svgPath" v-for="(item, index) in coordinates" :d="'M'+coordinates[index][0][0]+','+coordinates[index][0][1]+' '+coordinates[index][1][0]+','+coordinates[index][1][1]" stroke-width="2" stroke="#4d4d4d" fill="" stroke-linecap='round' />
      </svg>
    </span>
    <ul style="float:left;list-style:none">
      <li v-for="(item,index) in $t('dotsLeft')"><input @focus="whereSvg" type="radio" @change="findRight" ref="thatis" name="right" :id="'name2'+index" :value="index" v-model="activeLeft"><label :for="'name2'+index">{{item}}</label></li>
    </ul>
    <br style="clear:both">
    <p>SVG Position: {{svgPosx}} , {{svgPosy}}</p>
    <p>Left {{left.x}} {{left.y}} Right {{right.x}} {{right.y}}</p>
    <p>Active Left {{activeLeft}} Active Right {{activeRight}}</p>
    <p>{{coordinates}}</p>
  </div>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      coordinates: {},
      activeRight: undefined,
      activeLeft: undefined,
      left: { x: 0, y: 0 },
      right: { x: 0, y: 0 },
      svgPosx: 0,
      svgPosy: 0
    }
  },

  methods: {
    findRight(event) {
      const left = event.target.parentNode.getBoundingClientRect().left
      const top = event.target.parentNode.getBoundingClientRect().top
      this.right.x = left - this.svgPosx - 45
      this.right.y = top - this.svgPosy + 16
      if (this.activeRight && this.activeLeft) {

        this.$set(this.coordinates, this.activeRight, [
          [this.left.x, this.left.y],
          [this.right.x, this.right.y]
        ])

        this.activeRight = ""
        this.activeLeft = ""
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
          [this.right.x, this.right.y]
        ])
        this.activeRight = ""
        this.activeLeft = ""
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
