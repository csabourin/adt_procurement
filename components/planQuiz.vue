<template>
  <span>
    <div>
      <b-card>
        <b-tabs v-model="tabIndex">
          <b-tab title="Question 1">
            <p v-html="$t('q1.text')" />
            <span>
              <table class='tableColoured'>
                <tr>
                  <td colspan='8' class='govtPri'>
                    <p><span v-html="$t('pwpGovtPri')" /><br>
                      <select v-model="options1">
                        <option disabled value=''>{{$t('qDisabled')}}</option>
                        <option v-for="(statement,index) in answers1" :value="index" :key="index">{{$t(statement)}}</option>
                      </select>
                    </p>
                    <p v-if="govtPri"> <span v-html="$t('a1-'+govtPri)" /></p>
                  </td>
                </tr>
                <tr>
                  <td colspan='8' class='deptPri'>
                    <p><span v-html="$t('pwpDeptPri')" /><br><select v-model="options2">
                        <option disabled value=''>{{$t('qDisabled')}}</option>
                        <option v-for="(statement,index) in answers1" :value="index" :key="index">{{$t(statement)}}</option>
                      </select>
                    </p>
                    <p v-if="deptPri"> <span v-html="$t('a2-'+deptPri)" /></p>
                  </td>
                </tr>
                <tr>
                  <td colspan='8' class='dirPri'>
                    <p><span v-html="$t('pwpDirPri')" /><br><select v-model="options3">
                        <option disabled value=''>{{$t('qDisabled')}}</option>
                        <option v-for="(statement,index) in answers1" :value="index" :key="index">{{$t(statement)}}</option>
                      </select>
                    </p>
                    <p v-if="dirPri"><span v-html="$t('a3-'+dirPri)" /></p>
                  </td>
                </tr>
              </table>
              <div class="scrollMe">
                <table border="1" cellspacing="0" cellpadding="5" width="100%">
                  <tr>
                    <th class='planAct thNumbered'><span>{{$t('titleActivities')}}</span><br><select v-model="options4">
                        <option disabled value=''>{{$t('qDisabled')}}</option>
                        <option v-for="(statement,index) in answers1" :value="index" :key="index">{{$t(statement)}}</option>
                      </select></th>
                    <th class='planSubAct thNumbered'><span>{{$t('titleSubActivities')}}</span><br><select v-model="options5">
                        <option disabled value=''>{{$t('qDisabled')}}</option>
                        <option v-for="(statement,index) in answers1" :value="index" :key="index">{{$t(statement)}}</option>
                      </select></th>
                    <th class='planDelivs thNumbered'><span>{{$t('titleDeliverables')}}</span><br><select v-model="options6">
                        <option disabled value=''>{{$t('qDisabled')}}</option>
                        <option v-for="(statement,index) in answers1" :value="index" :key="index">{{$t(statement)}}</option>
                      </select></th>
                    <th class='planRisk thNumbered'><span>{{$t('titleRisk')}}</span><br><select v-model="options7">
                        <option disabled value=''>{{$t('qDisabled')}}</option>
                        <option v-for="(statement,index) in answers1" :value="index" :key="index">{{$t(statement)}}</option>
                      </select></th>
                    <th class='planLikely thNumbered'><span>{{$t('titleLikelihood')}}</span><br><select v-model="options8">
                        <option disabled value=''>{{$t('qDisabled')}}</option>
                        <option v-for="(statement,index) in answers1" :value="index" :key="index">{{$t(statement)}}</option>
                      </select></th>
                    <th class='planImpact thNumbered'><span>{{$t('titleImpact')}}</span><br><select v-model="options9">
                        <option disabled value=''>{{$t('qDisabled')}}</option>
                        <option v-for="(statement,index) in answers1" :value="index" :key="index">{{$t(statement)}}</option>
                      </select></th>
                    <th class='planMitigat thNumbered'><span>{{$t('titleMitigation')}}</span><br><select v-model="options10">
                        <option disabled value=''>{{$t('qDisabled')}}</option>
                        <option v-for="(statement,index) in answers1" :value="index" :key="index">{{$t(statement)}}</option>
                      </select></th>
                    <th class='planRes thNumbered'><span>{{$t('titleResources')}}</span><br><select v-model="options11">
                        <option disabled value=''>{{$t('qDisabled')}}</option>
                        <option v-for="(statement,index) in answers1" :value="index" :key="index">{{$t(statement)}}</option>
                      </select></th>
                  </tr>
                </table>
              </div>
            </span>
          </b-tab>
          <b-tab title="Question 2"><checkboxQuiz :Question="$t('q2')" qId="2" :Answer='["2","3"]' /></b-tab>
          <b-tab title="Question 3"><radioQuiz :Question="$t('q3')" qId="3" /></b-tab>
          <b-tab title="Question 4"><radioQuiz :Question="$t('q4')" qId="4" /></b-tab>
          <b-tab title="Question 5"><radioQuiz :Question="$t('q5')" qId="5" /></b-tab>
          <b-tab title="Question 6"><radioQuiz :Question="$t('q6')" qId="6" /></b-tab>
          <b-tab title="Question 7"><radioQuiz :Question="$t('q7')" qId="7" /></b-tab>
          <b-tab title="Question 8"><radioQuiz :Question="$t('q8')" qId="8" /></b-tab>
          <b-tab title="Question 9"><checkboxQuiz :Question="$t('q9')" qId="9" :Answer='["1","2","3"]' /></b-tab>
          <b-tab title="Question 10"><radioQuiz :Question="$t('q10')" qId="10" /></b-tab>
          <b-tab title="Question 11"><checkboxQuiz :Question="$t('q11')" qId="11" :Answer='["3","4","5"]' /></b-tab>
          <b-tab title="Question 12"><radioQuiz :Question="$t('q12')" qId="12" /></b-tab>
          <b-tab title="Question 13"><checkboxQuiz :Question="$t('q13')" qId="13" :Answer='["1","2"]'/></b-tab>
          <b-tab title="Question 14"><radioQuiz :Question="$t('q14')" qId="14" /></b-tab>
        </b-tabs>
      </b-card>
      <!-- Control buttons-->
      <div class="text-center">
        <b-button-group class="mt-2">
          <b-button @click="tabIndex--">{{$t('previousPage')}}</b-button>
          <b-button @click="tabIndex++">{{$t('nextPage')}}</b-button>
        </b-button-group>
      </div>
    </div>
  </span>
