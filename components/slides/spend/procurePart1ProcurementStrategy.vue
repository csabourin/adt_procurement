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
          <fillTheBlanks :blanks="1" :sentence="$t('q2.sentence')" :termList="$t('q2.choices')" :answer="['3']" :feedback="$t('q2.feedback')" qid="q2" /><hr>
        </b-tab>
        <b-tab title="Question 3">
          <fillTheBlanks :blanks="2" :sentence="$t('q3.sentence')" :termList="$t('q3.choices')" :answer="['1','3']" :feedback="$t('q3.feedback')" qid="q3" /><hr>
        </b-tab>
        <b-tab title="Question 4">
         <fillTheBlanks :blanks="2" :sentence="$t('q4.sentence')" :termList="$t('q4.choices')" :answer="['2','4']" :feedback="$t('q4.feedback')" qid="q4" /><hr>
        </b-tab>
        <b-tab title="Question 5">
          <fillTheBlanks :blanks="1" :sentence="$t('q5.sentence')" :termList="$t('q5.choices')" :answer="['3']" :feedback="$t('q5.feedback')" qid="q5" /><hr>
        </b-tab>
        <b-tab title="Question 6">
          <fillTheBlanks :blanks="1" :sentence="$t('q6.sentence')" :termList="$t('q6.choices')" :answer="['4']" :feedback="$t('q6.feedback')" qid="q6" /><hr>
        </b-tab>
        <b-tab title="Question 7">
          <fillTheBlanks :blanks="1" :sentence="$t('q7.sentence')" :termList="$t('q7.choices')" :answer="['1']" :feedback="$t('q7.feedback')" qid="q7" /><hr>
        </b-tab>
        <b-tab title="Question 8">
          <fillTheBlanks :blanks="1" :sentence="$t('q8.sentence')" :termList="$t('q8.choices')" :answer="['2']" :feedback="$t('q8.feedback')" qid="q8" /><hr>
        </b-tab>
        <b-tab title="Question 9">
          <fillTheBlanks :blanks="1" :sentence="$t('q9.sentence')" :termList="$t('q9.choices')" :answer="['1']" :feedback="$t('q9.feedback')" qid="q9" /><hr>
        </b-tab>
       </b-tabs>
        <!-- Control buttons-->
        <div class="text-center">
          <b-button-group :aria-label="$t('questionNav')" class="mt-2">
            <b-button @click="[tabIndex--, focus()]" :disabled="tabIndex<=0">{{$t('previousPage')}}</b-button>
            <b-button @click="[tabIndex++, focus()]" :disabled="tabIndex>=8">{{$t('nextPage')}}</b-button>
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
  "instructions":"Here’s a chance for you to confirm your knowledge of procurement strategies and instruments. Select the best choice to fill in the blanks.",
    "q1": {
      "sentence": "{0} are mostly used to acquire higher-dollar-value or higher-complexity goods and services when Standing Offers or Supply Arrangements are not in place or cannot satisfy the requirement.",
      "choices": {
        "1": "Competitive contracts",
        "2": "Contractual arrangements",
        "3": "Sole-source contracts",
        "4": "Standing offers"
      },
      "feedback": {
        "right": "Competitive contracts are mostly used to acquire higher-dollar-value or higher-complexity goods and services when Standing Offers or Supply Arrangements are not in place or cannot satisfy the requirement. Competitive contracts solicit bids from suppliers while sole-source contracts are used when one of the sole-source exceptions applies, such as, when only one specific supplier is capable of performing the contract. Sole-source contracts must always be justified.",
        "wrong": "Competitive contracts are mostly used to acquire higher-dollar-value or higher-complexity goods and services when Standing Offers or Supply Arrangements are not in place or cannot satisfy the requirement. Competitive contracts solicit bids from suppliers while sole-source contracts are used when one of the sole-source exceptions applies, such as, when only one specific supplier is capable of performing the contract. Sole-source contracts must always be justified."
      }
    },
    "q2": {
      "sentence": "{0} are issued if they fall within the following four exceptions: low-dollar value, pressing emergency, not in the public interest, or only one firm is capable of doing the work such as owning the intellectual property rights.",
      "choices": {
        "1": "Competitive contracts",
        "2": "Contractual arrangements",
        "3": "Sole-source contracts",
        "4": "Standing offers"
      },
      "feedback": {
        "right": "Sole-source contracts are issued if they fall within the following four exceptions: low-dollar value, pressing emergency, not in the public interest, or only one firm is capable of doing the work, such as owning the intellectual property rights.",
        "wrong": "Sole-source contracts are issued if they fall within the following four exceptions: low-dollar value, pressing emergency, not in the public interest, or only one firm is capable of doing the work, such as owning the intellectual property rights."
      }
    },
    "q3": {
      "sentence": "A/An {0} is an invitation, verbal or written, to suppliers to submit a bid, quotation or offer. A {1} is normally used to solicit bids for medium- to higher-complexity requirements.",
      "choices": {
        "1": "bid solicitation",
        "2": "invitation to tender",
        "3": "request for proposal",
        "4": "request for quotation"
      },
      "feedback": {
        "right": "A bid solicitation is an invitation, verbal or written, to suppliers to submit a bid, quotation or offer. A request for proposal is normally used to solicit bids for medium- to higher-complexity requirements.",
        "wrong": "A bid solicitation is an invitation, verbal or written, to suppliers to submit a bid, quotation or offer. A request for proposal is normally used to solicit bids for medium- to higher-complexity requirements."
      }
    },
    "q4": {
      "sentence": "A/An {0} is used where a requirement is clearly defined and the selection is based solely on the lowest price. And a/an {1} is used to solicit bids for commercial goods valued below $25,000 or for services valued below $40,000.",
      "choices": {
        "1": "bid solicitation",
        "2": "invitation to tender",
        "3": "request for proposal",
        "4": "request for quotation"
      },
      "feedback": {
        "right": "An invitation to tender is used where a requirement is clearly defined and the selection is based solely on the lowest price. A request for quotation is used to solicit bids for commercial goods valued below $25,000 or for services valued below $40,000.",
        "wrong": "An invitation to tender is used where a requirement is clearly defined and the selection is based solely on the lowest price. A request for quotation is used to solicit bids for commercial goods valued below $25,000 or for services valued below $40,000."
      }
    },
    "q5": {
      "sentence": "A {0} is an offer from a supplier to provide goods, services or both, at prearranged prices, under set terms and conditions when and if required. It is not a contract.",
      "choices": {
        "1": "competitive contract",
        "2": "contractual arrangement",
        "3": "standing offer",
        "4": "supply arrangement"
      },
      "feedback": {
        "right": "A standing offer is an offer from a supplier to provide goods, services or both, at prearranged prices, under set terms and conditions when and if required. It is not a contract until a call-up against the standing offer is made.",
        "wrong": "A standing offer is an offer from a supplier to provide goods, services or both, at prearranged prices, under set terms and conditions when and if required. It is not a contract until a call-up against the standing offer is made."
      }
    },
    "q6": {
      "sentence": "A/An {0} allows the client to solicit bids from a pool of pre-screened suppliers, under the framework of the arrangement. It is not a contract. The intent is to establish a framework which speeds up the processing of soliciting bids and issuing contracts.",
      "choices": {
        "1": "bid solicitation",
        "2": "contractual arrangements",
        "3": "invitation to tender",
        "4": "supply arrangement"
      },
      "feedback": {
        "right": "A supply arrangement allows the client to solicit bids from a pool of pre-screened suppliers, under the framework of the arrangement. It is not a contract. The intent is to establish a framework which speeds up the processing of soliciting bids and issuing contracts.",
        "wrong": "A supply arrangement allows the client to solicit bids from a pool of pre-screened suppliers, under the framework of the arrangement. It is not a contract. The intent is to establish a framework which speeds up the processing of soliciting bids and issuing contracts."
      }
    },
    "q7": {
      "sentence": "A/An {0} is a credit card issued under a contract between card issuers and the Government of Canada for the procurement and the payment of goods and services.",
      "choices": {
        "1": "acquisition card",
        "2": "invitation to tender",
        "3": "standing offer",
        "4": "supply arrangement"
      },
      "feedback": {
        "right": "An acquisition card is a credit card issued under a contract between card issuers and the Government of Canada for the procurement and the payment of goods and services.",
        "wrong": "An acquisition card is a credit card issued under a contract between card issuers and the Government of Canada for the procurement and the payment of goods and services."
      }
    },
    "q8": {
      "sentence": "{0} include arrangements with various public-sector organizations (including other levels of government and international partners) that involve the acquisition of goods, services or construction services.",
      "choices": {
        "1": "Competitive contracts",
        "2": "Contractual arrangements",
        "3": "Sole-source contracts",
        "4": "Supply arrangement"
      },
      "feedback": {
        "right": "Contractual arrangements include arrangements with various public-sector organizations (including other levels of government and international partners) that involve the acquisition of goods, services or construction services.",
        "wrong": "Contractual arrangements include arrangements with various public-sector organizations (including other levels of government and international partners) that involve the acquisition of goods, services or construction services."
      }
    },
    "q9": {
      "sentence": "A {0} is used when information is required from industry prior to a formal process. Such requests might ask suppliers to describe their ability to satisfy a requirement or to provide suggestions on how the eventual solicitation might be structured.",
      "choices": {
        "1": "request for information",
        "2": "request for proposal",
        "3": "request for quotation",
        "4": "standing offer"
      },
      "feedback": {
        "right": "A request for information is used when information is required from industry prior to a formal process. Such requests might ask suppliers to describe their ability to satisfy a requirement or to provide suggestions on how the eventual solicitation might be structured.",
        "wrong": "A request for information is used when information is required from industry prior to a formal process. Such requests might ask suppliers to describe their ability to satisfy a requirement or to provide suggestions on how the eventual solicitation might be structured."
      }
    }
  },
  "fr": {
  "instructions":"Voici l’occasion pour vous d’évaluer votre connaissance des stratégies et des instruments d’approvisionnement. Sélectionnez le meilleur choix pour remplir les blancs.",
    "q1": {
      "sentence": "Les {0} sont principalement utilisé(e)s pour acquérir des biens et services à valeur plus élevée ou d’une plus grande complexité lorsque des offres à commandes ou des arrangements en matière d’approvisionnement ne sont pas en place ou ne peuvent satisfaire à la demande.",
      "choices": {
        "1": "contrats concurrentiels",
        "2": "ententes contractuelles",
        "3": "contrats à fournisseur unique",
        "4": "offres à commandes"
      },
      "feedback": {
        "right": "Les contrats concurrentiels sont principalement utilisés pour acquérir des biens et services à valeur plus élevée ou d’une plus grande complexité lorsque des offres à commandes ou des arrangements en matière d’approvisionnement ne sont pas en place ou ne peuvent satisfaire à la demande. Dans le cadre des contrats concurrentiels, on sollicite des soumissions auprès des fournisseurs, alors que les contrats à fournisseur unique sont utilisés lorsque l’une des exceptions d’exclusivité s’applique, par exemple lorsqu’un seul fournisseur est capable d’exécuter le contrat. Les contrats à fournisseur unique doivent toujours être justifiés.",
        "wrong": "Les contrats concurrentiels sont principalement utilisés pour acquérir des biens et services à valeur plus élevée ou d’une plus grande complexité lorsque des offres à commandes ou des arrangements en matière d’approvisionnement ne sont pas en place ou ne peuvent satisfaire à la demande. Dans le cadre des contrats concurrentiels, on sollicite des soumissions auprès des fournisseurs, alors que les contrats à fournisseur unique sont utilisés lorsque l’une des exceptions d’exclusivité s’applique, par exemple lorsqu’un seul fournisseur est capable d’exécuter le contrat. Les contrats à fournisseur unique doivent toujours être justifiés."
      }
    },
    "q2": {
      "sentence": "Les {0} sont accordé(e)s s’ils / elles sont visé(e)s par l’une des quatre exceptions suivantes : faible valeur en dollars, extrême urgence, ne pas être dans l’intérêt public ou un seul fournisseur est en mesure d’effectuer les travaux, par exemple lorsqu’il détient des droits de propriété intellectuelle.",
      "choices": {
        "1": "contrats concurrentiels",
        "2": "ententes contractuelles",
        "3": "contrats à fournisseur unique",
        "4": "offres à commandes"
      },
      "feedback": {
        "right": "Les contrats à fournisseur unique sont accordés s’ils sont visés par l’une des quatre exceptions suivantes : faible valeur en dollars, extrême urgence, ne pas être dans l’intérêt public ou un seul fournisseur est en mesure d’effectuer les travaux, par exemple lorsqu’il détient des droits de propriété intellectuelle.",
        "wrong": "Les contrats à fournisseur unique sont accordés s’ils sont visés par l’une des quatre exceptions suivantes : faible valeur en dollars, extrême urgence, ne pas être dans l’intérêt public ou un seul fournisseur est en mesure d’effectuer les travaux, par exemple lorsqu’il détient des droits de propriété intellectuelle."
      }
    },
    "q3": {
      "sentence": "Un / Une {0} est une invitation, verbale ou écrite, adressée aux fournisseurs éventuels en vue de recevoir leurs soumissions, leurs prix ou leurs offres. Un / Une {1} est normalement utilisé(e) pour solliciter des offres pour répondre à des besoins de complexité moyenne à élevée.",
      "choices": {
        "1": "demande de soumissions",
        "2": "appel d’offres",
        "3": "demande de propositions",
        "4": "demande de prix"
      },
      "feedback": {
        "right": "Une demande de soumissions est une invitation, verbale ou écrite, adressée aux fournisseurs éventuels en vue de recevoir leurs soumissions, leurs prix ou leurs offres. Une demande de propositions est normalement utilisée pour solliciter des soumissions pour répondre à des besoins de complexité moyenne à élevée.",
        "wrong": "Une demande de soumissions est une invitation, verbale ou écrite, adressée aux fournisseurs éventuels en vue de recevoir leurs soumissions, leurs prix ou leurs offres. Une demande de propositions est normalement utilisée pour solliciter des soumissions pour répondre à des besoins de complexité moyenne à élevée."
      }
    },
    "q4": {
      "sentence": "Un / Une {0} est utilisé(e) lorsqu’une exigence est clairement définie et que la sélection est basée uniquement sur le prix le plus bas. Enfin, un / une {1} est utilisé(e) pour solliciter des soumissions pour des biens commerciaux d’une valeur inférieure à 25 000 $ ou pour des services d’une valeur inférieure à 40 000 $.",
      "choices": {
        "1": "demande de soumissions",
        "2": "appel d’offres",
        "3": "demande de propositions",
        "4": "demande de prix"
      },
      "feedback": {
        "right": "Un appel d’offres est utilisé lorsqu’un besoin est clairement défini et que la sélection est basée uniquement sur le prix le plus bas. Une demande de prix est utilisée pour solliciter des soumissions pour des biens commerciaux d’une valeur inférieure à 25 000 $ ou pour des services d’une valeur inférieure à 40 000 $.",
        "wrong": "Un appel d’offres est utilisé lorsqu’un besoin est clairement défini et que la sélection est basée uniquement sur le prix le plus bas. Une demande de prix est utilisée pour solliciter des soumissions pour des biens commerciaux d’une valeur inférieure à 25 000 $ ou pour des services d’une valeur inférieure à 40 000 $."
      }
    },
    "q5": {
      "sentence": "Un / Une {0} est une offre d’un fournisseur qui vise à fournir des biens, des services ou les deux à des prix convenus au préalable, conformément aux modalités prévues, au besoin. Il ne s’agit pas d’un contrat.",
      "choices": {
        "1": "contrat concurrentiel",
        "2": "entente contractuelle",
        "3": "offre à commandes",
        "4": "arrangement en matière d’approvisionnement"
      },
      "feedback": {
        "right": "Une offre à commandes est une offre d’un fournisseur qui vise à fournir des biens, des services ou les deux à des prix convenus au préalable, conformément aux modalités prévues, au besoin. Un contrat n’est conclu que lorsque le gouvernement passe une commande ou établit une commande subséquente à une offre à commandes.",
        "wrong": "Une offre à commandes est une offre d’un fournisseur qui vise à fournir des biens, des services ou les deux à des prix convenus au préalable, conformément aux modalités prévues, au besoin. Un contrat n’est conclu que lorsque le gouvernement passe une commande ou établit une commande subséquente à une offre à commandes."
      }
    },
    "q6": {
      "sentence": "Un / Une {0} permet au client de solliciter des offres auprès d’un bassin de fournisseurs présélectionnés, dans le cadre de l’accord. Il ne s’agit pas d’un contrat. Son but est d’établir un cadre pour accélérer le traitement des demandes de soumissions et l’émission de contrats.",
      "choices": {
        "1": "demande de soumission",
        "2": "entente contractuelle",
        "3": "appel d’offres",
        "4": "arrangement en matière d’approvisionnement"
      },
      "feedback": {
        "right": "Un arrangement en matière d’approvisionnement permet au client de solliciter des offres auprès d’un bassin de fournisseurs présélectionnés, dans le cadre de l’accord. Il ne s’agit pas d’un contrat. Son but est d’établir un cadre pour accélérer le traitement des demandes de soumissions et l’émission de contrats.",
        "wrong": "Un arrangement en matière d’approvisionnement permet au client de solliciter des offres auprès d’un bassin de fournisseurs présélectionnés, dans le cadre de l’accord. Il ne s’agit pas d’un contrat. Son but est d’établir un cadre pour accélérer le traitement des demandes de soumissions et l’émission de contrats."
      }
    },
    "q7": {
      "sentence": "Un / Une {0} est une carte de crédit émise en vertu d’un contrat entre les émetteurs de cartes et le gouvernement du Canada permettant d’effectuer des achats de biens et services.",
      "choices": {
        "1": "carte d’achat",
        "2": "appel d’offres",
        "3": "offre à commandes",
        "4": "arrangement en matière d’approvisionnement"
      },
      "feedback": {
        "right": "Une carte d’achat est une carte de crédit émise en vertu d’un contrat entre les émetteurs de cartes et le gouvernement du Canada permettant d’effectuer des achats de biens et services.",
        "wrong": "Une carte d’achat est une carte de crédit émise en vertu d’un contrat entre les émetteurs de cartes et le gouvernement du Canada permettant d’effectuer des achats de biens et services."
      }
    },
    "q8": {
      "sentence": "Les {0} comprennent des ententes avec divers organismes du secteur public (y compris d’autres ordres du gouvernement et des partenaires internationaux) qui impliquent l’acquisition de biens, de services ou de services de construction.",
      "choices": {
        "1": "contrats concurrentiels",
        "2": "ententes contractuelles",
        "3": "contrats à fournisseur unique",
        "4": "arrangements en matière d’approvisionnement"
      },
      "feedback": {
        "right": "Les ententes contractuelles comprennent des ententes avec divers organismes du secteur public (y compris d’autres ordres du gouvernement et des partenaires internationaux) qui impliquent l’acquisition de biens, de services ou de services de construction.",
        "wrong": "Les ententes contractuelles comprennent des ententes avec divers organismes du secteur public (y compris d’autres ordres du gouvernement et des partenaires internationaux) qui impliquent l’acquisition de biens, de services ou de services de construction."
      }
    },
    "q9": {
      "sentence": "Un / Une {0} est utilisé(e) lorsque des informations sont requises de l’industrie avant le lancement d’un processus formel. Il / Elle pourrait servir à demander aux fournisseurs de décrire leur capacité de satisfaire à une exigence ou de fournir des suggestions sur la façon dont la soumission éventuelle pourrait être structurée.",
      "choices": {
        "1": "appel d’intérêt",
        "2": "demande de propositions",
        "3": "demande de prix",
        "4": "offre à commandes"
      },
      "feedback": {
        "right": "Un appel d’intérêt est utilisé lorsque des informations sont requises de l’industrie avant le lancement d’un processus formel. Il pourrait servir à demander aux fournisseurs de décrire leur capacité de satisfaire à une exigence ou de fournir des suggestions sur la façon dont la soumission éventuelle pourrait être structurée.",
        "wrong": "Un appel d’intérêt est utilisé lorsque des informations sont requises de l’industrie avant le lancement d’un processus formel. Il pourrait servir à demander aux fournisseurs de décrire leur capacité de satisfaire à une exigence ou de fournir des suggestions sur la façon dont la soumission éventuelle pourrait être structurée."
      }
    }
  }
}</i18n>