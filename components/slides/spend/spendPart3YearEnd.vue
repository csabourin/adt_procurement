<template>
  <span>
    <div>
      <b-card>
        <b-tabs v-model="tabIndex">
          <b-tab title="Question 1"><radioQuiz :question="$t('q1')" qId="1" /></b-tab>
          <b-tab title="Question 2"><radioQuiz :question="$t('q2')" qId="2" /></b-tab>
          <b-tab title="Question 3"><radioQuiz :question="$t('q3')" qId="3" /></b-tab>
        </b-tabs>
      </b-card>
      <!-- Control buttons-->
      <div class="text-center">
        <b-button-group class="mt-2">
          <b-button @click="tabIndex--" :disabled="tabIndex<=0">{{$t('previousPage')}}</b-button>
          <b-button @click="tabIndex++" :disabled="tabIndex>=2">{{$t('nextPage')}}</b-button>
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
      "text": "Are year-end procedures the same for managers across government?",
      "options": {
        "1": "Yes",
        "2": "No"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "Your Finance section will establish your department&rsquo;s year end procedures."
    },
    "q2": {
      "text": "You received an invoice on April 1 after goods have been delivered in March. Should you create a Payable at Year-End (PAYE)?",
      "options": {
        "1": "Yes",
        "2": "No"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "A PAYE is not required because departments usually have a time period in April in which they can pay invoices with old year funds.  "
    },
    "q3": {
      "text": "You have received the goods but not the invoice for $50. Do you create a Payable at Year-End (PAYE)?",
      "options": {
        "1": "Yes",
        "2": "No"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "You will not create a PAYE because the amount is not material. Your department&rsquo;s year-end procedures will inform you of your materiality amounts. If you receive the invoice in late April or May, you will be paying out of new year funds."
    }
  },
  "fr": {
    "q1": {
      "text": "Les procédures de fin d&rsquo;exercice sont-elles les mêmes pour tous les gestionnaires du gouvernement?",
      "options": {
        "1": "Oui",
        "2": "Non"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "Votre section des finances établira les procédures de fin d&rsquo;exercice de votre ministère."
    },
    "q2": {
      "text": "Vous avez reçu une facture le 1 avril après la livraison des marchandises en mars. Devriez-vous créer un créditeur à la fin de l&rsquo;exercice (CAFE)?",
      "options": {
        "1": "Oui",
        "2": "Non"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "Un CAFE n&rsquo;est pas nécessaire parce que les ministères ont habituellement une période de temps en avril au cours de laquelle ils peuvent payer leurs factures avec les fonds de l&rsquo;ancienne année."
    },
    "q3": {
      "text": "Vous avez reçu les marchandises mais pas la facture de  50 $. Créez-vous un créditeur à la fin de l&rsquo;exercice (CAFE)?",
      "options": {
        "1": "Oui",
        "2": "Non"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "Vous ne créerez pas de CAFE parce que le montant n&rsquo;est pas important. Les procédures de fin d&rsquo;exercice de votre ministère vous informeront de l&rsquo;importance relative de vos montants. Si vous recevez la facture à la fin d&rsquo;avril ou en mai, vous paierez à même les fonds de la nouvelle année."
    }
  }
}</i18n>