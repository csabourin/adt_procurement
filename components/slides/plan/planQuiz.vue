<template>
  <span>
    <div>
      <b-card>
        <p v-html="$t('instructions')" />
        <b-tabs v-model="tabIndex">
          
          <b-tab title="Question 1"><hr style="border:white;"><p>{{$t('introText')}}</p><fillTheBlanks :blanks="1" :sentence="$t('q1.sentence')" :termList="$t('q1.choices')" :answer="['2']" :feedback="$t('q1.feedback')" qid="q1" /></b-tab>
          <b-tab title="Question 2"><radioQuiz :question="$t('q2')" qId="2" /></b-tab>
          <b-tab title="Question 3"><radioQuiz :question="$t('q3')" qId="3" /></b-tab>
          <b-tab title="Question 4"><radioQuiz :question="$t('q4')" qId="4" /></b-tab>
          <b-tab title="Question 5"><radioQuiz :question="$t('q5')" qId="5" /></b-tab>
          <b-tab title="Question 6"><radioQuiz :question="$t('q6')" qId="6" /></b-tab>
          <b-tab title="Question 7"><checkboxQuiz :question="$t('q7')" qId="7" :Answer='["1","2","3","4"]' /></b-tab>
          <b-tab title="Question 8"><checkboxQuiz :question="$t('q8')" qId="8" :Answer='["1","2"]' /></b-tab>
        </b-tabs>
      </b-card>
      <!-- Control buttons-->
      <div class="text-center">
        <b-button-group :aria-label="$t('questionNav')" class="mt-2">
          <b-button @click="[tabIndex--, focus()]" :disabled="tabIndex<=0">{{$t('previousPage')}}</b-button>
          <b-button @click="[tabIndex++, focus()]" :disabled="tabIndex>=7">{{$t('nextPage')}}</b-button>
        </b-button-group>
      </div>
    </div>
  </span>
