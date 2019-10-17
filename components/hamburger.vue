<template>
    <a href="javascript:" @click="ShowMenu" class="hamburger">
      <h1>&#69716;</h1>
    </a>
</template>
<style type="text/css" scoped>
h1 {
  margin: .5em;
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