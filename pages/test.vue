<template>
	<div>
    <videoPlayer />
  
  <p>{{users}}</p>
</div>
</template>
<script type="text/javascript">
	import videoPlayer from "~/components/interface/videoPlayer"
export default{
  computed:{
    users(){  return this.$store.state.scorm.name    }
  },
  components:{
  	videoPlayer
  }
}
</script>