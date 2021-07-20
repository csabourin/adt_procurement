<template>
  <div>
    <b-container>
      <b-row>
        <b-col>
          <b-card>
          <p>{{$t('introText')}}</p>
          <b-tabs content v-model="tabIndex">
            <b-tab title="Question 1">
              <radioQuiz :question="$t('q1')" qId="1" />
            </b-tab>
            <b-tab title="Question 2">
              <radioQuiz :question="$t('q2')" qId="2" />
            </b-tab>
            <b-tab title="Question 3">
              <checkboxQuiz :question="$t('q3')" qId="3" :Answer="['1','2','3','4']"/>
            </b-tab>
          </b-tabs>
          <!-- Control buttons-->
          <div class="text-center">
            <b-button-group :aria-label="$t('questionNav')" class="mt-2">
              <b-button @click="[tabIndex--, focus()]" :disabled="tabIndex<=0">{{$t('previousPage')}}</b-button>
              <b-button @click="[tabIndex++, focus()]" :disabled="tabIndex>=2">{{$t('nextPage')}}</b-button>
            </b-button-group>
          </div>
          <!--<windowPortal :open="openCard" @close="openCard = false">
            <b-container style="margin-top: 25px; margin-bottom: 25px;">
              <b-row>
                <b-col>
                  <signatureCard />
                </b-col>
              </b-row>
          </b-container>
          </windowPortal>
          <p><b-button @click="openCard = true">{{$t('openCard')}}</b-button></p>-->
          </b-card>
        </b-col>
        <!--<b-col>
          <signatureCard />
        </b-col>-->
      </b-row>
    </b-container>
  </div>
</template>
<script type="text/javascript">
  
  import checkboxQuiz from "~/components/checkboxQuiz"
  import radioQuiz from "~/components/radioQuiz"
  import signatureCard from "~/components/delegationChart/signatureCard"
  import windowPortal from "~/components/newWindow"
  export default {
    components: {
      checkboxQuiz,
      radioQuiz,
      signatureCard,
      windowPortal
    },
    data(){
      return{
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
<i18n>
  
  {
    "en": {
      "introText": "Answer the following questions.",
      "q1": {
        "text": "Which of the following activities corresponds to the effective and efficient management of assets, from the identification of requirements to the divestment of the assets?",
        "options": {
          "1": "Administration and operational requirements",
          "2": "Procurement of goods, services or construction",
          "3": "Life cycle materiel management",
          "4": "Resource-saving materials and processes"
        },
        "feedback": {
          "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "3": "<span class='v-right' /><strong>Correct!</strong>",
          "4": "<span class='v-wrong' /><strong>Incorrect.</strong>"
        },
        "conclusion": "Life cycle materiel management is the effective and efficient management of assets from the identification of requirements to the divestment of the assets."
      },
      "q2": {
        "text": "Which statement shows the right order of the four phases of the life cycle materiel management?",
        "options": {
          "1": "Acquisition, divestment, planning, and operation, use and maintenance",
          "2": "Divestment, operation, use and maintenance, planning, and acquisition",
          "3": "Operation, use and maintenance, acquisition, divestment, and planning",
          "4": "Planning, acquisition, operation, use and maintenance, and divestment"
        },
        "feedback": {
          "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "4": "<span class='v-right' /><strong>Correct!</strong>"
        },
        "conclusion": "The correct order of the four phases of the life cycle is planning, acquisition, operation, use and maintenance, and divestment."
      },
      "q3": {
        "text": "During the planning process, what should managers consider?",
        "options": {
          "1": "What are the administration and operational requirements?",
          "2": "Is existing materiel available or appropriate to meet the need?",
          "3": "Which method will be used to acquire the materiel?",
          "4": "Is capital or operation funding being used?"
        },
        "feedback": {
          "right": "<span class='v-right' /><strong>Correct!</strong>",
          "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
        },
        "conclusion": "During the planning process, managers should consider the following: what are the administration and operational requirements, is existing materiel, available or appropriate to meet the need, which method will be used to acquire the materiel and is capital or operation funding being used?"
      }
    },
    "fr": {
      "introText": "Répondez aux questions suivantes : ",
       "q1": {
        "text": "Parmi les activités suivantes, laquelle correspond à une gestion efficace et efficiente des biens, depuis l’identification des besoins jusqu’au dessaisissement des biens?",
        "options": {
          "1": "Exigences administratives et opérationnelles",
          "2": "Acquisition de produits, de services ou de services de construction",
          "3": "Gestion du cycle de vie du matériel",
          "4": "Matériaux et procédés économes en ressources"
        },
        "feedback": {
          "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "3": "<span class='v-right' /><strong>Correct!</strong>",
          "4": "<span class='v-wrong' /><strong>Incorrect.</strong>"
        },
        "conclusion": "La gestion du cycle de vie du matériel, consiste en la gestion efficace et efficiente des biens, depuis l’identification des besoins jusqu’au dessaisissement des biens."
      },
      "q2": {
        "text": "Quel énoncé énumère les quatre phases de la gestion du cycle de vie du matériel dans le bon ordre?",
        "options": {
          "1": "Acquisition, dessaisissement, planification et exploitation, utilisation et entretien",
          "2": "Dessaisissement, exploitation, utilisation et entretien, planification et acquisition",
          "3": "Exploitation, utilisation et entretien, acquisition, dessaisissement et planification",
          "4": "Planification, acquisition, exploitation, utilisation et entretien et dessaisissement"
        },
        "feedback": {
          "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "4": "<span class='v-right' /><strong>Correct!</strong>"
        },
        "conclusion": "L’ordre correct des quatre phases du cycle de vie est le suivant : planification, acquisition, exploitation, utilisation et entretien, et dessaisissement."
      },
      "q3": {
        "text": "Que doivent considérer les gestionnaires dans le processus de planification?",
        "options": {
          "1": "Quelles sont les exigences administratives et opérationnelles?",
          "2": "Le matériel existant est-il disponible ou approprié pour répondre au besoin?",
          "3": "Quelle méthode sera utilisée pour acquérir le matériel?",
          "4": "Les fonds de capital ou d’exploitation sont-ils utilisés?"
        },
        "feedback": {
          "right": "<span class='v-right' /><strong>Correct!</strong>",
          "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
        },
        "conclusion": "Au cours du processus de planification, les gestionnaires doivent tenir compte des éléments suivants : quels sont les exigences administratives et opérationnelles, le matériel existant est-il disponible ou approprié pour répondre au besoin, quelle méthode sera utilisée pour acquérir le matériel et les fonds de capital ou d’exploitation sont-ils utilisés?"
      }
    }
  }

</i18n>
<style type="text/css" scoped>
.scrollMe {
  width: 50%;
  white-space: nowrap;
  overflow-x: auto;
}

</style>
