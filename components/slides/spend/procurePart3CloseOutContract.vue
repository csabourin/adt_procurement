<template>
  <span>
    <div>
      <br>
      <p>{{$t('Introduction')}}</p>
      <b-card>
        <b-tabs v-model="tabIndex">
          <b-tab title="Question 1"><radioQuiz :question="$t('q1')" qId="1" /></b-tab>
          <b-tab title="Question 2"><radioQuiz :question="$t('q2')" qId="2" /></b-tab>
          <b-tab title="Question 3"><radioQuiz :question="$t('q3')" qId="3" /></b-tab>
        </b-tabs>
      </b-card>
      <!-- Control buttons-->
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
      "text": "Who is responsible for closing the contract?",
      "options": {
        "1": "The director general",
        "2": "The financial officer",
        "3": "The manager",
        "4": "The procurement specialist"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "4": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "The procurement specialist is responsible for closing the contract."
    },
    "q2": {
      "text": "Can the contract be closed if the contractor has not been issued their final payment?",
      "options": {
        "1": "Yes",
        "2": "No"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "All payments must be made to the contractor before closing the contract."
    },
    "q3": {
      "text": "Which of the following would <u>NOT</u> allow the contract to be closed?",
      "options": {
        "1": "All deliverables have been accepted.",
        "2": "No outstanding payments to the contractor are pending.",
        "3": "All requirements have been met.",
        "4": "Lack of documentation on file."
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "4": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "All required documentation must be on file before closing the contract."
    }
  },
  "fr": {
    "Introduction": "Répondez aux questions suivantes : ",
    "q1": {
      "text": "Qui est responsable de la clôture du contrat?",
      "options": {
        "1": "Le directeur général",
        "2": "L’agent financier",
        "3": "Le gestionnaire",
        "4": "Le spécialiste en approvisionnement"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "4": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "Le spécialiste en approvisionnement est responsable de la clôture du contrat."
    },
    "q2": {
      "text": "Le contrat peut-il être clôturé si l’entrepreneur n’a pas reçu son paiement final?",
      "options": {
        "1": "Oui",
        "2": "Non"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "Tous les paiements doivent être versés à l’entrepreneur avant la clôture du contrat."
    },
    "q3": {
      "text": "Laquelle des conditions suivantes ne permettrait <u>PAS</u> la clôture du contrat?",
      "options": {
        "1": "Tous les produits livrables ont été acceptés.",
        "2": "Aucun paiement à l’entrepreneur n’est en attente.",
        "3": "Toutes les exigences ont été satisfaites.",
        "4": "De la documentation manque au dossier."
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "4": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "Tous les documents requis doivent être versés au dossier avant la clôture du contrat."
    }
  }
}</i18n>