</template>
<script type="text/javascript">
import fillTheBlanks from "~/components/interface/fillTheBlanks"
import radioQuiz from "~/components/radioQuiz"
import checkboxQuiz from "~/components/checkboxQuiz"
export default {
  components: { 
    radioQuiz, 
    checkboxQuiz, 
    fillTheBlanks
     },
  data() {
    return {
      tabIndex: 0
    }
  },
  methods:{
    focus(){
      setTimeout(function(){
        document.querySelector(".tab-pane.active .pure-radiobutton fieldset, .tab-pane.active .pure-checkbox fieldset, .tab-pane.active .workplan-table").setAttribute("tabindex", 0);
        document.querySelector(".tab-pane.active .pure-radiobutton fieldset, .tab-pane.active .pure-checkbox fieldset, .tab-pane.active .workplan-table").focus();
      }, 300);
    }
  }
}
</script>
<i18n>{
  "en": {
    "instructions": "Answer the following questions.",
    "introText":"Select the best choice to fill in the blank.",
    "q1": {
      "sentence": "Refer to your {0} when you want to identify which goods and services you need to deliver your activities. ",
      "choices": {
        "1": "budget",
        "2": "work plan",
        "3": "colleagues",
        "4": "director"
      },
      "feedback": {
        "right": "To identify the goods and the services you need to deliver your activities, you begin by consulting your work plan. ",
        "wrong": "To identify the goods and the services you need to deliver your activities, you begin by consulting your work plan. "
      }
    },
    "q2": {
      "text": "Before booking a work-related flight, who should you consult? ",
      "options": {
        "1": "Accommodations  ",
        "2": "Security",
        "3": "Shared Services Canada",
        "4": "Shared Travel Services"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect</strong> Before booking a work-related flight, you should consult the Shared Travel Services.",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> Before booking a work-related flight, you should consult the Shared Travel Services.",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> Before booking a work-related flight, you should consult the Shared Travel Services.",
        "4": "<span class='v-right' /> <strong>Correct!</strong> Before booking a work-related flight, you should consult the Shared Travel Services. "
      }
    },
    "q3": {
      "text": "Your employee needs specialized software to process client requests. What would you do?",
      "options": {
        "1": "Contact Information Technologies Services",
        "2": "Contact Information Management Services",
        "3": "Contact Financial Services",
        "4": "Contact Human Resources"
      },
      "feedback": {
        "1": "<span class='v-right' /> <strong>Correct.</strong> To obtain specialized software, you should contact your Information Technology Services. ",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> To obtain specialized software, you should contact your Information Technology Services. ",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong>  To obtain specialized software, you should contact your Information Technology Services.",
        "4": "<span class='v-wrong' /> <strong>Incorrect.</strong>  To obtain specialized software, you should contact your Information Technology Services."
      }
    },
    "q4": {
      "text": "What is a work plan?",
      "options": {
        "1": "A daily to-do list",
        "2": "A summary of what you have accomplished",
        "3": "The activities to be carried out over the fiscal year",
        "4": "The amounts of money to be spent"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> A work plan is a list of activities to be carried out over a fiscal year.",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> A work plan is a list of activities to be carried out over a fiscal year.",
        "3": "<span class='v-right' /> <strong>Correct!</strong> A work plan is a list of activities to be carried out over a fiscal year.",
        "4": "<span class='v-wrong' /> <strong>Incorrect.</strong> A work plan is a list of activities to be carried out over a fiscal year."
      }
    },
    "q5": {
      "text": "Which of the following items are <u>NOT</u> found in your work plan? ",
      "options": {
        "1": "Activities ",
        "2": "Budget amounts",
        "3": "Mitigation strategies",
        "4": "Priorities"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> Budget amounts are not found in your work plan. ",
        "2": "<span class='v-right' /> <strong>Correct!</strong> Budget amounts are not found in your work plan. ",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> Budget amounts are not found in your work plan. ",
        "4": "<span class='v-wrong' /> <strong>Incorrect.</strong> Budget amounts are not found in your work plan. "
      }
    },
    "q6": {
      "text": "To identify which goods and services you will need, which section of your work plan would you consult the most?",
      "options": {
        "1": "Deliverables",
        "2": "Sub-activities",
        "3": "Priorities",
        "4": "Risks"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> To find out which goods and services that you will need, you will consult the sub-activities section of your work plan the most.",
        "2": "<span class='v-right' /> <strong>Correct!</strong> To find out which goods and services that you will need, you will consult the sub-activities section of your work plan the most.",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> To find out which goods and services that you will need, you will consult the sub-activities section of your work plan the most.",
        "4": "<span class='v-wrong' /> <strong>Incorrect.</strong> To find out which goods and services that you will need, you will consult the sub-activities section of your work plan the most."
      }
    },
    "q7": {
      "text": "You ran out of advertising posters. Before you contact a supplier to print more, what should you do?",
      "options": {
        "1": "Check the stockroom for more posters",
        "2": "Use a similar poster if acceptable",
        "3": "Ask the other units if they have posters to spare",
        "4": "Project the poster using a computer and projector"
      },
      "feedback": {
        "right": "<span class='v-right' /> <strong>Correct!</strong> These are all valid options for replacing the missing posters. Remember! There is no reason why you cannot use a reasonable substitute! ",
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> These are all valid options for replacing the missing posters. Remember! There is no reason why you cannot use a reasonable substitute!"
      }
    },
    "q8": {
      "text": "Your filing cabinet is full. What would be a suitable alternative to buying another filing cabinet?",
      "options": {
        "1": "Scan your documents instead of keeping paper copies",
        "2": "Send your existing files to archives to make more room",
        "3": "Pile your extra files on top of the cabinets ",
        "4": "Shred the files as someone must have them somewhere "
      },
      "feedback": {
        "right": "<span class='v-right' /> <strong>Correct!</strong> Scanning your documents instead of keeping paper copies and sending your existing files to archives to make more room are both valid options for eliminating the need to buy another filing cabinet. Remember! There is no reason why you cannot use a reasonable substitute! ",
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> Scanning your documents instead of keeping paper copies and sending your existing files to archives to make more room are both valid options for eliminating the need to buy another filing cabinet. Remember! There is no reason why you cannot use a reasonable substitute!"
      }
    }
  },
  "fr": {
    "instructions": "Répondez aux questions suivantes.",
    "introText":"Sélectionnez le meilleur choix pour remplir le blanc.",
    "qDisabled": "Sélectionnez le meilleur choix pour remplir les blancs",
        "q1": {
      "sentence": "Reportez-vous à {0} lorsque vous souhaitez identifier les biens et les services dont vous avez besoin pour réaliser vos activités. ",
      "choices": {
        "1": "votre budget",
        "2": "votre plan de travail ",
        "3": "vos collègues ",
        "4": "votre directeur"
      },
      "feedback": {
       "right": "Pour identifier les biens et les services dont vous avez besoin pour réaliser vos activités, vous commencez par consulter votre plan de travail. ",
        "wrong": "Pour identifier les biens et les services dont vous avez besoin pour réaliser vos activités, vous commencez par consulter votre plan de travail. "
      }
    },
    "q2": {
      "text": "Avant de réserver un billet d’avion pour le travail, à qui devez-vous vous adresser?",
      "options": {
        "1": "Aménagements",
        "2": "Sécurité",
        "3": "Services partagés Canada",
        "4": "Services de voyage partagés"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> Avant de réserver un billet d’avion pour le travail, vous devriez consulter les Services de voyage partagés.",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> Avant de réserver un billet d’avion pour le travail, vous devriez consulter les Services de voyage partagés.",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> Avant de réserver un billet d’avion pour le travail, vous devriez consulter les Services de voyage partagés.",
        "4": "<span class='v-right' /> <strong>Correct!</strong> Avant de réserver un billet d’avion pour le travail, vous devriez consulter les Services de voyage partagés."
      }
    },
    "q3": {
      "text": "Votre employé a besoin d’un logiciel spécialisé pour traiter les demandes des clients. Que feriez-vous?",
      "options": {
        "1": "Communiquer avec les Services des technologies de l’information",
        "2": "Communiquer avec les Services de gestion de l’information",
        "3": "Communiquer avec les Services financiers ",
        "4": "Communiquer avec les Ressources humaines"
      },
      "feedback": {
        "1": "<span class='v-right' /> <strong>Correct!</strong> Pour obtenir un logiciel spécialisé, vous devriez communiquer avec les Services des technologies de l’information.",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> Pour obtenir un logiciel spécialisé, vous devriez communiquer avec les Services des technologies de l’information.",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> Pour obtenir un logiciel spécialisé, vous devriez communiquer avec les Services des technologies de l’information.",
        "4": "<span class='v-wrong' /> <strong>Incorrect.</strong> Pour obtenir un logiciel spécialisé, vous devriez communiquer avec les Services des technologies de l’information."
      }
    },
    "q4": {
      "text": "Qu’est-ce qu’un plan de travail?",
      "options": {
        "1": "Une liste quotidienne des tâches à accomplir",
        "2": "Les activités à réaliser au cours d’un exercice financier",
        "3": "Les sommes d’argent à dépenser",
        "4": "Un résumé de ce que vous avez accompli"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> Un plan de travail est une série d’activités à réaliser au cours d’un exercice financier. ",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> Un plan de travail est une série d’activités à réaliser au cours d’un exercice financier.",
        "3": "<span class='v-right' /> <strong>Correct!</strong> Un plan de travail est une série d’activités à réaliser au cours d’un exercice financier. ",
        "4": "<span class='v-wrong' /> <strong>Incorrect.</strong> Un plan de travail est une série d’activités à réaliser au cours d’un exercice financier. "
      }
    },
    "q5": {
      "text": "Parmi les éléments suivants, quels sont ceux qui ne se trouvent <u>PAS</u> dans votre plan de travail?",
      "options": {
        "1": "Les activités",
        "2": "Les montants de budget",
        "3": "Les stratégies d’atténuation",
        "4": "Les priorités"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> Les montants de budget ne se trouvent pas dans votre plan de travail.",
        "2": "<span class='v-right' /> <strong>Correct!</strong> Les montants de budget ne se trouvent pas dans votre plan de travail.",
        "3": "<span class='v-right' /> <strong>Incorrect.</strong> Les montants de budget ne se trouvent pas dans votre plan de travail.",
        "4": "<span class='v-wrong' /> <strong>Incorrect.</strong> Les montants de budget ne se trouvent pas dans votre plan de travail."
      }
    },
    "q6": {
      "text": "Pour identifier les biens et les services dont vous aurez besoin, quelle section de votre plan de travail consulteriez-vous le plus?",
      "options": {
        "1": "Les livrables",
        "2": "Les sous-activités",
        "3": "Les priorités",
        "4": "Les risques"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> Pour savoir quels sont les biens et les services dont vous aurez besoin, vous consulterez surtout la section des sous-activités de votre plan de travail.",
        "2": "<span class='v-right' /> <strong>Correct!</strong> Pour savoir quels sont les biens et les services dont vous aurez besoin, vous consulterez surtout la section des sous-activités de votre plan de travail.",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> Pour savoir quels sont les biens et les services dont vous aurez besoin, vous consulterez surtout la section des sous-activités de votre plan de travail.",
        "4": "<span class='v-wrong' /> <strong>Incorrect.</strong> Pour savoir quels sont les biens et les services dont vous aurez besoin, vous consulterez surtout la section des sous-activités de votre plan de travail."
      }
    },
    "q7": {
      "text": "Vous n’avez plus d’affiches publicitaires. Avant de contacter un fournisseur pour en faire imprimer d’autres, que devriez-vous faire?",
      "options": {
        "1": "Vérifier à l’entrepôt s'il y a d’autres affiches en stock",
        "2": "Utiliser une affiche similaire si c’est acceptable",
        "3": "Demander aux autres unités si elles ont des affiches en surplus",
        "4": "Projeter l’affiche à l’aide d’un ordinateur et d’un projecteur"
      },
      "feedback": {
        "right": "<span class='v-right' /> <strong>Correct!</strong> Toutes ces options sont valables pour remplacer les affiches manquantes. N’oubliez pas! Il n’y a aucune raison pour laquelle vous ne pouvez pas utiliser un substitut raisonnable. ",
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> Toutes ces options sont valables pour remplacer les affiches manquantes. N’oubliez pas! Il n’y a aucune raison pour laquelle vous ne pouvez pas utiliser un substitut raisonnable. "
      }
    },
    "q8": {
      "text": "Votre classeur est plein. Quelle serait une solution de rechange appropriée à l’achat d’un autre classeur?",
      "options": {
        "1": "Numériser les documents au lieu de conserver des copies papier",
        "2": "Envoyer les dossiers existants aux archives pour faire plus de place",
        "3": "Empiler les dossiers supplémentaires sur le dessus des armoires",
        "4": "Déchiqueter les dossiers, car quelqu’un doit les avoir conservés quelque part"
      },
      "feedback": {
        "right": "<span class='v-right' /> <strong>Correct!</strong> Numériser les documents au lieu de conserver des copies papier et envoyer les dossiers existants aux archives pour faire plus de place sont deux options valables pour éviter d’acheter un autre classeur. N’oubliez pas! Il n’y a aucune raison pour laquelle vous ne pouvez pas utiliser une solution de rechange raisonnable! ",
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> Numériser les documents au lieu de conserver des copies papier et envoyer les dossiers existants aux archives pour faire plus de place sont deux options valables pour éviter d’acheter un autre classeur. N’oubliez pas! Il n’y a aucune raison pour laquelle vous ne pouvez pas utiliser une solution de rechange raisonnable!"
      }
    }
  }
}</i18n>
<style type="text/css" scoped>
select {
  width: 100%;
}