</template>
<script type="text/javascript">
import radioQuiz from "~/components/radioQuiz"
import checkboxQuiz from "~/components/checkboxQuiz"
export default {
  components: { radioQuiz, checkboxQuiz },
  data() {
    return {
      tabIndex: 0,
      Quest1: '',
      answers1: ['q1.a1', 'q1.a2', 'q1.a3', 'q1.a4', 'q1.a5', 'q1.a6', 'q1.a7', 'q1.a8', 'q1.a9', 'q1.a10', 'q1.a11'],
      options1: '',
      options2: '',
      options3: '',
      options4: '',
      options5: '',
      options6: '',
      options7: '',
      options8: '',
      options9: '',
      options10: '',
      options11: '',

    }
  }
}
</script>
<i18n>{
  "en": {
    "qDisabled": "Choose",
    "pwpGovtPri": "<strong>Government priorities</strong>",
    "pwpDeptPri": "<strong>Departmental priorities</strong>",
    "pwpDirPri": "<strong>Directorate priorities</strong>",
    "titleActivities": "Activities",
    "pwpPlanAct": "<strong>Activities</strong>",
    "titleSubActivities": "Sub-activities",
    "titleDeliverables": "Deliverables",
    "titleRisk": "Risk",
    "titleLikelihood": "Likelihood",
    "titleImpact": "Impact",
    "titleMitigation": "Mitigation",
    "titleResources": "Resources",
    "q1": {
      "text": "Match the following statements to the appropriate sections of the work plan. Each section can only be populated with one statement.",
      "a1": "High",
      "a2": "Work with Canadians in all areas of the economy and all parts of the country to improve conditions for investment",
      "a3": "Tablets",
      "a4": "Keep original computers until tablets are up and running for 3 months",
      "a5": "Give employees new digital tools to promote mobility",
      "a6": "Modernize and renew the public service to better serve Canadians and foster a healthy, productive workforce",
      "a7": "Buy tablets ",
      "a8": "Technology is not compatible with existing network ",
      "a9": "Low",
      "a10": "Workplace Modernization",
      "a11": "Give employees tablets"
    },
    "q2": {
      "text": "Which elements should you consider when drafting your new work plan? ",
      "options": {
        "1": "Government priorities, departmental priorities and directorate priorities",
        "2": "Previous year’s work plan, budget, reports",
        "3": "Your fellow manager’s work plan from last year"
      },
      "feedback": {
        "right": "<span class='v-right' /> <strong>Correct!</strong> ",
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> You should consider government priorities, departmental priorities and directorate priorities as well as the previous year’s work plan, budget, reports when drafting your new work plan. Unless the activities of your fellow manager have been transferred to your team, you would not take them into account. "
      }
    },
    "q3": {
      "text": "A departmental priority in your work plan originates all the way back to:",
      "options": {
        "1": "The Directorate’s plan",
        "2": "The Departmental plan",
        "3": "The Speech from the Throne"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> Departmental priorities flow from the Speech from the Throne, where the government lays out its priorities. ",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> Departmental priorities flow from the Speech from the Throne, where the government lays out its priorities. ",
        "3": "<span class='v-right' /> <strong>Correct!</strong>  It’s a good idea to start your view of the big picture with the Speech from the Throne."
      }
    },
    "q4": {
      "text": "To find your department’s core responsibilities, expected results and indicators, you would look to:",
      "options": {
        "1": "The directorate’s plan",
        "2": "The Departmental plan",
        "3": "The Speech from the Throne",
        "4": "The sector’s plan"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> Your department’s core responsibilities, expected results and indicators are found within the Departmental Plan.",
        "2": "<span class='v-right' /> <strong>Correct!</strong> Your department’s core responsibilities, expected results and indicators are found within the Departmental Plan.",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> Your department’s core responsibilities, expected results and indicators are found within the Departmental Plan.",
        "4": "<span class='v-wrong' /> <strong>Incorrect.</strong> Your department’s core responsibilities, expected results and indicators are found within the Departmental Plan."
      }
    },
    "q5": {
      "text": "The Prime Minister sets out his expectations and objectives for your department in: ",
      "options": {
        "1": "The Speech from the Throne",
        "2": "The Departmental Results Framework",
        "3": "The Mandate Letter",
        "4": "The Departmental Plan"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> The Prime Minister outlines his expectations and objectives in the Mandate letter to the Minister responsible for the department.",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> The Prime Minister outlines his expectations and objectives in the Mandate letter to the Minister responsible for the department.",
        "3": "<span class='v-right' /> <strong>Correct!</strong>  The Prime Minister outlines his expectations and objectives in the Mandate letter to the Minister responsible for the department.",
        "4": "<span class='v-wrong' /> <strong>Incorrect.</strong> The Prime Minister outlines his expectations and objectives in the Mandate letter to the Minister responsible for the department."
      }
    },
    "q6": {
      "text": "How often does a manager need to recertify in order to be able to continue to exercise their financial authority?",
      "options": {
        "1": "Every year",
        "2": "Every 2 years",
        "3": "Every 5 years"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> Managers need to recertify every 5 years.",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> Managers need to recertify every 5 years.",
        "3": "<span class='v-right' /> <strong>Correct!</strong> "
      }
    },
    "q7": {
      "text": "To conduct a 360 scan, you must do the following.",
      "options": {
        "1": "Get a sense of the current situation by examining what was done in the recent past.",
        "2": "Look at previous work plans, budgets and reports.",
        "3": "Identify challenges from the previous years.",
        "4": "Get a sense of the cultural context in your department/branch/directorate.",
        "5": "All of the above."
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> You must do all these activities to conduct a 360 review.",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> You must do all these activities to conduct a 360 review.",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> You must do all these activities to conduct a 360 review.",
        "4": "<span class='v-wrong' /> <strong>Incorrect.</strong> You must do all these activities to conduct a 360 review.",
        "5": "<span class='v-right' /> <strong>Correct!</strong>  You must do all these activities to conduct a 360 review."
      }
    },
    "q8": {
      "text": "Choose the priorities to which your work plan activities should link, starting with the top.",
      "options": {
        "1": "Departmental priorities, directorate priorities, government priorities",
        "2": "Government priorities, departmental priorities, directorate priorities",
        "3": "Directorate priorities, government priorities, departmental priorities"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> The priorities starting from the top are: Government priorities, departmental priorities, directorate priorities.",
        "2": "<span class='v-right' /> <strong>Correct!</strong> ",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> The priorities starting from the top are: Government priorities, departmental priorities, directorate priorities."
      }
    },
    "q9": {
      "text": "Which situations would cause you to update your work plan?",
      "options": {
        "1": "A new director is nominated",
        "2": "An employee leaves ",
        "3": "Mandatory training is pushed to next year",
        "4": "Over 500 licenses have been issued ",
        "5": "Your software gets an update"
      },
      "feedback": {
        "right": "<span class='v-right' /> <strong>Correct!</strong> ",
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> The nomination of a new director, the departure of an employee and mandatory training being pushed back to the next year all require an update to the work plan."
      }
    },
    "q10": {
      "text": "What is a work plan?.",
      "options": {
        "1": "A daily to-do list",
        "2": "The activities to be carried out over a fiscal year",
        "3": "The amounts of money to be spent ",
        "4": "A summary of what you have accomplished"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> The work plan are activities to be carried out over a fiscal year.",
        "2": "<span class='v-right' /> <strong>Correct!</strong> ",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> The work plan are activities to be carried out over a fiscal year.",
        "4": "<span class='v-wrong' /> <strong>Incorrect.</strong> The work plan are activities to be carried out over a fiscal year."
      }
    },
    "q11": {
      "text": "What are a manager’s responsibilities?",
      "options": {
        "1": "To establish government wide priorities",
        "2": "To negotiate government contracts",
        "3": "To plan their unit’s activities",
        "4": "To use public funds to carry out their unit’s activities",
        "5": "To report on the status of their unit’s activities"
      },
      "feedback": {
        "right": "<span class='v-right' /> <strong>Correct!</strong> ",
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> A manager is responsible for planning their unit’s activities, using public funds to carry out their unit’s activities and reporting on the status of their unit’s activities."
      }
    },
    "q12": {
      "text": "What are deliverables?",
      "options": {
        "1": "The work tasks to be accomplished to support your directorate’s priorities.",
        "2": "The specific and tangible items you should be able to check off your list when you accomplish them.",
        "3": "The budget, personnel, consultants, buildings and materials required to carry out the directorate activities."
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> Deliverables are more specific and tangible than the activities.",
        "2": "<span class='v-right' /> <strong>Correct!</strong> ",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> These are the resources. Deliverables are specific and tangible items you should be able to check off your list when you accomplish them."
      }
    },
    "q13": {
      "text": "Which activities should you include in your new work plan?",
      "options": {
        "1": "Ongoing activities",
        "2": "New activities",
        "3": "Completed activities",
        "4": "Project activities"
      },
      "feedback": {
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> Only ongoing activities and new activities should be included.",
        "right": "<span class='v-right' /> <strong>Correct!</strong> "
      }
    },
    "q14": {
      "text": "Which are considered risks?",
      "options": {
        "1": "A 15 minute power failure, minor software bugs",
        "2": "Licensing Fees, fisheries management",
        "3": "Power failures, well managed fish stocks",
        "4": "Overfishing, staff turnover"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> A 15 minute power failure should not be sufficient to be considered a risk. Overfishing and staff turnover are risks.",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> These are not risks. Overfishing and staff turnover are risks.",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> Well managed fish stocks are not risks. Overfishing and staff turnover are risks.",
        "4": "<span class='v-right' /> <strong>Correct!</strong>"
      }
    }
  },
  "fr": {
    "qDisabled": "Choisissez",
    "pwpGovtPri": "<strong>Priorités du gouvernement</strong>",
    "pwpDeptPri": "<strong>Priorités ministérielles</strong>",
    "pwpDirPri": "<strong>Priorités de la direction</strong>",
    "titleActivities": "Activités",
    "titleSubActivities": "Sous-activités",
    "titleDeliverables": "Livrables",
    "titleRisk": "Risque",
    "titleLikelihood": "Probabilité",
    "titleImpact": "Impact",
    "titleMitigation": "Atténuation",
    "titleResources": "Resources",
    "q1": {
      "text": "Faites correspondre les &eacute;nonc&eacute;s suivants aux sections appropri&eacute;es du plan de travail. Chaque section ne peut contenir qu'un seul &eacute;nonc&eacute;.",
      "a1": "Élevé ",
      "a2": "Travailler avec les Canadiens dans tous les secteurs de l'économie et dans toutes les régions du pays pour améliorer les conditions d'investissement.",
      "a3": "Tablettes",
      "a4": "Conservez les ordinateurs d'origine jusqu'à ce que les tablettes soient prêtes et à l'emploi pendant 3 mois. ",
      "a5": "Donner aux salariés de nouveaux outils numériques pour favoriser la mobilité ",
      "a6": "Moderniser et renouveler la fonction publique afin de mieux servir les Canadiens et de favoriser une main-d'œuvre saine et productive.",
      "a7": "Acheter des tablettes",
      "a8": "La technologie n'est pas compatible avec le réseau existant ",
      "a9": "Faible",
      "a10": "Modernisation du milieu de travail ",
      "a11": "Donner des tablettes aux employés"
    },
    "q2": {
      "text": "Quels éléments devez-vous prendre en compte lors de l'élaboration de votre nouveau plan de travail? ",
      "options": {
        "1": "Priorités gouvernementales, priorités ministérielles et priorités de la Direction ",
        "2": "Plan de travail, budget et rapports de l'année précédente",
        "3": "Le plan de travail de votre collègue gestionnaire de l'année dernière"
      },
      "feedback": {
        "right": "<span class='v-right' /> <strong>Correct!</strong> ",
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> Vous devriez tenir compte des priorités gouvernementales, des priorités ministérielles et des priorités de la direction ainsi que du plan de travail, du budget et des rapports de l'année précédente lorsque vous rédigez votre nouveau plan de travail. À moins que les activités de votre collègue gestionnaire n'aient été transférées à votre équipe, vous ne les prendriez pas en compte. "
      }
    },
    "q3": {
      "text": "Une priorité ministérielle de votre plan de travail remonte à l'origine",
      "options": {
        "1": "Du plan de la Direction ",
        "2": "Du plan ministériel",
        "3": "Du discours du Trône"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> Les priorités ministérielles découlent du discours du Trône, dans lequel le gouvernement énonce ses priorités.  ",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> Les priorités ministérielles découlent du discours du Trône, dans lequel le gouvernement énonce ses priorités.  ",
        "3": "<span class='v-right' /> <strong>Correct!</strong>  C'est une bonne idée de commencer votre vision d'ensemble avec le discours du Trône."
      }
    },
    "q4": {
      "text": "Pour trouver les principales responsabilités de votre ministère, les résultats escomptés et les indicateurs, vous devriez vous tourner vers :",
      "options": {
        "1": "Le plan de la Direction ",
        "2": "Le Plan ministériel",
        "3": "Le discours du Trône",
        "4": "Le plan du secteur"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> Les responsabilités fondamentales, les résultats escomptés et les indicateurs de votre ministère se trouvent dans le Plan ministériel. ",
        "2": "<span class='v-right' /> <strong>Correct!</strong> Les responsabilités fondamentales, les résultats escomptés et les indicateurs de votre ministère se trouvent dans le Plan ministériel.",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> Les responsabilités fondamentales, les résultats escomptés et les indicateurs de votre ministère se trouvent dans le Plan ministériel. ",
        "4": "<span class='v-wrong' /> <strong>Incorrect.</strong> Les responsabilités fondamentales, les résultats escomptés et les indicateurs de votre ministère se trouvent dans le Plan ministériel. "
      }
    },
    "q5": {
      "text": "Le premier ministre énonce ses attentes et ses objectifs pour votre ministère dans : ",
      "options": {
        "1": "Le discours du Trône",
        "2": "Le Cadre ministériel des résultats ",
        "3": "La lettre de mandat",
        "4": "Le plan ministériel\n"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> Le premier ministre décrit ses attentes et ses objectifs dans la lettre de mandat adressée au ministre responsable du ministère.",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> Le premier ministre décrit ses attentes et ses objectifs dans la lettre de mandat adressée au ministre responsable du ministère.",
        "3": "<span class='v-right' /> <strong>Correct!</strong>  Le premier ministre décrit ses attentes et ses objectifs dans la lettre de mandat adressée au ministre responsable du ministère.",
        "4": "<span class='v-wrong' /> <strong>Incorrect.</strong> Le premier ministre décrit ses attentes et ses objectifs dans la lettre de mandat adressée au ministre responsable du ministère."
      }
    },
    "q6": {
      "text": "À quelle fréquence un gestionnaire doit-il renouveler son attestation pour pouvoir continuer à exercer ses pouvoirs financiers ?",
      "options": {
        "1": "Chaque année",
        "2": "Tous les 2 ans",
        "3": "Tous les 5 ans"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> Les gestionnaires doivent renouveler leur accréditation tous les cinq ans.",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> Les gestionnaires doivent renouveler leur accréditation tous les cinq ans.",
        "3": "<span class='v-right' /> <strong>Correct!</strong> "
      }
    },
    "q7": {
      "text": "To conduct a 360 scan, you must do the following.",
      "options": {
        "1": "Get a sense of the current situation by examining what was done in the recent past.",
        "2": "Look at previous work plans, budgets and reports.",
        "3": "Identify challenges from the previous years.",
        "4": "Get a sense of the cultural context in your department/branch/directorate.",
        "5": "All of the above."
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> You must do all these activities to conduct a 360 review.",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> You must do all these activities to conduct a 360 review.",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> You must do all these activities to conduct a 360 review.",
        "4": "<span class='v-wrong' /> <strong>Incorrect.</strong> You must do all these activities to conduct a 360 review.",
        "5": "<span class='v-right' /> <strong>Correct!</strong>  You must do all these activities to conduct a 360 review."
      }
    },
    "q8": {
      "text": "Choose the priorities to which your work plan activities should link, starting with the top.",
      "options": {
        "1": "Departmental priorities, directorate priorities, government priorities",
        "2": "Government priorities, departmental priorities, directorate priorities",
        "3": "Directorate priorities, government priorities, departmental priorities"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> The priorities starting from the top are: Government priorities, departmental priorities, directorate priorities.",
        "2": "<span class='v-right' /> <strong>Correct!</strong> ",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> The priorities starting from the top are: Government priorities, departmental priorities, directorate priorities."
      }
    },
    "q9": {
      "text": "Which situations would cause you to update your work plan?",
      "options": {
        "1": "A new director is nominated",
        "2": "An employee leaves ",
        "3": "Mandatory training is pushed to next year",
        "4": "Over 500 licenses have been issued ",
        "5": "Your software gets an update"
      },
      "feedback": {
        "right": "<span class='v-right' /> <strong>Correct!</strong> ",
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> The nomination of a new director, the departure of an employee and mandatory training being pushed back to the next year all require an update to the work plan."
      }
    },
    "q10": {
      "text": "What is a work plan?.",
      "options": {
        "1": "A daily to-do list",
        "2": "The activities to be carried out over a fiscal year",
        "3": "The amounts of money to be spent ",
        "4": "A summary of what you have accomplished"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> The work plan are activities to be carried out over a fiscal year.",
        "2": "<span class='v-right' /> <strong>Correct!</strong> ",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> The work plan are activities to be carried out over a fiscal year.",
        "4": "<span class='v-wrong' /> <strong>Incorrect.</strong> The work plan are activities to be carried out over a fiscal year."
      }
    },
    "q11": {
      "text": "What are a manager’s responsibilities?",
      "options": {
        "1": "To establish government wide priorities",
        "2": "To negotiate government contracts",
        "3": "To plan their unit’s activities",
        "4": "To use public funds to carry out their unit’s activities",
        "5": "To report on the status of their unit’s activities"
      },
      "feedback": {
        "right": "<span class='v-right' /> <strong>Correct!</strong> ",
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> A manager is responsible for planning their unit’s activities, using public funds to carry out their unit’s activities and reporting on the status of their unit’s activities."
      }
    },
    "q12": {
      "text": "What are deliverables?",
      "options": {
        "1": "The work tasks to be accomplished to support your directorate’s priorities.",
        "2": "The specific and tangible items you should be able to check off your list when you accomplish them.",
        "3": "The budget, personnel, consultants, buildings and materials required to carry out the directorate activities."
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> Deliverables are more specific and tangible than the activities.",
        "2": "<span class='v-right' /> <strong>Correct!</strong> ",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> These are the resources. Deliverables are specific and tangible items you should be able to check off your list when you accomplish them."
      }
    },
    "q13": {
      "text": "Which activities should you include in your new work plan?",
      "options": {
        "1": "Ongoing activities",
        "2": "New activities",
        "3": "Completed activities",
        "4": "Project activities"
      },
      "feedback": {
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> Only ongoing activities and new activities should be included.",
        "right": "<span class='v-right' /> <strong>Correct!</strong> "
      }
    },
    "q14": {
      "text": "Which are considered risks?",
      "options": {
        "1": "A 15 minute power failure, minor software bugs",
        "2": "Licensing Fees, fisheries management",
        "3": "Power failures, well managed fish stocks",
        "4": "Overfishing, staff turnover"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> A 15 minute power failure should not be sufficient to be considered a risk. Overfishing and staff turnover are risks.",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> These are not risks. Overfishing and staff turnover are risks.",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> Well managed fish stocks are not risks. Overfishing and staff turnover are risks.",
        "4": "<span class='v-right' /> <strong>Correct!</strong>"
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

.tableColoured td:before {
  counter-increment: wpParts;
  content: counter(wpParts);
  position: absolute;
  height: 2em;
  left: 0px;
  top: 0px;
  border-radius: 0 0 30px 0;
  padding: .1em .5em 0 .5em;
  color: white;
}

.tableColoured td {
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
}
</style>