<template>
  <b-row>
  	<b-col>
	<script src="https://kit.fontawesome.com/e5ee1a6fb9.js" crossorigin="anonymous"></script>
    <figure style="clear:both">
      <video></video>
    </figure>
    <div id="video-controls" class="controls" data-state="hidden">
        <progress id="progress" value="0" min="0">
          <span id="progress-bar"></span>
        </progress>
      <button id="playpause" @click="isPaused=!isPaused" type="button" data-state="play" :aria-label="'Play'" title="Play"><i class="fas fa-play"></i></button>
      <button id="stop" type="button" aria-label="Stop" title="Stop" data-state="stop"><i class="fas fa-stop"></i></button>
      <button ref="mute" @click="isMuted=!isMuted" type="button" data-state="mute" :title="'Volume: '+setVolume+'%'"><i :class="{'fas fa-volume-mute':isMuted,'fas fa-volume-up':!isMuted}" /></button><input type="range" v-model="setVolume">
      <button type="button" data-state="go-fullscreen"><i class="fas fa-compress"></i></button>
      
    </div>
</b-col>
  </b-row>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				setVolume:100,
				oldVolume:100,
				isMuted:false,
				isPaused:true
			}
		},
		watch:{
			isMuted(){
				if(this.isMuted){
					this.oldVolume=this.setVolume
					this.setVolume=0}
					else {
						this.setVolume=this.oldVolume
					}
			},
			setVolume(volume){
				if(volume==0){this.isMuted=true} else {
					this.isMuted=false
					this.oldVolume=this.setVolume
				}
			}
		}
	}
</script>
<style type="text/css" scoped>
* {
  box-sizing: border-box;
}


input[type=range] {
  -webkit-appearance: none;
  background: 0 0;
  display: inline-block;
  height: 2.5em;
  padding: 0;
  width: 7em;
}

input[type=range]:focus {
    outline-offset: 0
}

input[type=range]::-webkit-slider-runnable-track {
    background: #aaa;
    height: 4px
}

input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    background: #fff;
    border: 1px solid #707070;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    height: 1.3em;
    margin-top: -9px;
    width: 10px
}

input[type=range]::-moz-range-track {
    background: #aaa;
    border: 0
}

input[type=range]::-moz-range-thumb {
    background: #fff;
    border: 1px solid #707070;
    border-radius: 0;
    height: 1.3em;
    width: 10px
}

input[type=range]::-ms-track {
    border: 0;
    color: transparent;
    height: 4px
}

input[type=range]::-ms-fill-upper {
    background: #aaa
}

input[type=range]::-ms-fill-lower {
    background: #aaa
}

input[type=range]::-ms-thumb {
    background: #fff;
    border: 1px solid #707070;
    height: 1.3em;
    width: 10px
}

.fd-slider {
    display: inline-block;
    height: 100%;
    margin-top: 10px;
    width: 7em
}

.fd-slider-handle {
    background: #fff;
    border: 1px solid #707070;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    width: 10px
}

progress {
    -webkit-appearance: none;
    background: #fff;
    background-clip: padding-box;
    border: 6px solid #4d4d4d;
    border-radius: 14px;
    color: #176ca7;
    display: block;
    height: 30px;
    left: 0;
    padding: 2px;
    position: absolute;
    top: 0;
    width: 100%
}


progress::-webkit-progress-bar {
    background: #fff
}

progress::-webkit-progress-value {
    background: #176ca7;
    border-radius: 7px
}

progress::-moz-progress-bar {
    background: #176ca7;
    border-radius: 7px
}

.progress {
    height: 22px
}


.player {
  width: 480px;
  margin: 10px auto;
  border: 1px solid #ccc;
}

video,
audio,
.controls {
  width: 100%;
}

.controls {
  height: 36px;
}

button {
  display: block;
  float: left;
  border: 0;
  margin-right: 2px;
  height: 100%;
  width: 50px;
  cursor: pointer;
}

button:hover,
button:focus {
  background-color: #ddd;
}

button:active {
  background-color: #ccc;
}

.controls div {
  font-size: 12px;
  display: inline-block;
  line-height: 36px;
  width: 45px;
  float: right;
}

video {
  margin-bottom: -5px;
}

</style>
