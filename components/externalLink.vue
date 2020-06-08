<template functionnal>
  <a target="_blank" rel="external" aria-aspopup="true" class="external" :href="link" :title="theTitle"><slot /></a>
</template>

<script type="text/javascript">
  
  export default {
    props: {
      link: { type: String, default: "#" },
      title: { type: String, default: "" },
    },
    computed:{
      theTitle: function(){
        if(this.title == ""){
          return this.$i18n.locale == 'en' ? 'Link to “' + this.$slots.default[0].text + '”' : 'Lien vers « ' + this.$slots.default[0].text + ' »';
        }
        else{
          return this.title;
        }
      },
    }
  }

</script>