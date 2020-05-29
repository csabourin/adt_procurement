<template>
  <div>
    <fieldset>
    <table dir="ltr" border="1" cellspacing="0" cellpadding="0" width="100%">
      <colgroup>
        <col width="157" />
        <col width="61" />
        <col width="94" />
        <col width="86" />
        <col width="71" />
        <col width="71" />
        <col width="63" />
      </colgroup>
      <thead>
        <tr>
          <td v-html="$t('tableData[1]')" />
          <th v-html="$t('tableData[2]')" id="2" scope="col" />
          <th v-html="$t('tableData[3]')" id="3" scope="col" />
          <th v-html="$t('tableData[4]')" id="4" scope="col" />
          <th v-html="$t('tableData[5]')" id="5" scope="col" />
          <th v-html="$t('tableData[6]')" id="6" scope="col" />
          <th v-html="$t('tableData[7]')" id="7" scope="col" />
        </tr>
      </thead>
      <thead>
        <tr class="heading">
          <th v-html="$t('tableData[8]')" colspan="7" id="8" scope="col" />
          <!--<td v-html="$t('tableData[9]')" />
          <td v-html="$t('tableData[10]')" />
          <td v-html="$t('tableData[11]')" />
          <td v-html="$t('tableData[12]')" />
          <td v-html="$t('tableData[13]')" />
          <td v-html="$t('tableData[14]')" />-->
        </tr>
      </thead>
      <tbody>
        <tr>
          <th v-html="$t('tableData[15]')" id="15" scope="row" headers="8" />
          <td v-html="$t('tableData[16]')" headers="2 8 15" />
          <td v-html="$t('tableData[17]')" headers="3 8 15" />
          <td v-html="$t('tableData[18]')" headers="4 8 15" />
          <td v-html="$t('tableData[19]')" headers="5 8 15" />
          <td headers="6 8 15"><input id="salary" :aria-label="$t('instructions')" @key.enter="salaryGo='checked'" v-b-popover.focus.bottom.html="$t('salaryPop') + $t('dismissPopover')" type="number" v-model="salary" name="salary" @keydown.esc="closePopover('salary', $event)"><input type="checkbox" :aria-label="$t('validate')" :title="$t('validate')" v-model="salaryGo" name="salaryGo" @change="$bvModal.show('salaryFeedback')"></td>
          <td headers="6 8 15" aria-live="assertive">{{salarySurplusDeficit}}</td>
        </tr>
        <tr>
          <th v-html="$t('tableData[22]')" id="22" scope="row" headers="8" />
          <td v-html="$t('tableData[23]')" headers="2 8 22" />
          <td v-html="$t('tableData[24]')" headers="3 8 22" />
          <td v-html="$t('tableData[25]')" headers="4 8 22" />
          <td v-html="$t('tableData[26]')" headers="5 8 22" />
          <td headers="6 8 22" aria-live="assertive">{{salaryTotal}}</td>
          <td headers="7 8 22" aria-live="assertive">{{salarySurplusDeficit}}</td>
        </tr>
      </tbody>
      <thead>
        <tr class="heading">
          <th v-html="$t('tableData[29]')" colspan="7" id="29" scope="col" />
          <!--<td v-html="$t('tableData[30]')" />
          <td v-html="$t('tableData[31]')" />
          <td v-html="$t('tableData[32]')" />
          <td v-html="$t('tableData[33]')" />
          <td v-html="$t('tableData[34]')" />
          <td v-html="$t('tableData[35]')" />-->
        </tr>
      </thead>
      <tbody>
        <tr>
          <th v-html="$t('tableData[36]')" id="36" scope="row" headers="29" />
          <td v-html="$t('tableData[37]')" headers="2 29 36" />
          <td v-html="$t('tableData[38]')" headers="3 29 36" />
          <td v-html="$t('tableData[39]')" headers="4 29 36" />
          <td v-html="$t('tableData[40]')" headers="5 29 36" />
          <td headers="6 29 36"><input id="software" :aria-label="$t('instructions')" v-b-popover.focus.bottom="$t('softwarePop')" type="number" v-model="software" name="software" @keydown.esc="closePopover('software')"><input type="checkbox" :aria-label="$t('validate')" :title="$t('validate')" v-model="softwareGo" name="softwareGo" @change="$bvModal.show('softwareFeedback')"></td>
          <!--<td v-html="$t('tableData[42]')" headers="7 29 36" />-->
          <td headers="7 29 36" aria-live="assertive">{{softwareSurplusDeficit}}</td>
        </tr>
        <tr>
          <th v-html="$t('tableData[43]')" id="43" scope="row" headers="29" />
          <td v-html="$t('tableData[44]')" headers="2 29 43" />
          <td v-html="$t('tableData[45]')" headers="3 29 43" />
          <td v-html="$t('tableData[46]')" headers="4 29 43" />
          <td v-html="$t('tableData[47]')" headers="5 29 43" />
          <td headers="6 29 43"><input id="hospitality" :aria-label="$t('instructions')" v-b-popover.focus.bottom="$t('hospitalityPop')" type="number" v-model="hospitality" name="hospitality" @keydown.esc="closePopover('hospitality')"><input type="checkbox" :aria-label="$t('validate')" :title="$t('validate')" v-model="hospitalityGo" name="hospitalityGo" @change="showHospitality"></td>
          <!--<td v-html="$t('tableData[49]')" headers="7 29 43" />-->
          <td headers="7 29 43" aria-live="assertive">{{hospitalitySurplusDeficit}}</td>
        </tr>
        <tr>
          <th v-html="$t('tableData[50]')" id="50" scope="row" headers="29" />
          <td v-html="$t('tableData[51]')" headers="2 29 50" />
          <td v-html="$t('tableData[52]')" headers="3 29 50" />
          <td v-html="$t('tableData[53]')" headers="4 29 50" />
          <td v-html="$t('tableData[54]')" headers="5 29 50" />
          <td headers="6 29 50"><input id="furniture" :aria-label="$t('instructions')" v-b-popover.focus.bottom="$t('furniturePop')" type="number" v-model="furniture" name="furniture" @keydown.esc="closePopover('furniture')"><input type="checkbox" :aria-label="$t('validate')" :title="$t('validate')" v-model="furnitureGo" name="furnitureGo" @change="$bvModal.show('furnitureFeedback')"></td>
          <!--<td v-html="$t('tableData[56]')" headers="7 29 50" />-->
          <td headers="7 29 50" aria-live="assertive">{{furnitureSurplusDeficit}}</td>
        </tr>
        <tr>
          <th v-html="$t('tableData[57]')" id="57" scope="row" headers="29" />
          <td v-html="$t('tableData[58]')" headers="2 29 57" />
          <td v-html="$t('tableData[59]')" headers="3 29 57" />
          <td v-html="$t('tableData[60]')" headers="4 29 57" />
          <td v-html="$t('tableData[61]')" headers="5 29 57" />
          <td headers="6 29 57"><input id="training" :aria-label="$t('instructions')" v-b-popover.focus.bottom="$t('trainingPop')" type="number" v-model="training" name="training" @keydown.esc="closePopover('training')"><input type="checkbox" :aria-label="$t('validate')" :title="$t('validate')" v-model="trainingGo" name="trainingGo" @change="$bvModal.show('trainingFeedback')"></td>
          <!--<td v-html="$t('tableData[63]')" headers="7 29 57" />-->
          <td headers="7 29 57" aria-live="assertive">{{trainingSurplusDeficit}}</td>
        </tr>
        <tr>
          <th v-html="$t('tableData[64]')" id="64" scope="row" headers="29" />
          <td v-html="$t('tableData[65]')" headers="2 29 64" />
          <td v-html="$t('tableData[66]')" headers="3 29 64" />
          <td v-html="$t('tableData[67]')" headers="4 29 64" />
          <td v-html="$t('tableData[68]')" headers="5 29 64" />
          <td v-html="$t('tableData[69]')" headers="6 29 64" />
          <td v-html="$t('tableData[70]')" headers="7 29 64" />
        </tr>
        <tr>
          <th v-html="$t('tableData[71]')" id="71" scope="row" headers="29" />
          <td v-html="$t('tableData[72]')" headers="2 29 71" />
          <td v-html="$t('tableData[73]')" headers="3 29 71" />
          <td v-html="$t('tableData[74]')" headers="4 29 71" />
          <td v-html="$t('tableData[75]')" headers="5 29 71" />
          <td v-html="$t('tableData[76]')" headers="6 29 71" />
          <td v-html="$t('tableData[77]')" headers="7 29 71" />
        </tr>
        <tr>
          <th v-html="$t('tableData[78]')" id="78" scope="row" headers="29" />
          <td v-html="$t('tableData[79]')" headers="2 29 78" />
          <td v-html="$t('tableData[80]')" headers="3 29 78" />
          <td v-html="$t('tableData[81]')" headers="4 29 78" />
          <td v-html="$t('tableData[82]')" headers="5 29 78" />
          <td v-html="$t('tableData[83]')" headers="6 29 78" />
          <td v-html="$t('tableData[84]')" headers="7 29 78" />
        </tr>
        <tr>
          <th v-html="$t('tableData[85]')" id="85" scope="row" headers="29" />
          <td v-html="$t('tableData[86]')" headers="2 29 85" />
          <td v-html="$t('tableData[87]')" headers="3 29 85" />
          <td v-html="$t('tableData[88]')" headers="4 29 85" />
          <td v-html="$t('tableData[89]')" headers="5 29 85" />
          <td v-html="$t('tableData[90]')" headers="6 29 85" />
          <td v-html="$t('tableData[91]')" headers="7 29 85" />
        </tr>
        <tr>
          <th v-html="$t('tableData[92]')" id="92" scope="row" headers="29" />
          <td v-html="$t('tableData[93]')" headers="2 29 92" />
          <td v-html="$t('tableData[94]')" headers="3 29 92" />
          <td v-html="$t('tableData[95]')" headers="4 29 92" />
          <td v-html="$t('tableData[96]')" headers="5 29 92" />
          <!--<td v-html="$t('tableData[97]')" headers="6 29 92" />-->
          <td headers="6 29 92" aria-live="assertive">{{omTotal}}</td>
          <td headers="7 29 92" aria-live="assertive">{{omSurplusDeficitTotal}}</td>
        </tr>
        <tr>
          <th v-html="$t('tableData[99]')" id="99" scope="row" headers="29" />
          <td colspan="6" rowspan="1" headers="29 99">{{showRisks}}</td>
        </tr>
      </tbody>
    </table>
    </fieldset>
     <b-modal @hide="salaryGo=''" id="salaryFeedback" okOnly>
        <p v-if="salary==423333"><span class="v-right" /> Correct!</span></p>
        <p v-else><span class="v-wrong" /> Incorrect.</span></p>
         <div v-html="$t('salaryFeedback')" />
        <template v-slot:modal-ok>{{$t('close')}}</template>
     </b-modal>
     <b-modal @hide="softwareGo=''" id="softwareFeedback" okOnly>
        <p v-if="software==4500"><span class="v-right" /> Correct!</span></p>
        <p v-else><span class="v-wrong" /> Incorrect.</span></p>
         <div v-html="$t('softwareFeedback')" />
        <template v-slot:modal-ok>{{$t('close')}}</template>
     </b-modal>
     <b-modal @hide="hospitalityGo=''" id="hospitalityFeedback" okOnly>
        <p v-if="hospitality==11500"><span class="v-right" /> Correct!</span></p>
        <p v-else><span class="v-wrong" /> Incorrect.</span></p>
         <div v-html="$t('hospitalityFeedback')" />
        <template v-slot:modal-ok>{{$t('close')}}</template>
     </b-modal>
     <b-modal @hide="furnitureGo=''" id="furnitureFeedback" okOnly>
        <p v-if="furniture==3900"><span class="v-right" /> Correct!</span></p>
        <p v-else><span class="v-wrong" /> Incorrect.</span></p>
         <div v-html="$t('furnitureFeedback')" />
        <template v-slot:modal-ok>{{$t('close')}}</template>
     </b-modal>
     <b-modal @hide="trainingGo=''" id="trainingFeedback" okOnly>
        <p v-if="training==2400"><span class="v-right" /> Correct!</span></p>
        <p v-else><span class="v-wrong" /> Incorrect.</span></p>
         <div v-html="$t('trainingFeedback')" />
        <template v-slot:modal-ok>{{$t('close')}}</template>
     </b-modal>
  </div>
