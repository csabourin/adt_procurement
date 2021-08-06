<template>
  <div>
    <h2 class="pageTitle">{{$t('Test')}}</h2>
    <b-container>
      <b-row>
        <b-col class="col-12">
          <b-alert :show="!AlertIsDismissed" @dismissed="AlertIsDismissed=true" dismissible fade :dismiss-label="$t('dismiss')">
            <div v-if="$i18n.locale=='en'">
              <h3>Instructions</h3>
               <p>As per Treasury Board requirements, you must pass this test before you can exercise financial delegation.</p>
              <p>The test is made up of four sections, one for each phase: Plan, Procure, Manage, and Report.<!-- planning, spending and reporting -->.</p>
              <p>The passing grade is 80% for each of these sections.</p>
              <p>Each section should take you around 20 to 25 minutes to complete.</p>
              <p>You are allowed to consult course materials during the test. You may take it as many times as you need to get a passing grade.</p>
            </div>
            <div v-if="$i18n.locale=='fr'">
              <h3>Instructions</h3>
              <p>Pour certaines des questions de ce test, vous &ecirc;tes dans le r&ocirc;le d’un responsable de centre d’appels. Des scénarios basés sur cette situation vous seront proposés.&nbsp;</p>
              <p>Conformément aux exigences du Conseil du Trésor, il est obligatoire de réussir l’examen de ce cours avant de pouvoir exercer la délégation financi&egrave;re.</p>
              <p>Le test comporte trois parties - une à la fin de chaque phase: planification, dépenses et rapports.&nbsp;</p>
              <p>La note de passage est de 80%, par partie.&nbsp;</p>
              <p>Chaque partie devrait vous prendre environ 15 à 20 minutes.&nbsp;</p>
              <p>Vous pouvez accéder au matériel de cours pendant le test et vous pouvez le reprendre autant de fois que vous le désirez.</p>
            </div>
          </b-alert>
          <!--<p v-if="AlertIsDismissed"><b-button @click="AlertIsDismissed=false">{{$t('ShowInstructions')}}</b-button></p>-->
          <p v-if="AlertIsDismissed"><button @click="AlertIsDismissed=false" class="instructionsBtn" v-b-tooltip.right.hover.focus :title="$t('ShowInstructions')"><span class="v-inv">{{$t('ShowInstructions')}}</span></button></p>
          <p>Question {{tabIndex+1}} / {{numQuestions}}</p>
          <!--<div class="progressBar">
            <a href="#" @click.prevent="tabIndex=index" :title="'Question '+parseInt(square) +((answerScore[index])? ': '+$t('Answered'):'')" v-for="(square,index) in numQuestions" :class="['square',{'filled':answerScore[index],'Qactive':tabIndex==index}]" :aria-label="'Question '+parseInt(square) +((answerScore[index])? ': '+$t('Answered'):'')" v-html="index+1" />
          </div>-->
        </b-col>
      </b-row>
      <b-row>
        <b-col class="col-12">
          <b-card no-body>
            <b-tabs card pills v-model="tabIndex" class="exam spend" active-nav-item-class="Qactive">
              <b-tab :title-link-class="[{'filled':answerScore[0]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>01
                </template>
                <!-- calculateAnswer($event,correctAnswer,qId) -->
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q1')" qId="0" :refill="Refill('0')" @response="calculateAnswer($event,1,0)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[1]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>02
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q2')" qId="1" :refill="Refill('1')" @response="calculateAnswer($event,1,1)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[2]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>03
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q3')" qId="2" :refill="Refill('2')" @response="calculateAnswer($event,3,2)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[3]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>04
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q4')" qId="3" :refill="Refill('3')" @response="calculateAnswer($event,2,3)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[4]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>05
                </template>
                 <checkboxQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q5')" qId="4" :refill="Refill('4')" @response="arraysMatch($event,['1','3'],4)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[5]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>06
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q6')" qId="5" :refill="Refill('5')" @response="calculateAnswer($event,3,5)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[6]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>07
                </template>
                <checkboxQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q7')" qId="6" :refill="Refill('6')" @response="arraysMatch($event,['1','2','4'],6)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[7]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>08
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q8')" qId="7" :refill="Refill('7')" @response="calculateAnswer($event,2,7)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[8]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>09
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q9')" qId="8" :refill="Refill('8')" @response="calculateAnswer($event,2,8)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[9]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>10
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q10')" qId="9" :refill="Refill('9')" @response="calculateAnswer($event,4,9)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[10]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>11
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q11')" qId="10" :refill="Refill('10')" @response="calculateAnswer($event,1,10)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[11]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>12
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q12')" qId="11" :refill="Refill('11')" @response="calculateAnswer($event,2,11)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[12]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>13
                </template>
                <checkboxQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q13')" qId="12" :refill="Refill('12')" @response="arraysMatch($event,['2','3','3'],12)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[13]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>14
                </template>
                <checkboxQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q14')" qId="13" :refill="Refill('13')" @response="arraysMatch($event,['1','2'],13)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[14]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>15
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q15')" qId="14" :refill="Refill('14')" @response="calculateAnswer($event,3,14)" />
              </b-tab>
            </b-tabs>
          </b-card>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <!-- Control buttons-->
          <div class="text-center">
            <b-button-group class="mt-2" :aria-label="$t('questionNav')">
              <b-button @click="[tabIndex--, focus()]" :disabled="tabIndex<=0">{{$t('previousPage')}}</b-button>
              <b-button @click="[tabIndex++, focus()]" :disabled="tabIndex>=14">{{$t('nextPage')}}</b-button>
            </b-button-group>
          </div>
          <transition name="fade">
            <div style="margin-top: 50px;">
              <hr />
              <p><b-button @click="markTest">{{$t('markTest')}}</b-button> <b-button @click="resetQuiz">{{$t('tryAgain')}}</b-button></p>
            </div>
          </transition>
        </b-col>
      </b-row>
    </b-container>
    
    <div class="bottomNav generalSection" v-if="chosenScenario == 'justExam'">
      <div class="generalSectionBar"><span>{{$t('justExamShort')}}</span></div>
      <microlearning path="exam1" time="15" size="140" :completion="parseInt($store.getters['plan/getScore'],10)" imagePath="P-Test.svg" :text="$t('plan')" class="plan" noGrey type="exam" questionNum="15" />
      <microlearning path="exam2" time="15" youAreHere size="140" :completion="parseInt($store.getters['spend/getScore'],10)" imagePath="S-Test.svg" :text="$t('spend')"  class="spend" noGrey type="exam" questionNum="15" />
      <microlearning path="exam3" time="15" size="140" :completion="parseInt($store.getters['report/getScore'],10)" imagePath="R-Test.svg" :text="$t('report')" class="report" noGrey  type="exam" questionNum="10"/>
    </div>
    <div class="bottomNav spendSection" v-else>
      <div class="spendSectionBar"><span>{{$t('spend')}}</span></div>
      <microlearning path="procurePart1" imagePath="InitiateAuthSpending.svg" size="140" time="20" :completion="$store.state.currentPlaying.spendPart1_player" :text="$t('InitiateAuthorizeSpending')" type="video" />
      <microlearning path="procurePart2" imagePath="ExerciseFinancialAuthority.svg" size="140" time="20" :completion="$store.state.currentPlaying.spendPart2_player" :text="$t('ExerciseFinancialAuthority')" type="video" />
      <microlearning path="procurePart3" size="140" time="20" :completion="$store.state.currentPlaying.spendPart3_player" imagePath="MonitContFinances.svg" :text="$t('MonitorControlFinances')" type="video" />
      <microlearning path="procureKey" time="5" size="140" :completion="$store.state.currentPlaying.kmSpend" imagePath="KeyMessS.svg" :text="$t('KeyMessages')" type="keyMessages" />
      <microlearning path="exam2" size="140" time="15" youAreHere imagePath="S-Test.svg" :text="$t('Test')" :completion="parseInt($store.getters['spend/getScore'],10)" :highlighted="chosenScenario == 'justExam'" type="exam" questionNum="15" />
    </div>

    <!-- Debugging section -->
    <div v-if="debugging">
      <p>{{allDone}}</p>
      <p>{{answerScore}}</p>
      <ul>
        <li v-for="index in answerScore">Answer {{Refill(index.toString())}} </li>
      </ul>
    </div>
    <!-- End of Debugging section -->
    <b-modal id="Completed" size="lg" okOnly>
      <p class='pageTitle'>{{$t('testComplete')}}</p>
      <p>{{$t('scoreIs')}} {{allDone}}%.</p>
      <p v-if="allDone < 80"> {{$t('notPassed')}}</p>
      <p v-if="allDone >= 80 && allDone<100">{{$t('Passed')}} <nuxt-link :to="localePath('index')">{{$t('homePage')}}</nuxt-link></p>
      <p v-if="allDone==100"> {{$t('Excelled')}} <nuxt-link :to="localePath('index')">{{$t('homePage')}}</nuxt-link></p>
      <template v-slot:modal-ok>{{$t('close')}}</template>
    </b-modal>

    <b-modal id="missingQuestions" size="lg" okOnly>
      <p class='pageTitle'>{{$t('unanswered')}}</p>
      <p v-if="$i18n.locale=='en'">Your test cannot be marked because the following question(s) has/have not been answered:</p>
      <p v-if="$i18n.locale=='fr'">Votre test ne peut pas être noté, puisque vous n’avez pas choisi de réponse pour les questions suivantes : </p>
      
      <ul>
        <li v-for="question, index in unansweredQuestions" :key="question">Question {{question}}</li>
      </ul>
      
      <template v-slot:modal-ok>{{$t('close')}}</template>
    </b-modal>
  </div>
