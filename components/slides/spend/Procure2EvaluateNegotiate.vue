<template>
	<div>
    <b-container>
      <b-row>
        <legend>
          <p v-html="$t('instructions')" />
        </legend>
		 <b-card>
       <b-tabs v-model="tabIndex">
        <b-tab title="Question 1">
          <fillTheBlanks :blanks="1" :sentence="$t('q1.sentence')" :termList="$t('q1.choices')" :answer="['1']" :feedback="$t('q1.feedback')" qid="q1" /><hr>
        </b-tab>
        <b-tab title="Question 2">
          <br>
          <p><b>{{$t('Question2Instruction')}}</b></p>
          <fillTheBlanks :blanks="1" :sentence="$t('q2.sentence')" :termList="$t('q2.choices')" :answer="['4']" :feedback="$t('q2.feedback')" qid="q2" /><hr>
          <fillTheBlanks :blanks="1" :sentence="$t('q3.sentence')" :termList="$t('q3.choices')" :answer="['5']" :feedback="$t('q3.feedback')" qid="q3" /><hr>
          <fillTheBlanks :blanks="1" :sentence="$t('q4.sentence')" :termList="$t('q4.choices')" :answer="['3']" :feedback="$t('q4.feedback')" qid="q4" /><hr>
        </b-tab>
        <b-tab title="Question 3">
          <fillTheBlanks :blanks="1" :sentence="$t('q5.sentence')" :termList="$t('q5.choices')" :answer="['2']" :feedback="$t('q5.feedback')" qid="q5" /><hr>
        </b-tab>
       </b-tabs>
        <!-- Control buttons-->
        <div class="text-center">
          <b-button-group :aria-label="$t('questionNav')" class="mt-2">
            <b-button @click="[tabIndex--, focus()]" :disabled="tabIndex<=0">{{$t('previousPage')}}</b-button>
            <b-button @click="[tabIndex++, focus()]" :disabled="tabIndex>=2">{{$t('nextPage')}}</b-button>
          </b-button-group>
        </div>
    </b-card>

</b-row>
</b-container>
	</div>
