<template functionnal>
  <span>
    <a :href="require('~/assets/'+ $i18n.locale +'/'+ texts.filename)" :download="texts.filename" :class="opened ? ['openHighlight', 'download'] : 'download'" @click="opened = true" :title="texts.download">
      <genericFile :iconStyle="iconColor" :iconWidth=size :title="texts.download" :line1="texts.line1" :line2="texts.line2" aria-hidden="true" class="icon" />
      <span v-html="texts.name"></span>
      <span class="v-inv" v-if="downloadOK">{{$t('download')}}</span>
      <font-awesome-icon icon="download" role="presentation" />
      <span class="v-inv" v-if="opened">{{$t('viewed')}}</span>
      <div class="highlight" v-show="opened">
        <font-awesome-icon icon="check" size="2x" role="presentation" />
      </div>
    </a>
    <HTMLJobaidLink :filename="texts.HTMLFilename" v-if="texts.HTMLFilename" @click.native="opened = true" :title="$t('HTMLTitle') + texts.name + $t('quote')" />
  </span>
</template>
<script type="text/javascript">
import genericFile from "~/components/icons/genFileIcon"
import HTMLJobaidLink from "~/components/HTMLJobaidLink"
export default {
  props: {
    size: { type: String, default: "64" },
    iconColor: { type: String, default: "planBackground" },
    fileSize: { type: String, default: "" },
    name: { type: String, default: "" },
    texts: { type: Object, default: {} }
  },
  components: {
    genericFile,
    HTMLJobaidLink
  },
  data(){
    return{
      downloadOK: true,
    }
  },
  computed: {
    opened: {
      set(opened) {
        if(opened){
          this.$store.commit('files/setOpenFile', this.name);
        }
      },
      get() { 
        switch(this.name){
          case "SOWSOR":
            return this.$store.state.files.SOWSOR;
            break;
          case "WorkPlanTemplate":
            return this.$store.state.files.WorkPlanTemplate;
            break;
          case "ComProcDoc":
            return this.$store.state.files.ComProcDoc;
            break;
          case "delegChart":
            return this.$store.state.files.delegChart;
            break;
          case "statementofwork":
            return this.$store.state.files.statementofwork;
            break;
          case "procurementInstruments":
            return this.$store.state.files.procurementInstruments;
            break;
          case "s32s34":
            return this.$store.state.files.s32s34;
            break;
          case "FSRRoadmap":
            return this.$store.state.files.FSRRoadmap;
            break;
          case "prepareFSR":
            return this.$store.state.files.prepareFSR;
            break;
          case "extReports":
            return this.$store.state.files.extReports;
            break;
          case "WorkPlan_lastYear":
            return this.$store.state.files.WorkPlan_lastYear;
            break;
          case "ProcureProcess":
            return this.$store.state.files.ProcureProcess;
            break;
          case "ReportLast":
            return this.$store.state.files.ReportLast;
            break;
          case "WhatNotToDo":
            return this.$store.state.files.WhatNotToDo;
            break;
          case "BidEval":
            return this.$store.state.files.BidEval;
            break;
          case "LegalFrame":
            return this.$store.state.files.LegalFrame;
            break;
          case "Oversight":
            return this.$store.state.files.Oversight;
            break;
          default:
            console.log("nooooo");
            break;
        }
      }
    }
  },
  methods:{
    findType(){
      if(this.texts.filename.indexOf(".pdf") >= 0){
        return {name: "PDF", longName: "Adobe Portable Document Format", mime: "application/pdf"};
      }
      else if(this.texts.filename.indexOf(".docx") >= 0){
        return {name: "DOCX", longName: "Microsoft Word (OpenXML)", mime: "application/vnd.openxmlformats-officedocument.wordprocessing"};
      }
      else if(this.texts.filename.indexOf(".xlsx") >= 0){
        return {name: "XLSX", longName: "Microsoft Excel (OpenXML)", mime: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"};
      }
      else if(this.texts.filename.indexOf(".html") >= 0){
        return {name: "HTML", longName: "HyperText Markup Language (HTML) file", mime: "text/html"};
      }
    },
    detectIE() {
      var ua = window.navigator.userAgent;
      var msie = ua.indexOf("MSIE ");

      if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)){
        return true
      }
      else{ 
        return false;
      }
      
      return false;
    },
    setCheckPosition(){
      this.$nextTick(function() {
        this.$el.querySelector("div.highlight").style.height = this.size + "px";
        this.$el.querySelector("div.highlight").style.width = this.size + "px";
        this.$el.querySelector("div.highlight").style.left = ((this.$el.querySelector("a").offsetWidth - this.size) / 2) + "px";
      });
    },
  },
  mounted(){
    var type = this.findType();
    
    if(this.detectIE() && type.name == "PDF"){
      this.downloadOK = false;
      this.$el.querySelector("a").setAttribute("target", "_blank");
    }
    
    this.$el.querySelector("a").setAttribute("type", type.mime);
    var newSpan = document.createElement("span");
    if(this.fileSize && this.fileSize != ""){
      newSpan.innerHTML = " (<abbr title='" + type.longName + "'>" + type.name + "</abbr>, " + this.fileSize + this.$i18n.t('kb') + ")"
    }
    else{
      newSpan.innerHTML = " (<abbr title='" + type.longName + "'>" + type.name + "</abbr>)";
    }
    this.$el.querySelector("span").appendChild(newSpan);
    
    this.setCheckPosition();
    
    this.$root.$on('bv::collapse::state', (collapseId, isJustShown) => {
      if((collapseId == "toolbox-1" || collapseId == "filesbox") && isJustShown){
        this.setCheckPosition();
      }
    });
    this.$root.$on('bv::modal::shown', (bvEvent, modalId) => {
      this.setCheckPosition();
    });
  },
  watch:{
    opened: function(value){
      if(value){
        this.setCheckPosition();
      }
    }
  }
}