.scrollMe {
  width: 100%;
  overflow-x: auto;
  white-space: nowrap;
}

.tableColoured {
  table-layout: fixed;
  width: 100%;
  counter-reset: wpParts
}

.tableColoured td:before, .tableColoured div:before {
  counter-increment: wpParts;
  content: counter(wpParts);
  position: absolute;
  height: 2em;
  left: 0px;
  top: 0px;
  border-radius: 0 0 30px 0;
  padding: .1em .5em 0 .5em;
  color: white;
  font-weight:bold;
}

.tableColoured td, .tableColoured div{
  vertical-align: top;
  position: relative;
  padding-left: 35px;
}

.tableColoured select {
  max-width: 100%;
}

.vertical {
  transform: rotate(90deg);
}

.deptPri:before {
  background-color: #167777;
}

.deptPri {
  border-top: 2px solid #167777;
  background-color: #c7e0e0
}

.govtPri {
  border-top: 2px solid #6C076C;
  background-color: #e1c8e1
}

.govtPri:before {
  background-color: #6C076C;
}

.dirPri {
  border-top: 2px solid #6F1E0D;
  background-color: #e2ceca
}

.dirPri:before {
  background-color: #6F1E0D;
}

.planAct {
  border-top: 2px solid #577a90;
  background-color: #E2E8EC;
}