</template>
<script type="text/javascript">
	import checkboxQuiz from "~/components/checkboxQuiz"
	import radioQuiz from "~/components/radioQuiz"
  import SalesInvoice from "~/components/slides/spend/SalesInvoice"
  import fillTheBlanks from "~/components/interface/fillTheBlanks"
	export default{
		components:{
			checkboxQuiz,
			radioQuiz,
      SalesInvoice,
      fillTheBlanks
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
  "instructions":"Here’s a chance for you to confirm your knowledge. Select the best choice to fill in the blanks.",
  "Question2Instruction":"There are three methods that you can use to determine how bids are evaluated.",
    "q1": {
      "sentence": "The {0} is responsible for evaluating bids and proposals.",
      "choices": {
        "1": "bid evaluation team",
        "2": "bid scoring grid",
        "3": "combination of mandatory and point-rated criteria",
        "4": "mandatory criteria only",
        "5": "point-rated criteria"
      },
      "feedback": {
        "right": "The bid evaluation team is responsible for evaluating bids and proposals.",
        "wrong": "The bid evaluation team is responsible for evaluating bids and proposals."
      }
    },
    "q2": {
      "sentence": "The {0} method means the bid must meet all the mandatory criteria specified in the solicitation document.",
      "choices": {
        "1": "bid evaluation team",
        "2": "bid scoring grid",
        "3": "combination of mandatory and point-rated criteria",
        "4": "mandatory criteria only",
        "5": "point-rated criteria"
      },
      "feedback": {
        "right": "The mandatory criteria only method means the bid must meet all the mandatory criteria specified in the solicitation document.",
        "wrong": "The mandatory criteria only method means the bid must meet all the mandatory criteria specified in the solicitation document."
      }
    },
    "q3": {
      "sentence": "The {0} method means a minimum required score must be attained.",
      "choices": {
        "1": "bid evaluation team",
        "2": "bid scoring grid",
        "3": "combination of mandatory and point-rated criteria",
        "4": "mandatory criteria only",
        "5": "point-rated criteria"
      },
      "feedback": {
        "right": "The point-rated criteria method means a minimum required score must be attained.",
        "wrong": "The point-rated criteria method means a minimum required score must be attained."
      }
    },
    "q4": {
      "sentence": "The {0} method means a bid must meet all of the specified mandatory criteria and obtain the required minimum score on the point-rated criteria.",
      "choices": {
        "1": "bid evaluation team",
        "2": "bid scoring grid",
        "3": "combination of mandatory and point-rated criteria",
        "4": "mandatory criteria only",
        "5": "point-rated criteria"
      },
      "feedback": {
        "right": "The combination of mandatory and point-rated criteria method means a bid must meet all of the specified mandatory criteria and obtain the required minimum score on the point-rated criteria.",
        "wrong": "The combination of mandatory and point-rated criteria method means a bid must meet all of the specified mandatory criteria and obtain the required minimum score on the point-rated criteria."
      }
    },
    "q5": {
      "sentence": "A {0} describes the breakdown for the assignment of points. It sometimes has a minimum pass mark for each category or an overall pass mark.",
      "choices": {
        "1": "bid evaluation team",
        "2": "bid scoring grid",
        "3": "combination of mandatory and point-rated criteria",
        "4": "mandatory criteria only",
        "5": "point-rated criteria"
      },
      "feedback": {
        "right": "A bid scoring grid describes the breakdown for the assignment of points. It sometimes has a minimum pass mark for each category or an overall pass mark.",
        "wrong": "A bid scoring grid describes the breakdown for the assignment of points. It sometimes has a minimum pass mark for each category or an overall pass mark."
      }
    }
  },
  "fr": {
  "instructions":"Voici l’occasion pour vous d’évaluer vos connaissances. Sélectionnez le meilleur choix pour remplir les espaces.",
  "Question2Instruction":"Vous pouvez utiliser trois méthodes pour déterminer la manière dont les soumissions seront évaluées.",
    "q1": {
      "sentence": "L’ / La / Les {0} est / sont responsable(s) de l’évaluation des soumissions et des propositions.",
      "choices": {
        "1": "équipe d’évaluation des soumissions",
        "2": "grille de pointage des soumissions",
        "3": "combinaison de critères obligatoires et cotés par points",
        "4": "critères obligatoires uniquement",
        "5": "critères cotés par points"
      },
      "feedback": {
        "right": "L’équipe d’évaluation des soumissions est responsable de l’évaluation des soumissions et des propositions.",
        "wrong": "L’équipe d’évaluation des soumissions est responsable de l’évaluation des soumissions et des propositions."
      }
    },
    "q2": {
      "sentence": "La méthode par {0} signifie que la soumission doit satisfaire à tous les critères obligatoires précisés dans le document d’invitation à soumissionner.",
      "choices": {
        "1": "équipe d’évaluation des soumissions",
        "2": "grille de pointage des soumissions",
        "3": "combinaison de critères obligatoires et cotés par points",
        "4": "critères obligatoires uniquement",
        "5": "critères cotés par points"
      },
      "feedback": {
        "right": "La méthode par critères obligatoires uniquement signifie que la soumission doit satisfaire à tous les critères obligatoires précisés dans le document d’invitation à soumissionner.",
        "wrong": "La méthode par critères obligatoires uniquement signifie que la soumission doit satisfaire à tous les critères obligatoires précisés dans le document d’invitation à soumissionner."
      }
    },
    "q3": {
      "sentence": "La méthode par {0} signifie qu’un score minimum requis doit être atteint.",
      "choices": {
        "1": "équipe d’évaluation des soumissions",
        "2": "grille de pointage des soumissions",
        "3": "combinaison de critères obligatoires et cotés par points",
        "4": "critères obligatoires uniquement",
        "5": "critères cotés par points"
      },
      "feedback": {
        "right": "La méthode par critères cotés par points signifie qu’un résultat minimum requis doit être atteint.",
        "wrong": "La méthode par critères cotés par points signifie qu’un résultat minimum requis doit être atteint."
      }
    },
    "q4": {
      "sentence": "La méthode par {0} signifie qu’une soumission doit satisfaire à tous les critères obligatoires spécifiés et obtenir la note minimale requise pour les critères cotés par points.",
      "choices": {
        "1": "équipe d’évaluation des soumissions",
        "2": "grille de pointage des soumissions",
        "3": "combinaison de critères obligatoires et cotés par points",
        "4": "critères obligatoires uniquement",
        "5": "critères cotés par points"
      },
      "feedback": {
        "right": "La méthode par combinaison de critères obligatoires et cotés par points signifie qu’une soumission doit satisfaire à tous les critères obligatoires spécifiés et obtenir la note minimale requise pour les critères cotés par points.",
        "wrong": "La méthode par combinaison de critères obligatoires et cotés par points signifie qu’une soumission doit satisfaire à tous les critères obligatoires spécifiés et obtenir la note minimale requise pour les critères cotés par points."
      }
    },
    "q5": {
      "sentence": "Une / Des {0} décrit / décrivent la répartition des points attribués. Elle / ils comporte(nt) parfois une note de passage minimale pour chaque catégorie ou une note de passage globale.",
      "choices": {
        "1": "équipe d’évaluation des soumissions",
        "2": "grille de pointage des soumissions",
        "3": "combinaison de critères obligatoires et cotés par points",
        "4": "critères obligatoires uniquement",
        "5": "critères cotés par points"
      },
      "feedback": {
        "right": "Une grille de pointage des soumissions décrit la répartition des points attribués. Elle comporte parfois une note de passage minimale pour chaque catégorie ou une note de passage globale.",
        "wrong": "Une grille de pointage des soumissions décrit la répartition des points attribués. Elle comporte parfois une note de passage minimale pour chaque catégorie ou une note de passage globale."
      }
    }
  }
}</i18n>