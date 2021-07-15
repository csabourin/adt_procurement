<template>
  <span>
    <div>
      <br>
      <p>{{$t('Introduction')}}</p>
      <b-card>
        <b-tabs v-model="tabIndex">
          <b-tab title="Question 1"><checkboxQuiz :question="$t('q1')" qId="1" :Answer='["1","2","3"]'/></b-tab>
          <b-tab title="Question 2"><checkboxQuiz :question="$t('q2')" qId="2" :Answer='["2","3"]'/></b-tab>
          <b-tab title="Question 3"><checkboxQuiz :question="$t('q3')" qId="3" :Answer='["1","2","3","4"]'/></b-tab>
          <b-tab title="Question 4"><checkboxQuiz :question="$t('q4')" qId="4" :Answer='["1","2"]'/></b-tab>
          <b-tab title="Question 5"><checkboxQuiz :question="$t('q5')" qId="5" :Answer='["1","2","3"]'/></b-tab>
        </b-tabs>
      </b-card>
      <!-- Control buttons-->
      <div class="text-center">
        <b-button-group :aria-label="$t('questionNav')" class="mt-2">
          <b-button @click="[tabIndex--, focus()]" :disabled="tabIndex<=0">{{$t('previousPage')}}</b-button>
          <b-button @click="[tabIndex++, focus()]" :disabled="tabIndex>=4">{{$t('nextPage')}}</b-button>
        </b-button-group>
      </div>
    </div>
  </span>
</template>
<i18n>
  {
  "en":{
  "qDisabled":"Please select one"
  }
   ,
  "fr":{
  "qDisabled":"Veuillez faire un choix"
  }
  }
