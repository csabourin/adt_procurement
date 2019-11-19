<template>
	<div class="backDoor">
      <span class="insideDoor"><slot  /></span>
      <a href="#" :class="[{'doorOpen':doorOpened},'door']" @click.prevent="doorOpened=!doorOpened">
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
	position:absolute;
  bottom: 0;
  left:0;
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

.door:after:hover,.door:after:active,.door:after:focus{text-decoration: none;}

  .door:after{
	position: absolute;
	content:"\26ab";
	top:50%;
	right:10px;
	text-shadow: 2px 2px 4px #4e4e4e;

}

.doorOpen {
  /*prespectiv creates the door open effect*/
  transform: perspective(1200px) translateZ(0px) translateX(0px) translateY(0px) rotateY(-105deg);
}
</style>