</template>
<script type="text/javascript">
export default {
  data(){
    return{
      salary:"",
      salaryGo:"",
      software:"",
      softwareGo:"",
      hospitality:"",
      hospitalityGo:"",
      furnitureGo:"",
      furniture:"",
      trainingGo:"",
      training:"",
      showRisks:""
    }
  },
  methods:{
    showHospitality(){
      this.$bvModal.show('hospitalityFeedback')
      this.showRisks=this.$i18n.t('showRisk')

    },
    format(n, lang){
      var formatter = new Intl.NumberFormat(lang, {
        style: 'currency',
        currency: 'CAD',
      });
      return formatter.format(n);
    },
    numberize(value){
      return Number(value.split("$").join("").split(",").join("").split(" ").join("").split("&nbsp;").join("").replace(/\s/g, ''))
    },
    closePopover(target, event){
      if(this.$el.querySelector("#" + target).getAttribute("aria-describedby")){
        if(this.$el.querySelector("#" + target).getAttribute("aria-describedby").indexOf("__bv_popover_") >= 0){
          event.stopPropagation();
          console.log(target)
          this.$root.$emit('bv::hide::popover', target);
        }
      }
    }
  },
  computed:{
    salarySurplusDeficit: function(){    
      var value = this.numberize(this.$t("tableData[16]")) - this.salary;
      if(this.$i18n.locale == "en"){
        return this.format(value, "en-CA").slice(0, -3).replace("CA", "");
      }
      else if(this.$i18n.locale == "fr"){
        return this.format(value, "fr").replace("CA", "").replace(",00", "");
      }
    },
    salaryTotal: function(){
      var value = this.salary;
      if(this.$i18n.locale == "en"){
        return this.format(value, "en-CA").slice(0, -3).replace("CA", "");
      }
      else if(this.$i18n.locale == "fr"){
        return this.format(value, "fr-CA").replace("CA", "").replace(",00", "");
      }
    },
    softwareSurplusDeficit: function(){
      var value = this.numberize(this.$t("tableData[37]")) - this.software;
      if(this.$i18n.locale == "en"){
        return this.format(value, "en-CA").slice(0, -3).replace("CA", "");
      }
      else if(this.$i18n.locale == "fr"){
        return this.format(value, "fr").replace("CA", "").replace(",00", "");
      }
    },
    hospitalitySurplusDeficit: function(){
      var value = this.numberize(this.$t("tableData[44]")) - this.hospitality;
      if(this.$i18n.locale == "en"){
        return this.format(value, "en-CA").slice(0, -3).replace("CA", "");
      }
      else if(this.$i18n.locale == "fr"){
        return this.format(value, "fr").replace("CA", "").replace(",00", "");
      }
    },
    furnitureSurplusDeficit: function(){
      var value = this.numberize(this.$t("tableData[51]")) - this.furniture;
      if(this.$i18n.locale == "en"){
        return this.format(value, "en-CA").slice(0, -3).replace("CA", "");
      }
      else if(this.$i18n.locale == "fr"){
        return this.format(value, "fr").replace("CA", "").replace(",00", "");
      }
    },
    trainingSurplusDeficit: function(){
      var value = this.numberize(this.$t("tableData[58]")) - this.training;
      if(this.$i18n.locale == "en"){
        return this.format(value, "en-CA").slice(0, -3).replace("CA", "");
      }
      else if(this.$i18n.locale == "fr"){
        return this.format(value, "fr").replace("CA", "").replace(",00", "");
      }
    },
    omTotal: function(){
      var value = Number(this.software) + Number(this.hospitality) + Number(this.furniture) + Number(this.training) + this.numberize(this.$t("tableData[69]")) + this.numberize(this.$t("tableData[76]")) + this.numberize(this.$t("tableData[83]")) + this.numberize(this.$t("tableData[90]"));
      if(this.$i18n.locale == "en"){
        return this.format(value, "en-CA").slice(0, -3).replace("CA", "");
      }
      else if(this.$i18n.locale == "fr"){
        return this.format(value, "fr-CA").replace("CA", "").replace(",00", "");
      }
    },
    omSurplusDeficitTotal: function(){
      var value = this.numberize(this.softwareSurplusDeficit) + this.numberize(this.hospitalitySurplusDeficit) + this.numberize(this.furnitureSurplusDeficit) + this.numberize(this.trainingSurplusDeficit) + this.numberize(this.$t("tableData[70]")) + this.numberize(this.$t("tableData[77]")) + this.numberize(this.$t("tableData[84]")) + this.numberize(this.$t("tableData[91]"));
      if(this.$i18n.locale == "en"){
        return this.format(value, "en-CA").slice(0, -3).replace("CA", "");
      }
      else if(this.$i18n.locale == "fr"){
        return this.format(value, "fr").replace("CA", "").replace(",00", "");
      }
    }
  }
}