</script>

<style scoped>

  a.download{
    text-decoration: none;
    color: #212529;
    transition: opacity 0.2s; 
  }
  
  a.download:hover{
    text-decoration: none;
    opacity: 0.85;
    /*outline: none;*/
  }

  a.download:focus{
    outline: black solid 2px;
  }
  
  a.download:hover svg.icon, a.download:focus svg.icon{
    opacity: 0.85;
    outline: none;
  }
  
  a.download svg.icon{
    display: block;
    margin: auto;
    
    transition: opacity 0.2s; 
  }
  
  a.download.openHighlight{
    position: relative;
    display: block;
  }
  /*a.openHighlight svg.icon{
    opacity: 0.7;
  }*/
  a.download.openHighlight .highlight{
    position: absolute;
    left: 0;
    top: 0px;
    /*background-color: rgba(0, 0, 0, 0.1);*/
    animation: fadein 0.2s;
  }

  a.download.openHighlight .highlight:focus{
      outline: black 1.5px solid;
    }
  a.download.openHighlight .highlight svg{
    position: absolute;
    top: calc(10% - 16px);
    left: calc(90% - 16px);
    text-align: center;
  }
  
  @keyframes fadein{
    from { opacity: 0 }
    to   { opacity: 1 }
  }

</style>

<i18n>

  {
    "en":{
      "kb": "<abbr title='kylobyte'>KB</abbr>",
      "download": " (this document will be downloaded)",
      "viewed": " (you have already viewed this document)",
      "HTMLTitle": "Open the web version of “",
      "quote": "”"
    },
    "fr":{
      "kb": "&nbsp;<abbr title='kylo-octet'>Ko</abbr>",
      "download": " (ce document sera téléchargé)",
      "viewed": " (vous avez déjà consulté ce document)",
      "HTMLTitle": "Ouvrir la version web de « ",
      "quote": " »"
    }
  }

</i18n>