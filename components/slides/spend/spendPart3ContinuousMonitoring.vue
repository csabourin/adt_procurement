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
      "text": "The Assistant Deputy Minister approved a $5,000 travel request. It has been registered in the financial system. A week later, when it came time to book the flight, the price went from $600 to $650. What would you do? ",
      "options": {
        "1": "Change your actual expenditure amount.",
        "2": "Change your commitments without seeking an increase in the trip approval.",
        "3": "Leave the financial situation as is. "
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>  You would not change the actual expenditure amount since the employee has not yet made a travel claim.",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong> You would not seek a travel increase because only the airline ticket increased, not the entire travel cost. However, if you feel the total travel amount will exceed the pre-approved amount, you should proceed in getting the adjusted travel amount reapproved.",
        "3": "<span class='v-right' /><strong>Correct!</strong> You would not change the actual expenditure amount since the employee has not yet made a travel claim. You would not seek a travel increase because only the airline ticket increased, not the entire travel cost."
      },
      "conclusion": ""
    },
    "q2": {
      "text": "The start date for your new employee has been postponed a month. So the employee will only be working the remaining six months of the fiscal year instead of seven months. Their salary is $70,000. What do you do?",
      "options": {
        "1": "Reduce the actual expenditures by $5,833 ($70,000 &divide; 12 months &nbsp;&times;&nbsp; 1 month).",
        "2": "Reduce commitment expenditures by $40,833 ($70,000 &divide; 12 months &nbsp;&times;&nbsp; 7 months).",
        "3": "Reduce annual forecast expenditures by $5,833 ($70,000 &divide; 12 months &nbsp;&times;&nbsp; 1 month)."
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect</strong>. Since the employee has not yet started, the actual expenditures cannot be reduced. ",
        "2": "<span class='v-wrong' /> <strong>Incorrect</strong>. Although you could reduce your commitments, you would only reduce it for one month as opposed to seven months.",
        "3": "<span class='v-right' /> <strong>Correct!</strong> Since you had already forecasted seven months, you will need to reduce one month."
      },
      "conclusion": ""
    }
  },
  "fr": {
    "q1": {
      "text": "Le sous-ministre adjoint a approuvé une demande de voyage de 5&nbsp;000&nbsp;$. Elle a été enregistrée dans le système financier. Une semaine plus tard, au moment de réserver le vol, le prix est passé de 600&nbsp;$ à 650&nbsp;$. Que feriez-vous?",
      "options": {
        "1": "Modifiez le montant réel de vos dépenses.",
        "2": "Modifiez vos engagements sans demander une augmentation de l’autorisation de déplacement.",
        "3": "Ne rien changer à la situation financière.  "
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong> Vous ne modifierez pas le montant réel des dépenses puisque le salarié n’a pas encore présenté de demande d’indemnité de déplacement.",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong> Vous ne demandez pas une augmentation de voyage parce que seul le billet d’avion a augmenté, et non le coût total du voyage. Toutefois, si vous croyez que le montant total du voyage dépassera le montant préapprouvé, vous devriez faire approuver de nouveau le montant rajusté du voyage.",
        "3": "<span class='v-right' /><strong>Correct!</strong> Vous ne modifierez pas le montant réel des dépenses puisque le salarié n’a pas encore présenté de demande d’indemnité de déplacement. Vous ne demandez pas une augmentation de voyage parce que seul le billet d’avion a augmenté, et non le coût total du voyage."
      },
      "conclusion": ""
    },
    "q2": {
      "text": "La date d’entrée en fonction de votre nouvel employé a été repoussée d’un mois. Il ne travaillera donc que les 6 mois restants de l’exercice au lieu de 7 mois. Son salaire est de 70&nbsp;000&nbsp;$. Qu’est-ce que vous faites?",
      "options": {
        "1": "Réduire les dépenses réelles de 5&nbsp;833&nbsp;$ (70&nbsp;000&nbsp;$ &divide; 12 mois&nbsp;&times;&nbsp;1 mois).",
        "2": "Réduire les dépenses d’engagement de 40&nbsp;833&nbsp;$ (70&nbsp;000&nbsp;$ &divide; 12 mois&nbsp;&times;&nbsp;7 mois).",
        "3": "Réduire les dépenses annuelles prévues de 5&nbsp;833&nbsp;$ (70&nbsp;000&nbsp;$ &divide; 12 mois&nbsp;&times;&nbsp;1 mois)."
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect</strong>. Étant donné que l’employé n'a pas encore commencé, les dépenses réelles ne peuvent pas être réduites.",
        "2": "<span class='v-wrong' /> <strong>Incorrect</strong>. Bien que vous puissiez réduire vos engagements, vous ne les réduiriez que d'un mois au lieu de 7 mois.",
        "3": "<span class='v-right' /> <strong>Correct!</strong> Comme vous aviez déjà prévu 7 mois, vous devrez réduire un mois."
      },
      "conclusion": ""
    }
  }
}</i18n>