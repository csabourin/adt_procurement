<template>
  <span>
    <div>
      <b-card>
        <b-tabs v-model="tabIndex">
          <b-tab title="Question 1"><radioQuiz :question="$t('q1')" qId="1" /></b-tab>
          <b-tab title="Question 2"><radioQuiz :question="$t('q2')" qId="2" /></b-tab>
        </b-tabs>
      </b-card>
      <!-- Control buttons-->
      <div class="text-center">
        <b-button-group class="mt-2">
          <b-button @click="tabIndex--" :disabled="tabIndex<=0">{{$t('previousPage')}}</b-button>
          <b-button @click="tabIndex++" :disabled="tabIndex>=1">{{$t('nextPage')}}</b-button>
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
  }
}
</script>
<i18n>{
  "en": {
    "q1": {
      "text": "Treasury Board Secretariat is provided with all reports from P6 September. ",
      "options": {
        "1": "True",
        "2": "False"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "Treasury Board Secretariat is usually provided with data from P9 December to inform the Department of Finance on planned spending."
    },
    "q2": {
      "text": "The most common periods for financial situation reporting are P6 September, P9 December, and a year-end report.",
      "options": {
        "1": "True",
        "2": "False"
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "It is true. P6 September, P9 December, and a year-end report are the most common periods across government."
    }
  },
  "fr": {
    "q1": {
      "text": "Le Secrétariat du Conseil du Trésor reçoit tous les rapports de P6 septembre.",
      "options": {
        "1": "Vrai",
        "2": "Faux"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "Le Secrétariat du Conseil du Trésor reçoit habituellement des données du P9 décembre pour informer le ministère des Finances des dépenses prévues."
    },
    "q2": {
      "text": "Les périodes les plus courantes pour les rapports sur la situation financière sont P6 septembre, P9 décembre et un rapport de fin d&rsquo;année.",
      "options": {
        "1": "Vrai",
        "2": "Faux"
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "C&rsquo;est vrai. P6 septembre, P9 décembre et un rapport de fin d&rsquo;année sont les périodes les plus courantes au sein du gouvernement."
    }
  }
}</i18n>