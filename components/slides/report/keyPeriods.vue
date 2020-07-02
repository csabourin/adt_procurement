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
        <b-button-group :aria-label="$t('questionNav')" class="mt-2">
          <b-button @click="[tabIndex--, focus()]" :disabled="tabIndex<=0">{{$t('previousPage')}}</b-button>
          <b-button @click="[tabIndex++, focus()]" :disabled="tabIndex>=1">{{$t('nextPage')}}</b-button>
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
    "q1": {
      "text": "The Treasury Board of Canada Secretariat is provided with all reports from P6 (September). ",
      "options": {
        "1": "True",
        "2": "False"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "The Treasury Board of Canada Secretariat is usually provided with data from P9 (December) to inform the Department of Finance Canada on planned spending."
    },
    "q2": {
      "text": "The most common periods for financial situation reporting are P6 (September), P9 (December), and a year-end report.",
      "options": {
        "1": "True",
        "2": "False"
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "It is true. P6 (September), P9 (December), and a year-end report are the most common reporting periods across government."
    }
  },
  "fr": {
    "q1": {
      "text": "Le Secrétariat du Conseil du Trésor du Canada reçoit tous les rapports de P6 (septembre).",
      "options": {
        "1": "Vrai",
        "2": "Faux"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "Le Secrétariat du Conseil du Trésor du Canada reçoit habituellement des données du P9 (décembre) pour informer le ministère des Finances du Canada des dépenses prévues."
    },
    "q2": {
      "text": "Les périodes les plus courantes pour les rapports sur la situation financière sont P6 (septembre), P9 (décembre) et un rapport de fin d’année.",
      "options": {
        "1": "Vrai",
        "2": "Faux"
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "C’est vrai. P6 (septembre), P9 (décembre) et un rapport de fin d’année représentent les périodes de rapport les plus courantes au gouvernement."
    }
  }
}</i18n>