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
        <b-button-group :aria-label="$t('questionNav')" class="mt-2">
          <b-button @click="[tabIndex--, focus()]" :disabled="tabIndex<=0">{{$t('previousPage')}}</b-button>
          <b-button @click="[tabIndex++, focus()]" :disabled="tabIndex>=3">{{$t('nextPage')}}</b-button>
        </b-button-group>
      </div>
    </b-card>
    <b-row>
      <b-col cols="6" md="3" lg="2" class="text-center">
        <download :texts="$t('procurementInstruments')" size=128 iconColor="spendBackground" :fileSize="this.$i18n.locale == 'en' ? '134' : '139'" name="procurementInstruments" />
      </b-col>
    </b-row>
  </div>
</template>
<script type="text/javascript">
import checkboxQuiz from "~/components/checkboxQuiz"
import radioQuiz from "~/components/radioQuiz"
import download from "~/components/fileDownload"
import HTMLJobaidLink from "~/components/HTMLJobaidLink"
export default {
  components: {
    checkboxQuiz,
    radioQuiz,
    download,
    HTMLJobaidLink
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
    "q1": {
      "text": "This is what is used to obtain goods and/or services at pre&#8209;arranged prices.",
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
      "conclusion": "Standing offers provide easy access to goods and services with a faster turnaround. You simply choose from a list of pre-qualified suppliers with a standardized or predefined offering, and pre&#8209;established terms and conditions. "
    },
    "q2": {
      "text": "This spending mechanism is ideal for lower-dollar-value, lower-risk, and higher-volume purchases.",
      "options": {
        "1": "Competitive contract",
        "2": "Standing offer",
        "3": "Supply arrangement",
        "4": "Acquisition card"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
        "2": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
        "3": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
        "4": "<span class='v-right' /> <strong>Correct!</strong>"
      },
      "conclusion": "Your acquisition card will be the payment method you use most to acquire and pay for goods or services valued at less than $5,000. For your specific limits, check with your department."
    },
    "q3": {
      "text": "This spending mechanism is a non-binding agreement with a pre-qualified vendor that allows departments and agencies to award contracts and solicit bids from a pool of pre-qualified vendors for specific requirements.",
      "options": {
        "1": "Competitive contract",
        "2": "Standing offer",
        "3": "Supply arrangement",
        "4": "Acquisition card"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
        "2": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
        "3": "<span class='v-right' /> <strong>Correct!</strong>",
        "4": "<span class='v-wrong' /> <strong>Incorrect</strong>."
      },
      "conclusion": " Supply arrangements are used for procuring commonly required goods or services (mostly services) when the requirement can’t be fully defined in advance of the need, and the available standing offers cannot be used."
    },
    "q4": {
      "text": "This spending mechanism is mostly used for goods and services that are very costly or very complex.",
      "options": {
        "1": "Competitive contract",
        "2": "Standing offer",
        "3": "Supply arrangement",
        "4": "Acquisition card"
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
      "text": "C’est ce qui est utilisé pour obtenir des biens ou des services à des prix préétablis.",
      "options": {
        "1": "Contrat concurrentiel",
        "2": "Offre à commandes",
        "3": "Arrangement en matière d’approvisionnement",
        "4": "Carte d’achat"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "4": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Les offres à commandes facilitent l’accès aux biens et aux services et accélèrent les délais d’exécution. Vous n’avez qu’à choisir parmi une liste de fournisseurs préqualifiés dont l’offre est normalisée ou prédéfinie et les conditions préétablies. "
    },
    "q2": {
      "text": "Ce mécanisme de dépense est idéal pour les achats de faible valeur, à faible risque et à volume élevé.",
      "options": {
        "1": "Contrat concurrentiel",
        "2": "Offre à commandes",
        "3": "Arrangement en matière d’approvisionnement",
        "4": "Carte d’achat"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "4": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "Votre carte d’achat sera le mode de paiement que vous utiliserez le plus souvent pour acquérir et payer des biens ou des services d’une valeur inférieure à 5&nbsp;000&nbsp;$. Pour connaître vos limites précises, vérifiez auprès de votre ministère."
    },
    "q3": {
      "text": "Ce mécanisme de dépense est une entente non contraignante conclue avec un fournisseur présélectionné qui permet aux ministères et organismes d’attribuer à des compagnies des contrats et de solliciter des soumissions auprès d’un bassin de fournisseurs présélectionnés pour des besoins précis.",
      "options": {
        "1": "Contrat concurrentiel",
        "2": "Offre à commandes",
        "3": "Arrangement en matière d’approvisionnement",
        "4": "Carte d’achat"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-right' /><strong>Correct!</strong>",
        "4": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Les arrangements en matière d’approvisionnement servent à l’achat de biens ou de services couramment requis (principalement des services) lorsque le besoin ne peut être entièrement défini à l’avance et que les offres à commandes disponibles ne peuvent être utilisées."
    },
    "q4": {
      "text": "Ce mécanisme de dépenses est surtout utilisé pour des biens et services très coûteux ou très complexes.",
      "options": {
        "1": "Contrat concurrentiel",
        "2": "Offre à commandes",
        "3": "Arrangement en matière d’approvisionnement",
        "4": "Carte d’achat"
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "4": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Les contrats concurrentiels sont surtout utilisés pour des besoins de plus grande valeur ou de plus grande complexité lorsque des offres à commandes ou des arrangements en matière d’approvisionnement ne sont pas mis en place ou ne peuvent répondre au besoin. <br>Vous en apprendrez davantage sur ces options et lignes directrices dans le module Approvisionnement."
    }
  }
}</i18n>
