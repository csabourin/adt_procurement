<template functionnal>
  <a :href="require('~/assets/'+ $i18n.locale +'/'+ filename)" :download="filename">
    <genericFile :iconStyle="iconColor" :iconWidth=size :title="$t(title)" :line1="$t(line1)" :line2="$t(line2)" aria-hidden="true" class="icon" />
    <span v-html="$t(lineTag)"></span>
    <span class="v-inv" v-if="downloadOK">{{$t('download')}}</span>
    <font-awesome-icon icon="download" />
  </a>
</template>
<script type="text/javascript">
import genericFile from "~/components/icons/genFileIcon"
export default {
  props: {
    size: { type: String, default: "64" },
    iconColor: { type: String, default: "planBackground" },
    filename: { type: String, default: "" },
    title: { type: String, default: "" },
    line1: { type: String, default: "" },
    line2: { type: String, default: "" },
    lineTag: { type: String, default: "" },
    fileSize: { type: String, default: "" }
  },
  components: {
    genericFile
  },
  data(){
    return{
      downloadOK: true
    }
  },
  methods:{
    findType(){
      if(this.filename.indexOf(".pdf") >= 0){
        return {name: "PDF", longName: "Adobe Portable Document Format", mime: "application/pdf"};
      }
      else if(this.filename.indexOf(".docx") >= 0){
        return {name: "DOCX", longName: "Microsoft Word (OpenXML)", mime: "application/vnd.openxmlformats-officedocument.wordprocessing"};
      }
      else if(this.filename.indexOf(".xlsx") >= 0){
        return {name: "XLSX", longName: "Microsoft Excel (OpenXML)", mime: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"};
      }
    },
    detectIE() {
      var ua = window.navigator.userAgent;
      var msie = ua.indexOf("MSIE ");

      if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)){  // If Internet Explorer, return version number
        return true
      }
      else{  // If another browser, return 0
        return false;
      }
      
      return false;
    }
  },
  mounted(){
    var type = this.findType();
    
    if(this.detectIE() && type.name == "PDF"){
      this.downloadOK = false;
    }
    
    this.$el.setAttribute("type", type.mime);
    var newSpan = document.createElement("span");
    if(this.fileSize && this.fileSize != ""){
      newSpan.innerHTML = " (<abbr title='" + type.longName + "'>" + type.name + "</abbr>, " + this.fileSize + this.$i18n.t('kb') + ")"
    }
    else{
      newSpan.innerHTML = " (<abbr title='" + type.longName + "'>" + type.name + "</abbr>)";
    }
    this.$el.querySelector("span").appendChild(newSpan)
  },
}

</script>

<style scoped>

  a{
    text-decoration: none;
    color: #212529;
  }
  
  a:hover, a:focus{
    text-decoration: none;
    opacity: 0.85;
    outline: none;
    
    transition: opacity 0.2s; 
  }
  
  a:hover svg.icon, a:focus svg.icon{
    opacity: 0.85;
    outline: none;
    
    transition: opacity 0.2s; 
  }
  
  a svg.icon{
    display: block;
    margin: auto;
  }

</style>

<i18n>

  {
    "en":{
      "kb": "<abbr title='kylobyte'>KB</abbr>",
      "download": " (This document will be downloaded)"
    },
    "fr":{
      "kb": "&nbsp;<abbr title='kylo-octet'>Ko</abbr>",
      "download": " (Ce document sera téléchargé)"
    }
  }

</i18n>