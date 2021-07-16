<template>
  <span>
    <div>
      {{$t('Scenario')}}
      <b-card>
        <b-tabs v-model="tabIndex">
          <b-tab title="Question 1">
            <checkboxQuiz :question="$t('q1')" qId="1" :Answer='["1","2","3"]'/>
          </b-tab>
          <b-tab title="Question 2">
            <checkboxQuiz :question="$t('q2')" qId="2" :Answer='["1","2","3","4"]'/>
          </b-tab>
        </b-tabs>
        <!-- Control buttons-->
        <div class="text-center">
          <b-button-group :aria-label="$t('questionNav')" class="mt-2">
            <b-button @click="[tabIndex--, focus()]" :disabled="tabIndex<=0">{{$t('previousPage')}}</b-button>
            <b-button @click="[tabIndex++, focus()]" :disabled="tabIndex>=1">{{$t('nextPage')}}</b-button>
          </b-button-group>
        </div>
      </b-card>
    </div>
  </span>
</template>
<style type="text/css" scoped>
  .qTable th{
    text-align: center;
    background-color: #7D677D;
    color: #fff;
  }
  .qTable td, .qTable th{
    padding:.5em;
  }
  .qTable td:nth-child(n+3):nth-child(-n+4),
  .qTable td:nth-child(n+7){
    background-color: hsl(255, 37%, 90%);
  }
  .qTable{
    margin-top:1em;
  }
</style>
<i18n>
  {
  "en":{
  "qDisabled":"Please select one"
  }
  ,
  "fr":{
  "qDisabled":"Veuillez faire un choix"
  }
  }
</i18n>
<script type="text/javascript">
import radioQuiz from "~/components/radioQuiz"
import checkboxQuiz from "~/components/checkboxQuiz"
export default {
  components: { 
    radioQuiz, 
    checkboxQuiz
  },
  data() {
    return {
      tabIndex: 0,
    }
  },
  methods:{
    focus(){
        setTimeout(function(){
          document.querySelector(".tab-pane.active .pure-radiobutton fieldset, .tab-pane.active .pure-checkbox fieldset").focus();
        }, 300);
      }
  }
}

</script>
<i18n>{
  "en": {
  "Scenario": "Two of your work plan’s sub-activities are to issue licences and conduct inspections. Many commercial fishers are confused about when to renew their licences and how to comply with regulations. You decide your unit needs an information video.",
  "openChartButton": "Open the delegation of spending and financial signing authorities chart",
  "q1": {
  "text": "Given the scenario, what could be some of the special considerations regarding the production of the information video?",
  "options": {
  "1": "Accessibility considerations",
  "2": "Official languages considerations",
  "3": "Security considerations",
  "4": "Specialized shipping considerations"
  },
  "feedback": {
  "right": "<span class='v-right' /><strong>Correct!</strong>",
  "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
  },
  "conclusion": "Regarding the production of the information video, you need to consider accessibility, security and official languages."
  },
  "q2": {
  "text": "What could be some of the special considerations regarding the opening of your temporary licensing office?",
  "options": {
  "1": "Accessibility considerations",
  "2": "Ergonomic needs considerations",
  "3": "Green procurement considerations",
  "4": "Public-facing considerations"
  },
  "feedback": {
    "right": "<span class='v-right' /><strong>Correct!</strong>",
    "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
  },
  "conclusion": "Regarding the opening of your temporary licensing office, you need to consider accessibility, ergonomics, green procurement and the fact that it is open to the public."
  }
  },
  "fr": {
  "Scenario": "Deux des sous-activités de votre plan de travail consistent à délivrer des permis et à mener des inspections. De nombreux pêcheurs commerciaux sont confus en ce qui concerne la date de renouvellement de leur permis et la façon de se conformer aux règlements. Vous déterminez que votre unité a besoin d’une vidéo d’information.",
  "openChartButton": "Ouvrir le tableau de délégation de pouvoirs",
  "q1": {
  "text": "Compte tenu du scénario, quels pourraient être certains des aspects particuliers à prendre en considération concernant la production de la vidéo d’information?",
  "options": {
  "1": "Aspects liés à l’accessibilité",
  "2": "Aspects liés aux langues officielles",
  "3": "Aspects liés à la sécurité",
  "4": "Aspects liés à l’expédition spécialisée"
  },
  "feedback": {
  "right": "<span class='v-right' /><strong>Correct!</strong>",
  "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"

  },
  "conclusion": "En ce qui concerne la production de la vidéo d’information, vous devez tenir compte de l’accessibilité, de la sécurité et des langues officielles."
  },
  "q2": {
  "text": "Quels pourraient être certains des aspects particuliers à prendre en considération concernant l’ouverture de votre bureau de permis temporaire?",
  "options": {
  "1": "Aspects liés à l’accessibilité",
  "2": "Aspects liés aux besoins ergonomiques",
  "3": "Aspects liés à l’achat écologique",
  "4": "Aspects liés au fait qu’il est ouvert au public"
  },
  "feedback": {
  "right": "<span class='v-right' /><strong>Correct!</strong>",
  "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
  },
  "conclusion": "Concernant l’ouverture de votre bureau de permis temporaire, vous devez tenir compte de l’accessibilité, de l’ergonomie, de l’achat écologique et du fait qu’il est ouvert au public."
  }
  }
  }</i18n>
