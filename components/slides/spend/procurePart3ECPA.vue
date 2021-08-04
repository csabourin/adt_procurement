<template>
	<div>
    <b-container>
      <b-row>
        <b-col xl="7" lg="6" style="border: 1px solid #212529;"><SalesInvoice /></b-col>
        <b-col>
		 <b-card>
      <p>{{$t('Introduction')}}</p>
    <b-tabs content v-model="tabIndex">
      <b-tab title="Question 1"><radioQuiz :question="$t('q1')" qId="1"/></b-tab>
      <b-tab title="Question 2"><radioQuiz :question="$t('q2')" qId="2" /></b-tab>
      <b-tab title="Question 3"><radioQuiz :question="$t('q3')" qId="3" /></b-tab>
    </b-tabs>
          <!-- Control buttons-->
      <div class="text-center">
        <b-button-group :aria-label="$t('questionNav')" class="mt-2">
          <b-button @click="[tabIndex--, focus()]" :disabled="tabIndex<=0">{{$t('previousPage')}}</b-button>
          <b-button @click="[tabIndex++, focus()]" :disabled="tabIndex>=2">{{$t('nextPage')}}</b-button>
        </b-button-group>
      </div>
</b-card>
</b-col>

</b-row>
</b-container>
	</div>
</template>
<script type="text/javascript">
	import checkboxQuiz from "~/components/checkboxQuiz"
	import radioQuiz from "~/components/radioQuiz"
  import SalesInvoice from "~/components/slides/spend/SalesInvoice"
	export default{
		components:{
			checkboxQuiz,
			radioQuiz,
      SalesInvoice
		},
    data(){
      return{
        tabIndex:0
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
  "Introduction":"Answer the following questions by looking at the invoice provided.",
    "q1": {
      "text": "You had ordered 25 pairs of rose-coloured glasses at the unit price of $20 for a total of $500. Should you pay the invoice?",
      "options": {
        "1": "Yes",
        "2": "No"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "You should not pay the invoice as it is incorrect. The invoice needs to be returned to the supplier to be corrected before it can be paid. It should say 25 pairs of rose-coloured glasses at $20 per unit."
    },
    "q2": {
      "text": "You had ordered 5 polka-dot highlighters and received 5 yellow highlighters. Should you pay the invoice?",
      "options": {
        "1": "Yes",
        "2": "No"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "You should not pay the invoice as you did not receive what you had ordered."
    },
    "q3": {
      "text": "If the previous line items were correct and the sales tax in your province were 13%, should you pay the invoice?",
      "options": {
        "1": "Yes",
        "2": "No"
      },
      "feedback": {
        "1": "<span class='v-right' /> <strong>Correct!</strong>",
        "2": "<span class='v-wrong' /> <strong>Incorrect</strong>"
      },
      "conclusion": "You should pay the invoice as the line items were correct and the supplier charged the right amount of taxes."
    }
  },
  "fr": {
  "Introduction":"Répondez aux questions suivantes en consultant la facture fournie.",
    "q1": {
      "text": "Vous aviez commandé 25 paires de lunettes roses au prix unitaire de 20 $ pour un total de 500 $. Devriez-vous payer la facture?",
      "options": {
        "1": "Oui",
        "2": "Non"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "Vous ne devriez pas payer la facture, car elle est inexacte. La facture doit être retournée au fournisseur pour être corrigée avant d’être payée. Elle devrait indiquer 25 paires de lunettes roses à 20&nbsp;$ l’unité."
    },
    "q2": {
      "text": "Vous avez commandé 5 surligneurs à pois et avez reçu 5 surligneurs jaunes. Devriez-vous payer la facture?",
      "options": {
        "1": "Oui",
        "2": "Non"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "Vous ne devriez pas payer la facture, car vous n’avez pas reçu ce que vous aviez commandé."
    },
    "q3": {
      "text": "Si les postes précédents étaient corrects et que la taxe de vente dans votre province était de 13 %, devriez-vous payer la facture?",
      "options": {
        "1": "Oui",
        "2": "Non"
      },
      "feedback": {
        "1": "<span class='v-right' /> <strong>Correct!</strong>",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong>"
      },
      "conclusion": "Vous devriez payer la facture, car les postes étaient exacts et le fournisseur a facturé le bon montant de taxe."
    }
  }
}</i18n>