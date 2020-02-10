<template>
	<div>
    <b-container>
      <b-row>
        <b-col><SalesInvoice /></b-col>
        <b-col>
		 <b-card>
      <p v-html="$t('instructions')" />
    <b-tabs content v-model="tabIndex">
      <b-tab title="Question 1"><radioQuiz :question="$t('q1')" qId="1"/></b-tab>
      <b-tab title="Question 2"><radioQuiz :question="$t('q2')" qId="2" /></b-tab>
      <b-tab title="Question 3"><radioQuiz :question="$t('q3')" qId="3" /></b-tab>
    </b-tabs>
          <!-- Control buttons-->
      <div class="text-center">
        <b-button-group class="mt-2">
          <b-button @click="tabIndex--" :disabled="tabIndex<=0">{{$t('previousPage')}}</b-button>
          <b-button @click="tabIndex++" :disabled="tabIndex>=2">{{$t('nextPage')}}</b-button>
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
    }
	}
</script>
<i18n>{
  "en": {
  "instructions":"Answer the following questions by looking at the provided invoice.",
    "q1": {
      "text": "You have received 15 pairs of rose-colored glasses. The other five pairs are backordered. Do you pay the invoice?",
      "options": {
        "1": "Yes",
        "2": "No"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "You will need to contact the supplier to correct the invoice as you have not received five pairs. "
    },
    "q2": {
      "text": "You have ordered highlighters in the amount of $10.00 from XYZ Enterprises. Looking at the provided invoice, should you pay it?",
      "options": {
        "1": "Yes",
        "2": "No"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": " You ordered from XYZ Enterprises, but if you look closely, the invoice is stating ABC Enterprises."
    },
    "q3": {
      "text": "You have ordered rose colored glasses at $20 per pair. Looking at the provided invoice, should you pay it?",
      "options": {
        "1": "Yes",
        "2": "No"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
        "2": "<span class='v-right' /> <strong>Correct!</strong>"
      },
      "conclusion": " You ordered rose colored glasses at $20 per pair. If you look closely, the invoice indicates $25 per unit. You will need to contact the supplier to correct the invoice."
    }
  },
  "fr": {
  "instructions":"Répondez aux questions suivantes en consultant la facture fournie.",
    "q1": {
      "text": "Vous avez reçu 15 paires de lunettes roses. Les cinq autres paires sont en rupture de stock. Payez-vous la facture ?",
      "options": {
        "1": "Oui",
        "2": "Non"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "Vous devrez contacter le fournisseur pour corriger la facture car vous n&rsquo;avez pas reçu cinq paires."
    },
    "q2": {
      "text": "Vous avez commandé des surligneurs d&rsquo;une valeur de 10,00 $ auprès des Entreprises XYZ. En regardant la facture fournie, devriez-vous la payer?",
      "options": {
        "1": "Oui",
        "2": "Non"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "Si vous regardez attentivement, vous avez commandé chez Entreprises XYZ, mais la facture indique Entreprises ABC ."
    },
    "q3": {
      "text": "Vous avez commandé des lunettes roses au prix de 20 $ la paire. En regardant la facture fournie, devriez-vous la payer?",
      "options": {
        "1": "Oui",
        "2": "Non"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": " Si vous regardez bien, vous avez commandé des lunettes roses à 20 $ la paire. La facture indique 25 $ par unité. Vous devrez communiquer avec le fournisseur pour corriger la facture."
    }
  }
}</i18n>