</i18n>
<script type="text/javascript">
import radioQuiz from "~/components/radioQuiz"
import checkboxQuiz from "~/components/checkboxQuiz"
export default {
  components: { radioQuiz, checkboxQuiz },
  data() {
    return {
      tabIndex: 0

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
    "Introduction": "Answer the following questions:",
    "q1": {
      "text": "The manager is responsible for which of the following contract-administration activities?",
      "options": {
        "1": "Ensuring delivery dates are met",
        "2": "Monitoring the quality of the work against a work plan",
        "3": "Performing contract amendments as required",
        "4": "Responding to Access to Information requests"
      },
      "feedback": {
        "right": "<span class='v-right' /><strong>Correct!</strong>",
        "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "A manager is responsible for monitoring the delivery dates, the quality of the work against a work plan and responding to Access to Information requests."
    },
    "q2": {
      "text": "Which of the following statements could be examples of needing to amend a contract?",
      "options": {
        "1": "Date changes that would not affect the deliverables",
        "2": "There is an unforeseen change to the work",
        "3": "Materials or alternates are unavailable",
        "4": "New contract clauses and conditions come into effect government-wide"
      },
      "feedback": {
        "right": "<span class='v-right' /><strong>Correct!</strong>",
        "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "A contract needs to be amended if there is an unforeseen change to the work and if materials are unavailable. New contract clauses and conditions do not affect existing contracts. If the changes must be incorporated into the contract, both parties must agree to them."
    },
    "q3": {
      "text": "“Scope creep” is when a contractor performs services, construction or delivers goods that go beyond the defined parameters of the statement of work specified in the contract. Which of the following statements could lead to scope creep?",
      "options": {
        "1": "A poorly defined statement of work",
        "2": "Poor communication with the contractor",
        "3": "Poor or inattentive contract management",
        "4": "Undocumented decisions and agreements"
      },
      "feedback": {
        "right": "<span class='v-right' /><strong>Correct!</strong>",
        "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "A poorly defined statement of work, poor communication with the contractor, poor or inattentive contract management, and undocumented decisions and agreements could lead to scope creep."
    },
    "q4": {
      "text": "Who attends the progress meetings?",
      "options": {
        "1": "The manager",
        "2": "The procurement specialist",
        "3": "The financial officer",
        "4": "No one"
      },
      "feedback": {
        "right": "<span class='v-right' /><strong>Correct!</strong>",
        "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "The manager, the procurement specialist or both attend the progress meetings depending on the scope and nature of the progress meeting."
    },
    "q5": {
      "text": "The procurement specialist is responsible for supporting or performing which of the following contract-administration activities?",
      "options": {
        "1": "Ensuring delivery dates are met",
        "2": "Performing contract audits",
        "3": "Resolving disputes",
        "4": "Monitoring the deliverables"
      },
      "feedback": {
        "right": "<span class='v-right' /><strong>Correct!</strong>",
        "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "The procurement specialist is responsible for supporting or performing contract audits, resolving disputes and ensuring the delivery dates are met."
    }
  },
  "fr": {
    "q1": {
      "Introduction": "Répondez aux questions suivantes : ",
      "text": "Parmi les activités d’administration des contrats suivantes, lesquelles relèvent du gestionnaire?",
      "options": {
        "1": "Veiller à ce que les dates de livraison soient respectées",
        "2": "Surveiller la qualité des travaux par rapport au plan de travail",
        "3": "Répondre aux demandes d’accès à l’information",
        "4": "Apporter des modifications de contrats au besoin"
      },
      "feedback": {
        "right": "<span class='v-right' /><strong>Correct!</strong>",
        "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Un gestionnaire est chargé de surveiller les dates de livraison, la qualité du travail par rapport au plan de travail et de répondre aux demandes d’accès à l’information."
    },
    "q2": {
      "text": "Parmi les énoncés suivants, lesquels pourraient être des motifs de modification d’un contrat?",
      "options": {
        "1": "Des changements de date n’affectant pas les produits livrables",
        "2": "Un changement imprévu dans les travaux",
        "3": "Des matériaux ou substituts non disponibles",
        "4": "De nouvelles clauses et conditions du contrat entrant en vigueur à l’échelle du gouvernement"
      },
      "feedback": {
        "right": "<span class='v-right' /><strong>Correct!</strong>",
        "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Un contrat doit être modifié s’il y a un changement imprévu dans les travaux et si des matériaux ne sont pas disponibles. Les nouvelles clauses et conditions du contrat n’ont aucune incidence sur les contrats existants. Si les modifications doivent être intégrées au contrat, les deux parties doivent les accepter."
    },
    "q3": {
      "text": "Un « glissement de portée » se produit lorsqu’un entrepreneur fournit des services, effectue de la construction ou livre des biens excédant les paramètres définis par l’énoncé de travail précisé dans le contrat. Parmi les énoncés suivants, lequel pourrait entraîner un glissement de portée?",
      "options": {
        "1": "Un énoncé de travail mal défini",
        "2": "Une mauvaise communication avec l’entrepreneur",
        "3": "Une gestion des contrats déficiente ou négligente",
        "4": "Des décisions et accords non consignés"
      },
      "feedback": {
        "right": "<span class='v-right' /><strong>Correct!</strong>",
        "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Un énoncé de travail mal défini, une mauvaise communication avec l’entrepreneur, une gestion des contrats déficiente ou négligente et des décisions et accords non consignés pourraient conduire à un glissement de portée."
    },
    "q4": {
      "text": "Qui assiste aux réunions d’étape?",
      "options": {
        "1": "Le gestionnaire",
        "2": "Le spécialiste en approvisionnement",
        "3": "L’agent financier",
        "4": "Personne"
      },
      "feedback": {
        "right": "<span class='v-right' /><strong>Correct!</strong>",
        "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Le gestionnaire, le spécialiste en approvisionnement ou les deux assistent aux réunions d’étape selon la portée et la nature de la réunion."
    },
    "q5": {
      "text": "Parmi les activités d’administration des contrats suivantes, lesquelles relèvent du spécialiste en approvisionnement ou peuvent être réalisées avec son appui?",
      "options": {
        "1": "Veiller à ce que les dates de livraison soient respectées",
        "2": "Réaliser des vérifications contractuelles",
        "3": "Régler les différends",
        "4": "Contrôler les produits livrables"
      },
      "feedback": {
        "right": "<span class='v-right' /><strong>Correct!</strong>",
        "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Le spécialiste en approvisionnement est chargé d’effectuer des vérifications contractuelles et de régler les litiges, et il apporte son appui pour s’assurer que les dates de livraison sont respectées."
    }
  }
}</i18n>