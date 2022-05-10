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
              <p>The test is made up of four sections, one for each phase: Plan, Procure, Manage, and Report.</p>
              <p>The passing grade is 80% for each of these sections.</p>
              <p>Each section should take you around 20 to 25 minutes to complete.</p>
              <p>You are allowed to consult course materials during the test. You may take it as many times as you need to get a passing grade.</p>
              <p>As this is a final test, you will not be provided with feedback on correct or incorrect answers.</p>
            </div>
            <div v-if="$i18n.locale=='fr'">
              <h3>Instructions</h3>
              <p>Conformément aux exigences du Conseil du Trésor, il est obligatoire de réussir le test de ce cours avant de pouvoir exercer la délégation financière.</p>
              <p>Le test comporte quatre parties — une à la fin de chaque phase : planification, acquisition, gestion et rapports.</p>
              <p>La note de passage est de 80 %, par partie.</p>
              <p>Chaque partie devrait vous prendre environ 20 à 25 minutes.  </p>
              <p>Vous pouvez accéder au matériel de cours pendant le test et vous pouvez reprendre le test autant de fois que vous le désirez.</p>
              <p>Comme il s'agit d'un test final, vous ne recevrez pas d'information sur les réponses correctes ou incorrectes.</p>
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
                <checkboxQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q13')" qId="12" :refill="Refill('12')" @response="arraysMatch($event,['2','3'],12)" />
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
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q15')" qId="14" :refill="Refill('14')" @response="calculateAnswer($event,2,14)" />
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
      <microlearning path="procurePart1" imagePath="InitiateAuthSpending.svg" size="140" time="45" :completion="$store.state.currentPlaying.spendPart1_player" :text="$t('InitiateAuthorizeSpending')" type="video" />
      <microlearning path="procurePart2" imagePath="ExerciseFinancialAuthority.svg" size="140" time="30" :completion="$store.state.currentPlaying.spendPart2_player" :text="$t('ExerciseFinancialAuthority')" type="video" />
      <microlearning path="procurePart3" size="140" time="30" :completion="$store.state.currentPlaying.spendPart3_player" imagePath="MonitContFinances.svg" :text="$t('MonitorControlFinances')" type="video" />
      <microlearning path="procureKey" time="5" size="140" :completion="$store.state.currentPlaying.kmSpend" imagePath="KeyMessS.svg" :text="$t('KeyMessages')" type="keyMessages" />
      <microlearning path="exam2" size="140" time="20" youAreHere imagePath="S-Test.svg" :text="$t('Test')" :completion="parseInt($store.getters['spend/getScore'],10)" :highlighted="chosenScenario == 'justExam'" type="exam" questionNum="15" />
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
      <p v-if="allDone >= 80 && allDone<100">{{$t('Passed')}} <nuxt-link :to="localePath('index')">{{$t('homePageTest')}}</nuxt-link></p>
      <p v-if="allDone==100"> {{$t('Excelled')}} <nuxt-link :to="localePath('index')">{{$t('homePageTest')}}</nuxt-link></p>
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
        "text": "Which contracting document should clearly describe the work to be carried out, the objectives to be attained, and the time frame? ",
        "options": {
          "1": "The statement of work",
          "2": "The terms and conditions of the contract ",
          "3": "The technical evaluation"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": ""
        }
      },
      "q2": {
        "text": "Which of the following situations is a pressing emergency in which someone with delegated contracting authority can enter into non-competitive contracts?",
        "options": {
          "1": "One that would be injurious to public interest if delayed",
          "2": "One that would prevent attainment of an urgent operational requirement ",
          "3": "One that would seriously disrupt the development of a highly important architectural project   "
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": ""
        }
      },
      "q3": {
        "text": "According to the <em>Government Contracts Regulations</em>, when could a procurement specialist sign a procurement contract without soliciting bids?",
        "options": {
          "1": "When a qualified independent consultant has advised the manager that the preferred contractor’s price is competitive with industry standards ",
          "2": "When the deputy minister has given written permission to contract without the bidding process ",
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
        "text": "You are preparing a statement of work. Which of the following are some of the requirements that should be included in the statement of work to avoid creating an employer-employee relationship?",
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
        "text": "Who is responsible for determining which goods, services or construction activities are needed and drafting the requirements?",
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
        "text": "You are in the process of acquiring all-terrain vehicles, with no security requirements, for locations in the Nunavut Settlement Area. Which of the following items would you need to consider?",
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
        "text": "En matière de passation de marchés, quel document doit faire clairement état des travaux à effectuer, des objectifs à atteindre et des délais à respecter? ",
        "options": {
          "1": "L’énoncé des travaux ",
          "2": "Les modalités du marché ",
          "3": "L’évaluation technique "
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": ""
        }
      },
      "q2": {
        "text": "Laquelle des situations suivantes est une d’extrême urgence où une personne à qui a été délégué le pouvoir de passation des contrats peut conclure un contrat non concurrentiel?",
        "options": {
          "1": "Une situation où un retard serait préjudiciable à l’intérêt public ",
          "2": "Une situation qui empêcherait la satisfaction d’un besoin opérationnel urgent ",
          "3": "Une situation qui perturberait grandement l’avancement d’un projet architectural très important"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": ""
        }
      },
      "q3": {
        "text": "Selon le <em>Règlement sur les marchés de l’État</em>, dans quelles circonstances un spécialiste des acquisitions peut-il conclure un contrat sans lancer d’appel d’offres?",
        "options": {
          "1": "Les cas où un expert-conseil indépendant informe le gestionnaire que le prix de l’entrepreneur choisi est concurrentiel par rapport aux normes de l’industrie.",
          "2": "Les cas où le sous-ministre donne son autorisation par écrit de conclure un contrat sans appel d’offres. ",
          "3": "Les cas d’extrême urgence où un retard serait préjudiciable à l’intérêt public.",
          "4": "Les cas où le gestionnaire a déjà conclu, dans le cadre d’un processus d’appel d’offres, un contrat de cette nature avec l’entrepreneur, dont le prix n’a pas augmenté depuis."
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q4": {
        "text": "Une offre à commandes est un contrat qui lie une organisation gouvernementale et un fournisseur en vue de l’acquisition de biens ou de services. ",
        "options": {
          "1": "Vrai",
          "2": "Faux"
        },
        "feedback": {
          "1": "",
          "2": ""
        }
      },
      "q5": {
        "text": "Vous préparez un énoncé des travaux (EDT). Lesquelles des exigences suivantes doivent figurer dans l’EDT pour éviter de créer une relation employeur-employé?",
        "options": {
          "1": "Les objectifs à atteindre ",
          "2": "La façon dont les travaux seront réalisés ",
          "3": "Les délais dans lesquels les travaux devraient être réalisés "
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": ""
        }
      },
      "q6": {
        "text": "Qui est responsable de déterminer quels biens, services ou activités de construction sont requis et de rédiger les exigences? ",
        "options": {
          "1": "Le spécialiste en approvisionnement ",
          "2": "Le conseiller financier ",
          "3": "Le gestionnaire"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": ""
        }
      },
      "q7": {
        "text": "Vous avez entrepris le processus d’acquisition de véhicules tout terrain, sans exigences de sécurité, dans la région du Nunavut. Lequel des éléments suivants prendriez-vous en considération?",
        "options": {
          "1": "Les traités modernes et les ententes sur les revendications territoriales globales ",
          "2": "Les exigences en matière d’expédition spécialisée ",
          "3": "Le niveau d’autorisation de sécurité du fournisseur ",
          "4": "La Directive sur les marchés de l’État, incluant les baux immobiliers, dans la région du Nunavut "
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q8": {
        "text": "Achatsetventes.gc.ca/appels-d-offres est le nom d’un service électronique gouvernemental d’appels d’offres à l’intention des entrepreneurs et du site Web qui s’y rattache. En votre qualité de gestionnaire, vous recevez une question de la part d’un fournisseur au sujet d’une demande de soumissions affichée sur Achatsetventes.gc.ca/appels-d-offres. Que devriez-vous faire?",
        "options": {
          "1": "Répondre à la question par écrit et envoyer une copie conforme à votre gestionnaire de l’approvisionnement. ",
          "2": "Lui demander de communiquer avec le spécialiste en approvisionnement responsable de la demande de soumissions. ",
          "3": "Lui dire de communiquer avec l’agent de projet et lui donner son numéro de téléphone. "
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": ""
        }
      },
      "q9": {
        "text": "Des lettres de refus ont été envoyées aux soumissionnaires qui n’ont pas été retenus les informant du fait que le contrat ne leur a pas été attribué. Si un soumissionnaire non retenu demande un compte rendu, qui devrait être son point de contact?",
        "options": {
          "1": "Le gestionnaire ",
          "2": "Le spécialiste en approvisionnement",
          "3": "Le gouverneur en conseil",
          "4": "Le ministre des Services publics et de l’Approvisionnement du Canada "
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q10": {
        "text": "Pour faire une présélection des fournisseurs qui n’ont pas les qualifications minimales nécessaires et les années d’expérience requises pour entreprendre les travaux, vous décidez d’inclure des critères obligatoires dans vos documents d’appel d’offres. Que sont les critères obligatoires?",
        "options": {
          "1": "Une méthode de sélection d’un entrepreneur ",
          "2": "Une grille de pointage des soumissions ",
          "3": "Un système de critères cotés par points ",
          "4": "Une méthode d’évaluation des soumissions"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q11": {
        "text": "Qui peut aider à l’élaboration des critères d’évaluation des soumissions et du plan,  évaluer les soumissions et être appelé à soutenir le compte rendu à l’intention des soumissionnaires non retenus?",
        "options": {
          "1": "Les membres de l’équipe d’évaluation des soumissions ",
          "2": "L’agent financier qui approuve l’achat",
          "3": "Le chef de l’équipe des communications ",
          "4": "Le spécialiste en approvisionnement "
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q12": {
        "text": "Parmi les options suivantes, lesquelles décrivent la répartition des points attribués et comportent parfois une note de passage minimale pour chaque catégorie ou une note de passage globale? ",
        "options": {
          "1": "Une méthode d’évaluation des soumissions",
          "2": "Une grille de pointage des soumissions",
          "3": "Une méthode de sélection des entrepreneurs ",
          "4": "Un système de critères cotés par points "
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q13": {
        "text": "Pendant un compte rendu avec un soumissionnaire non retenu, quels renseignements peuvent être fournis?",
        "options": {
          "1": "L’information contenue dans la proposition du soumissionnaire retenu ",
          "2": "La note obtenue par le soumissionnaire non retenu ",
          "3": "Un aperçu des facteurs et des critères utilisés dans l’évaluation "
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": ""
        }
      },
      "q14": {
        "text": "Parmi les étapes suivantes, lesquelles peuvent figurer dans le processus d’approbation? ",
        "options": {
          "1": "Faire examiner le marché par les services juridiques",
          "2": "Procéder à une analyse des coûts",
          "3": "Demander à l’autorité déléguée d’approuver l’article 35 "
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": ""
        }
      },
      "q15": {
        "text": "Une surveillance des contrats et ___________________ de qualité mènent à une bonne gestion des contrats, ce qui aide à éviter des coûts et des délais supplémentaires, des difficultés pour les entrepreneurs et des travaux supplémentaires.",
        "options": {
          "1": "des relations employeur-employé",
          "2": "une tenue de dossier",
          "3": "des produits livrables "
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": ""
        }
      }
    }
  }
}</i18n>
