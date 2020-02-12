<template>
  <span>
    <div>
      <b-card>
        <b-tabs v-model="tabIndex">
          <b-tab title="Question 1">
            <p v-html="$t('q1.text')" />
            <!-- Working ... in -->
           <!--  <span>

              <div class="tableColoured">
                <div class="govtPri">
                  <p><span>&nbsp;</span></p>
                </div>
                <div class="deptPri">
                  <p><span>&nbsp;</span></p>
                </div>
                <div class="dirPri">
                  <p><span>&nbsp;</span></p>
                </div>
              </div>

              <div class="microTablePart2">
                <div class='planAct thNumbered'>&nbsp;</div>
                <div class='planSubAct thNumbered'>&nbsp;</div>
                <div class='planDelivs thNumbered'>&nbsp;</div>
                <div class='planRisk thNumbered'>&nbsp;</div>
                <div class='planLikely thNumbered'>&nbsp;</div>
                <div class='planImpact thNumbered'>&nbsp;</div>
                <div class='planMitigat thNumbered'>&nbsp;</div>
                <div class='planRes thNumbered'>&nbsp;</div>
              </div>
            </span>

<br><br><br><br>

<ol>
  <li>
    <span v-html="$t('pwpGovtPri')" />
  </li>
  <li>
    <span v-html="$t('pwpDeptPri')" />
  </li>
  <li>
    <span v-html="$t('pwpDirPri')" />
  </li>
  <li>
    <span v-html="$t('titleActivities')" />
  </li>
  <li>
    <span v-html="$t('titleSubActivities')" />
  </li>
  <li>
    <span v-html="$t('titleDeliverables')" />
  </li>
  <li>
    <span v-html="$t('titleRisk')" />
  </li>
  <li>
    <span v-html="$t('titleLikelihood')" />
  </li>
  <li>
    <span v-html="$t('titleImpact')" />
  </li>
  <li>
    <span v-html="$t('titleMitigation')" />
  </li>
  <li>
    <span v-html="$t('titleResources')" />
  </li>
