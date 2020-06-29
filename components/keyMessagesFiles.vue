<template>
  <div role="tablist" id="files-acc" style="width: 100%;">
    <h3 v-b-toggle.filesbox :style="'line-height: calc(' + iconSize + 'px - 20%);'"><img src="~/assets/FilesIcon.svg" :width="iconSize" :height="iconSize" alt=""> <slot name="title" /> <font-awesome-icon icon="minus-circle" class="when-open" role="presentation"></font-awesome-icon> <font-awesome-icon icon="plus-circle" class="when-closed" role="presentation"></font-awesome-icon></h3>
    <b-collapse id="filesbox" accordion="files-acc" role="tabpanel" style="padding-top: 30px;" :visible="openDefault">
      <slot name="content" />
    </b-collapse>
  </div>
</template>

<script type="text/javascript">
  
  export default{
    props:{
      openDefault: { type: Boolean, default: false },
      iconSize: { type: String, default: "30" }
    },
    data(){
      return{
        
      }
    },
  }
  
</script>

<style scoped>

  h3{
    font-family: "Roboto Condensed";
    font-size: 1.5em;
    position: relative;
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 15px;
    transition: all 0.2s;
  }
  
  h3 svg{
    position: absolute;
    right: 15px;
    top: calc(50% - 12px);
  }
  
  h3:hover, h3:focus{
    background-color: rgba(0, 0, 0, 0.05);
  }
  
  h3:focus{
    outline: none;
  }
  
  .collapsed > .when-open,
  .not-collapsed > .when-closed {
    display: none;
  }

</style>

<i18n>

  {
    "en": {
      "something": "Something"
    },
    "fr": {
      "something": "Quelque chose"
    }
  }

</i18n>