<template>
  <span>
    <p v-html="$t('instructions')" />
    <p><select v-model="Q1"><option disabled value=''>{{$t('qDisabled')}}</option>
      <option v-for="(term,index) in $t('keyTerms')" :key="index" :value="index" v-html="term"/>
    </select> {{$t('sentences[0]')}} 
    <span v-if="Q1"><span  class="v-right" v-if="Q1=='2'"><strong>Correct!</strong></span><span v-else class="v-wrong"><strong>Incorrect.</strong></span></span>

    </p>
    <p><select v-model="Q2"><option disabled value=''>{{$t('qDisabled')}}</option>
      <option v-for="(term,index) in $t('keyTerms')" :key="index" :value="index" v-html="term"/>
    </select> {{$t('sentences[1]')}}  <span v-if="Q1"><span  class="v-right" v-if="Q2=='1'"><strong>Correct!</strong></span><span v-else class="v-wrong"><strong>Incorrect.</strong></span></span></p>
    <p>Temp Help is considered a contract and paid out of <select v-model="Q3"><option disabled value=''>{{$t('qDisabled')}}</option>
      <option v-for="(term,index) in $t('keyTerms')" :key="index" :value="index" v-html="term"/>
    </select>. [O&amp;M]</p>
    Money given to non-governmental organizations for refugee settlement, like language classes, would come out of the <select v-model="Q4"><option disabled value=''>{{$t('qDisabled')}}</option>
      <option v-for="(term,index) in $t('keyTerms')" :key="index" :value="index" v-html="term"/>
    </select> budget. [Grants and Contributions (Gs&amp;Cs)]</p>
    <p>The Operating budget consists of both <select v-model="Q5"><option disabled value=''>{{$t('qDisabled')}}</option>
      <option v-for="(term,index) in $t('keyTerms')" :key="index" :value="index" v-html="term"/>
    </select> and <select v-model="Q6"><option disabled value=''>{{$t('qDisabled')}}</option>
      <option v-for="(term,index) in $t('keyTerms')" :key="index" :value="index" v-html="term"/>
    </select>. [O&amp;M / Salary in either order]</p>
    <p><select v-model="Q7"><option disabled value=''>{{$t('qDisabled')}}</option>
      <option v-for="(term,index) in $t('keyTerms')" :key="index" :value="index" v-html="term"/>
    </select> is money that is provided to entities outside of the federal government to advance the department’s <p>mandate. [Grants and Contributions (Gs&amp;Cs)]</p>
      <p><select v-model="Q8"><option disabled value=''>{{$t('qDisabled')}}</option>
      <option v-for="(term,index) in $t('keyTerms')" :key="index" :value="index" v-html="term"/>
    </select> is for items that will depreciate over time, such as a new addition to an existing building, vehicles, etc. [Capital]</p>
      <p><select v-model="Q9">
          <option disabled value=''>{{$t('qDisabled')}}</option>
          <option>Non-Discretionary</option>
          <option>Discretionary</option>
        </select> costs are essential for delivering on your activities and if cut will result in you not being able to <p>deliver on them. [Non-Discretionary]</p>
        <p><select v-model="Q10">
            <option disabled value=''>{{$t('qDisabled')}}</option>
            <option>Non-Discretionary</option>
            <option>Discretionary</option>
          </select> costs are less likely to have a negative impact on delivering your activities. [Discretionary]</p>
  </span>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      Q1: '',
      Q2: '',
      Q3: '',
      Q4: '',
      Q5: '',
      Q6: '',
      Q7: '',
      Q8: '',
      Q9: '',
      Q10: ''
    }
  }
}

</script>
<i18n>
  {
  "en":{
  "instructions":"Here’s a chance for you to confirm your knowledge of budgets and costs. Select the best choice to fill in the blanks.",
  "keyTerms":{
  "1":"Operating &amp; Maintenance (O&amp;M)",
  "2":"Salary",
  "3":"Grants and Contributions (Gs&amp;Cs)",
  "4":"Capital"
  },
  "sentences":[
  "includes Indeterminate, Term and Casual Positions, Overtime, Performance Pay and Leave Cashouts.",
  "includes items such as Travel, Training, Translation, Office Supplies, etc."
  ],
  "qDisabled":"Please select one"
  },
  "fr":{
  "instructions":"Voici l'occasion pour vous de confirmer votre connaissance des budgets et des coûts. Sélectionnez le meilleur choix pour remplir les blancs. ",
  "keyTerms":{
  "1":"Fonctionnement et entretien (F et E)",
  "2":"Salaire",
  "3":"Subventions et contributions (S et C)",
  "4":"Immobilisations"
  },
  "sentences":[
  "comprend les postes de durée indéterminée, déterminée et occasionnelle, les heures supplémentaires, la rémunération au rendement et les congés.",
  "comprend des articles comme les voyages, la formation, la traduction, les fournitures de bureau, etc."
  ],
  "qDisabled":"Veuillez faire un choix"
  }
  }
</i18n>




