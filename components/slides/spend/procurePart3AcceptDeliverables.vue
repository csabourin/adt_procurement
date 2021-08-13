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
      "text": "Can you proceed to paying the contract before the payment terms are met?",
      "options": {
        "1": "Yes",
        "2": "No"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "You can only proceed to paying the contract as per the basis of payment once the payment terms are met."
    },
    "q2": {
      "text": "Can you pay the contract if the work is 90% completed?",
      "options": {
        "1": "Yes",
        "2": "No"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "You can only proceed to paying the contract once the work has been performed in its entirety."
    },
    "q3": {
      "text": "You have received 12 of the 15 desk chairs that you had ordered. Can you proceed to pay the full invoice?",
      "options": {
        "1": "Yes",
        "2": "No"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "You can only proceed to paying the full amount of the contract once the 15 chairs have been received."
    }
  },
  "fr": {
    "Introduction": "Répondez aux questions suivantes : ",
    "q1": {
      "text": "Pouvez-vous procéder au paiement du contrat avant que les conditions de paiement soient respectées?",
      "options": {
        "1": "Oui",
        "2": "Non"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "Vous ne pouvez effectuer le paiement prévu au contrat qu’une fois les modalités de paiement respectées."
    },
    "q2": {
      "text": "Pouvez-vous payer le contrat si les travaux sont achevés à 90 %?",
      "options": {
        "1": "Oui",
        "2": "Non"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "Vous pouvez seulement procéder au paiement du contrat lorsque le travail est complètement achevé."
    },
    "q3": {
      "text": "Vous avez reçu 12 des 15 chaises de bureau que vous aviez commandées. Pouvez-vous procéder au paiement de la facture dans son intégralité?",
      "options": {
        "1": "Oui",
        "2": "Non"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "Vous ne pourrez régler la facture que lorsque les 15 chaises auront été reçues."
    }
  }
}</i18n>