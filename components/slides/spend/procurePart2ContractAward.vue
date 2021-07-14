<template>
	<div>
    <b-container>
      <b-row>
        <legend>
          <p v-html="$t('instructions')" />
        </legend>
		 <b-card>
          <fillTheBlanks :blanks="1" :sentence="$t('q1.sentence')" :termList="$t('q1.choices')" :answer="['3']" :feedback="$t('q1.feedback')" qid="q1" /><hr>
          <fillTheBlanks :blanks="1" :sentence="$t('q2.sentence')" :termList="$t('q2.choices')" :answer="['2']" :feedback="$t('q2.feedback')" qid="q2" /><hr>
          <fillTheBlanks :blanks="1" :sentence="$t('q3.sentence')" :termList="$t('q3.choices')" :answer="['5']" :feedback="$t('q3.feedback')" qid="q3" /><hr>
          <fillTheBlanks :blanks="2" :sentence="$t('q4.sentence')" :termList="$t('q4.choices')" :answer="['1','4']" :feedback="$t('q4.feedback')" qid="q4" /><hr>
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
  "instructions":"Here’s a chance for you to confirm your knowledge of the different types of contractual documents that you will use depending on the method of solicitation. Select the best choice to fill in the blanks.",
    "q1": {
      "sentence": "A {0} is issued in response to a quotation submitted either by phone or in writing for a request for quotation.",
      "choices": {
        "1": "call-up",
        "2": "contract",
        "3": "purchase order",
        "4": "standing offer",
        "5": "supply arrangement"
      },
      "feedback": {
        "right": "A purchase order is issued in response to a quotation submitted either by phone or in writing for a request for quotation.",
        "wrong": "A purchase order is issued in response to a quotation submitted either by phone or in writing for a request for quotation."
      }
    },
    "q2": {
      "sentence": "A {0} is issued when an invitation to tender or a request for proposals is used and the accepted tender or proposal is received in writing.",
      "choices": {
        "1": "call-up",
        "2": "contract",
        "3": "purchase order",
        "4": "standing offer",
        "5": "supply arrangement"
      },
      "feedback": {
        "right": "A contract is issued when an invitation to tender or a request for proposals is used and the accepted tender or proposal is received in writing.",
        "wrong": "A contract is issued when an invitation to tender or a request for proposals is used and the accepted tender or proposal is received in writing."
      }
    },
    "q3": {
      "sentence": "The intent of a {0} is to establish a framework to permit rapid processing of individual bid solicitations, which result in legally binding contracts for the goods and services described in those bid solicitations.",
      "choices": {
        "1": "call-up",
        "2": "contract",
        "3": "purchase order",
        "4": "standing offer",
        "5": "supply arrangement"
      },
      "feedback": {
        "right": "The intent of a supply arrangement is to establish a framework to permit rapid processing of individual bid solicitations, which result in legally binding contracts for the goods and services described in those bid solicitations.",
        "wrong": "The intent of a supply arrangement is to establish a framework to permit rapid processing of individual bid solicitations, which result in legally binding contracts for the goods and services described in those bid solicitations."
      }
    },
    "q4": {
      "sentence": "A contractual situation occurs only when a {0} is made against the {1}.",
      "choices": {
        "1": "call-up",
        "2": "contract",
        "3": "purchase order",
        "4": "standing offer",
        "5": "supply arrangement"
      },
      "feedback": {
        "right": "A contractual situation occurs only when a call-up is made against the standing offer.",
        "wrong": "A contractual situation occurs only when a call-up is made against the standing offer."
      }
    }
  },
  "fr": {
  "instructions":"Voici l’occasion d’évaluer votre connaissance des différents types de documents contractuels que vous utiliserez en fonction de la méthode de demande de propositions. Sélectionnez le meilleur choix pour remplir les espaces.",
    "q1": {
      "sentence": "Un / Une {0} est produit(e) en réponse à un prix soumis par téléphone ou par écrit pour une demande d’indication de prix.",
      "choices": {
        "1": "commande subséquente",
        "2": "contrat",
        "3": "bon de commande",
        "4": "offre à commandes",
        "5": "arrangement en matière d’approvisionnement"
      },
      "feedback": {
        "right": "Un bon de commande est produit en réponse à un prix soumis par téléphone ou par écrit pour une demande d’indication de prix.",
        "wrong": "Un bon de commande est produit en réponse à un prix soumis par téléphone ou par écrit pour une demande d’indication de prix."
      }
    },
    "q2": {
      "sentence": "Un / Une {0} est accordé(e) lorsqu’une demande de propositions ou un appel d’offres est utilisé et que la proposition ou l’offre acceptée est reçue par écrit.",
      "choices": {
        "1": "commande subséquente",
        "2": "contrat",
        "3": "bon de commande",
        "4": "offre à commandes",
        "5": "arrangement en matière d’approvisionnement"
      },
      "feedback": {
        "right": "Un contrat est accordé lorsqu’une demande de propositions ou un appel d’offres est utilisé et que la proposition ou l’offre acceptée est reçue par écrit.",
        "wrong": "Un contrat est accordé lorsqu’une demande de propositions ou un appel d’offres est utilisé et que la proposition ou l’offre acceptée est reçue par écrit."
      }
    },
    "q3": {
      "sentence": "L’objectif d’un / d’une {0} est d’établir un cadre permettant le traitement rapide des demandes de soumissions individuelles, ce qui donne lieu à des contrats exécutoires pour les produits et services décrits dans ces demandes de soumissions.",
      "choices": {
        "1": "commande subséquente",
        "2": "contrat",
        "3": "bon de commande",
        "4": "offre à commandes",
        "5": "arrangement en matière d’approvisionnement"
      },
      "feedback": {
        "right": "L’objectif d’un arrangement en matière d’approvisionnement est d’établir un cadre permettant le traitement rapide des demandes de soumissions individuelles, ce qui donne lieu à des contrats exécutoires pour les produits et services décrits dans ces demandes de soumissions.",
        "wrong": "L’objectif d’un arrangement en matière d’approvisionnement est d’établir un cadre permettant le traitement rapide des demandes de soumissions individuelles, ce qui donne lieu à des contrats exécutoires pour les produits et services décrits dans ces demandes de soumissions."
      }
    },
    "q4": {
      "sentence": "Une situation contractuelle se produit uniquement lors d’un / d’une {0} à un / une {1}.",
      "choices": {
        "1": "commande subséquente",
        "2": "contrat",
        "3": "bon de commande",
        "4": "offre à commandes",
        "5": "arrangement en matière d’approvisionnement"
      },
      "feedback": {
        "right": "Une situation contractuelle se produit uniquement lors d’une commande subséquente à une offre à commandes.",
        "wrong": "Une situation contractuelle se produit uniquement lors d’une commande subséquente à une offre à commandes."
      }
    }
  }
}</i18n>