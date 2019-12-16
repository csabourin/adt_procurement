<template>
  <div>
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
          <th v-html="$t('tableData[1]')" />
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
          <td><input v-b-popover.focus.bottom="$t('salaryPop')" type="number" v-model="salary" name="salary"><input type="checkbox" v-model="salaryGo" name="salaryGo" @change="$bvModal.show('salaryFeedback')"></td>
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
          <td v-html="$t('tableData[41]')" />
          <td v-html="$t('tableData[42]')" />
        </tr>
        <tr>
          <td v-html="$t('tableData[43]')" />
          <td v-html="$t('tableData[44]')" />
          <td v-html="$t('tableData[45]')" />
          <td v-html="$t('tableData[46]')" />
          <td v-html="$t('tableData[47]')" />
          <td v-html="$t('tableData[48]')" />
          <td v-html="$t('tableData[49]')" />
        </tr>
        <tr>
          <td v-html="$t('tableData[50]')" />
          <td v-html="$t('tableData[51]')" />
          <td v-html="$t('tableData[52]')" />
          <td v-html="$t('tableData[53]')" />
          <td v-html="$t('tableData[54]')" />
          <td v-html="$t('tableData[55]')" />
          <td v-html="$t('tableData[56]')" />
        </tr>
        <tr>
          <td v-html="$t('tableData[57]')" />
          <td v-html="$t('tableData[58]')" />
          <td v-html="$t('tableData[59]')" />
          <td v-html="$t('tableData[60]')" />
          <td v-html="$t('tableData[61]')" />
          <td v-html="$t('tableData[62]')" />
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
          <td colspan="6" rowspan="1">&nbsp;</td>
        </tr>
      </tbody>
    </table>
     <b-modal @hide="salaryGo=''" id="salaryFeedback" okOnly>
        <p v-if="salary==423333"><span class="v-right" /> Correct!</span></p>
        <p v-else><span class="v-wrong" /> Incorrect.</span></p>
         <p v-html="$t('salaryFeedback')" />
     </b-modal>
  </div>
</template>
<script type="text/javascript">
export default {
data(){
    return{
        salary:"",
        salaryGo:""
    }
}
}

</script>
<style type="text/css" scoped>
.heading{background-color: #865F56; color:#FFF;}
    th,td{padding:.25em;font-size: 12px}
    input[type=checkbox]:before{content:" ";}
    th{text-align: center}
    td{text-align: right}
</style>
<i18n>{
  "en": {
   "salaryPop":"An officer earning $70,000 is using their sick leave and will not be back for at least 6 months. A junior analyst earning $40,000 is resigning as of October 1. You will not have time to replace them in this fiscal year.",
   "salaryFeedback":"<p>The P6 annual forecast will change to $423,333.</p><ul><li>An employee using their sick leave doesn&rsquo;t impact the annual forecast as you still need to pay their salary.</li><li>Since your junior analyst will be gone the last six months (October to March) of the fiscal year, the P6 Annual Forecast for Salary will decrease by $20,000 ($443,333-$20,000=$423,333).You&rsquo;ll also need to update your Salary Commitments in the financial system.</li></ul>",
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
  "&nbsp;",
  "$6,000",
  "Translation Services",
  "$2,500",
  "$500",
  "$1,200",
  "$2,000",
  "&nbsp;",
  "$2,500",
  "Travel",
  "$8,000",
  "$4,000",
  "$1,700",
  "$7,800",
  "&nbsp;",
  "$8,000",
  "Temp Help",
  "$5,000",
  "$2,000",
  "$1,000",
  "$5,000",
  "&nbsp;",
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
  },"fr":{
  "salaryPop":"- Un officier qui gagne 70 000 $ utilise ses congés de maladie et ne reviendra pas avant au moins six mois. -Un analyste subalterne gagnant 40 000 $ démissionne à compter du 1er octobre. Vous n'aurez pas le temps de les remplacer au cours du présent exercice financier.",
  "salaryFeedback":"<p>&nbsp;Les pr&eacute;visions annuelles de P6 passeront &agrave; 423 333 dollars.</p><ul><li>Un employ&eacute; qui utilise ses cong&eacute;s de maladie n'a pas d'incidence sur les pr&eacute;visions annuelles puisque vous devez quand m&ecirc;me payer son salaire.</li><li>&Eacute;tant donn&eacute; que votre analyste subalterne sera absent au cours des six derniers mois (d'octobre &agrave; mars) de l'exercice, les pr&eacute;visions salariales annuelles de P6 diminueront de 20 000 $ (443 333 $ - 20 000 $ = 423 333 $) et vous devrez &eacute;galement mettre &agrave; jour vos engagements salariaux dans le syst&egrave;me financier.</li></ul>",
  "tableData":[
  "&nbsp;",
  "&nbsp;",
"P6 Budget<br /><br /><br />A",
"P6 Engagements<br /><br /><br />B",
"P6 D&eacute;penses r&eacute;elles depuis le d&eacute;but de l'ann&eacute;e<br />C",
"P5 Pr&eacute;visions annuelles<br /><br />D",
"P6 Pr&eacute;visions annuelles<br /><br />E",
"Exc&eacute;dent/d&eacute;ficit<br /><br /><br />F=E-A",
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
"Accueil et conf&eacute;rences",
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
"&nbsp;",
"6&nbsp;000&nbsp;$",
"Services de traduction",
"2&nbsp;500&nbsp;$",
"500&nbsp;$",
"1&nbsp;200&nbsp;$",
"2&nbsp;000&nbsp;$",
"&nbsp;",
"2&nbsp;500&nbsp;$",
"Voyage",
"8&nbsp;000&nbsp;$",
"4&nbsp;000&nbsp;$",
"1&nbsp;700&nbsp;$",
"7&nbsp;800&nbsp;$",
"&nbsp;",
"8&nbsp;000&nbsp;$",
"Aide temporaire",
"5&nbsp;000&nbsp;$",
"2&nbsp;000&nbsp;$",
"1&nbsp;000&nbsp;$",
"5&nbsp;000&nbsp;$",
"&nbsp;",
"5&nbsp;000&nbsp;$",
"TOTAL",
"44&nbsp;900&nbsp;$",
"15&nbsp;053&nbsp;$",
"17&nbsp;800&nbsp;$",
"44&nbsp;100&nbsp;$",
"0&nbsp;$",
"44&nbsp;900&nbsp;$",
"Notes sur les risques",
"&nbsp;"]
}
  }</i18n>
