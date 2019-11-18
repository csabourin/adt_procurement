<template>
	<div class="backDoor">
      <span class="insideDoor" v-html="textInside" />
      <a href="#" :class="[{'doorOpen':doorOpened},'door']" @click="doorOpened=!doorOpened">
      </a>
    </div>	
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				doorOpened:false
			}
		},
		props:{
			textInside:{
				type:String,
				default:"Hello World"
			}
		}

	}
</script>
<style type="text/css" scoped>
	.backDoor {
  background-color: #333;
  float:left;
  color: #fff;
  position: relative;
  width: 200px;
  height: 300px;
  margin: 10px;
  margin-top: 50px;
  box-shadow: -15px -10px 4px 2px #4e4e4e inset;
}

.insideDoor {
  padding: 2em;
}

.door {
  background-color: #CAC1CA;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 200px;
  height: 300px;
  border:1px solid #000;

  transform-origin: left;
  /*Speed of the Door animation*/
  transition: all 0.5s ease-in-out;
}

.doorOpen {
  /*prespectiv creates the door open effect*/
  transform: perspective(1200px) translateZ(0px) translateX(0px) translateY(0px) rotateY(-105deg);
}
</style>