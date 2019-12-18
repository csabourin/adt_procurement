<template>
  <div>
  <h2 class="pageTitle">{{$t('Test')}}</h2>
  <p>Question {{tabIndex+1}} / 21</p>
    <b-container fluid>
      <b-row>
        <b-col class="col"></b-col>
          <b-col class="col-11">
    <b-card no-body>
    <b-tabs card v-model="tabIndex">
      <b-tab title="01">
        <radioQuiz :question="$t('q2')" qId="0" @response="calculateAnswer($event,2,0)" />
      </b-tab>
      <b-tab title="02">
        <radioQuiz :question="$t('q3')" qId="1" @response="calculateAnswer($event,3,1)" />
      </b-tab>
      <b-tab title="03">
        <radioQuiz :question="$t('q4')" qId="2" @response="calculateAnswer($event,2,2)" />
      </b-tab>
      <b-tab title="04">
        <radioQuiz :question="$t('q5')" qId="3" @response="calculateAnswer($event,2,3)" />
      </b-tab>
      <b-tab title="05">
        <radioQuiz :question="$t('q6')" qId="4" @response="calculateAnswer($event,3,4)" />
      </b-tab>
      <b-tab title="06">
        <radioQuiz :question="$t('q7')" qId="5" @response="calculateAnswer($event,1,5)" />
      </b-tab>
      <b-tab title="07">
        <radioQuiz :question="$t('q8')" qId="6" @response="calculateAnswer($event,2,6)" />
      </b-tab>
      <b-tab title="08">
        <radioQuiz :question="$t('q9')" qId="8" @response="calculateAnswer($event,2,7)" />
      </b-tab>
      <b-tab title="09">
        <radioQuiz :question="$t('q11')" qId="10" @response="calculateAnswer($event,1,9)" />
      </b-tab>
      <b-tab title="10">
        <radioQuiz :question="$t('q12')" qId="11" @response="calculateAnswer($event,1,10)" />
      </b-tab>
      <b-tab title="11">
        <radioQuiz :question="$t('q13')" qId="12" @response="calculateAnswer($event,2,11)" />
      </b-tab>
      <b-tab title="12">
        <radioQuiz :question="$t('q14')" qId="13" @response="calculateAnswer($event,1,12)" />
      </b-tab>
      <b-tab title="13">
        <checkboxQuiz :question="$t('q15')" qId="14" @response="arraysMatch($event,['2','3'],13)" />
      </b-tab>
      <b-tab title="14">
        <radioQuiz :question="$t('q16')" qId="15" @response="calculateAnswer($event,2,14)" />
      </b-tab>
      <b-tab title="15">
        <radioQuiz :question="$t('q17')" qId="16" @response="calculateAnswer($event,2,15)" />
      </b-tab>
      <b-tab title="16">
        <radioQuiz :question="$t('q18')" qId="17" @response="calculateAnswer($event,2,16)" />
      </b-tab>
      <b-tab title="17">
        <radioQuiz :question="$t('q19')" qId="18" @response="calculateAnswer($event,2,17)" />
      </b-tab>
      <b-tab title="18">
        <radioQuiz :question="$t('q20')" qId="19" @response="calculateAnswer($event,2,18)" />
      </b-tab>
      <b-tab title="19">
        <radioQuiz :question="$t('q21')" qId="20" @response="calculateAnswer($event,2,19)" />
      </b-tab>
      <b-tab title="20">
        <radioQuiz :question="$t('q22')" qId="21" @response="calculateAnswer($event,2,20)" />
      </b-tab>
    </b-tabs>
  </b-card>
</b-col>
</b-row>
</b-container>
    
    <!-- Control buttons-->
    <div class="text-center">
      <b-button-group class="mt-2">
        <b-button @click="tabIndex--" :disabled="tabIndex<=0">{{$t('previousPage')}}</b-button>
        <b-button @click="tabIndex++" :disabled="tabIndex>=20">{{$t('nextPage')}}</b-button>
      </b-button-group>
    </div>
    <div class="progressBar">
      <span @click="tabIndex=index"v-for="(square,index) in 20" :class="['square',{'filled':answers[index],'Qactive':tabIndex==index}]" />
    </div>
    <p v-if="debugging==true">{{answers}}</p>
    <div class="bottomNav planSection">
    <div class="planSectionBar"><span>{{$t('plan')}}</span></div>
    </div>
  </div>
