<template>
  <div>
    <h2 class="pageTitle">{{$t('Test')}}</h2>
    <b-container>
      <b-alert :show="!AlertIsDismissed" @dismissed="AlertIsDismissed=true" dismissible>
        <div v-if="$i18n.locale=='en'">
          <p><strong>NOTE:</strong> This course and the final tests are currently in draft mode and will not officially count towards mandatory training requirements during this phase. We invite you to complete the tests for plan, spend and report and we welcome your feedback on the questions and functionality.&nbsp; Your input will help to make this more effective.</p>
          <p>For some of the questions in this test, you play the role of a manager of a call center. You will be given scenarios based on this situation.&nbsp;</p>
          <!-- <p>As per Treasury Board requirements, passing the test for this course is mandatory before you can exercise financial delegation.&nbsp;</p> -->
          <p>There are three sections to the test - one for each phase: planning, spending and reporting.&nbsp;</p>
          <p>The passing grade is 80% for each of these sections.</p>
          <p>Each section should take you around 15-20 minutes to complete.&nbsp;</p>
          <p>You can access course materials during the test and you can take it as many times as you need.</p>
        </div>
        <div v-if="$i18n.locale=='fr'">
          <p><strong>NOTE :</strong> Ce cours et les tests finaux sont actuellement en mode brouillon et ne compteront pas officiellement dans les exigences de formation obligatoire pendant cette phase. Nous vous invitons à compléter les tests pour planifier, dépenser et faire un rapport et nous vous invitons à nous faire part de vos commentaires sur les questions et les fonctionnalités.&nbsp; Vos commentaires nous aideront à rendre le tout plus efficace.</p>
          <p>Pour certaines des questions de ce test, vous &ecirc;tes dans le r&ocirc;le d&rsquo;un responsable de centre d&rsquo;appels. Des scénarios basés sur cette situation vous seront proposés.&nbsp;</p>
          <!-- <p>Conformément aux exigences du Conseil du Trésor, il est obligatoire de réussir l&rsquo;examen de ce cours avant de pouvoir exercer la délégation financi&egrave;re.</p> -->
          <p>Le test comporte trois parties - une à la fin de chaque phase - planification, dépenses et rapports.&nbsp;</p>
          <p>La note de passage est de 80%, par partie.&nbsp;</p>
          <p>Chaque partie devrait vous prendre environ 15-20 minutes.&nbsp;</p>
          <p>Vous pouvez accéder au matériel de cours pendant le test et vous pouvez le reprendre autant de fois que vous le désirez.</p>
        </div>
      </b-alert>
      <p>Question {{tabIndex+1}} / {{numQuestions}}</p>
      <div class="progressBar">
        <a href="#" @click.prevent="tabIndex=index" :title="'Question '+parseInt(square) +((answerScore[index])? ': '+$t('Answered'):'')" v-for="(square,index) in numQuestions" :class="['square',{'filled':answerScore[index],'Qactive':tabIndex==index}]" :aria-label="'Question '+parseInt(square) +((answerScore[index])? ': '+$t('Answered'):'')" v-html="index+1" />
      </div>
      <b-row>
        <b-col class="col"></b-col>
        <b-col class="col-10">
          <b-card no-body>
            <b-tabs card pills v-model="tabIndex" class="exam">
              <b-tab title="01">
                <!-- calculateAnswer($event,correctAnswer,qId) -->
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q1')" qId="0" :refill="Refill('0')" @response="calculateAnswer($event,3,0)" />
              </b-tab>
              <b-tab title="02">
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q2')" qId="1" :refill="Refill('1')" @response="calculateAnswer($event,2,1)" />
              </b-tab>
              <b-tab title="03">
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q3')" qId="2" :refill="Refill('2')" @response="calculateAnswer($event,2,2)" />
              </b-tab>
              <b-tab title="04">
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q4')" qId="3" :refill="Refill('3')" @response="calculateAnswer($event,2,3)" />
              </b-tab>
              <b-tab title="05">
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q5')" qId="4" :refill="Refill('4')" @response="calculateAnswer($event,3,4)" />
              </b-tab>
              <b-tab title="06">
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q6')" qId="5" :refill="Refill('5')" @response="calculateAnswer($event,1,5)" />
              </b-tab>
              <b-tab title="07">
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q7')" qId="6" :refill="Refill('6')" @response="calculateAnswer($event,1,6)" />
              </b-tab>
              <b-tab title="08">
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q8')" qId="7" :refill="Refill('7')" @response="calculateAnswer($event,3,7)" />
              </b-tab>
              <b-tab title="09">
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q9')" qId="8" :refill="Refill('8')" @response="calculateAnswer($event,2,8)" />
              </b-tab>
              <b-tab title="10">
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q10')" qId="9" :refill="Refill('9')" @response="calculateAnswer($event,4,9)" />
              </b-tab>
              <b-tab title="11">
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q11')" qId="10" :refill="Refill('10')" @response="calculateAnswer($event,1,10)" />
              </b-tab>
              <b-tab title="12">
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q12')" qId="11" :refill="Refill('11')" @response="calculateAnswer($event,4,11)" />
              </b-tab>
              <b-tab title="13">
                <checkboxQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q13')" qId="12" :refill="Refill('12')" @response="arraysMatch($event,['2','3'],12)" />
              </b-tab>
              <b-tab title="14">
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q14')" qId="13" :refill="Refill('13')" @response="calculateAnswer($event,3,13)" />
              </b-tab>
              <b-tab title="15">
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q15')" qId="14" :refill="Refill('14')" @response="calculateAnswer($event,2,14)" />
              </b-tab>
              <b-tab title="16">
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q16')" qId="15" :refill="Refill('15')" @response="calculateAnswer($event,4,15)" />
              </b-tab>
              <b-tab title="17">
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q17')" qId="16" :refill="Refill('16')" @response="calculateAnswer($event,2,16)" />
              </b-tab>
              <b-tab title="18">
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q18')" qId="17" :refill="Refill('17')" @response="calculateAnswer($event,3,17)" />
              </b-tab>
              <b-tab title="19">
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q19')" qId="18" :refill="Refill('18')" @response="calculateAnswer($event,1,18)" />
              </b-tab>
              <b-tab title="20">
                <checkboxQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q20')" qId="19" :refill="Refill('19')" @response="arraysMatch($event,['1','2','3'],19)" />
              </b-tab>
            </b-tabs>
          </b-card>
        </b-col>
        <b-col class="col"></b-col>
      </b-row>
    </b-container>
    <!-- Control buttons-->
    <div class="text-center">
      <b-button-group class="mt-2">
        <b-button @click="tabIndex--" :disabled="tabIndex<=0">{{$t('previousPage')}}</b-button>
        <b-button @click="tabIndex++" :disabled="tabIndex>=19">{{$t('nextPage')}}</b-button>
      </b-button-group>
    </div>
      <transition name="fade">
      <p v-if="allDone"><b-button @click="markTest">{{$t('markTest')}}</b-button> <b-button @click="resetQuiz">{{$t('tryAgain')}}</b-button></p>
    </transition>
    <div class="bottomNav planSection">
      <div class="planSectionBar"><span>{{$t('plan')}}</span></div>
    </div>
    <!-- Debugging section -->
    <div v-if="debugging">
      <p>Alldone: {{allDone}}</p>
      <p>{{answerScore}}</p>
    </div>
    <!-- End of Debugging section -->
    <b-modal id="Completed" size="lg" okOnly>
      <p class='pageTitle'>{{$t('testComplete')}}</p>
      <p>{{$t('scoreIs')}} {{allDone}}%.</p>
      <p v-if="allDone < 80"> {{$t('notPassed')}}</p>
      <p v-if="allDone >= 80 && allDone<100">{{$t('Passed')}} <nuxt-link :to="localePath('index')">{{$t('homePage')}}</nuxt-link></p>
      <p v-if="allDone==100"> {{$t('Excelled')}} <nuxt-link :to="localePath('index')">{{$t('homePage')}}</nuxt-link></p>
    </b-modal>
  </div>