</script>
<style type="text/css" scoped>
  
  .heading{
    background-color: #865F56;
    color:#FFF;font-weight: bold;
  }
  th,td{
    padding:.25em;
    font-size: 12px;
  }
  input[type=checkbox]{
    margin-left:1em;
  }
  input[type=checkbox]:before{
    content:" ";
  }
  th{
    text-align: center
  }
  td{
    text-align: right
  }
  th[scope="row"]{
    text-align: right
  }
  td[aria-live]{
    background-color: #E1D5D0;
  }
  
</style>
<i18n>{
  "en": {
    "validate":"Validate answer",
    "instructions":"Type the number here",
    "dismissPopover": "<span class='v-inv'>Press the escape key to dismiss this popopver</span>",
    "salaryPop": "An officer earning $70,000 is using their sick leave and will not be back for at least 6 months. A junior analyst earning $40,000 is resigning as of October 1. You will not have time to replace them in this fiscal year.",
    "salaryFeedback": "<p>The P6 Annual Forecast will change to $423,333.</p><ul><li>An employee using their sick leave doesn’t impact the Annual Forecast as you still need to pay their salary.</li><li>Since your junior analyst will be gone the last 6 months (October to March) of the fiscal year, the P6 Annual Forecast for Salary will decrease by $20,000 ($443,333 - $20,000 = $423,333).You’ll also need to update your Salary commitments in the financial system.</li></ul>",
    "softwarePop": "You found out that the company providing the new software was bought out, and will be charging twice as much starting October 1. You are currently paying $1,000 per year per license; you have 3 licenses.",
    "softwareFeedback": "<p>The P6 Annual Forecast will change to $4,500.</p><ul><li>First 6 months: $1,000 × 3 licenses for &frac12; year = $1,500</li><li>Second 6 months: $2,000 × 3 licenses for &frac12; year = $3,000</li></ul>",
    "hospitalityPop": "You and your colleague are planning an event for which you will be covering up to $4,500 in hospitality. So far, the registration is lower than expected, and the event risks being cancelled. Your $3,500 hospitality request was denied by your ADM.",
    "hospitalityFeedback": "<p>The P6 Annual Forecast will change to $11,500.&nbsp;</p><ul><li>Since there is no indication that the event is being cancelled, this doesn’t affect the forecast. However, you should flag this as a potential risk in your notes to Finance.</li><li>Since the request was denied, you’ll need to decrease your forecast by $3,500 ($15,000 - $3,500 = $11,500).</li></ul>",
    "furniturePop": "A $3,000 specialized office chair broke and you need to replace it immediately.",
    "furnitureFeedback": "<p>The P6 Annual Forecast will change to $3,900 ($900 + $3,000).</p>",
    "trainingPop": "$2,000 worth of training has been postponed to next May. ",
    "trainingFeedback": "<p>The P6 Annual Forecast will change to $2,400 ($4,400 - $2,000).</p>",
    "showRisk":"There is a risk that the event may not happen, given low registration. As a result, the surplus would increase by $4,500.",
    "tableData": [
      "&nbsp;",
      "&nbsp;",
      "P6 Budget<br /><br />A",
      "P6 Commitments<br /><br />B",
      "P6 Year-To-Date Actuals<br />C",
      "P5 Annual Forecast<br /><br />D",
      "P6 Annual Forecast<br /><br />E",
      "Surplus / Deficit<br /><br />F=E&minus;A",
      "Salary",
      "&nbsp;",
      "&nbsp;",
      "&nbsp;",
      "&nbsp;",
      "&nbsp;",
      "&nbsp;",
      "Salary",
      "$443,333",
      "$240,139",
      "$203,194",
      "$443,333",
      "&nbsp;",
      "$443,333",
      "TOTAL",
      "$443,333",
      "$240,139",
      "$203,194",
      "$443,333",
      "$0",
      "$443,333",
      "O&amp;M",
      "&nbsp;",
      "&nbsp;",
      "&nbsp;",
      "&nbsp;",
      "&nbsp;",
      "&nbsp;",
      "Software License",
      "$3,000",
      "$1,500",
      "$1,500",
      "$3,000",
      "&nbsp;",
      "$3,000",
      "Hospitality &amp; Conferences",
      "$15,000",
      "$2,500",
      "$8,000",
      "$15,000",
      "&nbsp;",
      "$15,000",
      "Furniture",
      "$1,000",
      "$0",
      "$900",
      "$900",
      "&nbsp;",
      "$1,000",
      "Training",
      "$4,400",
      "$0",
      "$2,400",
      "$4,400",
      "&nbsp;",
      "$4,400",
      "Office Supplies",
      "$6,000",
      "$4,553",
      "$1,100",
      "$6,000",
      "$6,000",
      "$6,000",
      "Translation Services",
      "$2,500",
      "$500",
      "$1,200",
      "$2,000",
      "$2,000",
      "$2,500",
      "Travel",
      "$8,000",
      "$4,000",
      "$1,700",
      "$7,800",
      "$7,800",
      "$8,000",
      "Temp Help",
      "$5,000",
      "$2,000",
      "$1,000",
      "$5,000",
      "$5,000",
      "$5,000",
      "TOTAL",
      "$44,900",
      "$15,053",
      "$17,800",
      "$44,100",
      "$0",
      "$44,900",
      "Notes on Risks"
    ]
  },
  "fr": {
    "validate":"Valider la réponse",
    "instructions":"Entrez les chiffres ici",
    "dismissPopover": "<span class='v-inv'>Appuyez sur la touche d'échappement pour fermer ce message.</span>",
    "salaryPop": "- Un agent qui gagne 70 000 $ utilise ses congés de maladie et ne reviendra pas avant au moins 6 mois. -Un analyste subalterne gagnant 40 000 $ démissionne à compter du 1er octobre. Vous n’aurez pas le temps de les remplacer au cours du présent exercice financier.",
    "salaryFeedback": "<p>&nbsp;Les prévisions annuelles de P6 passeront à 423 333 $.</p><ul><li>Un employé qui utilise ses congés de maladie n’a pas d’incidence sur les prévisions annuelles puisque vous devez quand m&ecirc;me payer son salaire.</li><li>Étant donné que l’analyste subalterne sera absent pendant les six derniers mois (d’octobre à mars) de l’exercice, les prévisions salariales annuelles de P6 diminueront de 20 000 $ (443 333 $ - 20 000 $ = 423 333 $) et vous devrez également mettre à jour vos engagements salariaux dans le système financier.</li></ul>",
    "softwarePop": "Vous avez découvert que l’entreprise qui fournit le nouveau logiciel a été rachetée et qu’elle facturera 2 fois plus à partir du 1er octobre. Vous payez actuellement 1 000 $ par an et par licence; vous avez 3 licences.",
    "softwareFeedback": "<p>Les prévisions annuelles de P6 passeront à 4 500 $.</p><ul><li>Les 6 premiers mois : 1 000 $ × 3 licences pour l’année &frac12; = 1 500 $. </li><li>Les 6 mois suivants : 2 000 $ × 3 licences pour l’année &frac12; = 3 000 $. </li></ul>",
    "hospitalityPop": "Vous et votre collègue planifiez un événement pour lequel vous couvrirez jusqu’à 4 500 $ en frais d’accueil. Jusqu’à présent, l’inscription est inférieure aux prévisions et l’événement risque d'être annulé. Votre demande de 3&nbsp;500&nbsp;$ a été refusée par votre SMA.",
    "hospitalityFeedback": "<p>Les prévisions annuelles de P6 passeront à 11 500 $. </p><ul><li>Comme rien n’indique que l’événement est annulé, cela n’a pas d’incidence sur les prévisions. Toutefois, vous devriez le signaler comme risque potentiel dans vos notes aix Finances.</li><li>Puisque la demande a été refusée, vous devrez diminuer votre prévision de 3&nbsp;500&nbsp;$ (1&nbsp;000 $ - 3&nbsp;500 $ = 11&nbsp;500 $).</li></ul>",
    "furniturePop": "Une chaise de bureau spécialisée de 3000 $ s’est brisée et vous devez la remplacer immédiatement.",
    "furnitureFeedback": "<p>Les prévisions annuelles de P6 passeront à 3&nbsp;900 $ (900 $ + 3&nbsp;000 $). </p>",
    "trainingPop": "Une formation d’une valeur de 2 000 $ a été reportée au mois de mai prochain. ",
    "trainingFeedback": "<p>Les prévisions annuelles de P6 passeront à 2&nbsp;400 $ (4 400 $ - 2&nbsp;000 $).</p>",
    "showRisk":"Il y a un risque que l’événement ne se produise pas, étant donné le faible nombre d’inscriptions. Par conséquent, l’excédent augmenterait de 4 500 $.",
    "tableData": [
      "&nbsp;",
      "&nbsp;",
      "P6 Budget<br /><br /><br />A",
      "P6 Engagements<br /><br /><br />B",
      "P6 Dépenses réelles depuis le début de l’année<br />C",
      "P5 Prévisions annuelles<br /><br />D",
      "P6 Prévisions annuelles<br /><br />E",
      "Excédent/déficit<br /><br /><br />F=E&minus;A",
      "Salaires",
      "&nbsp;",
      "&nbsp;",
      "&nbsp;",
      "&nbsp;",
      "&nbsp;",
      "&nbsp;",
      "Salaires",
      "443&nbsp;333&nbsp;$",
      "240&nbsp;139&nbsp;$",
      "203&nbsp;194&nbsp;$",
      "443&nbsp;333&nbsp;$",
      "&nbsp;",
      "443&nbsp;333&nbsp;$",
      "TOTAL",
      "443&nbsp;333&nbsp;$",
      "240&nbsp;139&nbsp;$",
      "203&nbsp;194&nbsp;$",
      "443&nbsp;333&nbsp;$",
      "0&nbsp;$",
      "443&nbsp;333&nbsp;$",
      "F&amp;E",
      "&nbsp;",
      "&nbsp;",
      "&nbsp;",
      "&nbsp;",
      "&nbsp;",
      "&nbsp;",
      "Licence de logiciel",
      "3&nbsp;000&nbsp;$",
      "1&nbsp;500&nbsp;$",
      "1&nbsp;500&nbsp;$",
      "3&nbsp;000&nbsp;$",
      "&nbsp;",
      "3&nbsp;000&nbsp;$",
      "Accueil et conférences",
      "15&nbsp;000&nbsp;$",
      "2&nbsp;500&nbsp;$",
      "8&nbsp;000&nbsp;$",
      "15&nbsp;000&nbsp;$",
      "&nbsp;",
      "15&nbsp;000&nbsp;$",
      "Mobilier",
      "1&nbsp;000&nbsp;$",
      "0&nbsp;$",
      "900&nbsp;$",
      "900&nbsp;$",
      "&nbsp;",
      "1&nbsp;000&nbsp;$",
      "Formation",
      "4&nbsp;400&nbsp;$",
      "0&nbsp;$",
      "2&nbsp;400&nbsp;$",
      "4&nbsp;400&nbsp;$",
      "&nbsp;",
      "4&nbsp;400&nbsp;$",
      "Fournitures de bureau",
      "6&nbsp;000&nbsp;$",
      "4&nbsp;553&nbsp;$",
      "1&nbsp;100&nbsp;$",
      "6&nbsp;000&nbsp;$",
      "6&nbsp;000&nbsp;$",
      "6&nbsp;000&nbsp;$",
      "Services de traduction",
      "2&nbsp;500&nbsp;$",
      "500&nbsp;$",
      "1&nbsp;200&nbsp;$",
      "2&nbsp;000&nbsp;$",
      "2&nbsp;000&nbsp;$",
      "2&nbsp;500&nbsp;$",
      "Voyage",
      "8&nbsp;000&nbsp;$",
      "4&nbsp;000&nbsp;$",
      "1&nbsp;700&nbsp;$",
      "7&nbsp;800&nbsp;$",
      "7&nbsp;800&nbsp;$",
      "8&nbsp;000&nbsp;$",
      "Aide temporaire",
      "5&nbsp;000&nbsp;$",
      "2&nbsp;000&nbsp;$",
      "1&nbsp;000&nbsp;$",
      "5&nbsp;000&nbsp;$",
      "5&nbsp;000&nbsp;$",
      "5&nbsp;000&nbsp;$",
      "TOTAL",
      "44&nbsp;900&nbsp;$",
      "15&nbsp;053&nbsp;$",
      "17&nbsp;800&nbsp;$",
      "44&nbsp;100&nbsp;$",
      "0&nbsp;$",
      "44&nbsp;900&nbsp;$",
      "Notes sur les risques",
      "&nbsp;"
    ]
  }
}</i18n>
