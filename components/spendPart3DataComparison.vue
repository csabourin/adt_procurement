<template>
  <span>
    <div>
      <b-card>
        <p><strong>Question</strong></p>
          <radioQuiz :Question="$t('q1')" qId="1" />
        
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
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>  Although you could decrease your commitments, you would only reduce it by $5,000.  $20,000 - ($60,000 ÷ 12 months X 1 month) = $15,000. You would change the amount under “Annual Forecasted Expenditures” to $55,000.",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>  There is no need to adjust the actuals because the employee did not get paid yet. You would change the amount under “Annual Forecasted Expenditures” to $55,000.",
        "4": "<span class='v-right' /><strong>Correct!</strong> You need to reduce your Annual Forecast Expenditures by one month. $60,000 ÷ 12 months X 11 months = $55,000. "
      },
      "conclusion": ""
    }
  },
  "fr": {
    "q1": {
      "text": "Vous venez de vous rappeler qu'un employé est en congé non payé depuis un mois. Son salaire annuel est de 60 000 $. Où changeriez-vous le montant à    55 000 $?",
      "options": {
        "1": "Sous « Budget »",
        "2": "Sous « Engagements »",
        "3": "Sous « Dépenses réelles à ce jour »",
        "4": "Sous « Dépenses annuelles prévues »"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>  Il n'est pas nécessaire de réduire le budget, car vous pourriez en avoir besoin pour payer des heures supplémentaires ou pour embaucher un employé occasionnel. Vous changeriez le montant sous « Dépenses annuelles prévues » à 55 000 $.",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>  Même si vous pouviez réduire vos engagements, vous ne les réduiriez que de 5 000 $.  20 000 $ - (60 000 $ ÷ 12 mois X 1 mois) = 15 000 $. Vous changeriez le montant sous « Dépenses annuelles prévues » à 55 000 $.",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>  Il n'est pas nécessaire d'ajuster les dépenses réelles parce que l'employé n'a pas encore été payé. Vous changeriez le montant sous «Dépenses annuelles prévues» à 55 000 $. ",
        "4": "<span class='v-right' /><strong>Correct!</strong>  Vous devez réduire vos dépenses annuelles prévues d'un mois. 60 000 $ ÷ 12 mois X 11 mois = 55 000 $."
      },
      "conclusion": ""
    }
  }
}</i18n>