</template>
<script type="text/javascript">
import radioQuiz from "~/components/radioQuiz"
import checkboxQuiz from "~/components/checkboxQuiz"
export default {
  data() {
    return {
      debugging:false,
      tabIndex: 0,
      answers: {}
    }
  },
  components: {
    radioQuiz,
    checkboxQuiz
  },
  methods: {
    calculateAnswer(answer, correct, qId) {
      if (answer == correct) {
        this.$set(this.answers, qId.toString(), 1)
      } else { this.$set(this.answers, qId.toString(), 2) }
    },
    arraysMatch(arr1, arr2, qId) {
      if (arr1.length !== arr2.length) {
        this.$set(this.answers, qId.toString(), 2)
        return false
      }
      const arrayOne = arr1.concat().sort()
      for (let i in arrayOne) {
        if (arrayOne[i] !== arr2[i]){
          this.$set(this.answers, qId.toString(), 2)
          return false
        }
      }
      this.$set(this.answers, qId.toString(), 1)

    }
  }
}
</script>
<style type="text/css" scoped>
.Qactive{box-shadow: 2px 2px 6px #00000088;
/*outline: 2px solid #1000ff33;*/
}
.planSection {
  position: relative;
  height:100px;
}
.planSectionBar {
  text-transform: uppercase;
  position: absolute;
  background-color: #d1dfe1;
  width: 100vw;
  height: 30px;
  text-align: left;
  left:-15px;
  top:38%;
}
.planSectionBar span {
  padding:2px 10px 0;
  color: #4d4d4d;
  font-weight: bold;
  background-color: #fff;
  display: inline-block;
  height:100%;
  margin-left:15px;
}