</template>
<script type="text/javascript">
import radioQuiz from "~/components/radioQuiz"
import checkboxQuiz from "~/components/checkboxQuiz"
import microlearning from "~/components/microlearning"
export default {
  name: "examTwo",
  data() {
    return {
      debugging: false,
      isNull:false,
      numQuestions: 15
    }
  },
  components: {
    radioQuiz,
    checkboxQuiz,
    microlearning
  },
  methods: {

    resetQuiz() {
      this.$bvModal.msgBoxConfirm(this.$t('warnReset'), { cancelTitle: this.$t('cancel') }).then(trigger => {
          if (trigger) {
            this.isNull = !this.isNull
            this.$store.commit('spend/resetQuiz')
          } else {}
        })
        .catch(err => {
          console.log(err)
        });
    },
    markTest() {
      if(this.allAnswered){
        this.$store.commit('spend/lockQuiz');
        this.$bvModal.show('Completed');
        this.$store.commit('spend/setComplete', this.checkPercentage())
      }
      else{
        this.$bvModal.show('missingQuestions');
      }
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
        this.$store.commit('spend/setScore', [qId.toString(), "01", answer])
      } else { this.$store.commit('spend/setScore', [qId.toString(), "'10'", answer]) }
    },
    arraysMatch(arr1, arr2, qId) {
      if (arr1.length !== arr2.length) {
        this.$store.commit('spend/setScore', [qId.toString(), "'10'", arr1])
        return false
      }
      const arrayOne = arr1.concat().sort()
      for (let i in arrayOne) {
        if (arrayOne[i] !== arr2[i]) {
          this.$store.commit('spend/setScore', [qId.toString(), "'10'", arr1])
          return false
        }
      }
      this.$store.commit('spend/setScore', [qId.toString(), "01", arr1])
    },
    focus(){
      setTimeout(function(){
        document.querySelector(".tab-pane.active .pure-radiobutton fieldset, .tab-pane.active .pure-checkbox fieldset").focus();
      }, 300);
    }
  },
  computed: {
    allDone(){
      return this.$store.getters['spend/getScore']
    },
    AlertIsDismissed: {
      set(AlertIsDismissed) { AlertIsDismissed ? this.$store.commit('spend/dismissAlert') : this.$store.commit('spend/undismissAlert') },
      get() { return this.$store.state.spend.AlertIsDismissed }
    },
    tabIndex: {
      set(tabIndex) { this.$store.commit('spend/setCurrentTab', tabIndex) },
      get() { return this.$store.state.spend.tabIndex }
    },
    answerScore() {
      return this.$store.state.spend.score
    },
    quizLocked() {
      return this.$store.state.spend.quizLocked
    },
    chosenScenario: {
      set(scenario) {
        this.$store.commit('currentPlaying/setChosenScenario', scenario);
      },
      get() { 
        return this.$store.state.currentPlaying.chosenScenario;
      }
    },
    unansweredQuestions(){
      var unanswered = [];
      for (var i = 0; i < this.numQuestions; i++){
        if(!this.answerScore[i]){
          unanswered.push(i+1);
        }
      }
      return unanswered;
    },
    allAnswered(){
      const answers = Object.keys(this.answerScore).length
      return answers === this.numQuestions
    }
  },
}
</script>
<style type="text/css" scoped>

