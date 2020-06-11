<template functionnal>
  <a :href="require('~/assets/'+ $i18n.locale +'/'+ filename)" :download="filename" :class="opened ? 'openHighlight' : ''" @click="opened = true">
    <genericFile :iconStyle="iconColor" :iconWidth=size :title="$t(title)" :line1="$t(line1)" :line2="$t(line2)" aria-hidden="true" class="icon" />
    <span v-html="$t(lineTag)"></span>
    <span class="v-inv" v-if="downloadOK">{{$t('download')}}</span>
    <font-awesome-icon icon="download" role="presentation" />
    <span class="v-inv" v-if="opened">{{$t('viewed')}}</span>
    <div class="highlight" v-show="opened">
      <font-awesome-icon icon="check" size="2x" role="presentation" />
    </div>
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
    fileSize: { type: String, default: "" },
    name: { type: String, default: "" }
  },
  components: {
    genericFile
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
          case "threeSixty":
            return this.$store.state.files.threeSixty;
            break;
          case "WorkPlanTemplate":
            return this.$store.state.files.WorkPlanTemplate;
            break;
          case "buildWPProcessMap":
            return this.$store.state.files.buildWPProcessMap;
            break;
          case "newBudget":
            return this.$store.state.files.newBudget;
            break;
          case "cycle":
            return this.$store.state.files.cycle;
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
          case "Budget_lastYear":
            return this.$store.state.files.Budget_lastYear;
            break;
          case "ReportLast":
            return this.$store.state.files.ReportLast;
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
        this.$el.querySelector("div.highlight").style.left = ((this.$el.offsetWidth - this.size) / 2) + "px";
      });
    }
  },
  mounted(){
    var type = this.findType();
    
    if(this.detectIE() && type.name == "PDF"){
      this.downloadOK = false;
      this.$el.setAttribute("target", "_blank");
    }
    
    this.$el.setAttribute("type", type.mime);
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
      if(collapseId == "toolbox-1" && isJustShown){
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

  a{
    text-decoration: none;
    color: #212529;
    transition: opacity 0.2s; 
  }
  
  a:hover, a:focus{
    text-decoration: none;
    opacity: 0.85;
    outline: none;
  }
  
  a:hover svg.icon, a:focus svg.icon{
    opacity: 0.85;
    outline: none;
  }
  
  a svg.icon{
    display: block;
    margin: auto;
    
    transition: opacity 0.2s; 
  }
  
  a.openHighlight{
    position: relative;
    display: block;
  }
  /*a.openHighlight svg.icon{
    opacity: 0.7;
  }*/
  a.openHighlight .highlight{
    position: absolute;
    left: 0;
    top: 0px;
    /*background-color: rgba(0, 0, 0, 0.1);*/
    animation: fadein 0.2s;
  }
  a.openHighlight .highlight svg{
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
      "viewed": " (you have already viewed this document)"
    },
    "fr":{
      "kb": "&nbsp;<abbr title='kylo-octet'>Ko</abbr>",
      "download": " (ce document sera téléchargé)",
      "viewed": " (vous avez déjà consulté ce document)"
    }
  }

</i18n>