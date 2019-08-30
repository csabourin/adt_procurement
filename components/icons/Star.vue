<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="32">
    <polygon :class="completed" points="512 731.56 241.9 927.79 345.07 610.27 74.97 414.04 408.83 414.04 512 96.51 615.17 414.04 949.03 414.04 678.93 610.27 782.1 927.79 512 731.56" />
  </svg></template>
<style scoped>
  .cls-1 {
      fill: #cecece;
    }
    .done {
      fill: #fbcf35;
    }

    </style>
<script type="text/javascript">
export default {
  props: {
    completed: {
      type: String,
      default: "cls-1"
    }
  }
}

</script>