</template>
<script type="text/javascript">
import radioQuiz from "~/components/radioQuiz"
import checkboxQuiz from "~/components/checkboxQuiz"
export default {
  name: "examOne",
  data() {
    return {
      debugging: false,
      isNull:false,
      numQuestions: 20
    }
  },
  components: {
    radioQuiz,
    checkboxQuiz
  },
  methods: {

    resetQuiz() {
      this.$bvModal.msgBoxConfirm(this.$t('warnReset'), { cancelTitle: this.$t('cancel') }).then(trigger => {
          if (trigger) {
            this.isNull = !this.isNull
            this.$store.commit('plan/resetQuiz')
          } else {}
        })
        .catch(err => {
          console.log(err)
        });
    },
    markTest() {
      this.$store.commit('plan/lockQuiz')
      this.$bvModal.show('Completed')
    },
    checkPercentage() {
      var count = 0;
      for (let i in this.answerScore) {
        if (this.answerScore[i][0] == "01") // 01 means correct answer
          count++;
      }
      const score = parseInt(count / this.numQuestions * 100)
      return score
    },
    Refill(qId) {
      if (this.answerScore[qId]) { return this.answerScore[qId][1] } else { return undefined }
    },
    calculateAnswer(answer, correct, qId) {
      if (answer == correct) {
        this.$store.commit('plan/setScore', [qId.toString(), "01", answer]) // 01 means right
      } else { this.$store.commit('plan/setScore', [qId.toString(), "'10'", answer]) } // wrong could be whatever
    },
    arraysMatch(arr1, arr2, qId) {
      if (arr1.length !== arr2.length) {
        this.$store.commit('plan/setScore', [qId.toString(), "'10'", arr1]) 
        return false
      }
      const arrayOne = arr1.concat().sort()
      for (let i in arrayOne) {
        if (arrayOne[i] !== arr2[i]) {
          this.$store.commit('plan/setScore', [qId.toString(), "'10'", arr1])
          return false
        }
      }
      this.$store.commit('plan/setScore', [qId.toString(), "01", arr1]) // 01 means right
    }
  },
  computed: {
      allDone(){
      return this.$store.getters['plan/getScore']
    },
    AlertIsDismissed: {
      get() { return this.$store.state.plan.AlertIsDismissed },
      set() { this.$store.commit('plan/dismissAlert') }
    },
    tabIndex: {
      set(tabIndex) { this.$store.commit('plan/setCurrentTab', tabIndex) },
      get() { return this.$store.state.plan.tabIndex }
    },
    answerScore() {
      return this.$store.state.plan.score
    },
    quizLocked() {
      return this.$store.state.plan.quizLocked
    }
  },
  watch: {
    answerScore() {
      const answers = Object.keys(this.answerScore).length
      if (answers === this.numQuestions) {
        this.$store.commit('plan/setComplete',this.checkPercentage())
      }
    }
  }
}
</script>
<style type="text/css" scoped>
.planSection {
  position: relative;
  height: 100px;
}

