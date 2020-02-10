<template>
  <span>
    <p v-html="$t('instructions')" />
    <b-card>
      <b-tabs v-model="tabIndex">
        <b-tab title="Question 1">
          <p>&nbsp;</p>
          <p><select v-model="Q1">
              <option disabled value=''>{{$t('qDisabled')}}</option>
              <option v-for="(term,index) in $t('keyTerms[0]')" :key="index" :value="index" v-html="term" />
            </select> {{$t('sentences[0]')}}</p>
          <p v-if="Q1"><span class="v-right" v-if="Q1=='2'"><strong>Correct!</strong></span><span v-else class="v-wrong"><strong>Incorrect.</strong></span></p>
          <hr>
          <p><select v-model="Q2">
              <option disabled value=''>{{$t('qDisabled')}}</option>
              <option v-for="(term,index) in $t('keyTerms[0]')" :key="index" :value="index" v-html="term" />
            </select> {{$t('sentences[1]')}}</p>
          <p v-if="Q2"><span class="v-right" v-if="Q2=='1'"><strong>Correct!</strong></span><span v-else class="v-wrong"><strong>Incorrect.</strong></span></p>
          <hr>
          <i18n path="sentences[2]" tag="p"><select v-model="Q3">
              <option disabled value=''>{{$t('qDisabled')}}</option>
              <option v-for="(term,index) in $t('keyTerms[0]')" :key="index" :value="index" v-html="term" />
            </select>
          </i18n>
          <p v-if="Q3"><span class="v-right" v-if="Q3=='1'"><strong>Correct!</strong></span><span v-else class="v-wrong"><strong>Incorrect.</strong></span></p>
          <hr>
          <i18n path="sentences[3]" tag="p"><select v-model="Q4">
              <option disabled value=''>{{$t('qDisabled')}}</option>
              <option v-for="(term,index) in $t('keyTerms[0]')" :key="index" :value="index" v-html="term" />
            </select>
          </i18n>
          <p v-if="Q4"><span class="v-right" v-if="Q4=='3'"><strong>Correct!</strong></span><span v-else class="v-wrong"><strong>Incorrect.</strong></span></p>
          <hr>
          <i18n path="sentences[4]" tag="p"> <select v-model="Q5a">
              <option disabled value=''>{{$t('qDisabled')}}</option>
              <option v-for="(term,index) in $t('keyTerms[0]')" :key="index" :value="index" v-html="term" />
            </select>
            <select v-model="Q5b">
              <option disabled value=''>{{$t('qDisabled')}}</option>
              <option v-for="(term,index) in $t('keyTerms[0]')" :key="index" :value="index" v-html="term" />
            </select>
          </i18n>
          <p><span v-if="Q5a && Q5b"><span class="v-right" v-if="(Q5a=='1' && Q5b=='2') || (Q5a=='2' && Q5b=='1')"><strong>Correct!</strong></span><span v-else class="v-wrong"><strong>Incorrect.</strong></span></span></p>
          <hr>
          <p><select v-model="Q6">
              <option disabled value=''>{{$t('qDisabled')}}</option>
              <option v-for="(term,index) in $t('keyTerms[0]')" :key="index" :value="index" v-html="term" />
            </select> {{$t('sentences[5]')}}</p>
          <p v-if="Q6"><span class="v-right" v-if="Q6=='3'"><strong>Correct!</strong></span><span v-else class="v-wrong"><strong>Incorrect.</strong></span></p>
          <hr>
          <p><select v-model="Q7">
              <option disabled value=''>{{$t('qDisabled')}}</option>
              <option v-for="(term,index) in $t('keyTerms[0]')" :key="index" :value="index" v-html="term" />
            </select> {{$t('sentences[6]')}}</p>
          <p v-if="Q7"><span class="v-right" v-if="Q7=='4'"><strong>Correct!</strong></span><span v-else class="v-wrong"><strong>Incorrect.</strong></span></p>
        </b-tab>
        <b-tab title="Question 2">
          <p>&nbsp;</p>
          <i18n path="sentences[7]" tag="p"><select v-model="Q8">
              <option disabled value=''>{{$t('qDisabled')}}</option>
              <option v-for="(term,index) in $t('keyTerms[1]')" :key="index" :value="index" v-html="term" />
            </select>
          </i18n>
          <p v-if="Q8"><span class="v-right" v-if="Q8=='1'"> <strong>Correct!</strong></span><span v-else class="v-wrong"><strong>Incorrect.</strong></span></p>
          <hr>
          <i18n path="sentences[8]" tag="p"><select v-model="Q9">
              <option disabled value=''>{{$t('qDisabled')}}</option>
              <option v-for="(term,index) in $t('keyTerms[1]')" :key="index" :value="index" v-html="term" />
            </select></i18n>
          <p v-if="Q9"><span class="v-right" v-if="Q9=='2'"> <strong>Correct!</strong></span><span v-else class="v-wrong"><strong>Incorrect.</strong></span></p>
         <hr>
          <i18n path="sentences[9]" tag="p"><select v-model="Q10">
              <option disabled value=''>{{$t('qDisabled')}}</option>
              <option v-for="(term,index) in $t('keyTerms[1]')" :key="index" :value="index" v-html="term" />
            </select></i18n>
          <p v-if="Q10"><span class="v-right" v-if="Q10=='3'"> <strong>Correct!</strong></span><span v-else class="v-wrong"><strong>Incorrect.</strong></span></p>
        </b-tab>
        <b-tab title="Question 3">
          <p>&nbsp;</p>
          <i18n path="sentences[10]" tag="p"><select v-model="Q11">
              <option disabled value=''>{{$t('qDisabled')}}</option>
              <option v-for="(term,index) in $t('keyTerms[2]')" :key="index" :value="index" v-html="term" />
            </select></i18n>
          <p v-if="Q11"><span class="v-right" v-if="Q11=='1'"> <strong>Correct!</strong></span><span v-else class="v-wrong"><strong>Incorrect.</strong></span></p>
          <hr>
          <i18n path="sentences[11]" tag="p"><select v-model="Q12">
              <option disabled value=''>{{$t('qDisabled')}}</option>
              <option v-for="(term,index) in $t('keyTerms[2]')" :key="index" :value="index" v-html="term" />
            </select></i18n><span v-if="Q12"><span class="v-right" v-if="Q12=='2'"><strong>Correct!</strong></span><span v-else class="v-wrong"><strong>Incorrect.</strong></span></span>
          </p>
        </b-tab>
      </b-tabs>
      <!-- Control buttons-->
      <div class="text-center">
        <b-button-group class="mt-2">
          <b-button @click="tabIndex--" :disabled="tabIndex<=0">{{$t('previousPage')}}</b-button>
          <b-button @click="tabIndex++" :disabled="tabIndex>=2">{{$t('nextPage')}}</b-button>
        </b-button-group>
      </div>
    </b-card>
  </span>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      tabIndex:0,
      Q1: '',
      Q2: '',
      Q3: '',
      Q4: '',
      Q5a: '',
      Q5b: '',
      Q6: '',
      Q7: '',
      Q8: '',
      Q9: '',
      Q10: '',
      Q11: '',
      Q12: ''
    }
  }
}
</script>
<i18n>{
  "en": {
  "qDisabled": "Choose",
  "instructions": "Here's a chance for you to confirm your knowledge of budgets and costs. Select the best choice to fill in the blanks.",
  "keyTerms": [
  {
  "1": "Operating &amp; Maintenance (O&amp;M)",
  "2": "Salary",
  "3": "Grants and Contributions (Gs&amp;Cs)",
  "4": "Capital"
  },
  {
  "1": "Non-discretionary",
  "2": "Discretionary",
  "3": "Notes"
  },
  {
  "1": "a predetermined budget amount",
  "2": "$0"
  }
  ],
  "sentences": [
  "includes indeterminate, term and casual positions, overtime, performance pay and leave cash-outs.",
  "includes items such as travel, training, translation, office supplies, etc.",
  "Temp help is considered a contract and paid out of {0}.",
  "Money given to non-governmental organizations for refugee settlement, like language classes, would come out of the {0} budget.",
  "The operating budget consists of both {0} and {1}.",
  "is money that is provided to entities outside of the federal government to advance the department's mandate.",
  "is for items that will depreciate over time, such as a new addition to an existing building, vehicles, etc.",
  "{0} costs are essential for delivering on your activities and if cut will result in you not being able to deliver on them.",
  "{0} costs are less likely to have a negative impact on delivering your activities.",
  "A best practice is to include a {0} column in your budget requirements to remind you how you arrived at your figures.",
  "If you have reference levels, you start with {0}. ",
  "If you don't have reference levels, you start with {0}."
  ]
  },
  "fr": {
  "qDisabled": "Choisissez",
  "instructions": "Voici l&rsquo;occasion pour vous de confirmer votre connaissance des budgets et des coûts. Sélectionnez le meilleur choix pour remplir les blancs. ",
  "keyTerms": [
  {
  "1": "Fonctionnement et entretien (F et E)",
  "2": "Salaires",
  "3": "Subventions et contributions (S et C)",
  "4": "Immobilisations"
  },
  {
  "1": "non discrétionnaires",
  "2": "discrétionnaires",
  "3": "Notes"
  },
  {
  "1": "un montant prédéterminé prévu au budget",
  "2": "0$"
  }
  ],
  "sentences": [
  "comprend les postes de durée indéterminée, déterminée et occasionnelle, les heures supplémentaires, la rémunération au rendement et les congés.",
  "comprend des articles comme les voyages, la formation, la traduction, les fournitures de bureau, etc.",
  "L’aide temporaire est considérée comme un contrat et est payée à même {0}.",
  "L’argent donné aux organisations non gouvernementales pour l’établissement des réfugiés, comme les cours de langue, proviendrait du budget de {0}",
  "Le budget de fonctionnement comprend {0} et {1}.",
  "est de l’argent qui est fourni à des entités extérieures au gouvernement fédéral, pour répondre au mandat du ministère.",
  "s’applique aux articles qui se déprécieront avec le temps, comme une annexe à un bâtiment, des véhicules, etc.",
  "Les coûts {0} sont essentiels à l’exécution de vos activités et, si des compressions budgétaires peuvent vous empêcher de les exécuter, vous pourriez ne pas être en mesure de les faire.",
  "Les coûts {0} sont moins susceptibles d’avoir une incidence négative sur l’exécution de vos activités.",
  "Une pratique exemplaire consiste à inclure une colonne supplémentaire {0} dans vos besoins budgétaires pour vous rappeler comment vous êtes arrivé aux chiffres que vous avez obtenus.",
  "Si vous avez des niveaux de référence, vous commencez par {0}.",
  "Si vous n’avez pas de niveaux de référence, vous commencez par {0}."
  ]
  }
  }</i18n>
<style type="text/css" scoped>
select {
  border: 0;
  border-bottom: 1px solid black;
}
</style>