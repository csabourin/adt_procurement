<template>
    <a href="javascript:" @click="ShowMenu" class="hamburger">
      <img src="~assets/hamburger.png" >
    </a>
</template>
<style type="text/css" scoped>
h1 {
  margin: .5em;
}
a{
  color:#35495e;
}

.hamburger {
  background-color: transparent;
  border-color: transparent;
}

button.close{
	border: 1px solid gray;
	border-radius: 50px;
}
</style>
<script type="text/javascript">
export default {
  data(){
    return{
      MenuShowing:false
    }
  },
  methods:{
    ShowMenu(){
      this.$emit('menu-toggle')
    }
   

  }
}
</script>