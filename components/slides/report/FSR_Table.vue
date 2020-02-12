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
      <tbody>
        <tr>
          <td v-html="$t('tableData[1]')" />
          <th v-html="$t('tableData[2]')" />
          <th v-html="$t('tableData[3]')" />
          <th v-html="$t('tableData[4]')" />
          <th v-html="$t('tableData[5]')" />
          <th v-html="$t('tableData[6]')" />
          <th v-html="$t('tableData[7]')" />
        </tr>
        <tr class="heading">
          <td v-html="$t('tableData[8]')" />
          <td v-html="$t('tableData[9]')" />
          <td v-html="$t('tableData[10]')" />
          <td v-html="$t('tableData[11]')" />
          <td v-html="$t('tableData[12]')" />
          <td v-html="$t('tableData[13]')" />
          <td v-html="$t('tableData[14]')" />
        </tr>
        <tr>
          <td v-html="$t('tableData[15]')" />
          <td v-html="$t('tableData[16]')" />
          <td v-html="$t('tableData[17]')" />
          <td v-html="$t('tableData[18]')" />
          <td v-html="$t('tableData[19]')" />
          <td><input :aria-label="$t('instructions')" @key.enter="salaryGo='checked'" v-b-popover.focus.bottom="$t('salaryPop')" type="number" v-model="salary" name="salary"><input type="checkbox" :aria-label="$t('validate')" :title="$t('validate')" v-model="salaryGo" name="salaryGo" @change="$bvModal.show('salaryFeedback')"></td>
          <td>{{443333-salary}}</td>
        </tr>
        <tr>
          <td v-html="$t('tableData[22]')" />
          <td v-html="$t('tableData[23]')" />
          <td v-html="$t('tableData[24]')" />
          <td v-html="$t('tableData[25]')" />
          <td v-html="$t('tableData[26]')" />
          <td>{{salary}}</td>
          <td>{{443333-salary}}</td>
        </tr>
        <tr class="heading">
          <td v-html="$t('tableData[29]')" />
          <td v-html="$t('tableData[30]')" />
          <td v-html="$t('tableData[31]')" />
          <td v-html="$t('tableData[32]')" />
          <td v-html="$t('tableData[33]')" />
          <td v-html="$t('tableData[34]')" />
          <td v-html="$t('tableData[35]')" />
        </tr>
        <tr>
          <td v-html="$t('tableData[36]')" />
          <td v-html="$t('tableData[37]')" />
          <td v-html="$t('tableData[38]')" />
          <td v-html="$t('tableData[39]')" />
          <td v-html="$t('tableData[40]')" />
          <td><input :aria-label="$t('instructions')" v-b-popover.focus.bottom="$t('softwarePop')" type="number" v-model="software" name="software"><input type="checkbox" :aria-label="$t('validate')" :title="$t('validate')" v-model="softwareGo" name="salaryGo" @change="$bvModal.show('softwareFeedback')"></td>
          <td v-html="$t('tableData[42]')" />
        </tr>
        <tr>
          <td v-html="$t('tableData[43]')" />
          <td v-html="$t('tableData[44]')" />
          <td v-html="$t('tableData[45]')" />
          <td v-html="$t('tableData[46]')" />
          <td v-html="$t('tableData[47]')" />
          <td><input :aria-label="$t('instructions')" v-b-popover.focus.bottom="$t('hospitalityPop')" type="number" v-model="hospitality" name="hospitality"><input type="checkbox" :aria-label="$t('validate')" :title="$t('validate')" v-model="hospitalityGo" name="hospitalityGo" @change="showHospitality"></td>
          <td v-html="$t('tableData[49]')" />
        </tr>
        <tr>
          <td v-html="$t('tableData[50]')" />
          <td v-html="$t('tableData[51]')" />
          <td v-html="$t('tableData[52]')" />
          <td v-html="$t('tableData[53]')" />
          <td v-html="$t('tableData[54]')" />
          <td><input :aria-label="$t('instructions')" v-b-popover.focus.bottom="$t('furniturePop')" type="number" v-model="furniture" name="furniture"><input type="checkbox" :aria-label="$t('validate')" :title="$t('validate')" v-model="furnitureGo" name="furnitureGo" @change="$bvModal.show('furnitureFeedback')"></td>
          <td v-html="$t('tableData[56]')" />
        </tr>
        <tr>
          <td v-html="$t('tableData[57]')" />
          <td v-html="$t('tableData[58]')" />
          <td v-html="$t('tableData[59]')" />
          <td v-html="$t('tableData[60]')" />
          <td v-html="$t('tableData[61]')" />
          <td><input :aria-label="$t('instructions')" v-b-popover.focus.bottom="$t('trainingPop')" type="number" v-model="training" name="training"><input type="checkbox" :aria-label="$t('validate')" :title="$t('validate')" v-model="trainingGo" name="trainingGo" @change="$bvModal.show('trainingFeedback')"></td>
          <td v-html="$t('tableData[63]')" />
        </tr>
        <tr>
          <td v-html="$t('tableData[64]')" />
          <td v-html="$t('tableData[65]')" />
          <td v-html="$t('tableData[66]')" />
          <td v-html="$t('tableData[67]')" />
          <td v-html="$t('tableData[68]')" />
          <td v-html="$t('tableData[69]')" />
          <td v-html="$t('tableData[70]')" />
        </tr>
        <tr>
          <td v-html="$t('tableData[71]')" />
          <td v-html="$t('tableData[72]')" />
          <td v-html="$t('tableData[73]')" />
          <td v-html="$t('tableData[74]')" />
          <td v-html="$t('tableData[75]')" />
          <td v-html="$t('tableData[76]')" />
          <td v-html="$t('tableData[77]')" />
        </tr>
        <tr>
          <td v-html="$t('tableData[78]')" />
          <td v-html="$t('tableData[79]')" />
          <td v-html="$t('tableData[80]')" />
          <td v-html="$t('tableData[81]')" />
          <td v-html="$t('tableData[82]')" />
          <td v-html="$t('tableData[83]')" />
          <td v-html="$t('tableData[84]')" />
        </tr>
        <tr>
          <td v-html="$t('tableData[85]')" />
          <td v-html="$t('tableData[86]')" />
          <td v-html="$t('tableData[87]')" />
          <td v-html="$t('tableData[88]')" />
          <td v-html="$t('tableData[89]')" />
          <td v-html="$t('tableData[90]')" />
          <td v-html="$t('tableData[91]')" />
        </tr>
        <tr>
          <td v-html="$t('tableData[92]')" />
          <td v-html="$t('tableData[93]')" />
          <td v-html="$t('tableData[94]')" />
          <td v-html="$t('tableData[95]')" />
          <td v-html="$t('tableData[96]')" />
          <td v-html="$t('tableData[97]')" />
          <td v-html="$t('tableData[98]')" />
        </tr>
        <tr>
          <td v-html="$t('tableData[99]')" />
          <td colspan="6" rowspan="1">{{showRisks}}</td>
        </tr>
      </tbody>
    </table>
    </fieldset>
     <b-modal @hide="salaryGo=''" id="salaryFeedback" okOnly>
        <p v-if="salary==423333"><span class="v-right" /> Correct!</span></p>
        <p v-else><span class="v-wrong" /> Incorrect.</span></p>
         <div v-html="$t('salaryFeedback')" />
     </b-modal>
     <b-modal @hide="softwareGo=''" id="softwareFeedback" okOnly>
        <p v-if="software==4500"><span class="v-right" /> Correct!</span></p>
        <p v-else><span class="v-wrong" /> Incorrect.</span></p>
         <div v-html="$t('softwareFeedback')" />
     </b-modal>
     <b-modal @hide="hospitalityGo=''" id="hospitalityFeedback" okOnly>
        <p v-if="hospitality==11500"><span class="v-right" /> Correct!</span></p>
        <p v-else><span class="v-wrong" /> Incorrect.</span></p>
         <div v-html="$t('hospitalityFeedback')" />
     </b-modal>
     <b-modal @hide="furnitureGo=''" id="furnitureFeedback" okOnly>
        <p v-if="furniture==3900"><span class="v-right" /> Correct!</span></p>
        <p v-else><span class="v-wrong" /> Incorrect.</span></p>
         <div v-html="$t('furnitureFeedback')" />
     </b-modal>
     <b-modal @hide="trainingGo=''" id="trainingFeedback" okOnly>
        <p v-if="training==2400"><span class="v-right" /> Correct!</span></p>
        <p v-else><span class="v-wrong" /> Incorrect.</span></p>
         <div v-html="$t('trainingFeedback')" />
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

  }
}
}

