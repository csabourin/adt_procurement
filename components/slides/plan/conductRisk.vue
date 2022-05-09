<template>
  <div>
    <b-container>
      <b-row>
        <b-col>
          <b-card>
          <p>{{$t('introText')}}</p>
          <b-tabs content v-model="tabIndex">
            <b-tab title="Question 1">
              <radioQuiz :question="$t('q1')" qId="1"/>
            </b-tab>
            <b-tab title="Question 2">
              <radioQuiz :question="$t('q2')" qId="2" />
            </b-tab>
            <b-tab title="Question 3">
              <radioQuiz :question="$t('q3')" qId="3"/>
            </b-tab>
            <b-tab title="Question 4">
              <radioQuiz :question="$t('q4')" qId="4"/>
            </b-tab>
             <b-tab title="Question 5">
              <checkboxQuiz :question="$t('q5')" qId="5" :Answer="['2','3']"/>
            </b-tab>
              <b-tab title="Question 6">
              <checkboxQuiz :question="$t('q6')" qId="6" :Answer="['1','2','3']"/>
            </b-tab>
          </b-tabs>
          <!-- Control buttons-->
          <div class="text-center">
            <b-button-group :aria-label="$t('questionNav')" class="mt-2">
              <b-button @click="[tabIndex--, focus()]" :disabled="tabIndex<=0">{{$t('previousPage')}}</b-button>
              <b-button @click="[tabIndex++, focus()]" :disabled="tabIndex>=5">{{$t('nextPage')}}</b-button>
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
  import windowPortal from "~/components/newWindow"
  export default {
    components: {
      checkboxQuiz,
      radioQuiz,
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
      "introText": "Here’s a chance for you to confirm your knowledge of risk-related items regarding procurement. Answer the following questions.",
      "q1": {
        "text": "What is a risk?",
        "options": {
          "1": "A specific and tangible item that you should be able to check off your list when you accomplish it ",
          "2": "A measurable performance or success level that an organization, a program or an initiative plans to achieve within a specified time period ",
          "3": "A potential event that may affect the activity and its ability to meet and accomplish its objectives and expected results "
        },
        "feedback": {
          "1": "<span class='v-wrong' /><strong>Incorrect.</strong> A risk is a potential event that may affect the activity and its ability to meet and accomplish its objectives and expected results.",
          "2": "<span class='v-wrong' /><strong>Incorrect.</strong> A risk is a potential event that may affect the activity and its ability to meet and accomplish its objectives and expected results.",
          "3": "<span class='v-right' /><strong>Correct!</strong> A risk is a potential event that may affect the activity and its ability to meet and accomplish its objectives and expected results."
        }
      },
      "q2": {
        "text": "What is mitigation?",
        "options": {
          "1": "An exercise to identify and analyze events that may negatively impact resources",
          "2": "The action of reducing the severity of negative impacts on outcomes ",
          "3": "A measurable performance that an initiative plans to achieve"
        },
        "feedback": {
          "1": "<span class='v-wrong' /><strong>Incorrect.</strong> Mitigation is the action of reducing the severity or seriousness of something.",
          "2": "<span class='v-right' /><strong>Correct!</strong> Mitigation is the action of reducing the severity or seriousness of something.",
          "3": "<span class='v-wrong' /><strong>Incorrect.</strong> Mitigation is the action of reducing the severity or seriousness of something."
        }
      },
      "q3": {
        "text": "What is impact? ",
        "options": {
          "1": "The extent to which something may affect something else ",
          "2": "The chance of something happening or not ",
          "3": "The action of reducing the severity or seriousness of something"
        },
        "feedback": {
          "1": "<span class='v-right' /><strong>Correct!</strong> Impact is the extent to which something may affect something else.",
          "2": "<span class='v-wrong' /><strong>Incorrect!</strong> Impact is the extent to which something may affect something else.",
          "3": "<span class='v-wrong' /><strong>Incorrect.</strong> Impact is the extent to which something may affect something else."
        }
      },
      "q4": {
        "text": "What is likelihood? ",
        "options": {
          "1": "The chance of something happening or not ",
          "2": "An exercise to identify events that may impact resources ",
          "3": "A potential event that may affect the activity"
        },
        "feedback": {
          "1": "<span class='v-right' /><strong>Correct!</strong> Likelihood is the chance of something happening or not.",
          "2": "<span class='v-wrong' /><strong>Incorrect!</strong> Likelihood is the chance of something happening or not.",
          "3": "<span class='v-wrong' /><strong>Incorrect.</strong> Likelihood is the chance of something happening or not."
        }
      },
      "q5": {
        "text": "One of your work plan activities is to conduct onsite inspections in remote locations, which involves airline travel. These inspections are required to maintain site licences.  If airline travel is not available, which following mitigation strategies could you apply?",
        "options": {
          "1": "Remove the licences of the locations you can no longer inspect until you can travel again ",
          "2": "Conduct virtual inspections through videoconferencing and online questionnaires ",
          "3": "Book alternate means of transportation such as traveling by train or renting a car "
        },
         "feedback": {
          "right": "<span class='v-right' /><strong>Correct!</strong>",
          "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
        },
        "conclusion": "If airline travel is not available, you may conduct virtual inspections through videoconferencing and online questionnaires, or book alternate means of transportation such as traveling by train or renting a car. While you could remove the licences of locations that you can no longer inspect, this should be considered only once all other options have been exhausted."
      },
      "q6": {
        "text": "One of your work plan activities is to train your staff. If your training budget is reduced, what mitigation strategies should you implement?",
        "options": {
          "1": "Have one person attend the training and then train their colleagues ",
          "2": "Find alternate means of training such as books",
          "3": "Organize your own internal training sessions",
          "4": "Cancel all training "
        },
         "feedback": {
          "right": "<span class='v-right' /><strong>Correct!</strong>",
          "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
        },
        "conclusion": "<p>If your training budget is reduced, you may have one person attend the training and pass on their knowledge to their colleagues; you may find alternate means of training such as books or eLearning, and you may organize your own internal training sessions. While you could cancel all training, this should be considered only once all other options have been exhausted.</p><p>For a review of work plans, see the <strong>Build a Work Plan</strong> module of the <a href:'https://adtfinance.netlify.app/en'>Using Public Funds Responsibly course</a>. This link is also available in the Toolbox.</p>"
      }
    },
    "fr": {
      "introText": "Voici l’occasion pour vous de confirmer votre connaissance des risques liés à l’approvisionnement. Répondez aux questions suivantes.",
       "q1": {
        "text": "C’est quoi un risque? ",
        "options": {
          "1": "Un élément spécifique et tangible que vous devriez être en mesure de cocher sur votre liste lorsque vous l’avez terminé",
          "2": "Un rendement mesurable ou un niveau de réussite qu'une organisation, un programme ou une initiative prévoit d'atteindre dans un délai déterminé",
          "3": "Un événement potentiel susceptible d’influer sur l’activité et sur sa capacité d’atteindre et de réaliser les objectifs et les résultats attendus"
        },
        "feedback": {
          "1": "<span class='v-wrong' /><strong>Incorrect.</strong> Un risque est un événement potentiel susceptible d’influer sur l’activité et sur sa capacité d’atteindre et de réaliser les objectifs et les résultats attendus.",
          "2": "<span class='v-wrong' /><strong>Incorrect.</strong> Un risque est un événement potentiel susceptible d’influer sur l’activité et sur sa capacité d’atteindre et de réaliser les objectifs et les résultats attendus.",
          "3": "<span class='v-right' /><strong>Correct!</strong> Un risque est un événement potentiel susceptible d’influer sur l’activité et sur sa capacité d’atteindre et de réaliser les objectifs et les résultats attendus."
        }
      },
      "q2": {
        "text": "Qu’est-ce que l’atténuation?",
        "options": {
          "1": "Un exercice pour identifier et analyser les événements qui peuvent avoir un impact négatif sur les ressources",
          "2": "L’action visant à réduire la gravité des impacts négatifs sur les résultats",
          "3": "Un rendement mesurable qu’une initiative prévoit d’atteindre"
        },
        "feedback": {
          "1": "<span class='v-wrong' /><strong>Incorrect.</strong> L’atténuation c’est l’action de réduire la gravité ou le sérieux d’une chose.",
          "2": "<span class='v-right' /><strong>Correct!</strong> L’atténuation c’est l’action de réduire la gravité ou le sérieux d’une chose.",
          "3": "<span class='v-wrong' /><strong>Incorrect.</strong> L’atténuation c’est l’action de réduire la gravité ou le sérieux d’une chose."
        }
      },
      "q3": {
        "text": "Qu’est-ce que l’impact?",
        "options": {
          "1": "La mesure dans laquelle quelque chose peut affecter quelque chose d'autre",
          "2": "Les chances que quelque chose se produise ou non",
          "3": "L’action de réduire la gravité ou le sérieux d’une chose"
        },
        "feedback": {
          "1": "<span class='v-right' /><strong>Correct!</strong> L’impact c’est la mesure dans laquelle quelque chose peut affecter quelque chose d'autre.",
          "2": "<span class='v-wrong' /><strong>Incorrect.</strong> L’impact c’est la mesure dans laquelle quelque chose peut affecter quelque chose d'autre.",
          "3": "<span class='v-wrong' /><strong>Incorrect.</strong> L’impact c’est la mesure dans laquelle quelque chose peut affecter quelque chose d'autre."
        }
      },
      "q4": {
        "text": "Qu’est-ce que la probabilité?",
        "options": {
          "1": "La chance que quelque chose se produise ou non",
          "2": "Un exercice pour identifier les événements qui peuvent avoir un impact sur les ressources ",
          "3": "Un événement potentiel susceptible d’influer sur l’activité"
        },
        "feedback": {
          "1": "<span class='v-right' /><strong>Correct!</strong> La probabilité, c’est la chance que quelque chose se produise ou non.",
          "2": "<span class='v-wrong' /><strong>Incorrect.</strong> La probabilité, c’est la chance que quelque chose se produise ou non.",
          "3": "<span class='v-wrong' /><strong>Incorrect.</strong> La probabilité, c’est la chance que quelque chose se produise ou non."
        }
      },
      "q5": {
        "text": "L'une des activités de votre plan de travail consiste à effectuer des inspections sur place dans des endroits éloignés, ce qui implique des déplacements en avion. Ces inspections sont nécessaires pour conserver les licences de site. Si vous n'avez pas la possibilité de voyager par avion, quelles stratégies d'atténuation pourriez-vous appliquer?",
        "options": {
          "1": "Retirez les permis des lieux que vous ne pouvez plus inspecter jusqu'à ce que vous puissiez à nouveau voyager",
          "2": "Effectuer des inspections virtuelles par vidéoconférence et au moyen de questionnaires en ligne  ",
          "3": "Réserver d'autres moyens de transport tels que le train ou la location d'une voiture "
        },
         "feedback": {
          "right": "<span class='v-right' /><strong>Correct!</strong>",
          "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
        },
        "conclusion": "S'il n'est pas possible de voyager par avion, vous pouvez effectuer des inspections virtuelles par vidéoconférence et au moyen de questionnaires en ligne, ou réserver d'autres moyens de transport, comme le train ou la location d'une voiture. Bien que vous pourriez retirer les licences des lieux que vous ne pouvez plus inspecter, il serait préférable d’éviter cette option jusqu’à ce que toutes les autres options aient été épuisées. "
      },
      "q6": {
        "text": "L’une des activités de votre plan de travail consiste à former votre personnel. Si votre budget de formation était réduit, quelles stratégies d’atténuation devriez-vous mettre en œuvre? ",
        "options": {
          "1": "Faire participer une personne à la formation et former ensuite ses collègues",
          "2": "Trouver d'autres moyens de formation tels que les livres ",
          "3": "Organiser vos propres séances de formation interne",
          "4": "Annuler toute formation"
        },
         "feedback": {
          "right": "<span class='v-right' /><strong>Correct!</strong>",
          "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
        },
        "conclusion": "<p>Si votre budget de formation est réduit, vous pouvez demander à une personne de suivre la formation et de transmettre ses connaissances à ses collègues, vous pouvez trouver d’autres moyens de formation tels que des livres ou l’apprentissage en ligne, et vous pouvez organiser vos propres sessions de formation internes. Bien que vous pourriez annuler toutes les formations, il serait préférable d’éviter cette option jusqu’à ce que toutes les autres options aient été épuisées.</p><p>Pour une revue des plans de travail, voir la section <strong>Élaborer un plan de travail</strong> du cours <a href:'https://adtfinance.netlify.app/fr'> La saine gestion des fonds publics</a>. Ce lien est également disponible dans la boîte à outils.</p>"
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
