<template>
  <div>
  	<p>{{svgPosx}} , {{svgPosy}}</p>
    <ul style="float:left;list-style:none">
      <li v-for="(item,index) in 5">
        <input type="radio" :name="'left'+index" :id="'left'+index" :value="index" @click="findLeft">
        <label :for="'left'+index">{{item}}</label>
      </li>
    </ul>
    <svg  @load="whereSvg" ref="refSVG" style="float:left" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid slice" viewBox="0 0 180 180" width="180" height="180">
      <path :d="'M'+left.x+','+left.y+' '+right.x+','+right.y" stroke-width="10" stroke="#000" fill="" />
    </svg>
    <ul style="float:left;list-style:none">
      <li v-for="(item,index) in 5"><input type="radio" @click="findRight" ref="thatis" :name="'right'+index" :id="'name2'+index" :value="index"><label :for="'name2'+index">{{item}}</label></li>
    </ul>
    <p>Left {{left.x}} {{left.y}}</p>
    <p>Right {{right.x}} {{right.y}}</p>
  </div>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      pathArray: [],
      left: { x: 0, y: 0 },
      right: { x: 0, y: 0 },
      svgPosx:0,
      svgPosy:0
    }
  },

  methods: {
    findRight(event) {      
      const left = event.target.getBoundingClientRect().left
      const top = event.target.getBoundingClientRect().top
      this.right.x = left- this.svgPosx
      this.right.y = top- this.svgPosy
    },
  findLeft(event) {
      
      const left = event.target.getBoundingClientRect().left
      const top = event.target.getBoundingClientRect().top
      this.left.x = left- this.svgPosx
      this.left.y = top -this.svgPosy
    },
    whereSvg(){
    	this.svgPosx = this.$refs.refSVG.getBoundingClientRect().left 
      this.svgPosy = this.$refs.refSVG.getBoundingClientRect().top

    }
  },
  mount(){

  }
}
</script>