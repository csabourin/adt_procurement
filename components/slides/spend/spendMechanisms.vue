<template>
  <div>
    <b-card>
      <b-tabs content v-model="tabIndex">
        <b-tab title="Question 1">
          <radioQuiz :question="$t('q1')" qId="1" />
        </b-tab>
        <b-tab title="Question 2">
          <radioQuiz :question="$t('q2')" qId="2" />
        </b-tab>
        <b-tab title="Question 3">
          <radioQuiz :question="$t('q3')" qId="3" />
        </b-tab>
        <b-tab title="Question 4">
          <radioQuiz :question="$t('q4')" qId="4" />
        </b-tab>
      </b-tabs>
        <!-- Control buttons-->
      <div class="text-center">
        <b-button-group class="mt-2">
          <b-button @click="tabIndex--" :disabled="tabIndex<=0">{{$t('previousPage')}}</b-button>
          <b-button @click="tabIndex++" :disabled="tabIndex>=3">{{$t('nextPage')}}</b-button>
        </b-button-group>
      </div>
    </b-card>
  </div>
</template>
<script type="text/javascript">
import checkboxQuiz from "~/components/checkboxQuiz"
import radioQuiz from "~/components/radioQuiz"
export default {
  components: {
    checkboxQuiz,
    radioQuiz
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
    "q1": {
      "text": "This is what is used to obtain goods and/or services at pre-arranged prices.",
      "options": {
        "1": "Competitive contract",
        "2": "Standing offer",
        "3": "Supply arrangement",
        "4": "Acquisition card"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "4": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Standing Offers provide easy access to goods and services with faster turnaround. You simply choose from a list of pre-qualified suppliers with a standardized/pre-defined offering, and pre-established terms and conditions. "
    },
    "q2": {
      "text": "This spending mechanism is ideal for lower-dollar-value, lower-risk, and higher-volume purchases.",
      "options": {
        "1": "Competitive Contract",
        "2": "Standing Offer",
        "3": "Supply Arrangement",
        "4": "Acquisition Card"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
        "2": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
        "3": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
        "4": "<span class='v-right' /> <strong>Correct!</strong>"
      },
      "conclusion": "Your acquisition card will be the payment method you use most to acquire and pay for goods or services most often valued at less than $5,000. For your specific limits, check with your department."
    },
    "q3": {
      "text": "This spending mechanism is a non-binding agreement with a pre-qualified vendor that allows departments and agencies to award contracts and solicit bids from a pool of pre-qualified vendors for specific requirements.",
      "options": {
        "1": "Competitive Contract",
        "2": "Standing Offer",
        "3": "Supply Arrangement",
        "4": "Acquisition Card"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
        "2": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
        "3": "<span class='v-right' /> <strong>Correct!</strong>",
        "4": "<span class='v-wrong' /> <strong>Incorrect</strong>."
      },
      "conclusion": " Supply arrangements are used for procuring commonly required goods or services (mostly services) when the requirement can&rsquo;t be fully defined in advance of the need, and the available Standing Offers cannot be used."
    },
    "q4": {
      "text": "This spending mechanism is mostly used for goods and services that are very costly or very complex.",
      "options": {
        "1": "Competitive Contract",
        "2": "Standing Offer",
        "3": "Supply Arrangement",
        "4": "Acquisition Card"
      },
      "feedback": {
        "1": "<span class='v-right' /> <strong>Correct!</strong>",
        "2": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
        "3": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
        "4": "<span class='v-wrong' /> <strong>Incorrect</strong>."
      },
      "conclusion": "Competitive contracts are mostly used for higher-dollar-value and or higher-complexity requirements when Standing Offers or Supply Arrangements are not in place or cannot satisfy the requirement.<br>You will learn more about these options and guidelines in the Procurement module."
    }
  },
  "fr": {
    "q1": {
      "text": "C&rsquo;est ce qui est utilisé pour obtenir des biens ou des services à des prix préétablis.",
      "options": {
        "1": "Contrat concurrentiel",
        "2": "Offre à commandes",
        "3": "Arrangement en matière d&rsquo;approvisionnement",
        "4": "Carte d&rsquo;achat"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "4": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": " Les offres à commandes facilitent l&rsquo;accès aux biens et aux services et accélèrent les délais d&rsquo;exécution. Vous n&rsquo;avez qu&rsquo;à choisir parmi une liste de fournisseurs préqualifiés dont l&rsquo;offre est normalisée ou prédéfinie et les conditions préétablies. "
    },
    "q2": {
      "text": "Ce mécanisme de dépense est idéal pour les achats de faible valeur, à faible risque et à volume élevé.",
      "options": {
        "1": "Contrat concurrentiel",
        "2": "Offre à commandes",
        "3": "Arrangement en matière d&rsquo;approvisionnement",
        "4": "Carte d&rsquo;achat"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "4": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "Votre carte d&rsquo;achat sera le mode de paiement que vous utiliserez le plus souvent pour acquérir et payer des biens ou des services d&rsquo;une valeur inférieure à 5&nbsp;000&nbsp;$. Pour connaître vos limites spécifiques, vérifiez auprès de votre ministère."
    },
    "q3": {
      "text": "Ce mécanisme de dépenses est une entente non-contraignante conclue avec un fournisseur présélectionné qui permet aux ministères et organismes d&rsquo;attribuer des contrats et de solliciter des soumissions auprès d&rsquo;un bassin de fournisseurs présélectionnés pour des besoins précis.",
      "options": {
        "1": "Contrat concurrentiel",
        "2": "Offre à commandes",
        "3": "Arrangement en matière d&rsquo;approvisionnement",
        "4": "Carte d&rsquo;achat"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-right' /><strong>Correct!</strong>",
        "4": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": " Les arrangements en matière d&rsquo;approvisionnement servent à l&rsquo;achat de biens ou de services couramment requis (principalement des services) lorsque le besoin ne peut être entièrement défini à l&rsquo;avance et que les offres à commandes disponibles ne peuvent être utilisées."
    },
    "q4": {
      "text": "Ce mécanisme de dépenses est surtout utilisé pour des biens et services très coûteux ou très complexes.",
      "options": {
        "1": "Contrat concurrentiel",
        "2": "Offre à commandes",
        "3": "Arrangement en matière d&rsquo;approvisionnement",
        "4": "Carte d&rsquo;achat"
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "4": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": " Les contrats concurrentiels sont surtout utilisés pour des besoins de plus grande valeur ou de plus grande complexité lorsque des offres à commandes ou des arrangements en matière d&rsquo;approvisionnement ne sont pas en place.<br>Vous en apprendrez davantage sur ces options et lignes directrices dans le module Approvisionnement."
    }
  }
}</i18n>
