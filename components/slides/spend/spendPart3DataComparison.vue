<template>
  <span>
    <div>
      <b-card>
        <b-tabs content v-model="tabIndex">
        <b-tab title="Question 1">
          <p>&nbsp;</p>
        <p v-if="$i18n.locale=='fr'">
          <table border="1" class="qTable">
            <tbody>
              <tr>
                <th>&nbsp;</th>
                <th>
                  <p><strong>Budget</strong></p>
                </th>
                <th>
                  <p><strong>Engagement</strong></p>
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
                  <p>Salaire</p>
                </td>
                <td>
                  <p>60&nbsp;000&nbsp;$</p>
                </td>
                <td>
                  <p>20&nbsp;000&nbsp;$</p>
                </td>
                <td>
                  <p>40&nbsp;000&nbsp;$</p>
                </td>
                <td>
                  <p>60&nbsp;000&nbsp;$</p>
                </td>
              </tr>
            </tbody>
          </table>
        </p>
        <p v-if="$i18n.locale=='en'">
          <table border="1" class="qTable">
            <tbody>
              <tr>
                <th>&nbsp;</th>
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
                  <p><strong>Annual Forecasted Expenditures</strong></p>
                </th>
              </tr>
              <tr>
                <td>
                  <p>Salary</p>
                </td>
                <td>
                  <p>$60,000</p>
                </td>
                <td>
                  <p>$20,000</p>
                </td>
                <td>
                  <p>$40,000</p>
                </td>
                <td>
                  <p>$60,000</p>
                </td>
              </tr>
            </tbody>
          </table>
        </p>
        <radioQuiz :question="$t('q1')" qId="1" />
        </b-tab>
        <b-tab title="Question 2">
          <p>&nbsp;</p>
          <p v-if="$i18n.locale=='fr'">
          <table border="1" class="qTable">
            <tbody>
              <tr>
                <th>&nbsp;</th>
                <th>
                  <p><strong>Budget</strong></p>
                </th>
                <th>
                  <p><strong>Engagement</strong></p>
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
                  <p>Formation</p>
                </td>
                <td>
                  <p>8&nbsp;400&nbsp;$</p>
                </td>
                <td>
                  <p>0$</p>
                </td>
                <td>
                  <p>2&nbsp;400&nbsp;$</p>
                </td>
                <td>
                  <p>8&nbsp;400&nbsp;$</p>
                </td>
              </tr>
            </tbody>
          </table>
        </p>
        <p v-if="$i18n.locale=='en'">
          <table border="1" class="qTable">
            <tbody>
              <tr>
                <th>&nbsp;</th>
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
                  <p><strong>Annual Forecasted Expenditures</strong></p>
                </th>
              </tr>
              <tr>
                <td>
                  <p>Training</p>
                </td>
                <td>
                  <p>$8,400</p>
                </td>
                <td>
                  <p>$0</p>
                </td>
                <td>
                  <p>$2,400</p>
                </td>
                <td>
                  <p>$8,400</p>
                </td>
              </tr>
            </tbody>
          </table>
        </p>
        <radioQuiz :question="$t('q2')" qId="2" />
        </b-tab>
      </b-tabs>
      </b-card>
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
      "text": "You just remembered that an employee has gone on leave without pay for one month. His yearly salary is $60,000. Where would you change the amount to $55,000?",
      "options": {
        "1": "Under “Budget”",
        "2": "Under “Commitments”",
        "3": "Under “Year-to-Date Actual”",
        "4": "Under “Annual Forecasted Expenditures”"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong> There is no need to reduce the budget as you may need this budget to pay overtime or to hire a casual. You would change the amount under “Annual Forecasted Expenditures” to $55,000.",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong> Although you could decrease your commitments, you would only reduce it by $5,000. $20,000 - ($60,000 ÷ 12 months X 1 month) = $15,000. You would change the amount under “Annual Forecasted Expenditures” to $55,000.",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong> There is no need to adjust the actuals because the employee did not get paid yet. You would change the amount under “Annual Forecasted Expenditures” to $55,000.",
        "4": "<span class='v-right' /><strong>Correct!</strong> You need to reduce your Annual Forecast Expenditures by one month. $60,000 ÷ 12 months X 11 months = $55,000. "
      },
      "conclusion": ""
    },
    "q2": {
      "text": "You approved a $1,500 learning plan of a new employee. Looking at the provided line item, which columns must be updated?",
      "options": {
        "1": "Increase “Commitments” and “Budget”",
        "2": "Increase “Commitments” and “Year-to-Date Actual”",
        "3": "Increase “Commitments” and “Annual Forecasted Expenditures”"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong> There is no need to increase or decrease the budget. You would change the amount under “Commitments” to $1,500 to record a soft commitment and increase your “Annual Forecasted Expenditures” amount by $1,500.",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong> You would not increase or decrease the “Year-to-Date Actual” because you have not paid for the course. You would change the amount under “Commitments” to $1,500 to record a soft commitment and increase your “Annual Forecasted Expenditures” amount by $1,500.",
        "3": "<span class='v-right' /><strong>Correct!</strong> You would change the amount under “Commitments” to $1,500 to record a soft commitment and increase your “Annual Forecasted Expenditures” amount by $1,500."
      },
      "conclusion": ""
    }
  },
  "fr": {
    "q1": {
      "text": "Vous venez de vous rappeler qu&rsquo;un employé est en congé non payé depuis un mois. Son salaire annuel est de 60&nbsp;000&nbsp;$. Où changeriez-vous le montant à 55&nbsp;000&nbsp;$?",
      "options": {
        "1": "Sous « Budget »",
        "2": "Sous « Engagements »",
        "3": "Sous « Dépenses réelles à ce jour »",
        "4": "Sous « Dépenses annuelles prévues »"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong> Il n&rsquo;est pas nécessaire de réduire le budget, car vous pourriez en avoir besoin pour payer des heures supplémentaires ou pour embaucher un employé occasionnel. Vous changeriez le montant sous « Dépenses annuelles prévues » à 55&nbsp;000&nbsp;$.",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong> Même si vous pouviez réduire vos engagements, vous ne les réduiriez que de 5&nbsp;000&nbsp;$. 20&nbsp;000&nbsp;$ - (60&nbsp;000&nbsp;$ ÷ 12 mois X 1 mois) = 15&nbsp;000&nbsp;$. Vous changeriez le montant sous « Dépenses annuelles prévues » à 55&nbsp;000&nbsp;$.",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong> Il n&rsquo;est pas nécessaire d&rsquo;ajuster les dépenses réelles parce que l&rsquo;employé n&rsquo;a pas encore été payé. Vous changeriez le montant sous «Dépenses annuelles prévues» à 55&nbsp;000&nbsp;$. ",
        "4": "<span class='v-right' /><strong>Correct!</strong> Vous devez réduire vos dépenses annuelles prévues d&rsquo;un mois. 60&nbsp;000&nbsp;$ ÷ 12 mois X 11 mois = 55&nbsp;000&nbsp;$."
      },
      "conclusion": ""
    },
    "q2": {
      "text": "Vous avez approuvé un plan d&rsquo;apprentissage de 1&nbsp;500&nbsp;$ pour un nouvel employé. En examinant l&rsquo;objet de dépenses fourni, quelles colonnes doivent être mises à jour?",
      "options": {
        "1": "Augmenter « Engagements » et « Budget »",
        "2": "Augmenter « Engagements » et « Dépenses réelles à ce jour »",
        "3": "Augmenter « Engagements » et « Dépenses annuelles prévues »"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong> Incorrect. Il n&rsquo;est pas nécessaire d&rsquo;augmenter ou de diminuer le budget. Vous changeriez le montant sous  «Engagements » à 1&nbsp;500&nbsp;$ pour enregistrer un engagement préalable des fonds et augmenteriez le montant de vos « Dépenses annuelles prévues » de 1&nbsp;500&nbsp;$.",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong> Vous n&rsquo;augmenteriez pas ou ne diminueriez pas les    « Dépenses réelles à ce jour » parce que vous n&rsquo;avez pas payé pour le cours. Vous changeriez le montant sous « Engagements » à 1&nbsp;500&nbsp;$ pour enregistrer un engagement préalable des fonds et augmenteriez le montant de vos « Dépenses annuelles prévues » de 1&nbsp;500&nbsp;$",
        "3": "<span class='v-right' /><strong>Correct!</strong> Vous changeriez le montant sous  «Engagements » à   1&nbsp;500&nbsp;$ pour enregistrer un engagement préalable des fonds et augmenteriez le montant de vos « Dépenses annuelles prévues »  de 1&nbsp;500&nbsp;$."
      },
      "conclusion": ""
    }
  }
}</i18n>
<style type="text/css" scoped>
  /*Using a scoped 'deep' selector*/
 .qTable td, .qTable th{
  border: 1px solid #4d4d4d;
  padding: .5em;
}
 .qTable th{
  background-color: #7d677d;
  color:#fff;
}
</style>
