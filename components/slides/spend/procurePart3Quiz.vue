<template>
  <span>
    <div>
      <br />
      <p>{{$t("introText")}}</p>
      <b-card>
        <b-tabs v-model="tabIndex">
          <b-tab title="Question 1">
            <radioQuiz :question="$t('q1')" qId="1" />
          </b-tab>
          <b-tab title="Question 2">
            <radioQuiz :question="$t('q2')" qId="2" />
          </b-tab>
          <b-tab title="Question 3">
            <radioQuiz :question="$t('q3')" qId="3" />
          </b-tab>
          <b-tab title="Question 4">
            <b-row>
              <b-col><radioQuiz :question="$t('q4')" qId="4" /></b-col>
              <b-col xl="12" lg="12" style="border: 1px solid #212529;"><SalesInvoice /></b-col>
            </b-row>
          </b-tab>
          <b-tab title="Question 5">
            <radioQuiz :question="$t('q5')" qId="5" />
          </b-tab>
          <b-tab title="Question 6">
            <radioQuiz :question="$t('q6')" qId="6" />
          </b-tab>
        </b-tabs>
      </b-card>
      <!-- Control buttons-->
      <div class="text-center">
        <b-button-group :aria-label="$t('questionNav')" class="mt-2">
          <b-button @click="[tabIndex--, focus()]" :disabled="tabIndex<=0">{{$t('previousPage')}}</b-button>
          <b-button @click="[tabIndex++, focus()]" :disabled="tabIndex>=5">{{$t('nextPage')}}</b-button>
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
import SalesInvoice from "~/components/slides/spend/SalesInvoice"
export default {
  components: { radioQuiz, checkboxQuiz, SalesInvoice },
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
  "introText": "Answer the following questions.",
  "q1": {
  "text": "The contract has been awarded. What are your next steps, in the correct order?",
  "options": {
  "1": "Administer, pay and close out the contract",
  "2": "Close out, administer and pay the contract",
  "3": "Pay, close out and administer the contract"
  },
  "feedback": {
  "1": "<span class='v-right' /><strong>Correct!</strong>",
  "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
  "3": "<span class='v-wrong' /><strong>Incorrect.</strong>"
  },
  "conclusion": "Once the contract has been awarded, you must administer, pay and close out the contract."
  },
  "q2": {
  "text": "Who is the main person responsible for responding to Access to Information requests regarding an acquisition?",
  "options": {
  "1": "The financial advisor",
  "2": "The human resources advisor",
  "3": "The manager",
  "4": "The procurement specialist"
  },
  "feedback": {
  "1": "<span class='v-wrong' /> <strong>Incorrect.</strong>",
  "2": "<span class='v-wrong' /> <strong>Incorrect.</strong>",
  "3": "<span class='v-right' /> <strong>Correct!</strong>",
  "4": "<span class='v-wrong' /> <strong>Incorrect.</strong>"
  },
  "conclusion": "The manager is the main person responsible for responding to Access to information requests regarding an acquisition, while the procurement specialist assists if needed."
  },
  "q3": {
  "text": "What must the procurement specialist do when you advise them that you have discovered inadequate or deficient work?",
  "options": {
  "1": "Assign the contract to the next supplier on the list",
  "2": "Cancel the contract and pay only for what was completed",
  "3": "Notify the contractor in writing of the deficiencies",
  "4": "Wait ten business days to see if things improve"
  },
  "feedback": {
  "1": "<span class='v-wrong' /> <strong>Incorrect.</strong>",
  "2": "<span class='v-wrong' /> <strong>Incorrect.</strong>",
  "3": "<span class='v-right' /> <strong>Correct!</strong>",
  "4": "<span class='v-wrong' /> <strong>Incorrect.</strong>"
  },
  "conclusion": "When inadequate or deficient work has been discovered, the procurement specialist must notify the contractor in writing of the deficiencies."
  },
  "q4": {
  "text": "You ordered and received 5 polk-a-dot highlighters and 20 pairs of rose-coloured glasses from XYZ Enterprises. Based on the invoice provided below, would you pay the invoice?",
  "options": {
  "1": "Yes",
  "2": "No"
  },
  "feedback": {
  "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
  "2": "<span class='v-right' /><strong>Correct!</strong>"
  },
  "conclusion": "You would not pay the invoice since you contracted with ABC Enterprises, not XYZ Enterprises."
  },
  "q5": {
  "text": "Who usually performs the payment authority step, pursuant to section 33?",
  "options": {
  "1": "The financial officer",
  "2": "The manager",
  "3": "The procurement specialist",
  "4": "The subject-matter expert"
  },
  "feedback": {
  "1": "<span class='v-right' /> <strong>Correct!</strong>",
  "2": "<span class='v-wrong' /> <strong>Incorrect.</strong>",
  "3": "<span class='v-wrong' /> <strong>Incorrect.</strong>",
  "4": "<span class='v-wrong' /> <strong>Incorrect.</strong>"
  },
  "conclusion": "The financial officer usually performs the authority to pay step, pursuant to section 33."
  },
  "q6": {
  "text": "The supplier has confirmed that the last items ordered will arrive on Wednesday of next week. Can the contract be closed out this week?",
  "options": {
  "1": "Yes",
  "2": "No"
  },
  "feedback": {
  "1": "<span class='v-wrong' /> <strong>Incorrect.</strong>",
  "2": "<span class='v-right' /> <strong>Correct!</strong>"
  },
  "conclusion": "Before the contract can be closed out, the manager must have received and accepted all deliverables under the contract."
  }
  },
  "fr": {
  "introText": "Répondez aux questions suivantes : ",
  "q1": {
  "text": "Le contrat a été accordé. Quelles sont, dans le bon ordre, les prochaines étapes que vous devez suivre?",
  "options": {
  "1": "Administration, paiement et clôture du contrat",
  "2": "Clôture, administration et paiement du contrat",
  "3": "Paiement, clôture et administration du contrat"
  },
  "feedback": {
  "1": "<span class='v-right' /><strong>Correct!</strong>",
  "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
  "3": "<span class='v-wrong' /><strong>Incorrect.</strong>"
  },
  "conclusion": "Une fois que le contrat a été accordé, vous devez administrer, payer et clôturer le contrat."
  },
  "q2": {
  "text": "Qui est la principale personne chargée de répondre aux demandes d’accès à l’information concernant une acquisition?",
  "options": {
  "1": "Le conseiller financier",
  "2": "Le conseiller en ressources humaines",
  "3": "Le gestionnaire",
  "4": "Le spécialiste en approvisionnement"
  },
  "feedback": {
  "1": "<span class='v-wrong' /> <strong>Incorrect.</strong>",
  "2": "<span class='v-wrong' /> <strong>Incorrect.</strong>",
  "3": "<span class='v-right' /> <strong>Correct!</strong>",
  "4": "<span class='v-wrong' /> <strong>Incorrect.</strong>"
  },
  "conclusion": "Le gestionnaire est la principale personne chargée de répondre aux demandes d’accès à l’information concernant une acquisition, tandis que le spécialiste en approvisionnement l’aide au besoin."
  },
  "q3": {
  "text": "Que doit faire le spécialiste en approvisionnement lorsque vous l’informez que vous avez découvert un travail inadéquat ou déficient?",
  "options": {
  "1": "Accorder le contrat au prochain fournisseur sur la liste",
  "2": "Résilier le contrat et payer uniquement pour ce qui a été exécuté",
  "3": "Aviser l’entrepreneur par écrit des manquements",
  "4": "Attendre dix jours ouvrables pour voir si les choses s’améliorent"
  },
  "feedback": {
  "1": "<span class='v-wrong' /> <strong>Incorrect.</strong>",
  "2": "<span class='v-wrong' /> <strong>Incorrect.</strong>",
  "3": "<span class='v-right' /> <strong>Correct!</strong>",
  "4": "<span class='v-wrong' /> <strong>Incorrect.</strong>"
  },
  "conclusion": "Lorsque des travaux inadéquats ou déficients sont découverts, le spécialiste en approvisionnement en avise l’entrepreneur par écrit."
  },
  "q4": {
  "text": "Vous avez commandé et reçu 5 surligneurs à pois et 20 paires de lunettes roses d’Entreprise XYZ. Vous avez reçu la facture ci-dessous. Devriez-vous la payer?",
  "options": {
  "1": "Oui",
  "2": "Non"
  },
  "feedback": {
  "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
  "2": "<span class='v-right' /><strong>Correct!</strong>"
  },
  "conclusion": "Vous ne devriez pas payer la facture puisque vous avez passé un contrat avec l’Entreprise ABC, et non avec l’Entreprise XYZ."
  },
  "q5": {
  "text": "Qui se charge habituellement de l’étape du paiement, conformément à l’article 33?",
  "options": {
  "1": "L’agent financier",
  "2": "Le gestionnaire",
  "3": "Le spécialiste en approvisionnement",
  "4": "L’expert en la matière"
  },
  "feedback": {
  "1": "<span class='v-right' /> <strong>Correct!</strong>",
  "2": "<span class='v-wrong' /> <strong>Incorrect.</strong>",
  "3": "<span class='v-wrong' /> <strong>Incorrect.</strong>",
  "4": "<span class='v-wrong' /> <strong>Incorrect.</strong>"
  },
  "conclusion": "L’agent financier se charge habituellement du paiement, conformément à l’article 33."
  },
  "q6": {
  "text": "Le fournisseur a confirmé que les derniers articles commandés arriveront mercredi de la semaine prochaine. Le contrat peut-il être clôturé cette semaine?",
  "options": {
  "1": "Oui",
  "2": "Non"
  },
  "feedback": {
  "1": "<span class='v-wrong' /> <strong>Incorrect.</strong>",
  "2": "<span class='v-right' /> <strong>Correct!</strong>"
  },
  "conclusion": "Le gestionnaire doit avoir reçu et accepté tous les produits livrables prévus au contrat avant que le contrat puisse être clôturé."
  }
  }
  }</i18n>
<style type="text/css" scoped>
/*Using a scoped 'deep' selector*/
.qTable td,
.qTable th {
  border: 1px solid #4d4d4d;
  padding: .5em;
}

.qTable th {
  background-color: #7d677d;
  color: #fff;
}

</style>
