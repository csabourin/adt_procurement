<template>
<div>
	<p v-html="$t('intro')" />
	<FSRTable />
  </div>
</template>
<script type="text/javascript">
import radioQuiz from "~/components/radioQuiz"
import checkboxQuiz from "~/components/checkboxQuiz"
import FSRTable from "~/components/slides/report/FSR_Table"
export default {
	data(){
		return{
			tabIndex:0
		}
	},
  components: {
    radioQuiz,
    checkboxQuiz,
    FSRTable
  }
}

</script>
<i18n>
	{
  "en": {
  "intro":"Using the P5 Annual Forecast column as a reference, complete the P6 Annual Forecast column in the provided financial situation report.  Select a cell in the P6 Annual Forecast column and enter the correct amount based on the statement provided. Then select the checkbox beside to validate your answer. <strong>Note:</strong> enter only numbers; no dollar signs, commas or spaces.",
    "q1": {
      "text": "You approved $3,000 in employee travel claims in P4. But looking at the P6 report, you see that the Year-To-Date Actuals is only $1,700. What do you do? ",
      "options": {
        "1": "Change your forecast to $10,800.",
        "2": "Follow up on the $3,000 with finance. ",
        "3": "Change the Year-To-Date Actuals in the P6 report to $4,700."
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong> Your forecast doesn&rsquo;t change.",
        "2": "<span class='v-right' /><strong>Correct!</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong> You cannot change the Year-To-Date Actuals in the P6 report."
      },
      "conclusion": "You must ask finance why the $3,000 doesn&rsquo;t show up in the Year-To-Date Actuals since it has been more than 2 months since you approved the claims."
    },
    "q2": {
      "text": "An employee lost their acquisition card that had $800 in office supplies charges. What do you do?",
      "options": {
        "1": "Call finance to cancel the card.",
        "2": "Decrease your Commitments for office supplies. ",
        "3": "Recover $800 from the employee.\n"
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>  You must still pay for the approved purchases. Your Commitments will not be modified.",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>  Unless there has been a misuse of funds by the employee, they will not have to reimburse the approved purchases."
      },
      "conclusion": "Finance will cancel the card and reissue a new card. You&rsquo;ll also need to validate your expenditures to ensure there is no misuse of funds."
    }
  },
  "fr": {
  "intro":"En utilisant la colonne P5 Prévisions annuelles comme référence, remplissez la colonne P6 Prévisions annuelles dans le rapport sur la situation financière fourni. Sélectionnez une cellule de la colonne P6 Prévisions annuelles et entrez le montant exact en fonction du relevé fourni. Sélectionnez ensuite la case à cocher èa côté pour valider votre réponse. <strong>Note :</strong> n&rsquo;entrez que des chiffres ; pas de signes de dollar, de virgules ou d&rsquo;espaces.",
    "q1": {
      "text": "Vous avez approuvé des demandes de remboursement de frais de voyage de 3&nbsp;000&nbsp;$ pour les employés dans P4. Mais en regardant le rapport des six Présidents, vous constaterez que les chiffres réels depuis le début de l&rsquo;année ne sont que de 1&nbsp;700&nbsp;$. Qu&rsquo;est-ce que vous faites ?",
      "options": {
        "1": "Changez votre prévision à 10&nbsp;800&nbsp;$.",
        "2": "Assurez le suivi des 3&nbsp;000&nbsp;$ auprès du service des finances.",
        "3": "Modifier les chiffres réels depuis le début de l&rsquo;année dans le rapport P6 à 4&nbsp;700&nbsp;$."
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong> Vos prévisions ne changent pas.",
        "2": "<span class='v-right' /><strong>Correct!</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong> Vous ne pouvez pas modifier les données réelles depuis le début de l&rsquo;année dans le rapport P6."
      },
      "conclusion": " Vous devez demander au service des finances pourquoi les 3&nbsp;000&nbsp;$ ne figurent pas dans les chiffres réels depuis le début de l&rsquo;année puisqu&rsquo;il y a plus de deux mois que vous avez approuvé les demandes."
    },
    "q2": {
      "text": "Un employé a perdu sa carte d&rsquo;achat dont les frais de fournitures de bureau s&rsquo;élevaient à 800 $. Qu&rsquo;est-ce que vous faites ?",
      "options": {
        "1": "Appelez le service des finances pour annuler la carte.",
        "2": "Réduisez vos engagements en matière de fournitures de bureau. ",
        "3": "Récupérer 800 $ auprès de l&rsquo;employé."
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>  Vous devez quand même payer les achats approuvés. Vos engagements ne seront pas modifiés.",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>  À moins qu&rsquo;il n&rsquo;y ait eu une mauvaise utilisation des fonds par l&rsquo;employé, ce dernier n&rsquo;aura pas à rembourser les achats approuvés."
      },
      "conclusion": "Le service des finances annulera la carte et en émettra une nouvelle. Vous devrez également valider vos dépenses pour vous assurer qu&rsquo;il n&rsquo;y a pas de mauvaise utilisation des fonds."
    }
  }
}
	
</i18n>