.progressBar{
  margin-top: 2em;
  display: flex;
  justify-content: space-evenly;

}

  .square{
    display: inline-block;
    width:1em;
    height:1em;
    background-color: #DDD;
    cursor: pointer;
  }

  .filled{ background-color: #587C84; }
</style>
<i18n>{
  "en": {
    "q1": {
      "text": "Where are government priorities first announced?",
      "options": {
        "1": "In the Federal Budget",
        "2": "In the Speech from the Throne",
        "3": "In a Mandate Letter"
      },
      "feedback": {
        "1": "",
        "2": "",
        "3": ""
      }
    },
    "q2": {
      "text": "Who is responsible for building work plans and creating budgets for your organization?",
      "options": {
        "1": "Deputy Heads",
        "2": "Administrative Assistants",
        "3": "Responsibility Centre Managers"
      },
      "feedback": {
        "1": "",
        "2": "",
        "3": ""
      }
    },
    "q3": {
      "text": "Where would you find detailed information on what your organization does and what it plans to do over the next three years?",
      "options": {
        "1": "Mandate Letter",
        "2": "Departmental Plan",
        "3": "Departmental Results Report"
      },
      "feedback": {
        "1": "",
        "2": "",
        "3": ""
      }
    },
    "q4": {
      "text": "Your 360 Scan reiterates for you that your organization has a low risk tolerance. At the same time, the Deputy Minister wants to see more innovation. What is the best course of action to take as these opposing forces impact your work plan? ",
      "options": {
        "1": "Wait until others have successfully implemented an innovation project ",
        "2": "Start a small scale innovation project and learn from it",
        "3": "Commence a highly-visible innovation project with current staffing levels"
      },
      "feedback": {
        "1": "",
        "2": "",
        "3": ""
      }
    },
    "q5": {
      "text": "Call centers tend to have high turnover. In addition, your department has a high attrition rate. For these reasons, it is hard to staff positions in the organization. Which of the following mitigation strategies could help address this risk? ",
      "options": {
        "1": "Train staff",
        "2": "Keep information up-to-date ",
        "3": "Establish collective staffing pools",
        "4": "Establish a mentoring program"
      },
      "feedback": {
        "1": "",
        "2": "",
        "3": ""
      }
    },
    "q6": {
      "text": "Last year, you did not meet your target of answering calls within 30 seconds. Call centers are becoming more automated, an approach favored by senior management. Which activity is the most appropriate to take as you draft your work plan?",
      "options": {
        "1": "Incorporate digital solutions",
        "2": "Change the target",
        "3": "Hire more staff"
      },
      "feedback": {
        "1": "",
        "2": "",
        "3": ""
      }
    },
    "q7": {
      "text": "You’d like to find out if clients are satisfied with the live support provided by the call center. What deliverable would be added to the activity to address this? ",
      "options": {
        "1": "Resolve call, text or chat within 2 minutes ",
        "2": "Average 4 out of 5 rating on post-support client survey ",
        "3": "One call, text or chat out of 10 is escalated for resolution"
      },
      "feedback": {
        "1": "",
        "2": "",
        "3": ""
      }
    },
    "q8": {
      "text": "You have added a new activity to your work plan about offering support to clients through automated means. This would be accomplished by implementing a chatbot system available 24 hours a day. The chatbot would respond to customer requests online without involving an agent. What deliverable would be added to the work plan for this activity? ",
      "options": {
        "1": "Change call center operational hours to 24/7",
        "2": "30% of online requests would be resolved by chatbot",
        "3": "Chatbot interactions will be monitored by a call center agent "
      },
      "feedback": {
        "1": "",
        "2": "",
        "3": ""
      }
    },
    "q9": {
      "text": "What technology risks would there be in implementing a chatbot system? ",
      "options": {
        "1": "Decrease in staff positions and employee morale",
        "2": "Lost productivity and implementation setback",
        "3": "System breakdown and cyberattacks "
      },
      "feedback": {
        "1": "",
        "2": "",
        "3": ""
      }
    },
    "q10": {
      "text": "With any online technology, like the chatbot system, there is the risk of a privacy breach. What mitigation strategy would be added to the work plan for this risk? ",
      "options": {
        "1": "Secure firewall and encryption",
        "2": "User license agreement",
        "3": "Train staff on how to support the chatbot"
      },
      "feedback": {
        "1": "",
        "2": "",
        "3": ""
      }
    },
    "q11": {
      "text": "Temporary Help is paid out of which budget? ",
      "options": {
        "1": "Operating & Maintenance (O&M)",
        "2": "Salary",
        "3": "Grants and Contributions (Gs&Cs)"
      },
      "feedback": {
        "1": "",
        "2": "",
        "3": ""
      }
    },
    "q12": {
      "text": "Money given to an organization for Apprenticeship support would come out of which budget? ",
      "options": {
        "1": "Operating & Maintenance (O&M)",
        "2": "Salary",
        "3": "Grants and Contributions (Gs&Cs)"
      },
      "feedback": {
        "1": "",
        "2": "",
        "3": ""
      }
    },
    "q13": {
      "text": "The Main Estimates detail the government’s total projected expenditures for the upcoming fiscal year.",
      "options": {
        "1": "True",
        "2": "False"
      },
      "feedback": {
        "1": "",
        "2": "",
        "3": ""
      }
    },
    "q14": {
      "text": "Which reports provide information for a full fiscal cycle? ",
      "options": {
        "1": "Full Supply",
        "2": "Public Accounts",
        "3": "Departmental Results Report"
      },
      "feedback": {
        "1": "",
        "2": "",
        "3": ""
      }
    },
    "q15": {
      "text": "For last year’s office supplies, you set aside $3,000, and $2,500 was spent. For the current year, you are forecasting to spend $2,500. What amount will you put in your budget requirements for next year? ",
      "options": {
        "1": "$2,500",
        "2": "$3,000 ",
        "3": "$5,500"
      },
      "feedback": {
        "1": "",
        "2": "",
        "3": ""
      }
    },
    "q16": {
      "text": "You have consistently set aside $8,000 year after year for call center agent training. Last year, you spent $5,000 on training. This year, you’re forecasting to spend $10,500. What would you do for your budget requirements for next year?",
      "options": {
        "1": "Ask for the amount you forecast to spend this year ",
        "2": "Ask for the same amount you’ve asked for year after year",
        "3": "Ask why there’s been a fluctuation to inform your forecast"
      },
      "feedback": {
        "1": "",
        "2": "",
        "3": ""
      }
    },
    "q17": {
      "text": "You added an activity to your work plan about implementing a chatbot system by mid-year. Your initial research shows that chatbot systems cost between $25 and $100 per month. What amount will you put in your budget requirements? ",
      "options": {
        "1": "$300",
        "2": "$600",
        "3": "$1,200"
      },
      "feedback": {
        "1": "",
        "2": "",
        "3": ""
      }
    },
    "q18": {
      "text": "The current year’s Salary budget is $760,000. You’re creating a new IT Analyst position to be staffed next year. The annual salary will be $60,000. You’ll need time to hire them and estimate they will start in June and only work 10 months. What will your Salary budget requirement be next year (assuming everything else remains the same)? ",
      "options": {
        "1": "$760,000",
        "2": "$810,000",
        "3": "$820,000"
      },
      "feedback": {
        "1": "",
        "2": "",
        "3": ""
      }
    },
    "q19": {
      "text": "The chatbot system implementation will incur $15,000 in IT costs for hosting which will be provided by another department on a cost recovery basis. This will be formalized in an MOU between organizations. Hosting costs in your budget will be …? ",
      "options": {
        "1": "$15,000 Non-discretionary ",
        "2": "$15,000 Discretionary ",
        "3": "$15,000 Capital"
      },
      "feedback": {
        "1": "",
        "2": "",
        "3": ""
      }
    },
    "q20": {
      "text": "You’ve submitted your budget requirements. Your director is supportive of training an IT Analyst, Senior Call Center Agent, and one Junior Call Center Agent on the chatbot system, which you hadn’t originally included. Total cost will be $1,500. What action will you take to update your budget? ",
      "options": {
        "1": "Leave the training budget requirement as-is ",
        "2": "Cut some planned training to cover the $1,500 ",
        "3": "Add $1,500 to your training budget requirements"
      },
      "feedback": {
        "1": "",
        "2": "",
        "3": ""
      }
    },
    "q21": {
      "text": "You’ve submitted your budget requirements and your director asks you to cut travel from $20,000 to $12,000. What action could you take? ",
      "options": {
        "1": "Cut some discretionary costs ",
        "2": "Explore video conferencing options ",
        "3": "Change the budget requirement to $12,000"
      },
      "feedback": {
        "1": "",
        "2": "",
        "3": ""
      }
    }
  },
  "fr": {
    "q1": {
      "text": "Où les priorités du gouvernement sont-elles d'abord annoncées ?",
      "options": {
        "1": "Dans le budget fédéral",
        "2": "Dans le discours du Trône",
        "3": "Dans une lettre de mandat"
      },
      "feedback": {
        "1": "",
        "2": "",
        "3": ""
      }
    },
    "q2": {
      "text": "Qui est responsable de l'élaboration des plans de travail et des budgets de votre organisation ?",
      "options": {
        "1": "Administrateurs généraux",
        "2": "Adjoints administratifs",
        "3": "Gestionnaires de centre de responsabilité"
      },
      "feedback": {
        "1": "",
        "2": "",
        "3": ""
      }
    },
    "q3": {
      "text": "Où trouveriez-vous des renseignements détaillés sur ce que votre organisation fait et ce qu'elle prévoit faire au cours des trois prochaines années?",
      "options": {
        "1": "Lettre de mandat",
        "2": "Plan ministériel",
        "3": "Rapport ministériel sur les résultats"
      },
      "feedback": {
        "1": "",
        "2": "",
        "3": ""
      }
    },
    "q4": {
      "text": "Votre analyse à 360° réitère pour vous que votre organisation a une faible tolérance au risque. En même temps, le sous-ministre veut voir plus d'innovation. Quelle est la meilleure ligne de conduite à adopter, car ces forces opposées ont une incidence sur votre plan de travail?",
      "options": {
        "1": "Attendre que d'autres aient mis en œuvre avec succès un projet d'innovation",
        "2": "Lancer un projet d'innovation à petite échelle et en tirer des leçons",
        "3": "Lancer un projet d'innovation très visible avec les effectifs actuels."
      },
      "feedback": {
        "1": "",
        "2": "",
        "3": ""
      }
    },
    "q5": {
      "text": "Vous dirigez un centre d'appels qui a connu un taux de roulement élevé. De plus, votre ministère a un taux d'attrition élevé. Pour ces raisons, il est difficile de doter des postes dans l'organisation. Laquelle des stratégies d'atténuation suivantes pourrait aider à atténuer ce risque?",
      "options": {
        "1": "Former le personnel",
        "2": "Tenir l'information à jour",
        "3": "Établir des bassins de dotation collective",
        "4": "Établir un programme de mentorat"
      },
      "feedback": {
        "1": "",
        "2": "",
        "3": ""
      }
    },
    "q6": {
      "text": "Last year, you did not meet your target of answering calls within 30 seconds. Call centers are becoming more automated, an approach favored by senior management. Which activity is the most appropriate to take as you draft your work plan?",
      "options": {
        "1": "Incorporate digital solutions",
        "2": "Change the target",
        "3": "Hire more staff"
      },
      "feedback": {
        "1": "",
        "2": "",
        "3": ""
      }
    },
    "q7": {
      "text": "You’d like to find out if clients are satisfied with the live support provided by the call center. What deliverable would be added to the activity to address this? ",
      "options": {
        "1": "Resolve call, text or chat within 2 minutes ",
        "2": "Average 4 out of 5 rating on post-support client survey ",
        "3": "One call, text or chat out of 10 is escalated for resolution"
      },
      "feedback": {
        "1": "",
        "2": "",
        "3": ""
      }
    },
    "q8": {
      "text": "You have added a new activity to your work plan about offering support to clients through automated means. This would be accomplished by implementing a chatbot system available 24 hours a day. The chatbot would respond to customer requests online without involving an agent. What deliverable would be added to the work plan for this activity? ",
      "options": {
        "1": "Change call center operational hours to 24/7",
        "2": "30% of online requests would be resolved by chatbot",
        "3": "Chatbot interactions will be monitored by a call center agent "
      },
      "feedback": {
        "1": "",
        "2": "",
        "3": ""
      }
    },
    "q9": {
      "text": "What technology risks would there be in implementing a chatbot system? ",
      "options": {
        "1": "Decrease in staff positions and employee morale",
        "2": "Lost productivity and implementation setback",
        "3": "System breakdown and cyberattacks "
      },
      "feedback": {
        "1": "",
        "2": "",
        "3": ""
      }
    },
    "q10": {
      "text": "With any online technology, like the chatbot system, there is the risk of a privacy breach. What mitigation strategy would be added to the work plan for this risk? ",
      "options": {
        "1": "Secure firewall and encryption",
        "2": "User license agreement",
        "3": "Train staff on how to support the chatbot"
      },
      "feedback": {
        "1": "",
        "2": "",
        "3": ""
      }
    },
    "q11": {
      "text": "Temporary Help is paid out of which budget? ",
      "options": {
        "1": "Operating & Maintenance (O&M)",
        "2": "Salary",
        "3": "Grants and Contributions (Gs&Cs)"
      },
      "feedback": {
        "1": "",
        "2": "",
        "3": ""
      }
    },
    "q12": {
      "text": "Money given to an organization for Apprenticeship support would come out of which budget? ",
      "options": {
        "1": "Operating & Maintenance (O&M)",
        "2": "Salary",
        "3": "Grants and Contributions (Gs&Cs)"
      },
      "feedback": {
        "1": "",
        "2": "",
        "3": ""
      }
    },
    "q13": {
      "text": "The Main Estimates detail the government’s total projected expenditures for the upcoming fiscal year.",
      "options": {
        "1": "True",
        "2": "False"
      },
      "feedback": {
        "1": "",
        "2": "",
        "3": ""
      }
    },
    "q14": {
      "text": "Which reports provide information for a full fiscal cycle? ",
      "options": {
        "1": "Full Supply",
        "2": "Public Accounts",
        "3": "Departmental Results Report"
      },
      "feedback": {
        "1": "",
        "2": "",
        "3": ""
      }
    },
    "q15": {
      "text": "For last year’s office supplies, you set aside $3,000, and $2,500 was spent. For the current year, you are forecasting to spend $2,500. What amount will you put in your budget requirements for next year? ",
      "options": {
        "1": "$2,500",
        "2": "$3,000 ",
        "3": "$5,500"
      },
      "feedback": {
        "1": "",
        "2": "",
        "3": ""
      }
    },
    "q16": {
      "text": "You have consistently set aside $8,000 year after year for call center agent training. Last year, you spent $5,000 on training. This year, you’re forecasting to spend $10,500. What would you do for your budget requirements for next year?",
      "options": {
        "1": "Ask for the amount you forecast to spend this year ",
        "2": "Ask for the same amount you’ve asked for year after year",
        "3": "Ask why there’s been a fluctuation to inform your forecast"
      },
      "feedback": {
        "1": "",
        "2": "",
        "3": ""
      }
    },
    "q17": {
      "text": "You added an activity to your work plan about implementing a chatbot system by mid-year. Your initial research shows that chatbot systems cost between $25 and $100 per month. What amount will you put in your budget requirements? ",
      "options": {
        "1": "$300",
        "2": "$600",
        "3": "$1,200"
      },
      "feedback": {
        "1": "",
        "2": "",
        "3": ""
      }
    },
    "q18": {
      "text": "The current year’s Salary budget is $760,000. You’re creating a new IT Analyst position to be staffed next year. The annual salary will be $60,000. You’ll need time to hire them and estimate they will start in June and only work 10 months. What will your Salary budget requirement be next year (assuming everything else remains the same)? ",
      "options": {
        "1": "$760,000",
        "2": "$810,000",
        "3": "$820,000"
      },
      "feedback": {
        "1": "",
        "2": "",
        "3": ""
      }
    },
    "q19": {
      "text": "The chatbot system implementation will incur $15,000 in IT costs for hosting which will be provided by another department on a cost recovery basis. This will be formalized in an MOU between organizations. Hosting costs in your budget will be …? ",
      "options": {
        "1": "$15,000 Non-discretionary ",
        "2": "$15,000 Discretionary ",
        "3": "$15,000 Capital"
      },
      "feedback": {
        "1": "",
        "2": "",
        "3": ""
      }
    },
    "q20": {
      "text": "You’ve submitted your budget requirements. Your director is supportive of training an IT Analyst, Senior Call Center Agent, and one Junior Call Center Agent on the chatbot system, which you hadn’t originally included. Total cost will be $1,500. What action will you take to update your budget? ",
      "options": {
        "1": "Leave the training budget requirement as-is ",
        "2": "Cut some planned training to cover the $1,500 ",
        "3": "Add $1,500 to your training budget requirements"
      },
      "feedback": {
        "1": "",
        "2": "",
        "3": ""
      }
    },
    "q21": {
      "text": "You’ve submitted your budget requirements and your director asks you to cut travel from $20,000 to $12,000. What action could you take? ",
      "options": {
        "1": "Cut some discretionary costs ",
        "2": "Explore video conferencing options ",
        "3": "Change the budget requirement to $12,000"
      },
      "feedback": {
        "1": "",
        "2": "",
        "3": ""
      }
    }
  }
}</i18n>