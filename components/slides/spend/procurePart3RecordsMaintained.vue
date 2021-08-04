<template>
  <span>
    <div>
      <br>
      <p>{{$t('Introduction')}}</p>
      <b-card>
        <b-tabs content v-model="tabIndex">
        <b-tab title="Question 1"><checkboxQuiz :question="$t('q1')" qId="1" :Answer='["1","2","3"]'/></b-tab>
        <b-tab title="Question 2"><radioQuiz :question="$t('q2')" qId="2" /></b-tab>
        <b-tab title="Question 3"><radioQuiz :question="$t('q3')" qId="3" /></b-tab>
      </b-tabs>
      </b-card>
      <div class="text-center">
        <b-button-group :aria-label="$t('questionNav')" class="mt-2">
          <b-button @click="[tabIndex--, focus()]" :disabled="tabIndex<=0">{{$t('previousPage')}}</b-button>
          <b-button @click="[tabIndex++, focus()]" :disabled="tabIndex>=2">{{$t('nextPage')}}</b-button>
        </b-button-group>
      </div>
    </div>
  </span>
</template>
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
  components: { radioQuiz, checkboxQuiz },
  data() {
    return {
      tabIndex: 0

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
    "Introduction": "Answer the following questions.",
    "q1": {
      "text": "Good contract monitoring and record keepings helps to avoid which problems?",
      "options": {
        "1": "Additional costs and delays",
        "2": "Difficulties for contractors",
        "3": "More work",
        "4": "Specialized shipping considerations"
      },
      "feedback": {
        "right": "<span class='v-right' /><strong>Correct!</strong>",
        "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Good contract monitoring and record keeping helps avoid additional costs and delays, difficulties for contractors and more work."
    },
    "q2": {
      "text": "Do you need to document any discrepancies between the work performed by the contractor and what was required in the contract?",
      "options": {
        "1": "Yes",
        "2": "No"
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Any discrepancies in the work of a contractor to which a contract has been awarded must be documented."
    },
    "q3": {
      "text": "If you discover inadequate or deficient work, you must do which of the following?",
      "options": {
        "1": "Address the problem yourself",
        "2": "Advise the procurement specialist immediately",
        "3": "Cancel the contract immediately",
        "4": "Do nothing"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "4": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "If you discover inadequate or deficient work, you must advise the procurement specialist immediately."
    }
  },
  "fr": {
    "Introduction": "Répondez aux questions suivantes : ",
    "q1": {
      "text": "Quels problèmes un bon suivi des contrats et une bonne tenue des dossiers permettent-ils d’éviter?",
      "options": {
        "1": "Coûts et retards supplémentaires",
        "2": "Difficultés pour les entrepreneurs",
        "3": "Davantage de travail",
        "4": "Aspects liés à l’expédition spécialisée"
      },
      "feedback": {
        "right": "<span class='v-right' /><strong>Correct!</strong>",
        "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Un bon suivi des contrats et une bonne tenue des dossiers permettent d’éviter des coûts et des retards supplémentaires, des difficultés pour les entrepreneurs et davantage de travail."
    },
    "q2": {
      "text": "Est-il nécessaire de documenter les écarts entre les travaux exécutés par l’entrepreneur et ce qui était exigé dans le contrat?",
      "options": {
        "1": "Oui",
        "2": "Non"
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Tout écart dans les travaux d’un entrepreneur à qui un contrat a été accordé doit être documenté."
    },
    "q3": {
      "text": "Si vous découvrez un travail inadéquat ou insuffisant, laquelle des mesures suivantes devez-vous prendre?",
      "options": {
        "1": "Résoudre le problème vous-même",
        "2": "Aviser immédiatement le spécialiste en approvisionnement",
        "3": "Résilier immédiatement le contrat",
        "4": "Aucune"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "4": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Si vous découvrez un travail inadéquat ou déficient, vous devez immédiatement en aviser le spécialiste en approvisionnement."
    }
  }
}</i18n>
<style type="text/css" scoped>
  /*Using a scoped 'deep' selector*/
 .qTable td, .qTable th{
  border: 1px solid #4d4d4d;
  padding: .5em;
}
 .qTable th[scope="col"]{
  background-color: #7d677d;
  color:#fff;
}
</style>