.planAct:before {
  background-color: #577a90;
}

.planSubAct {
  border-top: 2px solid #3A8251;
  background-color: #dcefe3;
}

.planSubAct:before {
  background-color: #3A8251;
}

.planDelivs {
  border-top: 2px solid #616EB8;
  background-color: #dfe2f1;
}

.planDelivs:before {
  background-color: #616EB8;
}

.planRisk {
  border-top: 2px solid #8D9245;
  background-color: #f0f1df;
}

.planRisk:before {
  background-color: #8D9245;
}

.planLikely {
  border-top: 2px solid #775F75;
  background-color: #E1DCE1;
}

.planLikely:before {
  background-color: #775F75;
}

.planImpact {
  border-top: 2px solid #607293;
  background-color: hsl(219, 21%, 91%);
}

.planImpact:before {
  background-color: #607293;
}

.planMitigat {
  border-top: 2px solid #B35685;
  background-color: #f1dfe8;
}

.planMitigat:before {
  background-color: #B35685;
}

.planRes {
  border-top: 2px solid #C35522;
  background-color: #f1e5df;
}

.planRes:before {
  background-color: #C35522;
}

.thNumbered {
  position: relative;
  text-align: center;
  padding-left: 25px;
}

.thNumbered:before {
  position: absolute;
  counter-increment: wpParts;
  content: counter(wpParts);
  height: 2em;
  left: 0px;
  top: 0px;
  border-radius: 0 0 30px 0;
  padding: .1em .5em 0 .5em;
  color: white;
  font-weight:bold;
}

/* Wokring ... in */
div.tableColoured div {
  height:40px;
}
div.tableColoured p {
  margin:0;
}

.microTablePart2 div.thNumbered {
  float:left;
  height:40px;
  /* display:inline-block; */
  padding:0;
  margin:0;
  width:12.5%;
}
.microTablePart2 {
  /* position:relative; */
  width:100%;
}

/* Wokring ... out */

</style>