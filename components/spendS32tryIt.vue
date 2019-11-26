<template>
	<div>
		 <b-card>
    <b-tabs content>
      <b-tab title="Question 1"><radioQuiz :Question="$t('q1')" qId="1"/></b-tab>
      <b-tab title="Question 2"><radioQuiz :Question="$t('q2')" qId="2" /></b-tab>
      <b-tab title="Question 3"><radioQuiz :Question="$t('q3')" qId="3" /></b-tab>
      <b-tab title="Question 4"><radioQuiz :Question="$t('q4')" qId="4" /></b-tab>
    </b-tabs>
</b-card>
	</div>
</template>
<script type="text/javascript">
	import checkboxQuiz from "~/components/checkboxQuiz"
	import radioQuiz from "~/components/radioQuiz"
	export default{
		components:{
			checkboxQuiz,
			radioQuiz
		}
	}
</script>
<i18n>{
  "en": {
    "q1": {
      "text": "Do you have enough funds to cover the cost of the microscopes?",
      "options": {
        "1": "Yes",
        "2": "No"
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Of your $44,900 budget, you have already committed $15,000 and spent $29,000. So, $44,000 is already accounted for, meaning there is only $900 left in your budget."
    },
    "q2": {
      "text": "Looking at the attached specimen signature card, does the manager have the required delegated authority to initiate and commit the funds?",
      "options": {
        "1": "Yes",
        "2": "No"
      },
      "feedback": {
        "1": "<span class='v-right' /> <strong>Correct!</strong>",
        "2": "<span class='v-wrong' /> <strong>Incorrect</strong>."
      },
      "conclusion": "The manager has the authority to initiate and commit the funds needed for the microscopes."
    },
    "q3": {
      "text": "What is the best spending mechanism to use to purchase the microscopes?",
      "options": {
        "1": "Acquisition Card",
        "2": "Competitive Contract",
        "3": "Standing Offer",
        "4": "Supply Arrangement"
      },
      "feedback": {
        "1": "<span class='v-right' /> <strong>Correct!</strong>.",
        "2": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
        "3": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
        "4": "<span class='v-wrong' /> <strong>Incorrect</strong>."
      },
      "conclusion": "Given that it is only $2,000 for 10 microscopes, the acquisition card is the best spending mechanism."
    },
    "q4": {
      "text": "What is the nature of this financial transaction (microscopes)?",
      "options": {
        "1": "Revenue ",
        "2": "Expenditure",
        "3": "Asset",
        "4": "Liability"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
        "2": "<span class='v-right' /> <strong>Correct!</strong>.",
        "3": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
        "4": "<span class='v-wrong' /> <strong>Incorrect</strong>."
      },
      "conclusion": "Given that it is only $2,000 for 10 microscopes, it is an expenditure. If you had purchased more microscopes and/or at a higher unit price, it may be considered an asset. Consult your department to find out your limits."
    }
  },
  "fr": {
    "q1": {
      "text": "Après avoir examiné le tableau de délégation de pouvoirs suivant, quel est le montant maximal qu'un gestionnaire pourrait approuver pour entreprendre des activités d'accueil (article 32)?",
      "options": {
        "1": "0$",
        "2": "300$",
        "3": "3 000$",
        "4": "10 000$"
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": " Selon le tableau de délégation signé, le gestionnaire n'a pas le pouvoir d'entreprendre des activités d'accueil; la bonne réponse est donc 0 $. Pour de plus amples renseignements sur l'accueil, visitez le site https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=27228."
    },
    "q2": {
      "text": "Quel est le poste le plus bas qui pourrait approuver l'accueil?",
      "options": {
        "1": "Directeur",
        "2": "Directeur général",
        "3": "Sous-ministre adjoint",
        "4": "Sous-ministre"
      },
      "feedback": {
        "1": "<span class='v-right' /> <strong>Correct!</strong>.  Le poste le plus bas qui pourrait approuver l'accueil est celui de directeur. ",
        "2": "<span class='v-wrong' /> <strong>Incorrect</strong>.  Le directeur est le poste le plus bas qui a le pouvoir d'approuver l'accueil conformément à ce tableau de délégation. ",
        "3": "<span class='v-wrong' /> <strong>Incorrect</strong>.  Le directeur est le poste le plus bas qui a le pouvoir d'approuver l'accueil conformément à ce tableau de délégation. ",
        "4": "<span class='v-wrong' /> <strong>Incorrect</strong>.  Le directeur est le poste le plus bas qui a le pouvoir d'approuver l'accueil conformément à ce tableau de délégation. "
      },
      "conclusion": ""
    },
    "q3": {
      "text": "Plusieurs employés du Ministère se déplacent pour assister à un événement. En consultant le tableau de délégation financière ministériel suivant, à qui demanderiez-vous d'approuver (article 32) un montant de 23 000 $ composé des frais de déplacement et d'inscription aux événements?",
      "options": {
        "1": "Directeur",
        "2": "Directeur général",
        "3": "Sous-ministre adjoint ",
        "4": "Administrateur général"
      },
      "feedback": {
        "right": "<span class='v-right' /> <strong>Correct!</strong>.",
        "wrong": "<span class='v-wrong' /> <strong>Incorrect</strong>."
      },
      "conclusion": "Vous devriez consulter le sous-ministre adjoint (SMA). Seul le SMA a le pouvoir d'approuver les coûts ministériels pour un événement de plus de 20&nbsp;000&nbsp;$ et jusqu'à 25&nbsp;000&nbsp;$. N'oubliez pas de consulter votre directeur et votre directeur général avant d'approcher votre SMA! Pour plus d’information sur les événements, visiter le site https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=27228."
    },
    "q4": {
      "text": "Que signifie 'P' ou 'Plein' dans le tableau suivant ?",
      "options": {
        "1": "Tout est possible Vous pouvez approuver le montant de votre choix.",
        "2": "Vous ne pouvez approuver qu'un montant prédéfini. "
      },
      "feedback": {
        "1": "<span class='v-right' /> <strong>Correct!</strong>.",
        "2": "<span class='v-wrong' /> <strong>Incorrect</strong>."
      },
      "conclusion": "Vous êtes limité dans la mesure de votre budget alloué. Pour plus d'informations sur les autorités, visitez https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=32584"
    }
  }
}</i18n>