<template>
  <div class="tip">
    <img src="~assets/TipIcon.svg" :alt="$t('alt')" :width="iconWidth">
    <p><slot /></p>
  </div>
</template>

<script type="text/javascript">
  
  export default{
    data() {
      return {
        
      }
    },
    props: {
      iconWidth: { type: String, default: "50" }
    }
  }
  
</script>

<style scoped>

  .tip{
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 10px;
    margin-top: 10px;
  }
  
  .tip img{
    order: 1;
    flex: 0 0 auto;
  }
  
  .tip p{
    order: 2;
    flex: 1 0 0;
    text-align: left;
    margin-bottom: 0;
    margin-left: 15px;
  }

</style>

<i18n>
  {
    "en": {
      "alt": "Tip icon"
    },
    "fr": {
      "alt": "Icône « conseil »"
    }
  }

</i18n>