<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45.27 45.27" :width="iconWidth" :height="iconWidth">
    	<path d="M37.58,7.69a21.14,21.14,0,1,1-29.89,0A21.14,21.14,0,0,1,37.58,7.69Z" fill="#fff" />
      <path class="plus-1" d="M37.58 7.69a21.14 21.14 0 11-29.89 0 21.14 21.14 0 0129.89 0zM12.53 22.64h20.21M22.64 12.53v20.21" />
  </svg>
</template>
<script>
export default {
  props: {
    title: { type: String, default: "" },
    iconWidth: { type: String, default: "25" }
  }
}

</script>
<style type="text/css" scoped>
      .plus-1 {
        fill: none;
        stroke: #666;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 3px
      }
      .plus-1:hover{
        fill:#d4dfde;
      }

</style>