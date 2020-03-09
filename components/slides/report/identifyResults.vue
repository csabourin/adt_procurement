<template>
  <div>
    <p>{{$t('intro')}}</p>
    <b-card>
      <b-tabs v-model="tabIndex">
        <b-tab title="Question 1">
          <checkboxQuiz :question="$t('q1')" qId="1" :Answer='["1","2"]'/>
        </b-tab>
        <b-tab title="Question 2">
          <radioQuiz :question="$t('q2')" qId="2" />
        </b-tab>
        <b-tab title="Question 3">
          <radioQuiz :question="$t('q3')" qId="3" />
        </b-tab>
        <b-tab title="Question 4">
          <checkboxQuiz :question="$t('q4')" qId="4" :Answer='["1","2","3"]'/>
        </b-tab>
      </b-tabs>
    </b-card>
    <!-- Control buttons-->
    <div class="text-center">
      <b-button-group class="mt-2">
        <b-button @click="tabIndex--" :disabled="tabIndex<=0">{{$t('previousPage')}}</b-button>
        <b-button @click="tabIndex++" :disabled="tabIndex>=3">{{$t('nextPage')}}</b-button>
      </b-button-group>
    </div>
  </div>
</template>
<script type="text/javascript">
import radioQuiz from "~/components/radioQuiz"
import checkboxQuiz from "~/components/checkboxQuiz"
export default {
	data(){
		return{
			tabIndex:0
		}
	},
  components: {
    radioQuiz,
    checkboxQuiz
  }
}

</script>
<i18n>{
  "en": {
    "intro": "Let’s imagine that you are in charge of an eight-person fisheries team. This team has been tasked with issuing 500 licences per year and renewing 300 licences per year. A recent policy change sets out the licence issuance service standard as 15 days from the time of request, which differs from the previous 30 days from the time of request. A new software has been implemented to speed up the licence process. Your office is also tasked with performing fish stock audits.",
    "q1": {
      "text": "Given the scenario provided, which of the following are examples of performance indicators? ",
      "options": {
        "1": "Percentage of planned versus completed fish stock audits",
        "2": "Number of partners providing additional support to funded projects",
        "3": "A budget of $1,000 for microscopes"
      },
      "feedback": {
        "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "right": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "Performance indicators are commonly expressed in terms of percentages and numbers. Budget items are not performance indicators."
    },
    "q2": {
      "text": "Given the scenario provided, which results would you provide for your Departmental Results Report?",
      "options": {
        "1": "Fishing licences were issued within 15 days of request, 95% of the time.",
        "2": "New weather-tracking software was purchased.",
        "3": "523 hunting licences were issued."
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>  This is clearly a result against the target from your work plan.",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong> “Fishing licences were issued within 15 days of request, 95% of the time” is a result against the target from the work plan. A new software purchase would not be considered a result. ",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong> “Fishing licences were issued within 15 days of request, 95% of the time” is a result against the target from the work plan. Hunting licences do not apply to fisheries."
      },
      "conclusion": ""
    },
    "q3": {
      "text": "Mid-year, you’ve renewed 75 fishing licences. Given the scenario provided, are you on track to meet your target? ",
      "options": {
        "1": "Yes",
        "2": "No"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "You’re halfway through the year but you have only renewed a quarter of the target for fishing licences. This target is at risk of not being reached."
    },
    "q4": {
      "text": "It is now year-end. You have issued 400 licences. How would you explain the variance to the Finance?",
      "options": {
        "1": "Key staff left unexpectedly.",
        "2": "There was a delay in implementing the new software. ",
        "3": "You needed to train staff on the new software. "
      },
      "feedback": {
        "right": "<span class='v-right' /><strong>Correct!</strong>",
        "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong> All are possible explanations."
      },
      "conclusion": "There could be many reasons to explain a variance. You will know how to explain these variances in your own activities."
    }
  },
  "fr": {
    "intro": "Imaginons que vous êtes responsable d'une équipe de 8 personnes qui travaille dans le domaine des pêches. Cette équipe est chargée de délivrer 500 permis par an et de renouveler 300 permis par an. Un récent changement aux normes de service fixe maintenant les délais de délivrance à 15 jours suivant la réception de la demande, plutôt qu’à 30 jours, comme c’était le cas auparavant. Un nouveau logiciel permet d’accélérer la délivrance des permis. Votre bureau doit aussi faire des vérifications de stocks.",
    "q1": {
      "text": "Compte tenu du scénario fourni, lesquels des exemples suivants sont des exemples d’indicateurs de rendement?",
      "options": {
        "1": "Pourcentage des vérifications des stocks de poissons prévues par rapport aux vérifications terminées.",
        "2": "Nombre de partenaires offrant un soutien supplémentaire aux projets financés.",
        "3": "Un budget de 1&nbsp;000&nbsp;$ pour les microscopes."
      },
      "feedback": {
        "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "right": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "Les indicateurs de performance sont généralement exprimés en pourcentages et en chiffres. Les postes budgétaires ne sont pas des indicateurs de rendement."
    },
    "q2": {
      "text": "Compte tenu du scénario fourni, quels résultats fourniriez-vous pour le Rapport ministériel sur les résultats?",
      "options": {
        "1": "Les permis de pêche ont été délivrés dans les 15 jours suivant la demande, 95 % du temps.",
        "2": "Un nouveau logiciel de suivi météorologique a été acheté.",
        "3": "523 permis de chasse ont été délivrés."
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>  Il s’agit clairement d’un résultat lié à l’objectif que vous vous êtes fixé dans votre plan de travail.",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>  &laquo; Les permis de pêche ont été délivrés dans les 15 jours suivant la demande, 95 % du temps &raquo; est un résultat lié à l’objectif que vous vous êtes fixé dans votre plan de travail. L’achat d’un nouveau logiciel ne serait pas considéré comme un résultat.  ",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong> &laquo; Les permis de pêche ont été délivrés dans les 15 jours suivant la demande, 95 % du temps &raquo; est un résultat lié à l’objectif que vous vous êtes fixé dans votre plan de travail. Les permis de chasse ne s’appliquent pas aux pêches."
      },
      "conclusion": ""
    },
    "q3": {
      "text": "En milieu d’année, vous avez renouvelé 75 permis de pêche. Compte tenu du scénario présenté, êtes-vous sur la bonne voie pour atteindre votre objectif?",
      "options": {
        "1": "Oui",
        "2": "Non"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "Vous êtes à la moitié de l’année, mais vous n’avez renouvelé qu’un quart de l’objectif fixé pour les permis de pêche. Cet objectif risque de ne pas être atteint."
    },
    "q4": {
      "text": "C’est maintenant la fin de l’année. Vous avez délivré 400 permis. Comment expliquez-vous l’écart aux Finances? Sélectionnez tout ce qui pourrait s’appliquer.",
      "options": {
        "1": "Le personnel clé est parti inopinément.",
        "2": "Il y a eu un retard dans la mise en œuvre du nouveau logiciel. ",
        "3": "Vous deviez former le personnel au nouveau logiciel."
      },
      "feedback": {
        "right": "<span class='v-right' /><strong>Correct!</strong>",
        "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong> Toutes les explications sont possibles."
      },
      "conclusion": "Il peut y avoir de nombreuses raisons d’expliquer un écart. Vous saurez comment expliquer ces écarts dans vos propres activités."
    }
  }
}</i18n>