</script>
<style type="text/css" scoped>
.heading{background-color: #865F56; color:#FFF;}
    th,td{padding:.25em;font-size: 12px}
    input[type=checkbox]{margin-left:1em;}
    input[type=checkbox]:before{content:" ";}
    th{text-align: center}
    td{text-align: right}
</style>
<i18n>{
  "en": {
  "validate":"Validate answer",
  "instructions":"Type the number here",
    "salaryPop": "An officer earning $70,000 is using their sick leave and will not be back for at least 6 months. A junior analyst earning $40,000 is resigning as of October 1. You will not have time to replace them in this fiscal year.",
    "salaryFeedback": "<p>The P6 annual forecast will change to $423,333.</p><ul><li>An employee using their sick leave doesn&rsquo;t impact the annual forecast as you still need to pay their salary.</li><li>Since your junior analyst will be gone the last six months (October to March) of the fiscal year, the P6 Annual Forecast for Salary will decrease by $20,000 ($443,333-$20,000=$423,333).You&rsquo;ll also need to update your Salary Commitments in the financial system.</li></ul>",
    "softwarePop": "You found out that the company providing the new software was bought out, and will be charging twice as much starting October 1. You are currently paying $1,000 per year per license; you have three licenses.",
    "softwareFeedback": "<p>The P6 annual forecast will change to $4,500.</p><ul><li>First 6 months: $1,000 X 3 licenses for &frac12; year = $1,500.&nbsp;</li><li>Second 6 months: $2,000 X 3 licenses for &frac12; year = $3,000.</li></ul>",
    "hospitalityPop": "You and your colleague are planning an event for which you will be covering up to $4,500 in hospitality. So far the registration is lower than expected and the event risks being cancelled. Your $3,500 hospitality request was denied by your ADM.",
    "hospitalityFeedback": "<p>The P6 annual forecast will change to $11,500.&nbsp;</p><ul><li>Since there is no indication that the event is being cancelled, this doesn&rsquo;t affect the forecast. However, you should flag this as a potential risk in your notes to finance.</li><li>Since the request was denied, you&rsquo;ll need to decrease your forecast by $3,500 ($15,000 - $3,500 = $11,500).</li></ul>",
    "furniturePop": "A $3,000 specialized office chair broke and you need to replace it immediately.",
    "furnitureFeedback": "<p>The P6 annual forecast will change to $3,900 ($900 + $3,000).</p>",
    "trainingPop": "$2,000 worth of training has been postponed to next May. ",
    "trainingFeedback": "<p>The P6 annual forecast will change to $2,400 ($4,400 - $2,000).</p>",
    "showRisk":"There is a risk that an event may not happen, given low registration. As a result, the surplus would increase by $4,500.",
    "tableData": [
      "&nbsp;",
      "&nbsp;",
      "P6 Budget<br /><br />A",
      "P6 Commitments<br /><br />B",
      "P6 Year-To-Date Actuals<br />C",
      "P5 Annual Forecast<br /><br />D",
      "P6 Annual Forecast<br /><br />E",
      "Surplus / Deficit<br /><br />F=E-A",
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
    "salaryPop": "- Un officier qui gagne 70&nbsp;000&nbsp;$ utilise ses congés de maladie et ne reviendra pas avant au moins six mois. -Un analyste subalterne gagnant 40&nbsp;000&nbsp;$ démissionne à compter du 1er octobre. Vous n&rsquo;aurez pas le temps de les remplacer au cours du présent exercice financier.",
    "salaryFeedback": "<p>&nbsp;Les prévisions annuelles de P6 passeront à 423 333 dollars.</p><ul><li>Un employé qui utilise ses congés de maladie n&rsquo;a pas d&rsquo;incidence sur les prévisions annuelles puisque vous devez quand m&ecirc;me payer son salaire.</li><li>&Eacute;tant donné que votre analyste subalterne sera absent au cours des six derniers mois (d&rsquo;octobre à mars) de l&rsquo;exercice, les prévisions salariales annuelles de P6 diminueront de 20&nbsp;000&nbsp;$ (443&nbsp;333&nbsp;$ - 20&nbsp;000&nbsp;$ = 423&nbsp;333&nbsp;$) et vous devrez également mettre à jour vos engagements salariaux dans le système financier.</li></ul>",
    "softwarePop": "Vous avez découvert que l&rsquo;entreprise qui fournit le nouveau logiciel a été rachetée et qu&rsquo;elle facturera deux fois plus cher à partir du 1er octobre. Vous payez actuellement 1&nbsp;000&nbsp;$ par année par licence ; vous avez trois licences.",
    "softwareFeedback": "<pLes prévisions annuelles de P6 passeront à 4 500 dollars.</p><ul><li>Les 6 premiers mois : 1&nbsp;000&nbsp;$ X 3 licences pour l&rsquo;année &frac12; = 1&nbsp;500&nbsp;$. </li><li>Deuxième 6 mois : 2&nbsp;000&nbsp;$ X 3 licences pour l&rsquo;année &frac12; = 3&nbsp;000&nbsp;$. </li></ul>",
    "hospitalityPop": "Vous et votre collègue planifiez un événement pour lequel vous couvrirez jusqu&rsquo;à 4&nbsp;500&nbsp;$ en frais d&rsquo;accueil. Jusqu&rsquo;à présent, l&rsquo;inscription est inférieure aux prévisions et l&rsquo;événement risque d'être annulé. Votre demande de 3&nbsp;500&nbsp;$ a été refusée par votre SMA.",
    "hospitalityFeedback": "<p>Les prévisions annuelles de P6 passeront à 11 500 dollars. </p><ul><li>Comme rien n&rsquo;indique que l&rsquo;événement est annulé, cela n&rsquo;a pas d&rsquo;incidence sur les prévisions. Toutefois, vous devriez le signaler comme un risque potentiel dans vos notes à financer.</li><li>Puisque la demande a été refusée, vous devrez diminuer votre prévision de 3&nbsp;500&nbsp;$ (1&nbsp;000 $ - 3&nbsp;500 $ = 11&nbsp;500 $).</li></ul>",
    "furniturePop": "Une chaise de bureau spécialisée de 3000 $ s&rsquo;est brisée et vous devez la remplacer immédiatement.",
    "furnitureFeedback": "<p>Les prévisions annuelles de P6 passeront à 3&nbsp;900 dollars (900 $ + 3&nbsp;000 $). </p>",
    "trainingPop": "Une formation d&rsquo;une valeur de 2&nbsp;000 $ a été reportée à mai prochain. ",
    "trainingFeedback": "<p>Les prévisions annuelles de P6 passeront à 2&nbsp;400 dollars (4&nbsp;00 - 2&nbsp;000 $).</p>",
    "showRisk":"Il y a un risque qu&rsquo;un événement ne se produise pas, étant donné le faible nombre d&rsquo;inscriptions. Par conséquent, l&rsquo;excédent augmenterait de 4&nbsp;500&nbsp;$.",
    "tableData": [
      "&nbsp;",
      "&nbsp;",
      "P6 Budget<br /><br /><br />A",
      "P6 Engagements<br /><br /><br />B",
      "P6 Dépenses réelles depuis le début de l&rsquo;année<br />C",
      "P5 Prévisions annuelles<br /><br />D",
      "P6 Prévisions annuelles<br /><br />E",
      "Excédent/déficit<br /><br /><br />F=E-A",
      "Salaire",
      "&nbsp;",
      "&nbsp;",
      "&nbsp;",
      "&nbsp;",
      "&nbsp;",
      "&nbsp;",
      "Salaire",
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
      "Meubles",
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
