<template>
  <span>
    <div>
      <b-card>
        <b-tabs v-model="tabIndex">
          <b-tab title="Question 1">
            <p>&nbsp;</p>
            <p v-if="$i18n.locale=='fr'">
              <table class="qTable">
                <tbody>
                  <tr>
                    <th>
                      <p><strong>Budget</strong></p>
                    </th>
                    <th>
                      <p><strong>Engagements</strong></p>
                    </th>
                    <th>
                      <p><strong>Dépenses réelles à ce jour</strong></p>
                    </th>
                    <th>
                      <p><strong>Dépenses annuelles prévues&nbsp;</strong></p>
                    </th>
                  </tr>
                  <tr>
                    <td>
                      <p>44&nbsp;900&nbsp;$</p>
                    </td>
                    <td>
                      <p>15&nbsp;053&nbsp;$</p>
                    </td>
                    <td>
                      <p>17&nbsp;800&nbsp;$</p>
                    </td>
                    <td>
                      <p>44&nbsp;100&nbsp;$</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </p>
            <p v-if="$i18n.locale=='en'">
              <table class="qTable">
                <tbody>
                  <tr>
                    <th>
                      <p><strong>Budget</strong></p>
                    </th>
                    <th>
                      <p><strong>Commitments</strong></p>
                    </th>
                    <th>
                      <p><strong>Year-to-Date Actuals</strong></p>
                    </th>
                    <th>
                      <p><strong>Annual Forecast Expenditures</strong></p>
                    </th>
                  </tr>
                  <tr>
                    <td>
                      <p>$44,900</p>
                    </td>
                    <td>
                      <p>$15,053</p>
                    </td>
                    <td>
                      <p>$17,800</p>
                    </td>
                    <td>
                      <p>$44,100</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </p>
            <radioQuiz :question="$t('q1')" qId="1" />
          </b-tab>
          <b-tab title="Question 2">
            <radioQuiz :question="$t('q2')" qId="2" />
          </b-tab>
          <b-tab title="Question 3">
            <radioQuiz :question="$t('q3')" qId="3" />
          </b-tab>
          <b-tab title="Question 4">
            <radioQuiz :question="$t('q4')" qId="4" />
          </b-tab>
          <b-tab title="Question 5">
            <radioQuiz :question="$t('q5')" qId="5" />
          </b-tab>
          <b-tab title="Question 6">
            <radioQuiz :question="$t('q6')" qId="6" />
          </b-tab>
          <b-tab title="Question 7">
            <radioQuiz :question="$t('q7')" qId="7" />
          </b-tab>
          <b-tab title="Question 8">
            <radioQuiz :question="$t('q8')" qId="8" />
          </b-tab>
          <b-tab title="Question 9">
            <radioQuiz :question="$t('q9')" qId="9" />
          </b-tab>
        </b-tabs>
      </b-card>
      <!-- Control buttons-->
      <div class="text-center">
        <b-button-group class="mt-2">
          <b-button @click="tabIndex--" :disabled="tabIndex<=0">{{$t('previousPage')}}</b-button>
          <b-button @click="tabIndex++" :disabled="tabIndex>=8">{{$t('nextPage')}}</b-button>
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
  "text": "Looking at the provided budget, do you have enough funds to commit to getting goods for $13,000?",
  "options": {
  "1": "Yes",
  "2": "No"
  },
  "feedback": {
  "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
  "2": "<span class='v-right' /><strong>Correct!</strong>"
  },
  "conclusion": "Your budget is $44,900, less your commitments of $15,053, less your year-to-date actuals of $17,800. So you only have $12,047 left, which is not enough to cover your $13,000 request for goods."
  },
  "q2": {
  "text": "In general, can a manager authorize both sections 33 and 34 for the same transaction?",
  "options": {
  "1": "Yes",
  "2": "No"
  },
  "feedback": {
  "1": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
  "2": "<span class='v-right' /> <strong>Correct!</strong>"
  },
  "conclusion": "A manager may not authorize sections 33 and 34 for the same transaction. "
  },
  "q3": {
  "text": "Can a manager authorize their own membership fees?",
  "options": {
  "1": "Yes",
  "2": "No"
  },
  "feedback": {
  "1": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
  "2": "<span class='v-right' /> <strong>Correct!</strong>"
  },
  "conclusion": "A manager may not authorize any transaction for which they may be perceived as having a personal benefit."
  },
  "q4": {
  "text": "Which of the following statements is incorrect.",
  "options": {
  "1": "Financial authorities are delegated to positions, not individuals.",
  "2": "Approving expenditure initiation and commitments is known as section 32.",
  "3": "A “coding structure” is a method of classifying transactions.",
  "4": "Managers must check to see if an invoice has already been paid before authorizing payment.",
  "5": "Checking to see if payment complies with policy requirements is known as section 34."
  },
  "feedback": {
  "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
  "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
  "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
  "4": "<span class='v-wrong' /><strong>Incorrect.</strong>",
  "5": "<span class='v-right' /><strong>Correct!</strong>"
  },
  "conclusion": "Checking to see if payment complies with policy requirements is known as section 33, not 34."
  },
  "q5": {
  "text": "What is the best spending mechanism to use for a major renovation on a regional office that your department owns?",
  "options": {
  "1": "Acquisition Card",
  "2": "Competitive Contract",
  "3": "Standing Offer",
  "4": "Supply Arrangement"
  },
  "feedback": {
  "1": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
  "2": "<span class='v-right' /> <strong>Correct!</strong>",
  "3": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
  "4": "<span class='v-wrong' /> <strong>Incorrect</strong>."
  },
  "conclusion": " A competitive contract will ensure fairness by allowing renovation contractors to competitively bid on your project and to ensure best value for government/Canadians."
  },
  "q6": {
  "text": "What is the nature of the major renovation?",
  "options": {
  "1": "Asset",
  "2": "Expenditure",
  "3": "Liability",
  "4": "Revenue"
  },
  "feedback": {
  "1": "<span class='v-right' /> <strong>Correct!</strong>",
  "2": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
  "3": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
  "4": "<span class='v-wrong' /> <strong>Incorrect</strong>."
  },
  "conclusion": "Since it is a major renovation and you are extending the life of the building, it is an asset."
  },
  "q7": {
  "text": "You notice an invoice is $10 higher than it should be and it is due today. What do you do?",
  "options": {
  "1": "Process the invoice under section 34",
  "2": "Send it back to the supplier to correct",
  "3": "Send it to your director while noting the error"
  },
  "feedback": {
  "1": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
  "2": "<span class='v-right' /> <strong>Correct!</strong>",
  "3": "<span class='v-wrong' /> <strong>Incorrect</strong>."
  },
  "conclusion": " Invoice errors need to be sent back to suppliers for correction. The 30-day due date starts when the department receives the correct invoice."
  },
  "q8": {
  "text": "You have an employee who has used up all their sick leave. You now have a new medical note that says they will be on leave for a month. However, you think the leave will be extended for another six months. What do you do?",
  "options": {
  "1": "Immediately decrease the O&M forecast for one month",
  "2": "Immediately decrease the salary forecast for one month",
  "3": "Immediately decrease the O&M forecast for six months",
  "4": "Immediately decrease the salary forecast for six months"
  },
  "feedback": {
  "1": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
  "2": "<span class='v-right' /> <strong>Correct!</strong>",
  "3": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
  "4": "<span class='v-wrong' /> <strong>Incorrect</strong>."
  },
  "conclusion": "This is salary, not O&M. You would want to update the system immediately so that you may have an accurate salary forecast at all times."
  },
  "q9": {
  "text": "You have received the goods on March 31. You know the supplier will not invoice until early May. What do you do?",
  "options": {
  "1": "Create a Payable at Year-End",
  "2": "Create a Receivable at Year-End",
  "3": "Create an invoice",
  "4": "All of the above"
  },
  "feedback": {
  "1": "<span class='v-right' /> <strong>Correct!</strong>",
  "2": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
  "3": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
  "4": "<span class='v-wrong' /> <strong>Incorrect</strong>."
  },
  "conclusion": "A Receivable at Year-End is created for a receivable. Only the supplier can provide you with the invoice. You would create a Payable at Year-End because you received the goods on March 31 and you will receive the invoice after Finance will have closed their year-end."
  }
  },
  "fr": {
  "q1": {
  "text": "Compte tenu du budget prévu, avez-vous suffisamment de fonds pour vous engager à acheter des biens pour 13&nbsp;000&nbsp;$?",
  "options": {
  "1": "Oui",
  "2": "Non"
  },
  "feedback": {
  "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
  "2": "<span class='v-right' /><strong>Correct!</strong>"
  },
  "conclusion": " Votre budget est de 44&nbsp;900&nbsp;$, moins vos engagements de 15&nbsp;053&nbsp;$, moins les dépenses réelles à ce jour de 17&nbsp;800&nbsp;$. Il ne vous reste donc plus que 12&nbsp;047&nbsp;$, ce qui ne suffit pas à couvrir votre demande de 13&nbsp;000&nbsp;$ pour des biens."
  },
  "q2": {
  "text": "En général, un gestionnaire peut-il autoriser les articles 33 et 34 pour la même transaction ?",
  "options": {
  "1": "Oui",
  "2": "Non"
  },
  "feedback": {
  "1": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
  "2": "<span class='v-right' /> <strong>Correct!</strong>"
  },
  "conclusion": "Un gestionnaire ne peut pas autoriser les articles 33 et 34 pour la même transaction."
  },
  "q3": {
  "text": "Un gestionnaire peut-il autoriser ses propres frais d&rsquo;adhésion?",
  "options": {
  "1": "Oui",
  "2": "Non"
  },
  "feedback": {
  "1": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
  "2": "<span class='v-right' /> <strong>Correct!</strong>"
  },
  "conclusion": "Un gestionnaire ne peut autoriser une transaction pour laquelle il peut être perçu comme ayant un avantage personnel."
  },
  "q4": {
  "text": "Lequel des énoncés suivants est incorrect?",
  "options": {
  "1": "Les pouvoirs financiers sont délégués à des postes et non à des personnes.",
  "2": "L&rsquo;approbation du lancement des dépenses et des engagements est connue sous le nom d&rsquo;article 32.",
  "3": "Une « structure de codage » est une méthode de classification des transactions.",
  "4": "Les gestionnaires doivent vérifier si une facture a déjà été payée avant d&rsquo;autoriser le paiement.",
  "5": "La vérification de la conformité des paiements aux exigences de la politique s&rsquo;appelle l&rsquo;article 34."
  },
  "feedback": {
  "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
  "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
  "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
  "4": "<span class='v-wrong' /><strong>Incorrect.</strong>",
  "5": "<span class='v-right' /><strong>Correct!</strong>"
  },
  "conclusion": "La vérification de la conformité des paiements aux exigences de la politique s&rsquo;appelle l&rsquo;article 33, et non l&rsquo;article 34."
  },
  "q5": {
  "text": "Quel est le meilleur mécanisme de dépense à utiliser pour effectuer des rénovations majeures dans un bureau régional appartenant à votre ministère?",
  "options": {
  "1": "Carte d&rsquo;achat",
  "2": "Contrat concurrentiel",
  "3": "Offre à commandes",
  "4": "Arrangement en matière d&rsquo;approvisionnement"
  },
  "feedback": {
  "1": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
  "2": "<span class='v-right' /> <strong>Correct!</strong>",
  "3": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
  "4": "<span class='v-wrong' /> <strong>Incorrect</strong>."
  },
  "conclusion": "Un contrat concurrentiel assurera l&rsquo;équité en permettant aux entrepreneurs en rénovation de soumissionner de façon concurrentielle pour votre projet et d&rsquo;assurer la meilleure valeur pour le gouvernement et les Canadiens."
  },
  "q6": {
  "text": "Quelle est la nature des rénovations majeures?",
  "options": {
  "1": "Actif",
  "2": "Dépenses",
  "3": "Passif",
  "4": "Revenu"
  },
  "feedback": {
  "1": "<span class='v-right' /> <strong>Correct!</strong>",
  "2": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
  "3": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
  "4": "<span class='v-wrong' /> <strong>Incorrect</strong>."
  },
  "conclusion": "Puisqu&rsquo;il s&rsquo;agit d&rsquo;une rénovation majeure et que vous prolongez la durée de vie de l&rsquo;immeuble, c&rsquo;est un actif."
  },
  "q7": {
  "text": "Vous remarquez qu&rsquo;une facture est supérieure de 10 $ à ce qu&rsquo;elle devrait être et qu&rsquo;elle est exigible aujourd&rsquo;hui. Que faites-vous?",
  "options": {
  "1": "Traiter la facture en vertu de l&rsquo;article 34",
  "2": "Renvoyez-la au fournisseur pour qu&rsquo;il la corrige.",
  "3": "Envoyer-la à votre directeur en notant l&rsquo;erreur"
  },
  "feedback": {
  "1": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
  "2": "<span class='v-right' /> <strong>Correct!</strong>",
  "3": "<span class='v-wrong' /> <strong>Incorrect</strong>."
  },
  "conclusion": "Les erreurs de facturation doivent être renvoyées aux fournisseurs pour correction. La date d&rsquo;échéance de 30 jours commence lorsque le ministère reçoit la bonne facture."
  },
  "q8": {
  "text": "Vous avez un employé qui a épuisé tous ses congés de maladie. Vous avez maintenant une nouvelle note médicale qui dit qu&rsquo;ils seront en congé pour un mois. Cependant, vous pensez que le congé sera prolongé de six mois. Que faites-vous?",
  "options": {
  "1": "Diminuer immédiatement les prévisions de F et E pour un mois",
  "2": "Diminuer immédiatement les prévisions salariales pour un mois",
  "3": "Diminuer immédiatement les prévisions de F et E sur six mois",
  "4": "Diminuer immédiatement les prévisions salariales pour six mois"
  },
  "feedback": {
  "1": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
  "2": "<span class='v-right' /> <strong>Correct!</strong>",
  "3": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
  "4": "<span class='v-wrong' /> <strong>Incorrect</strong>."
  },
  "conclusion": "C&rsquo;est un salaire, pas du F et E. Vous ne voudriez pas diminuer votre salaire pendant 6 mois car vous n&rsquo;avez pas encore reçu la note médicale. Vous devriez mettre à jour le système immédiatement afin d&rsquo;avoir une prévision salariale précise en tout temps."
  },
  "q9": {
  "text": "Vous avez reçu les marchandises le 31 mars. Vous savez que le fournisseur ne facturera pas avant le début du mois de mai. Que faites-vous?",
  "options": {
  "1": "Créer un créditeur à la fin de l&rsquo;exercice",
  "2": "Créer une créance à la fin de l&rsquo;exercice",
  "3": "Créer une facture",
  "4": "Toutes ces réponses"
  },
  "feedback": {
  "1": "<span class='v-right' /> <strong>Correct!</strong>",
  "2": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
  "3": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
  "4": "<span class='v-wrong' /> <strong>Incorrect</strong>."
  },
  "conclusion": "Une créance à la fin de l&rsquo;exercice est créée pour une créance. Seul le fournisseur peut vous fournir la facture. Vous créeriez un montant à payer à la fin de l&rsquo;exercice parce que vous avez reçu les biens le 31 mars et que vous recevrez la facture après que le ministère des Finances aura terminé la fin de son exercice."
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