</ol>
 -->

            <!-- Working ... out -->
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
                  </td>
                </tr>
                <tr>
                  <td colspan='8' class='deptPri'>
                    <p><span v-html="$t('pwpDeptPri')" /><br><select v-model="options2">
                        <option disabled value=''>{{$t('qDisabled')}}</option>
                        <option v-for="(statement,index) in answers1" :value="index" :key="index">{{$t(statement)}}</option>
                      </select>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colspan='8' class='dirPri'>
                    <p><span v-html="$t('pwpDirPri')" /><br><select v-model="options3">
                        <option disabled value=''>{{$t('qDisabled')}}</option>
                        <option v-for="(statement,index) in answers1" :value="index" :key="index">{{$t(statement)}}</option>
                      </select>
                    </p>
                  </td>
                </tr>
              </table>
              <div class="scrollMe">
                <table border="1" cellspacing="0" cellpadding="5" width="100%">
                  <tr>
                    <th class='planAct thNumbered'><span>{{$t('titleActivities')}}</span><br>
                      <select v-model="options4">
                        <option disabled value=''>{{$t('qDisabled')}}</option>
                        <option v-for="(statement,index) in answers1" :value="index" :key="index">{{$t(statement)}}</option>
                      </select></th>
                    <th class='planSubAct thNumbered'><span>{{$t('titleSubActivities')}}</span><br>
                      <select v-model="options5">
                        <option disabled value=''>{{$t('qDisabled')}}</option>
                        <option v-for="(statement,index) in answers1" :value="index" :key="index">{{$t(statement)}}</option>
                      </select></th>
                    <th class='planDelivs thNumbered'><span>{{$t('titleDeliverables')}}</span><br>
                      <select v-model="options6">
                        <option disabled value=''>{{$t('qDisabled')}}</option>
                        <option v-for="(statement,index) in answers1" :value="index" :key="index">{{$t(statement)}}</option>
                      </select></th>
                    <th class='planRisk thNumbered'><span>{{$t('titleRisk')}}</span><br>
                      <select v-model="options7">
                        <option disabled value=''>{{$t('qDisabled')}}</option>
                        <option v-for="(statement,index) in answers1" :value="index" :key="index">{{$t(statement)}}</option>
                      </select></th>
                    <th class='planLikely thNumbered'><span>{{$t('titleLikelihood')}}</span><br>
                      <select v-model="options8">
                        <option disabled value=''>{{$t('qDisabled')}}</option>
                        <option v-for="(statement,index) in answers1" :value="index" :key="index">{{$t(statement)}}</option>
                      </select></th>
                    <th class='planImpact thNumbered'><span>{{$t('titleImpact')}}</span><br>
                      <select v-model="options9">
                        <option disabled value=''>{{$t('qDisabled')}}</option>
                        <option v-for="(statement,index) in answers1" :value="index" :key="index">{{$t(statement)}}</option>
                      </select></th>
                    <th class='planMitigat thNumbered'><span>{{$t('titleMitigation')}}</span><br>
                      <select v-model="options10">
                        <option disabled value=''>{{$t('qDisabled')}}</option>
                        <option v-for="(statement,index) in answers1" :value="index" :key="index">{{$t(statement)}}</option>
                      </select></th>
                    <th class='planRes thNumbered'><span>{{$t('titleResources')}}</span><br>
                      <select v-model="options11">
                        <option disabled value=''>{{$t('qDisabled')}}</option>
                        <option v-for="(statement,index) in answers1" :value="index" :key="index">{{$t(statement)}}</option>
                      </select></th>
                  </tr>
                </table>
              </div>
            </span>
         
          </b-tab>
          <b-tab title="Question 2"><checkboxQuiz :question="$t('q2')" qId="2" :Answer='["2","3"]' /></b-tab>
          <b-tab title="Question 3"><radioQuiz :question="$t('q3')" qId="3" /></b-tab>
          <b-tab title="Question 4"><radioQuiz :question="$t('q4')" qId="4" /></b-tab>
          <b-tab title="Question 5"><radioQuiz :question="$t('q5')" qId="5" /></b-tab>
          <b-tab title="Question 6"><radioQuiz :question="$t('q6')" qId="6" /></b-tab>
          <b-tab title="Question 7"><radioQuiz :question="$t('q7')" qId="7" /></b-tab>
          <b-tab title="Question 8"><radioQuiz :question="$t('q8')" qId="8" /></b-tab>
          <b-tab title="Question 9"><checkboxQuiz :question="$t('q9')" qId="9" :Answer='["1","2","3"]' /></b-tab>
          <b-tab title="Question 10"><radioQuiz :question="$t('q10')" qId="10" /></b-tab>
          <b-tab title="Question 11"><checkboxQuiz :question="$t('q11')" qId="11" :Answer='["3","4","5"]' /></b-tab>
          <b-tab title="Question 12"><radioQuiz :question="$t('q12')" qId="12" /></b-tab>
          <b-tab title="Question 13"><radioQuiz :question="$t('q13')" qId="13" /></b-tab>
          <b-tab title="Question 14"><radioQuiz :question="$t('q14')" qId="14" /></b-tab>
        </b-tabs>
      </b-card>
      <!-- Control buttons-->
      <div class="text-center">
        <b-button-group class="mt-2">
          <b-button @click="tabIndex--" :disabled="tabIndex<=0">{{$t('previousPage')}}</b-button>
          <b-button @click="tabIndex++" :disabled="tabIndex>=13">{{$t('nextPage')}}</b-button>
        </b-button-group>
      </div>
    </div>
  </span>
