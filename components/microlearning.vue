<template>
  <div class="learningElement">
  	<nuxt-link :to="localePath(path)">
    <div class="box">
      <slot></slot>
      <div class="completed" :style="completionBar" :percent="completion"></div>
      <div class="timeEstimate">&#9201; {{time}} Minutes</div>
    </div>
</nuxt-link>
  </div>
</template>
<script type="text/javascript">
export default {
  props: {
    time: String,
    completion: {
      type: String,
      default: "0"
    },path: {
      type: String,
      default: "index"
    }
  },
  computed: {
    completionBar() {
      return {
        width: `${this.completion}%`
      }
    }
  }
}

</script>
<style type="text/css" scoped>
.completed {
  position: absolute;
  left:0;
  bottom: 1.7em;
  height: 10px;
  background-color: #000;
}
.completed:after{
	color:#000;
	background-color: rgba(255, 255, 255, .8);
	position:absolute;
	right:0em;
	bottom:0em;
	font-size: 12px;
	content:attr(percent)"%";
}

.learningElement {
  display: inline-block;
  position: relative;
  float: left;
  margin: 50px;
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
  width: 240px;
  height: 240px;
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