/*Using a scoped 'deep' selector*/
>>> .qTable td,>>> .qTable th{
  border: 1px solid #4d4d4d;
  padding: .5em;
}
>>> .qTable th{
  background-color: #7d677d;
  color:#fff;
}
/*.spendSection {
  position: relative;
  height: 100px;
}*/

.spendSectionBar {
  text-transform: uppercase;
  position: absolute;
  width: 100vw;
  height: 30px;
  text-align: left;
  left: -15px;
  top: 38%;
}

.spendSectionBar span {
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
  background-color: #7d677d;
  color: #fff;
}

.Qactive {
  background-color: #e0e59e;
  box-shadow: -3px 7px 6px rgba(0, 0, 0, 0.3);
  outline: 1px solid #fff;
  color: #212529;
  /*outline: 2px solid #1000ff33;*/
}

.filled.Qactive {
  background-color: #AFA68E;
}
  
  .alert{
    padding-top: 1.5rem;
  }
  
  .alert h3{
    font-size: 22px;
  }
  
  .instructionsBtn{
    display: block;
    width: 60px;
    height: 60px;
    background: url('~assets/instructionsIcon.svg') center center no-repeat;
    border: none;
    appearance: none;
    -webkit-appearance: none;
  }
  
  .instructionsBtn:hover, .instructionsBtn:focus{
    opacity: 0.8;
    outline: none;
  }

