<template>
	<div>
    <b-container>
      <b-row>
        <!--<b-col xl="7" lg="6" style="border: 1px solid #212529;"><SalesInvoice /></b-col>-->
        <b-col>
		 <b-card>
      <p>{{$t('Introduction')}}</p>
      <hr>
      <radioQuiz :question="$t('q1')" qId="1"/>
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
  "Introduction":"Answer the following question.",
    "q1": {
      "text": "When a product is no longer needed, should managers dispose of it immediately?",
      "options": {
        "1": "Yes",
        "2": "No"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "When a product is no longer needed, managers should first look to reallocate or refurbish the product. If that is not possible, then the product should be disposed of."
    }
  },
  "fr": {
  "Introduction":"Répondez à la question suivante.",
    "q1": {
      "text": "Lorsqu’un produit n’est plus nécessaire, les gestionnaires doivent-ils l’éliminer immédiatement?",
      "options": {
        "1": "Oui",
        "2": "Non"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "Lorsqu’un produit n’est plus nécessaire, les gestionnaires doivent d’abord chercher à le réaffecter ou à le remettre en état. Si cela n’est pas possible, le produit doit être éliminé."
    }
  }
}</i18n>