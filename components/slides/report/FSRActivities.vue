<template>
  <div>
    <b-card>
      <b-tabs v-model="tabIndex">
        <b-tab title="Question 1">
          <radioQuiz :question="$t('q1')" qId="1"/>
        </b-tab>
        <b-tab title="Question 2">
          <radioQuiz :question="$t('q2')" qId="2" />
        </b-tab>
      </b-tabs>
    </b-card>
    <!-- Control buttons-->
    <div class="text-center">
      <b-button-group class="mt-2">
        <b-button @click="[tabIndex--, focus()]" :disabled="tabIndex<=0">{{$t('previousPage')}}</b-button>
        <b-button @click="[tabIndex++, focus()]" :disabled="tabIndex>=1">{{$t('nextPage')}}</b-button>
      </b-button-group>
    </div>
    <b-row>
      <b-col cols="2" class="text-center">
        <download :filename="$t('fileName.prepareFSR')" :HTMLFilename="$t('fileName.prepareFSRHTML')" size=128 iconColor="reportBackground" :title="$t('DownloadPrepareFSR')" :line1="$t('prepareFSRLn1')" :line2="$t('prepareFSRLn2')" :lineTag="$t('prepareFSRExample')" :fileSize="this.$i18n.locale == 'en' ? '108' : '96,5'" name="prepareFSR" />
      </b-col>
    </b-row>
  </div>
</template>
<script type="text/javascript">
import radioQuiz from "~/components/radioQuiz"
import checkboxQuiz from "~/components/checkboxQuiz"
import download from "~/components/fileDownload"
import HTMLJobaidLink from "~/components/HTMLJobaidLink"
export default {
	data(){
		return{
			tabIndex:0
		}
	},
  components: {
    radioQuiz,
    checkboxQuiz,
    download,
    HTMLJobaidLink
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
<i18n>
	{
  "en": {
    "q1": {
      "text": "You approved $3,000 in employee travel claims in P4. But looking at the P6 report, you see that the Year-To-Date Actuals is only $1,700. What do you do? ",
      "options": {
        "1": "Change your forecast to $10,800.",
        "2": "Follow up on the $3,000 with Finance. ",
        "3": "Change the Year-To-Date Actuals in the P6 report to $4,700."
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong> Your forecast doesn’t change.",
        "2": "<span class='v-right' /><strong>Correct!</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong> You cannot change the Year-To-Date Actuals in the P6 report."
      },
      "conclusion": "You must ask Finance why the $3,000 doesn’t show up in the Year-To-Date Actuals since it has been more than 2 months since you approved the claims."
    },
    "q2": {
      "text": "An employee lost their acquisition card, which had $800 in office supply charges. What do you do?",
      "options": {
        "1": "Call Finance to cancel the card.",
        "2": "Decrease your commitments for office supplies. ",
        "3": "Recover $800 from the employee.\n"
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>  You must still pay for the approved purchases. Your commitments will not be modified.",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>  Unless there has been a misuse of funds by the employee, they will not have to reimburse the approved purchases."
      },
      "conclusion": "Finance will cancel the card and reissue a new card. You’ll also need to validate your expenditures to ensure there is no misuse of funds."
    }
  },
  "fr": {
    "q1": {
      "text": "Vous avez approuvé des demandes de remboursement de frais de voyage de 3&nbsp;000&nbsp;$ pour les employés dans P4. Mais en regardant le rapport des six Présidents, vous constatez que les chiffres réels depuis le début de l’année ne sont que de 1&nbsp;700&nbsp;$. Que faites-vous ?",
      "options": {
        "1": "Changez votre prévision pour 10&nbsp;800&nbsp;$.",
        "2": "Assurez le suivi des 3&nbsp;000&nbsp;$ auprès du service des finances.",
        "3": "Modifier les chiffres réels depuis le début de l’année dans le rapport P6 à 4&nbsp;700&nbsp;$."
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong> Vos prévisions ne changent pas.",
        "2": "<span class='v-right' /><strong>Correct!</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong> Vous ne pouvez pas modifier les données réelles depuis le début de l’année dans le rapport P6."
      },
      "conclusion": " Vous devez demander au Service des finances pourquoi les 3&nbsp;000&nbsp;$ ne figurent pas dans les chiffres réels depuis le début de l’année puisqu’il y a plus de 2 mois que vous avez approuvé les demandes."
    },
    "q2": {
      "text": "Un employé a perdu sa carte d’achat dont les frais de fournitures de bureau s’élevaient à 800 $. Que faites-vous?",
      "options": {
        "1": "Appelez le Service des finances pour annuler la carte.",
        "2": "Réduisez vos engagements en matière de fournitures de bureau. ",
        "3": "Récupérer 800 $ auprès de l’employé."
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>  Vous devez quand même payer les achats approuvés. Vos engagements ne seront pas modifiés.",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>  À moins qu’il n’y ait eu une mauvaise utilisation des fonds par l’employé, ce dernier n’aura pas à rembourser les achats approuvés."
      },
      "conclusion": "Le Service des finances annulera la carte et en délivera une nouvelle. Vous devrez également valider vos dépenses pour vous assurer qu’il n’y a pas de mauvaise utilisation des fonds."
    }
  }
}
	
</i18n>