</style>
<i18n>{
  "en": {
    "dismiss": "Dismiss",
    "warnReset":"This will erase your answer and score for this test, are you certain?",
    "Answered": "Answered",
    "markTest": "Mark my test",
    "testComplete": "Test Completed",
    "tryAgain": "Try Again",
    "scoreIs": "Your final score is",
    "unanswered":"Unanswered Question(s)",
    "Questions": {
      "q1": {
        "text": "You found a chatbot system that meets your needs. An annual license, plus installation and setup, costs $5,650 including tax. What is the first step in exercising your spending authority?",
        "options": {
          "1": "Contact the provider and order the system using your acquisition card",
          "2": "Ask your team to conduct a thorough product research ",
          "3": "Ensure that you have sufficient funds in your budget to purchase the system",
          "4": "Order the system using a purchase order"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q2": {
        "text": "You have spent $1,800 out of your $2,000 office supplies budget, and you don’t plan on any other purchases for the year. An employee wants to attend a training event on chatbot systems and the registration fee is $150. However, you have spent all of your training budget. What will you do?",
        "options": {
          "1": "Tell the employee that the training budget has been spent",
          "2": "Use the money initially allocated for office supplies",
          "3": "Ask your director for additional funds",
          "4": "Tell the employee you will revisit their request next fiscal year"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q3": {
        "text": "Which statement about delegation of financial authority is true?",
        "options": {
          "1": "Authorities can only be delegated to positions",
          "2": "Authorities can only be delegated to persons",
          "3": "Authorities can only be delegated by persons exercising them",
          "4": "Authorities can only be delegated to certain classifications"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q4": {
        "text": "A standing offer is a contract that binds a government organization and a supplier for the provision of goods or services.",
        "options": {
          "1": "True",
          "2": "False"
        },
        "feedback": {
          "1": "",
          "2": ""
        }
      },
      "q5": {
        "text": "You are preparing a statement of work. Which of the following should be included in the statement of work to avoid creating an employer-employee relationship?",
        "options": {
          "1": "The objectives to be attained",
          "2": "How the work will be carried out ",
          "3": "Time frame within which the work should be completed"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": ""
        }
      },
      "q6": {
        "text": "Who is responsible for determining which goods, services or construction projects are needed and drafting the requirements?",
        "options": {
          "1": "The procurement specialist",
          "2": "The financial advisor",
          "3": "The manager "
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": ""
        }
      },
      "q7": {
        "text": "You are in the process of acquiring all-terrain vehicles for locations in the Nunavut Settlement Area. Which of the following items would you need to consider?",
        "options": {
          "1": "Modern treaties and Comprehensive Land Claims Agreements",
          "2": "Specialized shipping requirements ",
          "3": "Security clearance level of the supplier",
          "4": "Directive on Government Contracts, including Real Property Leases, in the Nunavut Settlement Area"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q8": {
        "text": "Buyandsell.gc.ca/tenders is the name of a government-contractor e-tendering service and website. As a manager, you receive a question from a supplier about a solicitation they saw on Buyandsell.gc.ca/tenders. What should you do?",
        "options": {
          "1": "Answer the question in writing and copy your procurement manager ",
          "2": "Direct them to contact the procurement specialist responsible for the solicitation",
          "3": "Give them the telephone number of the project officer and tell them to call that person "
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": ""
        }
      },
      "q9": {
        "text": "Regret letters have been sent to unsuccessful bidders informing them that they were not awarded the contract. If an unsuccessful bidder requests a debriefing, who should be the point of contact for them?",
        "options": {
          "1": "The manager",
          "2": "The procurement specialist",
          "3": "The Governor in Council",
          "4": "The Minister of Public Services and Procurement Canada"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q10": {
        "text": "To screen out bidders who do not have the minimum necessary qualifications and years of experience for undertaking the work, you decide to include mandatory criteria in your solicitation documents. What are mandatory criteria?",
        "options": {
          "1": "A contractor selection method",
          "2": "A bid scoring grid",
          "3": "A point rating system",
          "4": "A bid evaluation method"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q11": {
        "text": "Who may assist in the development of the bid evaluation criteria and plan, evaluate the bids, and be called upon to support the debriefing of unsuccessful bidders?",
        "options": {
          "1": "The members of the bid evaluation team",
          "2": "The financial officer signing off on the purchase",
          "3": "The head of the communications team",
          "4": "The procurement specialist"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q12": {
        "text": "Which of the following options describes the breakdown for the assignment of points and sometimes has a minimum pass mark for each category or an overall pass mark?",
        "options": {
          "1": "A bid evaluation method",
          "2": "A bid scoring grid",
          "3": "A contractor selection method",
          "4": "A point rating system"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q13": {
        "text": "During a debriefing with an unsuccessful bidder, what information can be provided?",
        "options": {
          "1": "The proposal information of the successful bid ",
          "2": "The score of the unsuccessful bidder’s bid",
          "3": "The outline of the factors and criteria used in the evaluation "
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": ""
        }
      },
      "q14": {
        "text": "The contract approval process may contain which of the following steps?",
        "options": {
          "1": "Having the contract reviewed by legal services",
          "2": "Performing a cost-analysis review",
          "3": "Having the delegated authority approve section 35  "
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": ""
        }
      },
      "q15": {
        "text": "Good contract monitoring and ___________________ leads to good contract management, which helps avoid additional costs and delays, difficulties for contractors and additional work. ",
        "options": {
          "1": "employer-employee relationships ",
          "2": "record keeping",
          "3": "deliverables"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": ""
        }
      }
    }
  },
  "fr": {
    "dismiss": "Faire disparaître",
    "warnReset":"Ceci effacera vos réponses et les résultats de ce test. Voulez-vous continer?",
    "Answered": "Répondue",
    "markTest": "Corriger mon test",
    "testComplete": "Test complété",
    "tryAgain": "Essayer de nouveau",
    "scoreIs": "Votre note finale est de",
    "unanswered":"Question(s) non-répondue(s)",
    "Questions": {
      "q1": {
        "text": "Which contracting document should clearly describe the work to be carried out, the objectives to be attained, and the time frame?",
        "options": {
          "1": "The statement of work ",
          "2": "The terms and conditions of the contract",
          "3": "The technical evaluation"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": ""
        }
      },
      "q2": {
        "text": "Which of the following situations is an emergency in which someone with delegated contracting authority can enter into non-competitive contracts without first obtaining Treasury Board approval?",
        "options": {
          "1": "One that would be injurious to the public interest",
          "2": "One that would prevent attainment of an urgent operational requirement",
          "3": "One that would seriously disrupt the development of a highly important architectural project"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": ""
        }
      },
      "q3": {
        "text": "According to the Government Contracts Regulations, when could a procurement specialist sign a procurement contract without soliciting bids?",
        "options": {
          "1": "When a qualified independent consultant has advised the manager that the preferred contractor’s price is competitive with industry standards ",
          "2": "When the deputy minister has given written permission to contract without the bidding process",
          "3": "When the need is one of pressing emergency in which delay would be injurious to the public interest",
          "4": "When the manager has chosen the contractor before for a similar job, using competitive bidding and the contractor’s price has not changed since that time"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q4": {
        "text": "A standing offer is a contract that binds a government organization and a supplier for the provision of goods or services.",
        "options": {
          "1": "True",
          "2": "False"
        },
        "feedback": {
          "1": "",
          "2": ""
        }
      },
      "q5": {
        "text": "You are preparing a statement of work. Which of the following should be included in the statement of work to avoid creating an employer-employee relationship?",
        "options": {
          "1": "Go ahead and authorize the commitment for both chairs",
          "2": "Authorize the purchase for both chairs using your admin’s acquisition card",
          "3": "Ask another manager to purchase the chairs with their acquisition card",
          "4": "Authorize your admin’s chair and have your supervisor authorize your chair"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q6": {
        "text": "This spending mechanism is used to obtain goods or services from a list of pre-qualified vendors, with pre-established terms and conditions. What is it?",
        "options": {
          "1": "Acquisition Card",
          "2": "Competitive Contract",
          "3": "Standing Offer",
          "4": "Supply Arrangement"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q7": {
        "text": "Which of the following is a soft commitment? ",
        "options": {
          "1": "When you make an arrangement with a known supplier",
          "2": "When you reserve funds before the supplier is identified",
          "3": "When a transaction has been coded in the financial system",
          "4": "When you have a Memorandum of Understanding with another department"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q8": {
        "text": "Which of the following is <span class='bolder' style='text-transform: uppercase; text-decoration: underline;'>not</span> part of a financial coding system?",
        "options": {
          "1": "Budget component",
          "2": "Responsibility centre manager",
          "3": "Performance indicator",
          "4": "Transaction details"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q9": {
        "text": "As a manager authorizing a transaction against your budget under section 34 of the Financial Administration Act, it is essential that you do which of the following?",
        "options": {
          "1": "Get approval from senior management",
          "2": "Stay within your delegated limits",
          "3": "Have section 32 authority pursuant to the FAA",
          "4": "Ask section 33 if you can sign section 34"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q10": {
        "text": "Mr. Wong works as a manager for a small department and has delegation under both sections 32 and 34. Which instrument formalizes Mr. Wong’s delegated authorities?",
        "options": {
          "1": "Financial Administration Act",
          "2": "Treasury Board policies",
          "3": "The organization’s delegation chart",
          "4": "His signed delegation card"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q11": {
        "text": "Your administrative professional has received an order of office supplies, along with an invoice. The invoice includes 5 whiteboards but she tells you that none were received. What would you do? ",
        "options": {
          "1": "Pay the invoice now",
          "2": "Pay the invoice after all 5 whiteboards are received",
          "3": "Pay the invoice knowing the whiteboards are back-ordered",
          "4": "Pay the invoice now after speaking with the supplier"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q12": {
        "text": "You receive an invoice for an employee's annual professional membership due in September. What do you do?",
        "options": {
          "1": "Pay the invoice for the full year now",
          "2": "Pay what is due between now and the end of the fiscal year ",
          "3": "Pay what is due between now and the end of the calendar year",
          "4": "Ask them to split the invoice between calendar years"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q13": {
        "text": "Who is responsible for financial coding accuracy?",
        "options": {
          "1": "The administrative assistant who records the financial codes",
          "2": "Managers who have delegated financial authorities",
          "3": "The financial officer who performs quality assurance of the file",
          "4": "The Chief Financial Officer’s office"
        },
        "feedback": {
          "wrong": "",
          "right": ""
        }
      },
      "q14": {
        "text": "How much time does the government have to pay for the goods?",
        "options": {
          "1": "Thirty days following acceptance of goods",
          "2": "Thirty days after signing of Section 34 ",
          "3": "Thirty days following receipt of the invoice",
          "4": "Immediately"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q15": {
        "text": "The start date for your new employee has been pushed back. He will only be working 10 months of the fiscal year instead of 12 months. His salary is $60,000. What do you do?",
        "options": {
          "1": "Increase budget by $10,000",
          "2": "Reduce the actual expenditures by $10,000",
          "3": "Reduce annual forecast expenditures by $10,000",
          "4": "Increase commitments by $10,000"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      }
    }
  }
}</i18n>