</template>
<i18n>
  {
  "en":{
  "qDisabled":"Please select one",
  "q1":{"text":"Match the following statements to the appropriate sections of the work plan. Each section can only be populated with one statement.",
  "a11": "High",
  "a12": "Work with Canadians in all areas of the economy and all parts of the country to improve conditions for investment",
  "a13" : "Tablets",
  "a14" : "Keep original computers until tablets are up and running for 3 months",
  "a15" : "Give employees new digital tools to promote mobility",
  "a16" : "Modernize and renew the public service to better serve Canadians and foster a healthy, productive workforce",
  "a17" : "Buy tablets ",
  "a18" : "Technology is not compatible with existing network ",
  "a19" : "Low",
  "a110" : "Workplace Modernization",
  "a111" : "Give employees tablets" }
  }
  ,
  "fr":{
  "qDisabled":"Veuillez faire un choix",
  "q1":{
  "text":"Faites correspondre les énoncés suivants aux parties appropriées du plan de travail. Chaque partie ne peut dépasser un seul énoncé.",
  "a11": "Élevé ",
  "a12": "Travailler avec les Canadiens dans tous les secteurs de l&rsquo;économie et dans toutes les régions du pays pour améliorer les conditions d&rsquo;investissement.",
  "a13" : "Tablettes",
  "a14" : "Conservez les ordinateurs d&rsquo;origine jusqu&rsquo;à ce que les tablettes soient prêtes et à l&rsquo;emploi pendant 3 mois.",
  "a15" : "Donner aux salariés de nouveaux outils numériques pour favoriser la mobilité.",
  "a16" : "Moderniser et renouveler la fonction publique afin de mieux servir les Canadiens et favoriser une main-d'œuvre saine et productive.",
  "a17" : "Acheter des tablettes",
  "a18" : "La technologie n&rsquo;est pas compatible avec le réseau existant.",
  "a19" : "Faible",
  "a110" : "Modernisation du milieu de travail ",
  "a111" : "Donner des tablettes aux employés."
  }
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
        "2": "Previous year&rsquo;s work plan, budget, reports",
        "3": "Your fellow manager&rsquo;s work plan from last year"
      },
      "feedback": {
        "right": "<span class='v-right' /> <strong>Correct!</strong> ",
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> You should consider government priorities, departmental priorities and directorate priorities as well as the previous year&rsquo;s work plan, budget, reports when drafting your new work plan. Unless the activities of your fellow manager have been transferred to your team, you would not take them into account. "
      }
    },
    "q3": {
      "text": "A departmental priority in your work plan originates all the way back to:",
      "options": {
        "1": "The Directorate&rsquo;s plan",
        "2": "The Departmental plan",
        "3": "The Speech from the Throne"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> Departmental priorities flow from the Speech from the Throne, where the government lays out its priorities. ",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> Departmental priorities flow from the Speech from the Throne, where the government lays out its priorities. ",
        "3": "<span class='v-right' /> <strong>Correct!</strong>  It&rsquo;s a good idea to start your view of the big picture with the Speech from the Throne."
      }
    },
    "q4": {
      "text": "To find your department&rsquo;s core responsibilities, expected results and indicators, you would look to:",
      "options": {
        "1": "The directorate&rsquo;s plan",
        "2": "The Departmental Plan",
        "3": "The Speech from the Throne",
        "4": "The sector&rsquo;s plan"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> Your department&rsquo;s core responsibilities, expected results and indicators are found within the Departmental Plan.",
        "2": "<span class='v-right' /> <strong>Correct!</strong> Your department&rsquo;s core responsibilities, expected results and indicators are found within the Departmental Plan.",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> Your department&rsquo;s core responsibilities, expected results and indicators are found within the Departmental Plan.",
        "4": "<span class='v-wrong' /> <strong>Incorrect.</strong> Your department&rsquo;s core responsibilities, expected results and indicators are found within the Departmental Plan."
      }
    },
    "q5": {
      "text": "The Prime Minister sets out their expectations and objectives for your department in: ",
      "options": {
        "1": "The Speech from the Throne",
        "2": "The Departmental Results Framework",
        "3": "The mandate letter",
        "4": "The Departmental Plan"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> The Prime Minister outlines his expectations and objectives in the mandate letter to the minister responsible for the department.",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> The Prime Minister outlines his expectations and objectives in the mandate letter to the minister responsible for the department.",
        "3": "<span class='v-right' /> <strong>Correct!</strong> The Prime Minister outlines their expectations and objectives in the mandate letter to the minister responsible for the department.",
        "4": "<span class='v-wrong' /> <strong>Incorrect.</strong> The Prime Minister outlines his expectations and objectives in the mandate letter to the minister responsible for the department."
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
      "text": "What is a work plan?",
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
      "text": "What are a manager&rsquo;s responsibilities?",
      "options": {
        "1": "To establish government wide priorities",
        "2": "To negotiate government contracts",
        "3": "To plan their unit&rsquo;s activities",
        "4": "To use public funds to carry out their unit&rsquo;s activities",
        "5": "To report on the status of their unit&rsquo;s activities"
      },
      "feedback": {
        "right": "<span class='v-right' /> <strong>Correct!</strong> ",
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> A manager is responsible for planning their unit&rsquo;s activities, using public funds to carry out their unit&rsquo;s activities and reporting on the status of their unit&rsquo;s activities."
      }
    },
    "q12": {
      "text": "What are deliverables?",
      "options": {
        "1": "The work tasks to be accomplished to support your directorate&rsquo;s priorities.",
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
        "1": "Ongoing activities, new activities, completed activities",
        "2": "Ongoing activities, new activities",
        "3": "New activities, completed activities",
        "4": "New activities, completed activities, project activities",
        "5": "Ongoing activities, completed activities, project activities"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> Only ongoing activities and new activities should be included.",
        "2": "<span class='v-right' /> <strong>Correct!</strong> ",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> Only ongoing activities and new activities should be included.",
        "4": "<span class='v-wrong' /> <strong>Incorrect.</strong> Only ongoing activities and new activities should be included.",
        "5": "<span class='v-wrong' /> <strong>Incorrect.</strong> Only ongoing activities and new activities should be included."
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
      "text": "Faites correspondre les énoncés suivants aux sections appropriées du plan de travail. Chaque section ne peut contenir qu&rsquo;un seul énoncé.",
      "a1": "Élevé ",
      "a2": "Travailler avec les Canadiens dans tous les secteurs de l&rsquo;économie et dans toutes les régions du pays pour améliorer les conditions d&rsquo;investissement.",
      "a3": "Tablettes",
      "a4": "Conservez les ordinateurs d&rsquo;origine jusqu&rsquo;à ce que les tablettes soient prêtes et à l&rsquo;emploi pendant 3 mois. ",
      "a5": "Donner aux salariés de nouveaux outils numériques pour favoriser la mobilité ",
      "a6": "Moderniser et renouveler la fonction publique afin de mieux servir les Canadiens et de favoriser une main-d'œuvre saine et productive.",
      "a7": "Acheter des tablettes",
      "a8": "La technologie n&rsquo;est pas compatible avec le réseau existant ",
      "a9": "Faible",
      "a10": "Modernisation du milieu de travail ",
      "a11": "Donner des tablettes aux employés"
    },
    "q2": {
      "text": "Quels éléments devez-vous prendre en compte lors de l&rsquo;élaboration de votre nouveau plan de travail? ",
      "options": {
        "1": "Priorités gouvernementales, priorités ministérielles et priorités de la Direction ",
        "2": "Plan de travail, budget et rapports de l&rsquo;année précédente",
        "3": "Le plan de travail de votre collègue gestionnaire de l&rsquo;année dernière"
      },
      "feedback": {
        "right": "<span class='v-right' /> <strong>Correct!</strong> ",
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> Vous devriez tenir compte des priorités gouvernementales, ministérielles et de la direction, ainsi que du plan de travail, du budget et des rapports de l&rsquo;année précédente lorsque vous rédigez votre nouveau plan de travail. À moins que les activités de votre collègue gestionnaire n&rsquo;aient été transférées à votre équipe, vous n&rsquo;en tiendrez pas compte. "
      }
    },
    "q3": {
      "text": "Une priorité ministérielle du plan de travail remonte au :",
      "options": {
        "1": "plan de la Direction ",
        "2": "plan ministériel",
        "3": "discours du Trône"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> Les priorités ministérielles découlent du discours du Trône, dans lequel le gouvernement énonce ses priorités.  ",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> Les priorités ministérielles découlent du discours du Trône, dans lequel le gouvernement énonce ses priorités.  ",
        "3": "<span class='v-right' /> <strong>Correct!</strong> C&rsquo;est une bonne idée de commencer votre vision d&rsquo;ensemble en consultant les priorités énoncées dans le discours du Trône."
      }
    },
    "q4": {
      "text": "Pour trouver les principales responsabilités de votre ministère, les résultats escomptés et les indicateurs, vous devriez vous tourner vers :",
      "options": {
        "1": "le plan de la Direction ",
        "2": "le Plan ministériel",
        "3": "le discours du Trône",
        "4": "le plan du secteur"
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
        "1": "le discours du Trône",
        "2": "le Cadre ministériel des résultats ",
        "3": "la lettre de mandat",
        "4": "le plan ministériel"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> Le premier ministre indique ses attentes et ses objectifs dans la lettre de mandat adressée au ministre responsable du ministère.",
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
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> Les gestionnaires doivent renouveler leur accréditation tous les 5 ans.",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> Les gestionnaires doivent renouveler leur accréditation tous les 5 ans.",
        "3": "<span class='v-right' /> <strong>Correct!</strong> "
      }
    },
    "q7": {
      "text": "Pour effectuer un aperçu à 360 degrés, vous devez procéder comme il est indiqué ci-dessous : ",
      "options": {
        "1": "Se faire une idée de la situation actuelle en examinant ce qui a été fait dans un passé récent.",
        "2": "Examinez les plans de travail, budgets et rapports antérieurs.",
        "3": "Identifier les défis des années précédentes.",
        "4": "Se faire une idée du contexte culturel de son ministère, de sa direction générale ou de sa direction.",
        "5": "Toutes ces réponses."
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> Vous devez faire toutes ces activités pour effectuer un aperçu à 360 degrés.",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> Vous devez faire toutes ces activités pour effectuer un aperçu à 360 degrés.",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> Vous devez faire toutes ces activités pour effectuer un aperçu à 360 degrés.",
        "4": "<span class='v-wrong' /> <strong>Incorrect.</strong> Vous devez faire toutes ces activités pour effectuer un aperçu à 360 degrés.",
        "5": "<span class='v-right' /> <strong>Correct!</strong>  Vous devez faire toutes ces activités pour effectuer un aperçu à 360 degrés."
      }
    },
    "q8": {
      "text": "Choisissez les priorités auxquelles les activités du plan de travail devraient se rattacher, en commençant par le haut.",
      "options": {
        "1": "Priorités ministérielles, priorités de la Direction, priorités du gouvernement",
        "2": "Priorités gouvernementales, priorités ministérielles, priorités de la Direction",
        "3": "Priorités de la Direction, priorités gouvernementales, priorités ministérielles"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> Les priorités à partir du haut sont : Priorités gouvernementales, priorités ministérielles, priorités de la Direction.",
        "2": "<span class='v-right' /> <strong>Correct!</strong> ",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> Les priorités à partir du haut sont : Priorités gouvernementales, priorités ministérielles, priorités de la Direction."
      }
    },
    "q9": {
      "text": "Quelles situations vous amèneraient à mettre à jour le plan de travail?",
      "options": {
        "1": "Un nouvel administrateur est nommé.",
        "2": "Un employé s&rsquo;en va.",
        "3": "La formation obligatoire est reportée à l&rsquo;année prochaine.",
        "4": "Plus de 500 permis ont été délivrés.",
        "5": "Votre logiciel fait l&rsquo;objet d&rsquo;une mise à jour."
      },
      "feedback": {
        "right": "<span class='v-right' /> <strong>Correct!</strong> ",
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> La nomination d&rsquo;un nouvel administrateur, le départ d&rsquo;un employé et le report de la formation obligatoire à l&rsquo;année suivante exigent tous une mise à jour du plan de travail."
      }
    },
    "q10": {
      "text": "Qu&rsquo;est-ce qu&rsquo;un plan de travail?",
      "options": {
        "1": "Une liste quotidienne des tâches à accomplir",
        "2": "Les activités à réaliser au cours d&rsquo;un exercice comptable",
        "3": "Les sommes d&rsquo;argent à dépenser",
        "4": "Un résumé de ce que vous avez accompli"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> Le plan de travail est constitué d&rsquo;activités qui s&rsquo;échelonneront au cours d&rsquo;un exercice comptable.",
        "2": "<span class='v-right' /> <strong>Correct!</strong> ",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> Le plan de travail est constitué d&rsquo;activités à réaliser sur une période d&rsquo;un an, et non de sommes d&rsquo;argent à dépenser.",
        "4": "<span class='v-wrong' /> <strong>Incorrect.</strong> Le plan de travail est constitué d&rsquo;activités qui s&rsquo;échelonneront au cours d&rsquo;un exercice comptable."
      }
    },
    "q11": {
      "text": "Quelles sont les responsabilités d&rsquo;un gestionnaire?",
      "options": {
        "1": "Établir des priorités à l&rsquo;échelle du gouvernement",
        "2": "Négocier les contrats gouvernementaux",
        "3": "Planifier les activités de son unité",
        "4": "Utiliser les fonds publics pour mener à bien les activités de son unité",
        "5": "Faire rapport de l&rsquo;état d&rsquo;avancement des activités de son unité"
      },
      "feedback": {
        "right": "<span class='v-right' /> <strong>Correct!</strong> ",
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> Un gestionnaire est responsable de la planification des activités de son unité, de l&rsquo;utilisation des fonds publics pour mener à bien les activités de son unité et de la production de rapports sur l&rsquo;état des activités de son unité."
      }
    },
    "q12": {
      "text": "Que sont les livrables?",
      "options": {
        "1": "Les tâches de travail à accomplir pour appuyer les priorités de votre direction.",
        "2": "Les éléments spécifiques et tangibles que vous devriez être en mesure de cocher sur votre liste lorsque vous les réalisez.",
        "3": "Le budget, le personnel, les consultants, les bâtiments et le matériel nécessaires à l&rsquo;exécution des activités de la direction."
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> Les livrables sont plus précis et tangibles que les activités.",
        "2": "<span class='v-right' /> <strong>Correct!</strong> ",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> Ce sont les ressources. Les livrables font partie des éléments précis et tangibles que vous devriez cocher sur votre liste lorsque vous les réalisez."
      }
    },
    "q13": {
      "text": "Quelles activités devriez-vous inclure dans votre nouveau plan de travail?",
      "options": {
        "1": "Activités en cours, nouvelles activités, activités terminées",
        "2": "Activités en cours, nouvelles activités",
        "3": "Nouvelles activités, activités terminées",
        "4": "Nouvelles activités, activités terminées, activités du projet",
        "4": "Activités en cours, activités terminées, activités du projet"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> Seules les activités en cours et les nouvelles activités devraient être incluses.",
        "2": "<span class='v-right' /> <strong>Correct!</strong> ",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> Seules les activités en cours et les nouvelles activités devraient être incluses.",
        "4": "<span class='v-wrong' /> <strong>Incorrect.</strong> Seules les activités en cours et les nouvelles activités devraient être incluses.",
        "5": "<span class='v-wrong' /> <strong>Incorrect.</strong> Seules les activités en cours et les nouvelles activités devraient être incluses."
      }
    },
    "q14": {
      "text": "Quels sont les risques considérés?",
      "options": {
        "1": "Panne d&rsquo;électricité de 15 minutes, bogues mineurs de logiciels",
        "2": "Droits de permis, gestion des pêches",
        "3": "Pannes d&rsquo;électricité, stocks de poissons bien gérés",
        "4": "Surpêche, rotation du personnel"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> Une panne de courant de 15 minutes ne devrait pas être suffisante pour être considérée comme un risque. Par contre, la surpêche et le roulement du personnel sont des risques.",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> Ce ne sont pas des risques.  Par contre, la surpêche et le roulement du personnel sont des risques.",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> Les stocks de poissons bien gérés ne sont pas des risques.  Par contre, la surpêche et le roulement du personnel sont des risques.",
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