.planSectionBar {
  text-transform: uppercase;
  position: absolute;
  background-color: #d1dfe1;
  width: 100vw;
  height: 30px;
  text-align: left;
  left: -15px;
  top: 38%;
}

.planSectionBar span {
  padding: 2px 10px 0;
  color: #4d4d4d;
  font-weight: bold;
  background-color: #fff;
  display: inline-block;
  height: 100%;
  margin-left: 15px;
}

.progressBar {
  margin-bottom: 2em;
  display: flex;
  justify-content: space-around;

}

.square {
  font-size: .9em;
  font-weight: bold;
  text-align: center;
  display: inline-block;
  width: 42px;
  height: 22px;
  background-color: #DDD;
  cursor: pointer;
  color: #4d4d4d;
}

.filled {
  background-color: #587C84;
  color: #fff;
}

.Qactive {
  background-color: #e0e59e;
  box-shadow: -3px 7px 6px rgba(0, 0, 0, 0.3);
  outline: 1px solid #fff;
  color: #000;
  /*outline: 2px solid #1000ff33;*/
}

.filled.Qactive {
  background-color: #B3C295
}

</style>
<i18n>{
  "en": {
  "warnReset":"This will erase your answer and score for this test, are you certain?",
    "Answered": "Answered",
    "markTest": "Mark my test",
    "testComplete": "Test Completed",
    "tryAgain": "Try Again",
    "scoreIs":"Your final score is",
    "Questions": {
      "q1": {
        "text": "Which of the following is <strong style='text-transform: uppercase;'>not</strong> included in a work plan?",
        "options": {
          "1": "Activity",
          "2": "Deliverable",
          "3": "Results",
          "4": "Risk"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q2": {
        "text": "Where are government priorities first announced?",
        "options": {
          "1": "In the Federal Budget",
          "2": "In the Speech from the Throne",
          "3": "In a Mandate Letter",
          "4": "In a Treasury Board directive"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q3": {
        "text": "Where would you find detailed information on what your organization does and what it plans to do over the next three years?",
        "options": {
          "1": "Mandate Letter",
          "2": "Departmental Plan",
          "3": "Departmental Results Report",
          "4": "Management Accountability Framework"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q4": {
        "text": "Your 360 Scan reiterates for you that your organization has a low risk tolerance. At the same time, the Deputy Minister wants to see more innovation. What is the best course of action to take as these opposing forces impact your work plan? ",
        "options": {
          "1": "Wait until others have successfully implemented an innovation project ",
          "2": "Start a small scale innovation project and learn from it",
          "3": "Commence a highly-visible innovation project with current staffing levels",
          "4": "Keep things as they are"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q5": {
        "text": "Which part of the work plan should be updated with &ldquo;Establish collective staffing pools&rdquo; to address call centre risks like high turnover and challenges in staffing?",
        "options": {
          "1": "Likelihood",
          "2": "Impact",
          "3": "Mitigation",
          "4": "Resources"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q6": {
        "text": "Last year, you did not meet your target of answering calls within 30 seconds. Call centers are becoming more automated, an approach favored by senior management. Which activity is the most appropriate to take as you draft your work plan?",
        "options": {
          "1": "Incorporate digital solutions",
          "2": "Change the target",
          "3": "Hire more staff",
          "4": "Conduct team meetings"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q7": {
        "text": "You&rsquo;d like to find out if clients are satisfied with the live support provided by the call center. What deliverable would be added to the activity “Offer live support to clients” to address this?",
        "options": {
          "1": "Create a client satisfaction survey",
          "2": "Resolve call, text or chat within 2 minutes ",
          "3": "One call, text or chat out of 10 is escalated for resolution",
          "4": "Answer calls within 30 seconds"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q8": {
        "text": "You have added a new activity to your work plan about offering support to clients through automated means. This would be accomplished by implementing a chatbot system available 24 hours a day. The chatbot would respond to customer requests online without involving an agent. What deliverable would be added to the work plan for this activity?",
        "options": {
          "1": "Change call center operational hours to 24/7",
          "2": "99% uptime for live chat system",
          "3": "30% of online requests would be resolved by chatbot",
          "4": "Chatbot interactions will be monitored by a call center agent "
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q9": {
        "text": "With any online technology, like the chatbot system, there is the risk of a privacy breach. &ldquo;Secure firewall and encryption&rdquo; could be added to the work plan as a:",
        "options": {
          "1": "Sub-activity",
          "2": "Mitigation",
          "3": "Impact",
          "4": "Directorate priority"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q10": {
        "text": "Which of the following would be a risk for the new activity “Offer support to clients through automated means”? ",
        "options": {
          "1": "Staff turnover ",
          "2": "Not meeting the performance standard ",
          "3": "Operational hours not staffed",
          "4": "System breakdown "
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q11": {
        "text": "Temporary Help to deliver day-to-day activities is paid out of which budget? ",
        "options": {
          "1": "Operating & Maintenance (O&M)",
          "2": "Salary",
          "3": "Grants and Contributions (Gs&Cs)",
          "4": "Capital"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q12": {
        "text": "Which of the following details the total projected expenditures for the upcoming fiscal year?",
        "options": {
          "1": "Departmental Results Report",
          "2": "Interim Supply",
          "3": "Supplementary Estimates",
          "4": "Departmental Plan"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q13": {
        "text": "Which reports provide information for a full fiscal cycle? ",
        "options": {
          "1": "Full Supply",
          "2": "Public Accounts",
          "3": "Departmental Results Report",
          "4": "Departmental Plan"
        },
        "feedback": {
          "wrong": "",
          "right": ""
        }
      },
      "q14": {
        "text": "Your IT infrastructure costs have increased 10% per year for the past few years. If your current costs are $20,000, what amount will you put in your budget requirements for next year? ",
        "options": {
          "1": "$20,000",
          "2": "$20,200",
          "3": "$22,000 ",
          "4": "$22,220"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q15": {
        "text": "For last year&rsquo;s office supplies, you set aside $3,000, and $2,500 was spent. For the current year, you are forecasting to spend $2,500. What amount will you put in your budget requirements for next year?",
        "options": {
          "1": "$2,000",
          "2": "$2,500",
          "3": "$3,000 ",
          "4": "$5,500"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q16": {
        "text": "You have consistently set aside $8,000 year after year for call center agent training. Last year, you spent $5,000 on training. This year, you&rsquo;re forecasting to spend $10,500. What would you do for your budget requirements for next year?",
        "options": {
          "1": "Ask for the amount you forecast to spend this year ",
          "2": "Ask for the amount you spent last year",
          "3": "Ask for the same amount you&rsquo;ve asked for year after year",
          "4": "Ask why there&rsquo;s been a fluctuation to inform your forecast"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q17": {
        "text": "You added an activity to your work plan about implementing a chatbot system by mid-year. Your initial research shows that chatbot systems cost between $25 and $100 per month. What amount will you put in your budget requirements? ",
        "options": {
          "1": "$300",
          "2": "$600",
          "3": "$900",
          "4": "$1,200"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q18": {
        "text": "The current year&rsquo;s Salary budget is $760,000. You&rsquo;re creating a new IT Analyst position to be staffed next year. The annual salary will be $60,000. You&rsquo;ll need time to hire them and estimate they will start in June and only work 10 months. What will your Salary budget requirement be next year (assuming everything else remains the same)? ",
        "options": {
          "1": "$760,000",
          "2": "$800,000",
          "3": "$810,000",
          "4": "$820,000"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q19": {
        "text": "The chatbot system implementation will incur $15,000 in IT costs for hosting which will be provided by another department on a cost recovery basis. This will be formalized in an MOU between organizations. Hosting costs in your budget will be …?",
        "options": {
          "1": "$15,000 Non-discretionary ",
          "2": "$15,000 Discretionary ",
          "3": "$15,000 Grants and Contributions",
          "4": "$15,000 Capital"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q20": {
        "text": "You&rsquo;ve submitted your budget requirements and your director asks you to cut travel from $20,000 to $12,000. What action could you take?",
        "options": {
          "1": "Cut some discretionary costs",
          "2": "Explore video conferencing options ",
          "3": "Change the budget requirement to $12,000",
          "4": "Ask finance to find $8,000"
        },
        "feedback": {
          "right": "",
          "wrong": ""
        }
      }
    }
  },
  "fr": {
  "warnReset":"Ceci effacera vos réponses et les résultats de ce test. Voulez-vous continer?",
    "Answered": "Répondue",
    "markTest": "Grader mon examen",
    "testComplete": "Examen complété",
    "tryAgain": "Essayer de nouveau",
    "scoreIs":"Votre note finale est de",
    "Questions": {
      "q1": {
        "text": "Lequel des éléments suivants n&rsquo;est <strong style='text-transform:uppercase'>PAS</strong> inclus dans un plan de travail?",
        "options": {
          "1": "Activité",
          "2": "Produit livrable",
          "3": "Résultats",
          "4": "Risque"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q2": {
        "text": "Où les priorités du gouvernement sont-elles d&rsquo;abord annoncées?",
        "options": {
          "1": "Dans le budget fédéral",
          "2": "Dans le discours du Trône",
          "3": "Dans une lettre de mandat",
          "4": "Dans une directive du Conseil du Trésor"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q3": {
        "text": "Où trouveriez-vous des renseignements détaillés sur ce que votre organisation fait et ce qu&rsquo;elle prévoit faire au cours des trois prochaines années?",
        "options": {
          "1": "Lettre de mandat",
          "2": "Plan ministériel",
          "3": "Rapport ministériel sur les résultats ",
          "4": "Cadre de responsabilisation de gestion"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q4": {
        "text": "Votre analyse à 360° réitère pour vous que votre organisation a une faible tolérance au risque. En même temps, le sous-ministre veut voir plus d&rsquo;innovation. Quelle est la meilleure ligne de conduite à adopter, car ces forces opposées ont une incidence sur votre plan de travail?",
        "options": {
          "1": "Attendre que d&rsquo;autres aient mis en œuvre avec succès un projet d&rsquo;innovation",
          "2": "Lancer un projet d&rsquo;innovation à petite échelle et en tirer des leçons",
          "3": "Lancer un projet d&rsquo;innovation très visible avec les effectifs actuels.",
          "4": "Garder les choses telles qu&rsquo;elles sont"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q5": {
        "text": "Quelle partie du plan de travail devrait être mise à jour avec &laquo;Établir des bassins de dotation collective&raquo; pour tenir compte des risques liés aux centres d&rsquo;appels, comme le roulement élevé du personnel et les défis en dotation?",
        "options": {
          "1": "Probabilité",
          "2": "Impact",
          "3": "Atténuation",
          "4": "Ressources"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q6": {
        "text": "L'an dernier, vous n&rsquo;avez pas atteint votre objectif de répondre aux appels dans les 30 secondes. Les centres d&rsquo;appels sont de plus en plus automatisés, une approche privilégiée par la haute direction. Quelle est l&rsquo;activité la plus appropriée lorsque vous rédigez votre plan de travail?",
        "options": {
          "1": "Incorporer des solutions numériques",
          "2": "Changer la cible",
          "3": "Embaucher plus de personnel",
          "4": "Mener des réunions d&rsquo;équipe"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        },
        "q7": {
          "text": "Vous aimeriez savoir si les clients sont satisfaits de l&rsquo;assistance en direct fournie par le centre d&rsquo;appels. Quel produit livrable serait ajouté à l&rsquo;activité pour y remédier?",
          "options": {
            "1": "Résoudre un appel, un SMS ou un chat en moins de 2 minutes",
            "2": "Moyenne de 4 sur 5 d&rsquo;après le sondage auprès des clients après le soutien",
            "3": "Un appel, un message texte ou un clavardage sur 10 est soumis à une escalade pour résolution."
          },
          "feedback": {
            "1": "",
            "2": "",
            "3": "",
            "4": ""
          }
        }
      },
      "q7": {
        "text": "Vous aimeriez savoir si les clients sont satisfaits de l&rsquo;assistance en direct fournie par le centre d&rsquo;appels. Quel produit livrable serait ajouté à l&rsquo;activité &laquo;Offrir un soutien en direct aux clients&raquo; pour répondre à cette question? ",
        "options": {
          "1": "Créer un sondage auprès des clients après le soutien",
          "2": "Résoudre un appel, un SMS ou un chat en moins de 2 minutes",
          "3": "Un appel, un message texte ou un clavardage sur 10 est soumis à une escalade pour résolution",
          "4": "Répondre aux appels dans les 30 secondes"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        },
        "q7": {
          "text": "Vous aimeriez savoir si les clients sont satisfaits de l&rsquo;assistance en direct fournie par le centre d&rsquo;appels. Quel produit livrable serait ajouté à l&rsquo;activité pour y remédier?",
          "options": {
            "1": "Résoudre un appel, un SMS ou un chat en moins de 2 minutes",
            "2": "Moyenne de 4 sur 5 d&rsquo;après le sondage auprès des clients après le soutien",
            "3": "Un appel, un message texte ou un clavardage sur 10 est soumis à une escalade pour résolution."
          },
          "feedback": {
            "1": "",
            "2": "",
            "3": "",
            "4": ""
          }
        }
      },
      "q8": {
        "text": "Vous avez ajouté une nouvelle activité à votre plan de travail concernant l'offre de soutien aux clients par des moyens automatisés. Pour ce faire, il faudrait mettre en place un système de chatbot disponible 24 heures sur 24. Le chatbot répondrait aux demandes des clients en ligne sans l'intervention d&rsquo;un agent. Quel produit livrable serait ajouté au plan de travail pour cette activité?",
        "options": {
          "1": "Changer les heures d&rsquo;ouverture du centre d&rsquo;appels à 24 heures sur 24, 7 jours sur 7.",
          "2": "99% de temps de disponibilité pour le système de chat en direct",
          "3": "30% des demandes en ligne seraient résolues par chatbot",
          "4": "Les interactions du chatbot seront surveillées par un agent du centre d&rsquo;appels."
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q9": {
        "text": "Avec n&rsquo;importe quelle technologie en ligne, comme le système de chatbot, il y a le risque d&rsquo;une atteinte à la vie privée. À quel élément du plan de travail pourrait être ajouté &laquo;Un pare-feu sécurisé et cryptage&raquo;?",
        "options": {
          "1": "Sous-activité",
          "2": "Atténuation",
          "3": "Impact",
          "4": "Priorité de la Direction"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q10": {
        "text": "Lequel des éléments suivants constituerait un risque pour la nouvelle activité &laquo;Offrir un soutien aux clients par des moyens automatisés&raquo;?",
        "options": {
          "1": "Roulement de personnel",
          "2": "Ne pas répondre à la norme de rendement",
          "3": "Heures d&rsquo;ouverture non dotées en personnel",
          "4": "Panne du système"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q11": {
        "text": "L'aide temporaire pour mener à bien les activités quotidiennes est payée à partir de quel budget?",
        "options": {
          "1": "Exploitation et entretien (F et E)",
          "2": "Salaire",
          "3": "Subventions et contributions (S et C)",
          "4": "Immobilisations"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q12": {
        "text": "Lequel des éléments suivants détaille le total des dépenses prévues pour le prochain exercice financier?",
        "options": {
          "1": "Rapport ministériel sur les résultats",
          "2": "Approvisionnements provisoires",
          "3": "Budget supplémentaire des dépenses",
          "4": "Plan ministériel"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q13": {
        "text": "Quels rapports fournissent des renseignements pour un cycle financier complet?",
        "options": {
          "1": "Approvisionnement complet",
          "2": "Comptes publics",
          "3": "Rapport ministériel sur les résultats ",
          "4": "Plan ministériel"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q14": {
        "text": "Vos coûts d&rsquo;infrastructure informatique ont augmenté de 10% par an au cours des dernières années. Si vos coûts actuels sont de 20&nbsp;000&nbsp;$, quel montant inscrirez-vous dans votre budget pour l&rsquo;année prochaine? ",
        "options": {
          "1": "20&nbsp;000&nbsp;$",
          "2": "20&nbsp;200&nbsp;$",
          "3": "22&nbsp;000&nbsp;$",
          "4": "22&nbsp;200&nbsp;$"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q15": {
        "text": "Pour les fournitures de bureau de l&rsquo;an dernier, vous avez mis de côté 3&nbsp;000&nbsp;$, et 2&nbsp;500&nbsp;$ ont été dépensés. Pour l&rsquo;année en cours, vous prévoyez dépenser 2&nbsp;500&nbsp;$. Quel montant allez-vous mettre dans votre budget pour l&rsquo;année prochaine?",
        "options": {
          "1": "2&nbsp;000&nbsp;$",
          "2": "2&nbsp;500&nbsp;$",
          "3": "3&nbsp;000&nbsp;$",
          "4": "5&nbsp;500&nbsp;$"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q16": {
        "text": "Vous avez toujours mis de côté 8&nbsp;000&nbsp;$ année après année pour la formation des agents de centre d&rsquo;appels. L'an dernier, vous avez dépensé 5&nbsp;000&nbsp;$ en formation. Cette année, vous prévoyez dépenser 10&nbsp;500&nbsp;$. Que feriez-vous pour votre budget de l&rsquo;année prochaine?",
        "options": {
          "1": "Demandez le montant que vous prévoyez dépenser cette année ",
          "2": "Demandez le montant que vous avez dépensé l&rsquo;année dernière",
          "3": "Demandez le même montant que vous avez demandé année après année.",
          "4": "Demandez pourquoi il y a eu une fluctuation pour éclairer vos prévisions. "
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q17": {
        "text": "Vous avez ajouté une activité à votre plan de travail concernant la mise en œuvre d&rsquo;un système de chatbot d&rsquo;ici le milieu de l&rsquo;année. Votre recherche initiale montre que les systèmes de chatbot coûtent entre 25 $ et 100 $ par mois. Quel montant allez-vous mettre dans votre budget? ",
        "options": {
          "1": "300$",
          "2": "600$",
          "3": "900$",
          "4": "1&nbsp;200&nbsp;$"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q18": {
        "text": "Le budget salarial de l&rsquo;année en cours est de 760&nbsp;000&nbsp;$. Vous créez un nouveau poste d&rsquo;analyste en TI qui sera doté l&rsquo;an prochain. Le salaire annuel sera de 60&nbsp;000&nbsp;$. Vous aurez besoin de temps pour les embaucher et estimez qu&rsquo;ils commenceront en juin et ne travailleront que 10 mois. Quel sera votre budget salarial pour l&rsquo;année prochaine (en supposant que tout le reste demeure inchangé)?",
        "options": {
          "1": "760&nbsp;000&nbsp;$",
          "2": "800&nbsp;000&nbsp;$",
          "3": "810&nbsp;000&nbsp;$",
          "4": "820&nbsp;000&nbsp;$"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q19": {
        "text": "La mise en œuvre du système de chatbot entraînera des coûts de 15&nbsp;000&nbsp;$ en TI pour l'hébergement, qui seront fournis par un autre ministère selon le principe du recouvrement des coûts. Cela sera officialisé dans un protocole d&rsquo;entente entre les organisations. Les frais d&rsquo;hébergement dans votre budget seront de &hellip;?",
        "options": {
          "1": "15&nbsp;000&nbsp;$ Non discrétionnaire ",
          "2": "15&nbsp;000&nbsp;$ Discrétionnaire ",
          "3": "15&nbsp;000&nbsp;$ Subventions et Contributions",
          "4": "15&nbsp;000&nbsp;$ Immobilisations"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q20": {
        "text": "Vous avez soumis vos exigences budgétaires et votre directeur vous demande de réduire vos déplacements de 20&nbsp;000&nbsp;$ à 12&nbsp;000&nbsp;$. Quelles mesures pourriez-vous prendre? ",
        "options": {
          "1": "Réduire certains coûts discrétionnaires ",
          "2": "Explorez les options de vidéoconférence",
          "3": "Modifier les exigences budgétaires à 12&nbsp;000&nbsp;$",
          "4": "Demandez au service des finances de trouver 8&nbsp;000&nbsp;$."
        },
        "feedback": {
          "right": "",
          "wrong": ""
        }
      }
    }
  }
}</i18n>
